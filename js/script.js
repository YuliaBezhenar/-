class book {
    constructor(category, title) {
        this.category = category;
        this.title = title;
      }
}

let books = new Array();

async function populate(){
    const requestURL = "https://api.jsonbin.io/v3/qs/656fcc9e0574da7622d0d1b1";
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (response.ok) {
        const b = await response.json();

        newBook(b.record);
        showHeader();
        showBook();
    }
    else alert("Помилка")
}

function newBook(obj){
    let book1 = obj;
    for (b of book1){
        let book2 = new book(b.category, b.title);
        books.push(book2);
    }
}

function showHeader(){
    const header = document.getElementById("content_header");
    const myH2 = document.createElement("h2");
    myH2.innerText = "Список книг";
    header.appendChild(myH2);
}
function showBook() {
    const lists = document.getElementById("content_lists");
    const forChild = document.createElement("div");
    const forTeens = document.createElement("div");
    const forAdults = document.createElement("div");
    const myH3_c = document.createElement("h3");
    myH3_c.textContent = "Книги для дітей";
    const myH3_t = document.createElement("h3");
    myH3_t.textContent = "Книги для підлітків";
    const myH3_a = document.createElement("h3");
    myH3_a.textContent = "Книги для дорослих";
    const list_c = document.createElement("ul");
    const list_t = document.createElement("ul");
    const list_a = document.createElement("ul");
    for (b of books){
        const item = document.createElement("li");
        item.textContent = b.title;
        if (b.category == "діти") list_c.appendChild(item);
        else if (b.category == "підлітки") list_t.appendChild(item);
        else if (b.category == "дорослі") list_a.appendChild(item);
    }
    forChild.appendChild(myH3_c);
    forChild.appendChild(list_c);
    forTeens.appendChild(myH3_t);
    forTeens.appendChild(list_t);
    forAdults.appendChild(myH3_a);
    forAdults.appendChild(list_a);
    lists.appendChild(forChild);
    lists.appendChild(forTeens);
    lists.appendChild(forAdults);
}

