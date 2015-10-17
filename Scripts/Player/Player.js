#pragma strict

var grounderMask 			: LayerMask;
var body 					: Rigidbody2D;
var grounder 				: GameObject;
var container 				: GameObject;

var baseSpeed 				: float 		= 4;
private var speed 			: float 		= baseSpeed;
var boostSpeed 				: float 		= 4;
var jumpSpeed 				: float 		= 8;
var jumpCount 				: int 			= 0;


var grounded				: boolean 		= true;
var goRight 				: boolean 		= true;
var dashing 				: boolean 		= false;
var canJump 				: boolean 		= true;
var jump 					: boolean 		= false;



function FlipPlayer(goingRight : boolean){
	if(goingRight){
		container.transform.localRotation = Quaternion.Euler(0, 0, 0);
	} else {
		container.transform.localRotation = Quaternion.Euler(0, 180, 0);
	}
}



function StartDash(){
	dashing = true;
}



function StopDash(){
	dashing = false;
}



function Jump(doJump : boolean){
	jump = doJump;
}



function OnCollisionEnter2D(other : Collision2D){
	var tag = other.transform.gameObject.tag;
	if(tag == "Playbox"){

		if(goRight){
			goRight = false;
		} else {
			goRight = true;
		}
		FlipPlayer(goRight);

	}
}



function Start () {
	body = GetComponent(Rigidbody2D);
}

function Update () {

}

function FixedUpdate(){
	
	var velocity = body.velocity;

	grounded = Physics2D.OverlapCircle(grounder.transform.position, .1, grounderMask);
	if(grounded){
		canJump = true;
	}

	if(dashing && speed < baseSpeed + boostSpeed){
		speed = speed * 1.1;
	}

	if(!dashing && speed > baseSpeed){
		speed = speed *.9;
	}

	if(speed < baseSpeed){
		speed = baseSpeed;
	}

	if(speed > speed + baseSpeed){
		speed = baseSpeed;
	}


	if(goRight){
		body.velocity.x = speed;
	} else {
		body.velocity.x = -speed;
	}

	// do
	
	if(jump && canJump){
		body.velocity.y = jumpSpeed;
		jump = false;
		canJump = false;
	}

	//var realSpeed : Vector2;

	// if(dashing && speed.x < baseSpeed + boost){
	// 	speed.x = speed.x*1.09;
	// } else if(!dashing && speed.x > baseSpeed){
	// 	speed.x = speed.x *.95;
	// }

	// if(goRight){
	// 	//realSpeed = body.position + speed * Time.deltaTime;
	// 	realSpeed.x = body.position.x + speed.x * Time.deltaTime;
	// 	realSpeed.y = body.position.y + speed.y * Time.deltaTime;
	// } else {
	// 	//realSpeed = body.position - speed * Time.deltaTime;
	// 	realSpeed.x = body.position.x - speed.x * Time.deltaTime;
	// 	realSpeed.y = body.position.y + speed.y * Time.deltaTime;
	// }

	// body.MovePosition(realSpeed);

	// if(jump){
	// 	jump = false;
	// 	body.AddForce(Vector2(0, 9), ForceMode2D.Impulse);
	// } 
}