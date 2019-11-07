function countBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    document.getElementById("productCount").innerText = basket.length;
}

countBasket();

let basket = JSON.parse(localStorage.getItem("basket"));
let table = document.querySelector(".table")
let i = 1;
console.log(basket)

basket.forEach(elm => {
    let tr = document.createElement("tr");
    let tdImg = document.createElement("td");
    let tdName = document.createElement("td");
    let tdCount = document.createElement("td");
    let th = document.createElement("th");

    th.innerText = i;
    i++;
    let img = document.createElement("img");
    img.setAttribute("src", elm.img);

    tdImg.appendChild(img);
    tdName.innerText = elm.name;
    tdCount.innerText = elm.count;

    tr.append(th, tdImg, tdName, tdCount);
    table.lastElementChild.appendChild(tr)


});