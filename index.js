async function OsszesAdat() {

    let response = await fetch('/products.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.products;
    let termekLista = document.getElementById('adatLista');
    termekLista.textContent = '';

    for (let p of adatok) {
        let li = document.createElement('li');
        li.innerHTML = 'id: ' + p.id + '<br />title: ' + p.title + '<br>description: ' + p.description + '<br>price: ' + p.price +
            '<br>discountPercentage: ' + p.discountPercentage + '<br>rating: ' + p.rating + '<br>stock: ' + p.stock + '<br>brand: ' + p.brand +
            '<br>category: ' + p.category + '<br>thumbnail: ' + p.thumbnail;
        termekLista.appendChild(li);
    }
}
async function OsszesAdatABC() {

    let response = await fetch('/products.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.products.sort(function (a, b) {
        if (a.title < b.title) { return -1; }
        if (a.title > b.title) { return 1; }
        return 0;
    })

    let termekLista = document.getElementById('adatLista');
    termekLista.textContent = '';

    for (let p of adatok) {
        let li = document.createElement('li');
        li.innerHTML = 'id: ' + p.id + '<br />title: ' + p.title + '<br>description: ' + p.description + '<br>price: ' + p.price +
            '<br>discountPercentage: ' + p.discountPercentage + '<br>rating: ' + p.rating + '<br>stock: ' + p.stock + '<br>brand: ' + p.brand +
            '<br>category: ' + p.category + '<br>thumbnail: ' + p.thumbnail;
        termekLista.appendChild(li);
    }
}
async function OsszesAdatLegdragabb() {

    let response = await fetch('/products.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.products.sort(function (a, b) {

        if (a.price > b.price) { return -1; }
        if (a.price < b.price) { return 1; }
        return 0;
    })

    let termekLista = document.getElementById('adatLista');
    termekLista.textContent = '';
    for (let p of adatok) {

        let li = document.createElement('li');
        li.innerHTML = 'id: ' + p.id + '<br />title: ' + p.title + '<br>description: ' + p.description + '<br>price: ' + p.price +
            '<br>discountPercentage: ' + p.discountPercentage + '<br>rating: ' + p.rating + '<br>stock: ' + p.stock + '<br>brand: ' + p.brand +
            '<br>category: ' + p.category + '<br>thumbnail: ' + p.thumbnail;
        termekLista.appendChild(li);
    }
}

async function Ajanlat() {

    let response = await fetch('/products.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.products.sort(function (a, b) {
        if (a.price > b.price) { return -1; }
        if (a.price < b.price) { return 1; }
        return 0;
    })

    let termekLista = document.getElementById('adatLista');
    termekLista.textContent = '';

    for (let p of adatok) {
        let li = document.createElement('li');
        li.innerHTML = 'id: ' + p.id + '<br />title: ' + p.title + '<br>description: ' + p.description + '<br>price: ' + p.price +
            '<br>discountPercentage: ' + p.discountPercentage + '<br>rating: ' + p.rating + '<br>stock: ' + p.stock + '<br>brand: ' + p.brand +
            '<br>category: ' + p.category + '<br>thumbnail: ' + p.thumbnail;
        if (p.price < 100) {
            termekLista.appendChild(li);
        }
    }
}

async function Search() {

    let response = await fetch('/products.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.products;
    let termekLista = document.getElementById('adatLista');
    termekLista.textContent = '';
    let keresettSzoveg = document.getElementById('keresesGomb');
    for (let p of adatok) {
        let li = document.createElement('li');
        li.innerHTML = 'id: ' + p.id + '<br />title: ' + p.title + '<br>description: ' + p.description + '<br>price: ' + p.price +
            '<br>discountPercentage: ' + p.discountPercentage + '<br>rating: ' + p.rating + '<br>stock: ' + p.stock + '<br>brand: ' + p.brand +
            '<br>category: ' + p.category + '<br>thumbnail: ' + p.thumbnail;
        if (keresettSzoveg.value !== "" && p.description.toLowerCase().includes(keresettSzoveg.value.toLowerCase())) {
            termekLista.appendChild(li);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('mindGomb').addEventListener('click', () => { OsszesAdat() });
    document.getElementById('abcGomb').addEventListener('click', () => { OsszesAdatABC() });
    document.getElementById('legdragabbGomb').addEventListener('click', () => { OsszesAdatLegdragabb() });
    document.getElementById('keresesGomb').addEventListener('click', () => { Search() });
    document.getElementById('ajanlatGomb').addEventListener('click', () => { Ajanlat() });

});