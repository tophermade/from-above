#pragma strict

function Start () {
	var scale = Random.Range(.33, 1.00);
	transform.localScale = Vector3(scale, scale, scale);
}

function Update () {

}