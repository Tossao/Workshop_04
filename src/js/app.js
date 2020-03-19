document.addEventListener("DOMContentLoaded", function () {

    const tbody = document.querySelector("tbody");

    function addBookToDom(book) {
        const row = document.createElement("tr");
        const title = document.createElement("td");
        const titleAnchor = document.createElement("a");
        const divEl = document.createElement("div");

        titleAnchor.dataset.id = book.id;
        titleAnchor.innerText = book.title;
        title.appendChild(titleAnchor);

        titleAnchor.addEventListener("click", function () {
            $.getJSON({
                url: `http://localhost:8282/books/${this.dataset.id}`,
            }).done(response => {
                console.log(response);
                divEl.innerText = JSON.stringify(response);
            })
        });

        const author = document.createElement("td");
        author.innerText = book.author;

        const publisher = document.createElement("td");
        publisher.innerText = book.publisher;

        const deleteTd = document.createElement("td");
        const deleteA = document.createElement("a");

        deleteA.innerText = "Usuń!";
        deleteA.dataset.id = book.id;
        deleteA.className = "remove";
        deleteTd.appendChild(deleteA);

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(publisher);
        row.appendChild(deleteTd);

        tbody.appendChild(row);
        tbody.appendChild(divEl);
    }

    $("#addBookForm").submit(function (event) {
        event.preventDefault();
        const title = $("#title").val();
        const author = $("#author").val();
        const publisher = $("#publisher").val();
        const isbn = $("#isbn").val();
        const type = $("#type").val();

        const newBook = {
            "title" : title,
            "author" : author,
            "publisher" : publisher,
            "isbn" : isbn,
            "type" : type
        };

        $.post({
            url: "http://localhost:8282/books",
            data: JSON.stringify(newBook),
            headers: {
                'Content-type': 'application/json'
            }
        }).done(() =>{
            location.reload(false);
        }).fail(() => {
            console.log("Nie dodano książki!")
        });
    });

    $.get({
        url: "http://localhost:8282/books"
    }).done(response => {
        response.forEach(addBookToDom);
        console.log(response)
        });

    const deleteEl = $('tbody');
    deleteEl.on("click", '.remove', function () {
        console.log("product clicked");
        const id = this.dataset.id;
        console.log(id);
        $.ajax({
            url: "http://localhost:8282/books/" + id,
            method: "DELETE"
        }).done(() => {
            location.reload(false);
        });
    });




    // const exampleBook = {
    //     title: "Potop",
    //     author: "Henryk Sienkiewicz",
    //     publisher: "PWN"
    // };

    // addBookToDom(exampleBook);
    //
    // const springBook = {
    //     "isbn": "9788324627738",
    //     "title": "Już niedługo Spring",
    //     "author": "Anonymous",
    //     "publisher": "Helion",
    //     "type": "Programming"
    // };

// // ASYNCHRONICZNOŚĆ
//     $.post({
//         url: "http://localhost:8282/books",
//         data: JSON.stringify(springBook),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).done(() => {
//         console.log("Ksiazka dodana ! ")
//     }).fail(() => {
//         console.log("Nie udalo sie dodac ksiazki !")
//     });


// // ASYNCHRONICZNOŚĆ
//     $.get({
//         url: "http://localhost:8282/books"
//     }).done(response => {
//         response.forEach(addBookToDom)
//         //console.log(response)
//     })

});