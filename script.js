let form = document.getElementById("bookmarkForm");
let siteNameEl = document.getElementById("siteNameInput");
let siteURLEl = document.getElementById("siteUrlInput");
let nameERR = document.getElementById("siteNameErrMsg");
let emailERR = document.getElementById("siteUrlErrMsg");
let card1 = document.getElementById("card1");
let btn = document.getElementById("submitBtn");
let ul = document.getElementById("bookmarksList")


function addBookmark() {
    let url = siteURLEl.value;
    /*let bookmarkCon = document.createElement("div");
    bookmarkCon.classList.add("form-container", "p-2", "mt-3");
    card1.appendChild(bookmarkCon);

    let ul = document.createElement("ul");
    ul.classList.add("list1");
    ul.id = "bookmarksList";
    bookmarkCon.appendChild(ul);

    let list = document.createElement("li");
    list.textContent = siteNameEl.value;
    ul.appendChild(list);
    let link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank";
    ul.appendChild(link);*/
    let list = document.createElement("li");
    list.textContent = siteNameEl.value;
    ul.appendChild(list);
    let link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank";
    ul.appendChild(link);

}
siteNameEl.addEventListener("change", function() {
    if (siteNameEl.value === "") {
        nameERR.textContent = "Required*";
    } else {
        nameERR.textContent = "";
    }
})
siteURLEl.addEventListener("change", function() {
    if (siteURLEl.value === "") {
        emailERR.textContent = "Required*";
    } else {
        emailERR.textContent = "";
    }
})

btn.addEventListener("click", function() {
    addBookmark();
})

form.addEventListener("submit", function(event) {
    event.preventDefault();
})