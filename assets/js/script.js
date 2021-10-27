var sevenHour = $("#7");
var eightHour = $("#8");
var nineHour = $("#9");
var tenHour = $("#10");
var elevenHour = $("#11");
var twelveHour = $("#12");
var oneHour = $("#13");
var twoHour = $("#14");
var threeHour = $("#15");
var fourHour = $("#16");
var fiveHour = $("#17");
var time = moment();
var saveBtn = $(".saveBtn");

function inputPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var textblock = localStorage.getItem(id);

        if (textblock !== null) {
            $(this).children(".textblock").val(textblock);
        }
    });
}

inputPlanner();

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var textblock = $(this).siblings(".textblock").val();

    localStorage.setItem(time, textblock);
});

function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future")
        }
        else if (currentHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();