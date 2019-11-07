let getPost = document.getElementById("getPost");
let allPost = document.getElementById("allPost");

let http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        for (let post of response) {
            let p = document.createElement("p");
            p.className = "card-text";
            p.innerText = post.body;

            let h5 = document.createElement("h5");
            h5.className = "card-title";
            h5.innerText = post.name;

            let bodyDiv = document.createElement("div");
            bodyDiv.className = "card-body post";
            bodyDiv.append(h5, p);

            let cardDiv = document.createElement("div");
            cardDiv.className = "card";
            cardDiv.style.width = "95%";
            cardDiv.appendChild(bodyDiv);

            let colDiv = document.createElement("div");
            colDiv.className = "col-3 mt-2";
            colDiv.append(cardDiv);

            allPost.appendChild(colDiv)
        }

    }
}
http.open("GET", "https://jsonplaceholder.typicode.com/comments");
http.send();