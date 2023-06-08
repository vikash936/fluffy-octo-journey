const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem") 

const products = [
    {
        id:1,
        title:"Air Force",
        price: 2000,
        colors:[
            {
                code:"black",
                img: "./ecom image/air.png   ",
            },
            {
                code:"darkblue",
                img:"./ecom image/air2.png  ",
            },
        ],
    },
    {
        id:2,
        title:"Air Jordan",
        price: 2500,
        colors:[
            {
                code:"gray",
                img:"./ecom image/jordan.png "
            },
            {
                code:"green",
                img:"./ecom image/jordan2.png ",
            },
        ],
    },
    {
        id:3,
        title:"Blazer",
        price: 1999,
        colors:[
            {
                code:"White",
                img:"./ecom image/blazer.png "
            },
            {
                code:"green",
                img:"./ecom image/blazer2.png ",
            },
        ],
    },
    {
        id:4,
        title:"Crater",
        price: 1899,
        colors:[
            {
                code:"black",
                img:"./ecom image/crater.png "
            },
            {
                code:"White",
                img:"./ecom image/crater2.png ",
            },
        ],
    },
    {
        id:5,
        title:"Hippie",
        price: 1990,
        colors:[
            {
                code:"gray",
                img:"./ecom image/hippie.png"
            },
            {
                code:"black",
                img:"./ecom image/hippie2.png",
            },
        ],
    },
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

let time = setInterval("auto()",2000,)
function auto(){
    wrapper.style.transform = 'translateX(-100vw)';
    clearInterval(time);
}

let tim = setInterval("aut()",4000)
function aut(){
    wrapper.style.transform = 'translateX(-200vw)';
    clearInterval(tim);
}
let tie = setInterval("ato()",6000)
function ato(){
    wrapper.style.transform = 'translateX(-300vw)';
    clearInterval(tie);
}
let te = setInterval("at()",8000)
function at(){
    wrapper.style.transform = 'translateX(-400vw)';
    clearInterval(te);
}
let t = setInterval("autos()",10000)
function autos(){
    wrapper.style.transform = 'translateX(0vw)';
    clearInterval(t);
}
wrapper.addEventListener("click",() =>{
    clearInterval(time);
    clearInterval(tim);
    clearInterval(tie);
    clearInterval(te);
    clearInterval(t);
});





menuItems.forEach((item,index) => {
    item.addEventListener("click",() =>{
        // change current slide
       if(index ==1){
        wrapper.style.transform = 'translateX(-100vw)';
       }
       else if(index == 2){
        wrapper.style.transform = 'translateX(-200vw)';

       }
       else if(index == 3){
        wrapper.style.transform = 'translateX(-300vw)';

       }
       else if(index == 4){
        wrapper.style.transform = 'translateX(-400vw)';

       }
       else if(index == 0){
        wrapper.style.transform = 'translateX(0vw)';

       }

    //  change the choosen prod
        choosenProduct = products[index] 

    //  change text of prod
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "Price:"+ choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img;

    //  assigning new color
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color,index) => {
    color.addEventListener("click", () => {
        currentProductImg.src= choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index) => {
    size.addEventListener("click", () => {
       currentProductSizes.forEach((size) => {
        size.style.backgroundColor="white";
        size.style.color="black";
       }); 
       size.style.backgroundColor="black";
       size.style.color="White";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display="flex";
});

close.addEventListener("click", () => {
    payment.style.display="none";
});