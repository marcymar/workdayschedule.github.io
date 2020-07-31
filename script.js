console.log(moment())
const currentDay = document.getElementById('currentDay');
currentDay.innerHTML = moment()

$(document).ready(function () {
    $(".saveBtn").click(function () {
        let input = $(this).siblings(".userInput").val()
        let container = $(this).parents().attr("id")

        console.log(container)
        console.log(input)

        localStorage.saveInput(container, input)
    })

    $("#900 .userInput").val(localStorage.loadInput("900"))
    $("#1000 .userInput").val(localStorage.loadInput("1000"))
    $("#1100 .userInput").val(localStorage.loadInput("1100"))
    $("#1200 .userInput").val(localStorage.loadInput("1200"))
    $("#1300 .userInput").val(localStorage.loadInput("1300"))
    $("#1400 .userInput").val(localStorage.loadInput("1400"))
    $("#1500 .userInput").val(localStorage.loadInput("1500"))
    $("#1600 .userInput").val(localStorage.loadInput("1600"))
    $("#1700 .userInput").val(localStorage.loadInput("1700"))
})
