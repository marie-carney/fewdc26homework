
//Light Status
var myLights = 1;

jQuery(document).ready(function(){
//On click #light_switch
	jQuery("#light_switch").on("click",function(){

	if(myLights == 1){
	//if lights are on
		//turn off
			// set body background css to black
			jQuery("body").css("background","black");
			// set myLights 0
			myLights = 0;

	}else {
	//else
		//turn on
			// set body background to white
			jQuery("body").css("background","white");
			// set myLights 1
			myLights = 1;

	}

});




});
