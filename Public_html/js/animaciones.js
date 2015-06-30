

$(document).ready(function(){
    $("#Home a").click(function(){
        $(".section1").slideToggle();
        $(".section2").hide();
        $(".section3").hide();
        $(".section4").hide();
        
        
    });
    $("#Develop a").click(function(){
        $(".section2").slideToggle();
        $(".section1").hide();
        $(".section3").hide();
        $(".section4").hide();
        
        
    });
    $("#Nosotros a").click(function(){
        $(".section3").slideToggle();
        $(".section1").hide();
        $(".section2").hide();
        $(".section4").hide();
        
        
    });
    $("#Contacto a").click(function(){
        $(".section4").slideToggle();
        $(".section1").hide();
        $(".section2").hide();
        $(".section3").hide();
       
    });
});