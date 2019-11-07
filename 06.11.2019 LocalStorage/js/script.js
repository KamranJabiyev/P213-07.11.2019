// let a = 10;
// localStorage.setItem("c", 20);

// localStorage.clear();
// localStorage.removeItem("c")

// sessionStorage.setItem("b", 15)
// console.log(sessionStorage.getItem("b"));

// if (localStorage.getItem("a") == null) {
//     localStorage.setItem("a", 1);
// } else {
//     let deyer = Number(localStorage.getItem("a"));
//     localStorage.setItem("a", deyer + 1);
// }

if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]))
}

let btnAdd = document.querySelectorAll(".btn-add");

for (let btn of btnAdd) {
    btn.onclick = function(e) {
        e.preventDefault();
        if (JSON.parse(localStorage.getItem("basket")) === null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }
        let basket = JSON.parse(localStorage.getItem("basket"));
        let id = this.parentElement.getAttribute("data-id");
        let img = this.parentElement.previousElementSibling.getAttribute("src");
        let name = this.parentElement.firstElementChild.innerText;
        console.log(name)
        let existPro = basket.find(p => p.id == id);

        if (existPro === undefined) {
            basket.push({
                id: id,
                img: img,
                name: name,
                count: 1
            })
        } else {
            existPro.count += 1;
        }
        localStorage.setItem("basket", JSON.stringify(basket))
        countBasket();

        // console.log(basket)
    }
}

function countBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    document.getElementById("productCount").innerText = basket.length;
    // document.getElementById("productCount").innerText = basket.reduce((t, pro) => { return t + pro.count }, 0)
}

countBasket();