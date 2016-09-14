
//On pgae load/ready
jQuery(document).ready(function(){

	//on click of #submit
	jQuery("submit").on("click",function(){
			//get value of A
			var a = parseFloat(jQuery("#a").val());
			//get value of B
			var b = parseFloat(jQuery("#b").val());

		if(a > b){
			//If A > B
			jQuery("comparison").text(">");

		}else if(a == b){
			//If A == B
			jQuery("#comparison").text("=");

		}else if(a < b){
			//If A < B
			jQuery("#comparison").text("<");

		}else {
			// Not Applicable
			jQuery("#comparison").text("N/A");


});		
});