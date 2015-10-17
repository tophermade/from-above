using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;

public class ShowAdMob : MonoBehaviour {

	// Use this for initialization
	void Start () {
		// Create a 320x50 banner at the top of the screen.
		BannerView bannerView = new BannerView("ca-app-pub-7760287693368374/8411505247", AdSize.Banner, AdPosition.Bottom);
		// Create an empty ad request.
		AdRequest request = new AdRequest.Builder().Build();
		// Load the banner with the request.
		bannerView.LoadAd(request);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
