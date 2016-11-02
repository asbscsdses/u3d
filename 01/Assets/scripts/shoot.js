#pragma strict

function Start () {

}

var speed:int = 5;
var newobject:Transform;
var count:int=0;
var kickCount:int=0;

function Update () {
	var x = Input.GetAxis("Horizontal")*Time.deltaTime*speed;
	var z = Input.GetAxis("Vertical")*Time.deltaTime*speed;
	transform.Translate(x,0,z);
	//print(x);
	
	if(Input.GetButtonDown("Fire1")){
		var clone = Instantiate(newobject, transform.position,transform.rotation);
		var fwd = transform.TransformDirection(Vector3.forward);
		
		clone.rigidbody.AddForce(fwd*2800);			
		
		count++;
		
		gameObject.Find("count").GetComponent(UI.Text).text = "数量："+count + "  击落数：" + kickCount;
		
	}
	
	if(Input.GetKey(KeyCode.Q)){
			transform.Rotate(0,-25*Time.deltaTime,0,Space.Self);
		}
	if(Input.GetKey(KeyCode.E)){
		transform.Rotate(0,25*Time.deltaTime,0,Space.Self);
	}
	
	if(Input.GetKey(KeyCode.Z)){
			transform.Rotate(-25*Time.deltaTime,0,0,Space.Self);
		}
	if(Input.GetKey(KeyCode.C)){
		transform.Rotate(25*Time.deltaTime,0,0,Space.Self);
	}
	
	if(Input.GetKey(KeyCode.H)){
			transform.Translate(0,5*Time.deltaTime,0);
		}
	if(Input.GetKey(KeyCode.N)){
		transform.Translate(0,-5*Time.deltaTime,0);
	}
}