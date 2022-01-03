let likeCount = 0;

$("#myButton").click(function() {
    likeCount += 1;
    $("h3").text(likeCount);
})
$("#myButton2").click(function() {
    likeCount -= 1;
    $("h3").text(likeCount);
})