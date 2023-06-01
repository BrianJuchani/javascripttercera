let productos=[];
let carrito=[];



const dbproductos=[
    {
        id:1,
        name:"remera termica",
        price:2500,
        img:"../img/termico remera.jpg",
    },
    {
        id:2,
        name:"pantalon",
        price:3000,
        img:"../img/pantalon.webp",
    },
    {
        id:3,
        name:"short",
        price:2500,
        img:"../img/short.jpg"
    },
    {
        id:4,
        name:"zapatilla",
        price:5000,
        img:"../img/zapatilla.jpg"
    },
    {
        id:5,
        name:"buzo",
        price:3500,
        img:"../img/buzo.jpg"
    },

]

class Producto{
    constructor(id,name,price,img){
        this.id=id
        this.name=name
        this.price=price
        this.img=img
    }
}


function generar(){
    for(const element of dbproductos){
        productos.push(new Producto(element.id,element.name,element.price,element.img))
    }
}
generar();
console.log(productos)

function generarEnElHtml(){
    productos.forEach((Producto)=>{
        let template=`
        <div class="productos card"  style="width: 18rem;">
        <img src="${Producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class=" card-title">${Producto.name}</h5>
        <p class="card-text">$${Producto.price}</p>
        <button class="btn añadir "value"${Producto.id}
        <a href="#" class="añadir btn btn-primary" value="${Producto.id}">añadir al carrito</a>
        </div>
        </div>
        `
        document.getElementById("venta").innerHTML +=template
    })
}
const botom=document.getElementsByClassName("añadir")

generarEnElHtml()

function llevarAlCarrito(){
    for(const btn of botom ){
        btn.addEventListener('click',()=>{
            if(btn.value >0 && btn.value < 5){
                let busca=btn.value
                let encuentra=productos.find((Producto)=>{
                    return Producto.id==busca
                })
                carrito.push(encuentra)
            }
            localStorage.setItem('prendas',JSON.stringify(carrito))
        })
    }
}

llevarAlCarrito()
console.log(carrito)











