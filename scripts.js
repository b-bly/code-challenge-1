//console.log('scripts loaded');

$(document).ready(function() {
    //console.log('jquery loaded');
    var i = 0;
   
    $('#generateButton').on('click', function() {
        i++;
        var divId = 'generateDiv' + i.toString(10);
        $('#container').append('<div id="' + divId + '" class="generateDiv"></div>');
        $('#' + divId).append('<p>' + i.toString(10) + '<p>'); //probably don't need the toString
        $('#' + divId).append('<button class="swapButton">Swap</button><button class="deleteButton">Delete</button>'); 
        
        //I realize I could write this all as one big append, but I thought this is what the challenge
        //was asking.
       
    });
    $('#container').on('click', '.deleteButton', function() {
            $(this).parent().remove();
        });
    $('#container').on('click', '.swapButton', function() {
        //console.log($(this).parent().css('backgroundColor'));
        if ($(this).parent().css('background-color') == 'rgb(255, 255, 0)' || undefined) {
            $(this).parent().css('background-color', 'red');
        } else if ($(this).parent().css('backgroundColor') == 'rgb(255, 0, 0)') {
            $(this).parent().css('backgroundColor', 'yellow');
        }
    });
});

/*
Clicking a "Swap" <button> should change its parent background-color from Red to Yellow.

Clicking a "Swap" <button> again should change its parent background-color from Yellow back to Red.
*/