var total= document.querySelector('.Total-price')
console.log(total)
var prices= document.querySelectorAll('.unit-price')
console.log(prices)
var plus=document.querySelectorAll('.plus-btn')
console.log(plus);
var minus=document.querySelectorAll('.minus-btn')
console.log(minus);
var qte=document.querySelectorAll('.qute')
console.log(qte);
var hearts=document.querySelectorAll('.fa-heart')
console.log(hearts);
var trash=document.querySelectorAll('.fa-trash')
console.log(trash);
var product=document.querySelectorAll('.product')
console.log(product);
var dark=document.querySelector('.bb8-toggle__checkbox')
var body=document.querySelector('body')



function totalprice(){
    var res=0
    for (let i = 0; i< prices.length; i++) {
        res=res+prices[i].innerHTML*qte[i].innerHTML
    }
    total.innerHTML=res.toFixed(2)
    return total
}
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click",function increment(){
        qte[i].innerHTML++
        totalprice()
    })
    
}
for (let i = 0; i < minus.length; i++) {
    
    minus[i].addEventListener("click",function decrement(){
        if(qte[i].innerHTML>0){
            qte[i].innerHTML--
        }
        totalprice()

        })
}
for (let i = 0; i < hearts.length; i++) {
    
hearts[i].addEventListener("click",function like(){
    if (hearts[i].style.color==="black"){
        hearts[i].style.color="white"
        
    }
    else{
        hearts[i].style.color="black"

    }
})
}
for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click',function remove(){
        product[i].remove()
        qte[i].innerHTML=0
        totalprice()
    }
)   
}
dark.addEventListener('click',function theme(){
    if(body.style.backgroundColor===''){
        body.style.backgroundColor='black'
    }
    else{
        body.style.backgroundColor=''
    }

})
for (let i = 0; i < product.length; i++) {
    product[i].addEventListener('mouseover',function change(){
    product[i].style.background='linear-gradient(30deg,red,blue)'
    })
    
}
for (let i = 0; i < product.length; i++) {
    product[i].addEventListener('mouseout',function change(){
    product[i].style.background=''
    })
    
}


