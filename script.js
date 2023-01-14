const showProductdata =[
    {
        img:"img/rogphone6_5_1280x1280-800-resize.jpg",
        name:"rog phone 6",
        link:"details.html",
    },
    {
        img:"img/rogphone6_5_1280x1280-800-resize.jpg",
        name:"rog phone 6",
        link:"details.html",
    },
    {
        img:"img/rogphone6_5_1280x1280-800-resize.jpg",
        name:"rog phone 6",
        link:"details.html",
    },
    {
        img:"img/rogphone6_5_1280x1280-800-resize.jpg",
        name:"rog phone 6",
        link:"details.html",
    },
    {
        img:"img/rogphone6_5_1280x1280-800-resize.jpg",
        name:"rog phone 6",
        link:"details.html",
    },
    {
        img:"img/rogphone6_5_1280x1280-800-resize.jpg",
        name:"rog phone 6",
        link:"details.html",
    },
    
];

let showProduct = (data) => {
    let product = document.querySelector("#prods");
    if(product){
        for(let item of data){
            product.innerHTML +=`
            <a href="${item.link}">
            <div class="product">
                <div class="img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="desc">
                    <h4>${item.name}</h4>
                </div>
            </div>
            </a>
            `;
        }
    }
}
showProduct(showProductdata)
// let checkProduct =()=>{
//     if(showProductdata == null){
//         console.log("Không có sản phẩm để hiển thị");
//     }else{
//         showProduct(showProductdata);
//     }
// }
let checkProduct =()=>{
    let _prin = new URLSearchParams(window.location.search).get("#prods")
}