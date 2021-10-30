var time = moment();
var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

function inputPlanner() {

    $(".time-block").each(function () {
      
        var timeblock = $(this).attr("id");
        var inputField = localStorage.getItem(timeblock);

        if (inputField !== "") {
            $(this).children(".textblock").val(inputField);
        }
    });
}

inputPlanner();

function storedInput() {

    var time = $(this).parent().attr("id");
 
    var inputField = $(this).siblings(".textblock").val();

    localStorage.setItem(time, inputField);
};

function determineTime() {
    
    var hour = time.hours();

    $(".time-block").each(function () {

        var currentHour = parseInt($(this).attr("id"));

        if (currentHour < hour) {
            $(this).addClass("past")
        }
        else if (currentHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

determineTime();

saveBtn.on("click", storedInput);