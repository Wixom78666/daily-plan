// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn = $('.saveBtn');
$(document).ready(function () {

    var date = dayjs();
    $('#currentDay').text(date);
    
    function timeRunner() {
        
        var timeNow = dayjs().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split()[1]);

            if (timeBlock < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
        
    }
    timeRunner();
   
    $(".saveBtn").on("click", function (event) {
        var input = $(this).siblings(".description").val();
        var timeIn = $(this).parent().attr("id");
        event.preventDefault()

        localStorage.setItem(input, timeIn);
        console.log(input, timeIn)
    })

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

})