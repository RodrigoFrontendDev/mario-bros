
//Inicio de Abrir y cerrar menu hamburguesa
const btnMenu = document.getElementById ('btn--menu');
const navegacion = document.getElementById ('navegacion');

btnMenu.addEventListener('click', ()=> {
    if(btnMenu.src.split('/')[4]==='abrir-menu.svg'){
        btnMenu.src = 'img/cerrar-menu.svg';
    }else {
        btnMenu.src = 'img/abrir-menu.svg';
    }
    navegacion.classList.toggle('navegacion--dinamico');
});

//Fin de Abrir y cerrar menu hamburguesa

//Inicio Seleccion de personaje

const imagenes = document.querySelectorAll('.personaje--seleccionar');
const imagenActual = document.getElementById('imagen--actual');

imagenes.forEach(selector=>{
    selector.addEventListener('click', ()=>{
        imagenActual.src = selector.src.replace('png', 'webp');
    });
});


//Fin de Inicio Seleccion de personaje

