#pragma strict

var spawns 					: GameObject[];
var eyePositions 			: GameObject[];

var meteorPrefab 			: GameObject;
var eyePrefab 				: GameObject;

var startedAt 				: float;
var score 					: int			= 0;
var spawnDelayMin			: float 		= .15;
var spawnDelayMax			: float 		= 1.25;
var eyeMoveDelay 			: float 		= 1.00;

@HideInInspector
var lastSpawnDelay 	: float			= 0;
@HideInInspector
var lastEyeSpawn 	: float 		= 0;


function StartRound(){
	startedAt = Time.time;
	score = 0;
}



function UpdateScore(){
	score ++;
}



function Spawn(){
	print("spawn...");
	lastSpawnDelay = Random.Range(spawnDelayMin, spawnDelayMax) + Time.time;
	var spawnNum = Random.Range(0, spawns.length);
	var newMeteor = Instantiate(meteorPrefab, spawns[spawnNum].transform.position, Quaternion.identity);

}



function EyeSpawn(){
	lastEyeSpawn = Time.time;
}



function Start () {

}



function Update () {
	// scoring
	var possibleScore = Time.time - startedAt;
	if(possibleScore > score){
		UpdateScore();
	}

	// spawning
	if(Time.time > lastSpawnDelay){
		Spawn();
	}

	// eyes
	if(Time.time > lastEyeSpawn + eyeMoveDelay){
		EyeSpawn();
	}

}