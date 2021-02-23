window.addEventListener('DOMContentLoaded', (event) => {
    console.log('Ready for JQuery!');
});

$("article img").attr("class","image-center");
$("p").last().remove();
$("#title").css("font-size", `${Math.floor((Math.random()*100))}px`)
$("ol").append( $("<li>").text("new list value") );
$("aside").empty().append( $("<p>").text("So sorry for the stupid aside"));