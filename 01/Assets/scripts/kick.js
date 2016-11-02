#pragma strict

function Start () {

}

function Update () {
	if(gameObject.transform.position.y < 0){
		gameObject.Find("Main Camera").GetComponent(shoot).kickCount++;
		
		Destroy(gameObject);
	}
	if(gameObject.Find("Main Camera").GetComponent(shoot).kickCount > 20){
		gameObject.Find("count").GetComponent(UI.Text).text = "恭喜过关，继续学习";
		gameObject.Find("Main Camera").GetComponent(shoot).enabled = false;
	}
}