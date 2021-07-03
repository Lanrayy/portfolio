
$(function(){

    //SERVICES PAGE

    //this variable will store the value of the current box being acted on
    var servId; 

    //
    //when the cursor hovers over a service box
    //

    $(".service").on("mouseenter", function(){
        servId = $(this).attr("id");
        //alert(servId);
        //increase font size of the header
        $("#service-header-"+servId).css({"font-size":"22px"});

        //increase font size for description
        $("#service-description-"+servId).css({"font-size":"18px"});

        //increase size for box size
        $("#"+servId).css({"height":"340px", "width":"590px"});

        // the cursor should change to a pointer
        $(".service").css({"cursor":"pointer"});
    })

    //when the cursor leaves a service box
    $(".service").on("mouseleave", function(){
        
        //decrease font size of the header
        $("#service-header-"+servId).css({"font-size":"20px"});

        //decrease font size of the description
        $("#service-description-"+servId).css({"font-size":"16px"});

        //decrease size of box
        $("#"+servId).css({"height":"300px", "width":"550px"});
    })

 
 

    //
    //when a service box is clicked, show the information about that service in a pop up
    //
    $(".service").on("click", function(){
        servId = $(this).attr("id");

        //save the heder and decription of the currently clicked html
        var header = $("#service-header-"+servId).html();
        var desc = $("#service-description-"+servId).html();

        //change the content of the header, description and image
        $("#pop-out-header").html(header);
        $("#pop-out-description").html(desc);
        $("#pop-out-image-"+servId).css({"display":"flex"});
        $("#"+servId).css({"box-shadow":"0px 0px 25px 1px #00256B"});


        //show the pop out and the overlay
        $(".pop-out-container").css({"display":"flex"});
        $("#pop-out-overlay").css({"display":"flex"});
    })

    //
    //when the close button is clicked, hide the pop-out
    //
    $("#pop-out-close-button").on("click", function(){
        //servId = $(this).attr("id");
        
        //css({"font-size":"22px"});
        //hide the pop-out
        $("#pop-out-image-"+servId).css({"display":"none"});
        $(".pop-out-container").css({"display":"none"});
        $("#pop-out-overlay").css({"display":"none"});

        $("#"+servId).css({"box-shadow":"none"});
    })

})