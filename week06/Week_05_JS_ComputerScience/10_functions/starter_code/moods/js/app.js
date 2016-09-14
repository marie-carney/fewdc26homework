//wait for the DOM elements to load before executing
jQuery(document).ready(function() {

    // Create a function that runs whenever the submit 
    // button is clicked
    jQuery("#submit-btn").click(function() {

        //prevent the submit button from refreshing the 
        //page
        event.preventDefault();

        //Create a variable called moodvalue and get the 
        //value of the #mood input
        var moodValue = jQuery("#mood").val();
        //console.log(moodValue);
        //Correct for capitalization
        moodValue = moodValue.toLowerCase().trim();
        console.log(moodValue);

        // if the user inputs excited / ecstatic / fantastic 
        // change the CSS class to 'excited'

        if (moodValue == "excited" || moodValue == "ecstatic" || moodValue == "fantastic") {
            jQuery(".moodring div").attr("class", "excited");
        
        }

    });


});