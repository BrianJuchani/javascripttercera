
let carritoActual=[]

function vender(){
    if(localStorage.getItem('prendas')!==null)
    {
        let carritoCargado=localStorage.getItem('prendas')
        prendas=JSON.parse(carritoCargado)
        prendas.forEach((producto)=>{
            let template=`
            <div class="descripcion card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="${producto.img}" class="img_carrito img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="name_carrito card-title">${producto.name}</h5>
            <p class="precio_carrito card-text">${producto.price}</p>
            <a href="#" id="eliminarDelCarrito" class="btn_eliminar btn-primary" >eliminar del carrito</a>
            <p class="card-text"><small class="text-muted"></small></p>
            </div>
            </div>
            </div>
            </div>
            `
            document.getElementById('guardado').innerHTML += template
        })
        let total=prendas.reduce((i,producto)=>{
            return i + producto.price
        },0)
        let template=`
        <div>
        <div>
        <h3 class="total prendas" >total de productos:${prendas.length}</h3>
        <div class="total" >el total es :${total}</div>
        <div>
        `
        document.getElementById("total").innerHTML +=template
    }    
}

const carrito=JSON.parse(localStorage.getItem('carrito'))

vender()
const eliminar= document.getElementById('eliminarDelCarrito')


