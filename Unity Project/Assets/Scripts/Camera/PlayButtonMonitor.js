#pragma strict

var player 			: GameObject;
var lastHitObject 	: GameObject;

var playing 		: boolean = true;



function NullLastHit(){
	player.SendMessage("StopDash");
}



function HitDashButton(){
	print("hitting dash button");
	player.SendMessage("StartDash");
}



function HitJumpButton(){
	print("hit jump button");
	player.SendMessage("Jump", true);
}



function ReleaseJumpButton(){
	print("released button");
	player.SendMessage("Jump", false);
}



function Start(){
	if(!player){
		player = GameObject.Find("Player");
	}
}

function Update(){ 
	var hit : RaycastHit;

	// pressing on dash
	if (Input.GetMouseButton(0)) {
		//print("tapping");
		var ray : Ray = gameObject.GetComponent(Camera).ScreenPointToRay (Input.mousePosition);
		if (Physics.Raycast (ray,hit)) {
			if(hit.transform.gameObject.name == "DashButton"){
				HitDashButton();
			}
		} else {
			NullLastHit();
		}
	} else {
		NullLastHit();
	}

	// tap on jump
	if (Input.GetMouseButtonDown(0)) {
		//print("clicked");
		var ray2 : Ray = gameObject.GetComponent(Camera).ScreenPointToRay (Input.mousePosition);
		if (Physics.Raycast (ray2,hit) && hit.transform.gameObject.name == "JumpButton") {
			HitJumpButton();
		}
	}


	// release dash
	if(Input.GetMouseButtonUp(0)){
		NullLastHit();
		ReleaseJumpButton();
	}


	if(!playing && lastHitObject){
		NullLastHit();		
	}

}

function FixedUpdate(){

}