
function saludar(){
    let respuesta = prompt("hola como estas ")
    if (respuesta == "bien"){
        alert("que bacano")
    }
    else {
        alert("que falla")
    } 
}
for (let i = 0;i<2; i++){
    saludar() 
    saludar()

}
