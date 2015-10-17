#pragma strict


function Click(){
	#if UNITY_IPHONE
		Application.OpenURL("itms-apps://itunes.apple.com/app/idYOUR_ID");
	#endif

	#if UNITY_ANDROID
		Application.OpenURL("market://details?id=com.nwz.APPNAME/");
	#endif	
}