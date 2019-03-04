var random_results;
var lost;
var win;





random_results= Math.floor(Math.random()* 60 )+ 30;

console.log(random_results);

$("#result").html('Sy Crystal Game: ');

for (var i=0;i < 4; i++){
var random=Math.floor(Math.random()*12);
console.log (random);

    var crystal = $ ("<div>");

        crystal.attr({
            "class":'crystal' , "data-random":random
        });

$(".crystals").append(crystal);
}


