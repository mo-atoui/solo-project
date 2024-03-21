var products = [
    {
        id:1,
        image:"imgs/123456.jpg",
        title:"3090ti i7 14th 14900k hp",
        price:960.50,
    },
    {
        id:2,
        image:"imgs/8745.jpg",
        title:"4060ti i7 14th 14900k lenovo ",
        price:1200.00,
    },
    {
        id:3,
        image:"imgs/951753.jpg",
        title:"4090ti i7 14th 14900k lenovo ",
        price:900.10,
    },
    {
        id:4,
        image:"imgs/159357.jpg",
        title:"3070ti i7 14th 14900k  ",
        price:960.99,
    },
    {
        id:5,
        image:"imgs/654321.jpg",
        title:"4050ti i7 14th 14900k lenovo ",
        price:1600.90,
    },
    {
        id:6,
        image:"imgs/razez.jpg",
        title:"3090ti i7 14th 14900k razer ",
        price:1160.20,
    },
    {
        id:7,
        image:"imgs/SL1500.jpg",
        title:"Cooler Master CK550 V2 Clavier gaming mécanique",
        price:98.55,
   },
    {
        id:8,
        image:"imgs/mous.keyb.jpg",
        title:"keyboard mous pack ",
        price:270.0,
   },
    {
        id:9,
        image:"imgs/casque-log.jpg",
        title:" gaming casque logitech ",
        price:999.10,
    },
    {
        id:10,
        image:"imgs/newnew.jpg",
        title:"3090ti i5 11th 14900k asus",
        price:1700.80,
    },
    {
        id:11,
        image:"imgs/tank.jpg",
        title:"3090ti i7 9th 14900k lenovo ",
        price:1360.60,
    }
]

var showProducts = [

]
// var tags = []

var basket = {
    count :0,
    products : []
}

function filterProduct(){
    let search = document.getElementById('search').value;
    let minPrice = document.getElementById('minPrice').value;
    let maxPrice = document.getElementById('maxPrice').value;
    if (search) {
        showProducts = products.filter(
                elem => elem.title.includes(search)
            )
    }
    if (minPrice) {
        showProducts = products.filter(
                elem => elem.price >= minPrice
            )
    }
    if (maxPrice) {
        showProducts = products.filter(
                elem => elem.price <= maxPrice
            )
    }
    displayProducts();
}





function displayProducts(){
    let productsDiv = document.getElementById('products');
    productsDiv.innerHTML = "";
    for (let prod of showProducts){
        let prodDiv = document.createElement("div");
        prodDiv.className = "product";

        let img = document.createElement("img");
        img.src = prod.image
        img.style.width ="100%"

        let title = document.createElement("h4");
        title.innerText = prod.title

        let price = document.createElement("p");
        price.innerText = prod.price
        price.className = "price"

        let hidden = document.createElement("input");
        hidden.type = "hidden"
        hidden.value = prod.id
        hidden.style.visibility=0;

        let button = document.createElement("button");
        button.innerText = "Buy"
        button.className = "buy-button"
        button.addEventListener('click',addToBasket);

        prodDiv.append(img);
        prodDiv.append(title);
        prodDiv.append(price);
        prodDiv.append(hidden);
        prodDiv.append(button);

        productsDiv.append(prodDiv);

    }
}
function displayTags(){

}
function fillBasket(){
    let productsDiv = document.getElementById('yourProducts');
    productsDiv.innerHTML = "";
    for (let prod of basket.products){
        let prodDiv = document.createElement("div");
        prodDiv.className = "basket-product";


        let title = document.createElement("h4");
        title.innerText = prod.title

        let price = document.createElement("p");
        price.innerText = prod.price
        price.className = "price"

        let hidden = document.createElement("input");
        hidden.type = "hidden"
        hidden.value = prod.id
        hidden.style.visibility=0;

        let button = document.createElement("button");
        button.innerText = "Remove"
        button.addEventListener('click',removeFromBasket);

        prodDiv.append(title);
        prodDiv.append(price);
        prodDiv.append(hidden);
        prodDiv.append(button);

        productsDiv.append(prodDiv);

    }
    document.getElementById("badge").innerText = basket.count;
}

function removeFromBasket(event){
    let prodId = event.target.previousElementSibling.value;
    let prod = basket.products.pop(elem=> elem.id == prodId)[0];
    
    basket.count-=1;
    fillBasket();
}
function addToBasket(event){
    let prodId = event.target.previousElementSibling.value;
    let prod = products.filter(elem=> elem.id == prodId)[0];
    prod["count"] = 1;
    basket.count +=1;
    basket.products.push(prod);
    fillBasket();

}
function openBasket(){
    document.getElementById("basket-body").style.visibility="visible";
}

function closeBasket(){
    document.getElementById("basket-body").style.visibility="hidden";
}

showProducts = products
// tags = products.reduce((tt,elem) => tt.concat(elem.tags),[])
document.getElementById('basket').addEventListener("click",openBasket);
displayProducts()
