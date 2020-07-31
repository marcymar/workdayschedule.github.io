$(document).ready(function () {

    // adding function to the save button so taht it saves any user input

    $(".saveBtn").click(function () {
        let value = $(this).siblings(".userInput").val()
        let time = $(this).parents().attr("id")

        localStorage.setItem(time, value)
    })

    // storing the user's schedule inpout to local storage, then retriveing it using getItem.
    $("#900 .userInput").val(localStorage.getItem("900"))
    $("#1000 .userInput").val(localStorage.getItem("1000"))
    $("#1100 .userInput").val(localStorage.getItem("1100"))
    $("#1200 .userInput").val(localStorage.getItem("1200"))
    $("#1300 .userInput").val(localStorage.getItem("1300"))
    $("#1400 .userInput").val(localStorage.getItem("1400"))
    $("#1500 .userInput").val(localStorage.getItem("1500"))
    $("#1600 .userInput").val(localStorage.getItem("1600"))
    $("#1700 .userInput").val(localStorage.getItem("1700"))

    let currentHour = parseInt(moment())

    // colors scheduler according to time of day(past present future)
    $(".time-block").each(function () {
        let timeBlock = parseInt($(this).attr("id"))
        if (timeBlock === currentHour) {
            $(this).addClass("present")
        } else if (timeBlock > currentHour) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }

    })


})

