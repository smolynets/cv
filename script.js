$(document).ready(function(){
 
    function showingMenu(){
        $('.menu-items').toggleClass('hidden');
    }

    $('.menu-container').mouseover(function(){
        showingMenu();
    })

    $('.menu-container').mouseout(function(){
        showingMenu();
    })

});