let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let cantidad = document.getElementById("cantidad")
let categoria = document.getElementById("categoria")
let total = document.getElementById("total")
let borrar = document.getElementById("borrar")
let resumen = document.getElementById("resumen")
let form = document.getElementById("form")
let resumenTotal;

//const cssObj = window.getComputedStyle(email, null);
//let colorBorderEmail = cssObj.getPropertyValue("border-color");

form.addEventListener("submit", calculoResumen)
borrar.addEventListener("click", borrarForm)

function calculoResumen(event) {
    event.preventDefault();
    form.removeAttribute("novalidate")
    form.classList.add("needs-validation")
    form.classList.add("was-validated")
    
    if(cantidad.value != 0 && categoria.value != "" && nombre.value != "" && apellido.value != "" && email.value != "") {
        switch (categoria.value) {
            case "sinCategoria":
                resumenTotal = cantidad.value*200
                break;
            case "estudiante":
                resumenTotal = cantidad.value*200 - cantidad.value*200*0.8
                break;
            case "trainee":
                resumenTotal = cantidad.value*200 - cantidad.value*200*0.5
                break;
            case "junior":
                resumenTotal = cantidad.value*200 - cantidad.value*200*0.15
                break;
            default:
                break;
        }

        total.innerHTML = "Total a Pagar: $" + resumenTotal
    }
}

function borrarForm() {
    form.setAttribute("novalidate","")
    form.classList.remove("needs-validation")
    form.classList.remove("was-validated")
    nombre.value = ""
    apellido.value = ""
    email.value = ""
    cantidad.value = ""
    categoria.value = ""
    total.innerHTML = "Total a Pagar: $"
}