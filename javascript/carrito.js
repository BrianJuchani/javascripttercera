const carrito=JSON.parse(localStorage.getItem('prendas'))


function vender(){
    if(localStorage.getItem('prendas')!==null){
        carrito.forEach((producto) =>{
            //por cada vuelta
            const template=document.createElement("div")
            template.innerHTML=`
            <div class="descripcion card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
            <img src="${producto.img}" class="img_carrito img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="name_carrito card-title">${producto.name}</h5>
            <p class="precio_carrito card-text">${producto.price}</p>
            <p class="btnEliminar">${producto.id}</p>
            <button id="eliminarDelCarrito-${producto.id}" class="btn_eliminar btn-primary" value="${producto.id}" >eliminar del carrito</button>
            <p class="card-text"><small class="text-muted"></small></p>
            </div>
            </div>
            </div>
            </div>
            `
             //contenedor guardado
            document.getElementById('guardado').appendChild(template)


            const btn_eliminar=document.getElementById(`eliminarDelCarrito-${producto.id}`)
            btn_eliminar.addEventListener("click",()=>eliminar(producto.id))

        })
        let total=carrito.reduce((i,producto)=>{
            return i + producto.price
        },0)
        let text=`
        <div>
        <div>
        <h3 class="total prendas" >total de productos:${carrito.length}</h3>
        <div class="total" >el total es :${total}</div>
        <div>
        `
        document.getElementById("total").innerHTML+=text

    }

    
    
}
vender()

//eliminar los productos del localstorage

function eliminar(id){
    const producto=carrito.find ((producto)=>producto.id==id);
    carrito.splice(carrito.indexOf(producto),1);
    localStorage.setItem('prendas',JSON.stringify(carrito))
    verCarrito()
}


//ver carrito cuando eliminas los productos de manera visual


function verCarrito(){
    const carritoContainer=document.getElementById("guardado");
    carritoContainer.innerHTML="";
    document.getElementById("total").innerHTML="";
    vender()
}
verCarrito()





//comprar lo del carrito


function comprarTodoDelCarrito(){
    if(carrito.forEach = 0){
        alert('no hay nada en el carrito')
    }else{
        const carritoContainer=document.getElementById('guardado')
        carritoContainer.innerHTML='';
        carrito.length=0;
        localStorage.removeItem('prendas');
        document.getElementById("total").innerHTML="";
        alert('su compra fue un exito')   
        vender();
    }



    
}

const comprarTodo=document.getElementById('ComprarTodo')
comprarTodo.addEventListener('click',comprarTodoDelCarrito)



















