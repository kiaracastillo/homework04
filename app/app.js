function initListeners(){
    $("#login").on("click", (e) => {
        $("#modal").toggle();
    });

    $(".close").on("click", (e) => {
        //add hide & show here
        //$("#modal").css("display", "none");
        $("#modal").toggle();


    });
}
    $(document).ready(function (){
        initListeners();
    });


    
   