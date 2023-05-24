(function(){
    
    const sliders = [...document.querySelectorAll('.nosotros_body')];
    const botonSiguiente = document.querySelector('#siguiente');
    const botonAnterior = document.querySelector('#anterior');
    let value;   

    botonSiguiente.addEventListener('click', ()=>{
        cambiarPosicion(1);
    });

    botonAnterior.addEventListener('click', ()=>{
        cambiarPosicion(-1);
    });

    const cambiarPosicion = (add)=>{
        const currentNosotros = document.querySelector('.nosotros_body--show').dataset.id;
        value = Number(currentNosotros);
        value+= add;


        sliders[Number(currentNosotros)-1].classList.remove('nosotros_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('nosotros_body--show');

    }

})();