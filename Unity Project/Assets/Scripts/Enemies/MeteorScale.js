#pragma strict

var explosion 		: GameObject;
var meteorSprite 	: GameObject;
var meteorTrail 	: GameObject;

function Start () {
	var scale = Random.Range(.33, 1.00);
	transform.localScale = Vector3(scale, scale, scale);
}


function OnCollisionEnter2D(other : Collision2D){
	print("collision");
	var newExplosion : GameObject;
	newExplosion = Instantiate(explosion, meteorSprite.transform.position, Quaternion.identity);
	meteorTrail.GetComponent(Animator).enabled = true;
	meteorSprite.SetActive(false);
	GetComponent(BoxCollider2D).enabled = false;
	yield WaitForSeconds(.2);
	Destroy(gameObject);

	// var points = 0;
	// for (var hit: ContactPoint2D in other.contacts){
	// 		var hitPoint: Vector2 = hit.point;
	// 		if(points==0){
	// 			newExplosion = Instantiate(explosion, Vector3(hitPoint.x, hitPoint.y, 0), Quaternion.identity);
	// 		}
	// 		points++;
	// 	}
	//Destroy(gameObject);
}


function Update () {

}