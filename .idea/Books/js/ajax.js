
$(function () {
    console.log("works");

    setInterval(() => {
        $.ajax({
            url: "http://date.jsontest.com/",
            method: "GET",
            dataType: "json"
        }).done(function (response) {
            $("#date").text(response.date + " " + response.time)
        })
    }, 1000);

    console.log("end")

    $.getJSON({
        url: "http://swapi.co/api/people/4"
    }).done(response => {
        console.log("Luke's father is " + response.name)
    })


})