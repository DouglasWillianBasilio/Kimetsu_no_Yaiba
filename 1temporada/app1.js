function abrirmenu() {
    let BarraMenuAberto = document.getElementById ('barra-menu')

    if(BarraMenuAberto.style.width == '0px') {
        BarraMenuAberto.style.width = '450px'
    } else{
        BarraMenuAberto.style.width = '0px'
    }
    if(btns.style.display == 'block' ){
        btns.style.display = 'none' 
    } else{
            btns.style.display = 'block' 
        }
    }
    




