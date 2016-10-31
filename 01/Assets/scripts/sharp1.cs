using UnityEngine;
using System.Collections;
using System;

public class sharp1 : MonoBehaviour {
	Int32 speed = 5;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		var x = Input.GetAxis ("Horizontal") * Time.deltaTime * speed;
		var z = Input.GetAxis ("Vertical") * Time.deltaTime * speed;
		transform.Translate (x, 0, z);
		print (x);
	
	}
}
