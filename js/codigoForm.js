
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit",validarDatos);

//evento de la entrega del pedido
document.getElementById("envioP").addEventListener("change",modoEntrega);
document.getElementById("retiro").addEventListener("change",modoEntrega);
  
function modoEntrega(e)
{
    var txtDireccion = document.getElementById("domicilio");
    txtDireccion.value = "";
    if (document.getElementById("envioP").checked)
    {
        txtDireccion.removeAttribute("disabled");
        // txtDireccion.setAttribute("required", "true");
    } else {
        txtDireccion.setAttribute("disabled", "disabled");
        // txtDireccion.removeAttribute("required");
    }
}

//validar
function validarDatos(e){

   e.preventDefault();

   if (!validarNombre())
   {
       alert("Tiene que escribir su nombre correctamente.");
       formulario.nombreCompleto.focus();
       return 0;
   }
  
   if (!validarCorreo())
   {
        alert("Escriba correctamente el mail")
        formulario.correo.focus()
        return 0
   }

   if (!validarTelefono())
   {
       alert("Escriba correctamente su numero de contacto.")
       formulario.telefono.focus();
       return 0;
   }

   if(!document.querySelector('input[name="entrega"]:checked')) 
   {
       alert('Debe ingresar el modo de entrega');
       return false;
   }

   if(!validarDomicilio())
    {
       return false;
    }
   

   if (!validarCombos())
    {    
       return false;
    }

   console.log("Pedido enviado correctamente");
   limpiarCampos();
   alert("Pedido enviado correctamente");
}



//funciones de validacion
function validarNombre() 
{
    const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    console.log(regexNombre.test(formulario.nombreCompleto.value));
    return regexNombre.test(formulario.nombreCompleto.value);    
}

function validarTelefono() 
{ 
   const regexTelefono = /^\d{7,14}$/
   console.log(regexTelefono.test(formulario.telefono.value));
   return regexTelefono.test(formulario.telefono.value);
}

function validarCorreo() 
{ 
    const regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log(regexCorreo.test(formulario.correo.value))
    return regexCorreo.test(formulario.correo.value)
}


function validarDomicilio() 
{ 
    if(document.getElementById('envioP').checked === true) 
    {
        if (formulario.domicilio.value === "") 
        {
            alert("Escriba su domicilio para el envio.");
            formulario.domicilio.focus();
            return false;
        }
        const regexDomicilio = /^[a-zA-Z0-9\s,.]+$/
        console.log(regexDomicilio.test(formulario.domicilio.value));
        if (!regexDomicilio.test(formulario.domicilio.value))
        {
            alert("No se admiten caracteres especiales en el domicilio.");
            return false;
        } 
    }
    return true
}

function validarCombos()
{
    var select = document.forms["formulario"]["combos"].selectedIndex;
    if (select == null || select == 0) 
    {
       alert("Debe seleccionar un combo");
       return false;
    } 

    return true;
}

// limpiar el formulario
function limpiarCampos()
{           
    formulario.nombreCompleto.value = "";
    formulario.telefono.value = "";
    formulario.correo.value = "";
    //formulario.entrega.value = "";
    formulario.domicilio.value = "";
    formulario.combos.selectedIndex = 0;
    formulario.comentario.value = "";
}
 
        
