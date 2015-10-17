#pragma strict

var explosion 		: GameObject;
var meteorSprite 	: GameObject;
var meteorTrail 	: GameObject;

function Start () {
	var scale = Random.Range(.33, 1.00);
	transform.localScale = Vector3(scale, scale, scale);
}


function OnCollisionEnter2D(other : Collision2D){
	if(other.transform.gameObject.name != "Player"){
		print("collision");
		var newExplosion : GameObject;
		newExplosion = Instantiate(explosion, meteorSprite.transform.position, Quaternion.identity);
		meteorTrail.GetComponent(Animator).enabled = true;
		meteorSprite.SetActive(false);
		GetComponent(BoxCollider2D).enabled = false;
		yield WaitForSeconds(.2);
		Destroy(gameObject);
	} else {
		other.transform.gameObject.SendMessage("HitByEnemy");
		Destroy(gameObject);
	}
}


function Update () {

}