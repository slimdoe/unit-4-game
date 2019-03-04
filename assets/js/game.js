var random_results;
var lost = 0;
var win = 0;
var previous = 0;
var target;

function intial() {
target=Math.floor(Math.random() * 60) + 30;
console.log (target)
}

// var resetAndStart = function () {
//     $(".crystals").empty();

//     /*var images = [
//         'https://images.unsplash.com/photo-1521133573892-e44906baee46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

//     ]*/
// function (){}

//     random_results = Math.floor(Math.random() * 60) + 30;
// };

//console.log(random_results);

$("#result").html('Random results', + random_results);
//$("#win").html('Winner',+ )

//this generates 4 crystals in <div>
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    //console.log (random);

    var crystal = $("<div>");

    crystal.attr({
        "class": 'crystal', "data-random": random
    });

    /*crystal.css({
        "background-image":"url('"+ images[i]+"')",
        "background-size":'cover'});*/

    $(".crystals").prepend(crystal);

    $("#previous").html("total score" + previous);

};


//resetAndStart();


//this is an "event delegation"
$(".crystal").on('click', function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("total score" + previous);

    console.log(previous);

    if (previous > random_results) {
        lost--;

        $("#lost").html("you lost" + lost);
        previous = 0;
        resetAndStart();
    }

    else if (previous === random_results) {
        win++;

        $("#win").html("you win" + win);

        previous = 0;
        resetAndStart();


    }
});

