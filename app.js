class CEmpleado{
    constructor(nombre,anio,salario,direccion){
        this.nombre = nombre
        this.anio = anio
        this.salario = salario
        this.direccion = direccion
    }
    imprimirAnios(fechaAct){
        return fechaAct - parseInt(this.anio); 
    }
    imprimirSegunCalle(){
        return this.direccion.includes("Wall Street");
    }

}

function crearElemento(nuevoEmp,opc){
    let table = document.getElementById("tablaRes");
    let tr = document.createElement("tr");
    let td;
    console.log(opc)
    let arr;
    if(opc == 1){
        arr = [nuevoEmp.nombre,nuevoEmp.anio,nuevoEmp.direccion]
    }else if(opc == 2){
        let fech = new Date()
         arr = [nuevoEmp.nombre,nuevoEmp.imprimirAnios(fech.getFullYear())];
        table = document.getElementById("tablaResAntiguedad")
    }else if(opc == 3){
        arr = [nuevoEmp.nombre,nuevoEmp.direccion];
        table = document.getElementById("tablaResDireccion")
    }
    for(let i = 0; i<arr.length;i++){
        td = document.createElement("td");
        td.innerHTML = arr[i];
        tr.appendChild(td);
    }
    table.appendChild(tr)
}   
function filtroSegunDireccion(arrEmpl) {
    for (let i = 0; i < arrEmpl.length; i++) {
        if(arrEmpl[i].imprimirSegunCalle()){
            crearElemento(arrEmpl[i],3);
        }
    }
  }

let arrEmpl = [];
document.querySelector("button").addEventListener("click",()=>{
    event.preventDefault();
    let nombre = document.getElementById("nombre");
    let anio = document.getElementById("anio");
    let salario = document.getElementById("salario");
    let direccion = document.getElementById("direccion");

    let nuevoEmp = new CEmpleado(nombre.value,anio.value,salario.value,direccion.value);
    alert("EMPLEADO CREADO");
    arrEmpl.push(nuevoEmp);
    crearElemento(nuevoEmp,1)
    crearElemento(nuevoEmp,2)
    resetForm(nombre,anio,salario,direccion)
    filtroSegunDireccion(arrEmpl);
});
function resetForm(nombre,anio,salario,direccion){
    nombre.value = "";
    anio.value = "";
    salario.value = "";
    direccion.value = "";
}

