const products = {
    plainBurger:{
        name:'GAMBURGER',
        price:10000,
        kcall:250,
        amount:0,
        get summ(){
           return this.price * this.amount
        },
        get allKcall(){
           return this.kcall * this.amount
        },
    },
    freshBurger:{
        name:'GAMBURGER FRESH',
        price:20500,
        kcall:350,
        amount:0,
        get summ(){
           return this.price * this.amount
        },
        get allKcall(){
           return this.kcall * this.amount
        },
    },
    freshCombo:{
        name:'FRESH COMBO',
        price:31900,
        kcall:650,
        amount:0,
        get summ(){
           return this.price * this.amount
        },
        get allKcall(){
           return this.kcall * this.amount
        },
    },
}



const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
addCart = document.querySelector('.addCart'),
receipt = document.querySelector('.receipt'),
receiptWindow = document.querySelector('.receipt__window'),
receiptWindowOut = document.querySelector('.receipt__window-out'),
body = document.querySelector('body'),
receiptWindowBtn = document.querySelector('.receipt__window-btn');

btnPlusOrMinus.forEach(function (el) {
    el.addEventListener('click',function(){
        plusOrMinus(this)
    })
})


function plusOrMinus(element) { 
    /* 
    closest() - objectni methodi. Elementni o'rab turgan elementga ulanadi
    getAttribute() - Attributdan informatsiya oladi
    */
    const parent = element.closest('.main__product'),/* o'rab turgan elementga ulanamiz */
        parentId = parent.getAttribute('id'); /* o'rab turgan element atributidan malumot olamiz */
        out = parent.querySelector('.main__product-num'), /* o'rab turgan elementdan miqdorga ulanamiz */
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elemData = element.getAttribute('data-symbol'); /*  bosilgan elementni plus yoki minus ligini aniqlaymiz */
        if (elemData == '+' && products[parentId].amount < 10) {
            products[parentId].amount++
        }else if(elemData == '-' && products[parentId].amount > 0){
            products[parentId].amount--
        }
        out.innerHTML = products[parentId].amount
        price.innerHTML = products[parentId].summ
        kcall.innerHTML = products[parentId].allKcall
 }
 
 let arrayProduct = [],
 totalName = '',
 totalPrice = 0,
 totalKcall = 0
 
 addCart.addEventListener('click', function(){
    for (const key in products) {
        const po = products[key];
        if (po.amount > 0) {
            arrayProduct.push(po)
        }
        po.price = po.summ
        po.kcall = po.allKcall
    }
    arrayProduct.forEach((el)=>{
        totalPrice += el.price
        totalKcall+= el.kcall
        totalName += `${el.name} \n`
    })
    receipt.style.display = 'flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '30%'
    }, 100);
    receiptWindowOut.innerHTML = `Sizni buyurtmangiz:\n${totalName}\nUmumiy kaloriya: ${totalKcall}\nUmumiy summa: ${totalPrice}`
    body.style.overflow = 'hidden'
    const outNum = document.querySelectorAll('.main__product-num'),
        outPrice = document.querySelectorAll('.main__product-price span'),
        outKcall = document.querySelectorAll('.main__product-kcall span');
        for (let i = 0; i < outNum.length; i++) {
            outNum[i].innerHTML = 0
            outPrice[i].innerHTML = 0
            outKcall[i].innerHTML = 0
        }
})


receiptWindowBtn.addEventListener('click', ()=>{
    location.reload()
})

const mainProductInfo = document.querySelectorAll('.main__product-info'),
    view = document.querySelector('.view'),
    viewImg = document.querySelector('.view__img'),
    viewClose = document.querySelector('.view__close');

mainProductInfo.forEach(element => {
    const mainProductImg = element.querySelector('.main__product-img');
    element.addEventListener('dblclick', (e) => {
        view.classList.add('active');
        const mainProductImgSrc = mainProductImg.getAttribute('src');
        viewImg.setAttribute('src', mainProductImgSrc);
    })
});

viewClose.addEventListener('click', (e) => {
    view.classList.remove('active');
})
