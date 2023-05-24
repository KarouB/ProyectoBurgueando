var ar = [11149, 17241, 17250, 17256, 178340, 17824,13940, 17185, 12890, 14133] 

let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' 

for (let i = 0; i< ar.length; i++)
{
    ConsultarBebida(ar[i]);
}

async function ConsultarBebida(bebida){
await fetch(url + bebida)
    .then(response => response.json()) 
    .then(data => mostrarData(data))
    .catch(error => console.log("Ocurrió un error", error)) 
}

    
const mostrarData = (data) => {
    console.log(data)
    let body = document.getElementById("data").innerHTML
    if (data.drinks == null) {
        return;
    }

    for (let i = 0; i<data.drinks.length; i++){
        var strImg = ""
        if (data.drinks[i].strImageSource != null) 
        {
            strImg = "<img src="+data.drinks[i].strImageSource+" width='500px'/>"
        } else if (data.drinks[i].strDrinkThumb != null){
            strImg = "<img src='"+data.drinks[i].strDrinkThumb+"' width='500px'/>"
        }
        body += `<div class="coctel">
                    ${strImg}
                    <div class="coctel-info">
                        <h2 class="nombre">${data.drinks[i].strDrink}</h2>
                        <p class="alcoholic">${data.drinks[i].strAlcoholic}</p>
                    </div>        
                </div>`
    }
    
    document.getElementById("data").innerHTML = body
}


