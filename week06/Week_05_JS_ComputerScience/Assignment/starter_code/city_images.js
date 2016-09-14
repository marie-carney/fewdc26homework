$(document).ready(function () {
    jQuery("#submit-btn").click(function() {
        event.preventDefault();
        var cityName = jQuery("#city-type").val();
	//	jQuery ("#city-type").val("");
        //console.log(moodValue);
        cityName = cityName.toLowerCase().trim();
		console.log(cityName);
        //console.log(cityName;

        if (cityName == "nyc" || cityName == "new york" || cityName == "new york city") {
            jQuery("body").attr("class", "nyc");
        }else if (cityName == "austin") {
            jQuery("body").attr("austin");
        }else if (cityName == "san fran" || cityName == "sf" || cityName == "san fransisco") {
            jQuery("body").attr("class", "sf");
		}else if (cityName == "la" || cityName == "los angeles") {
            jQuery("body").attr("class", "la");
		}else if (cityName == "sydney") {
            jQuery("body").attr("class", "sydney");
        }

    });

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        
        // if the user inputs happy/good/great change the CSS class to 'happy'

        // if the user inputs bad/angry change the CSS class to 'bad'

    // Listen for user interaction on the submit button.

});