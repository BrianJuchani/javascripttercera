

let datos=[];


const Registrarte=document.getElementById('Registrarte');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const Gmail = document.getElementById('Gmail');
const edad = document.getElementById('edad');
document.getElementById('Enviarregistro').addEventListener('click',()=>{
    vereficar()
})
const button_disable=document.getElementById('button_disable');


Registrarte.addEventListener('submit',(event)=>{
    event.preventDefault()
})


function vereficar(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const Gmail = document.getElementById('Gmail').value;
    const edad = document.getElementById('edad').value;


    const info={
        nombre,
        apellido,
        Gmail,
        edad
    }
    if(nombre===""||apellido===""||Gmail===""||edad==0){
        alert('completa los espacios vacios');
    }else{
    datos.push(info)
    localStorage.setItem('informacion del usuario',JSON.stringify(datos))
    button_disable.classList.remove('disable')
    }
}
console.log(datos)


