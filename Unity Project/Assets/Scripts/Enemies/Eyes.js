#pragma strict

function Start () {
	var scale = Random.Range(.25, 1.20);
	transform.localScale = Vector3(scale, scale, scale);
}