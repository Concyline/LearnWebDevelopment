

function toggleAnimation() {

    const links = document.querySelectorAll("#menu a");
    const barra = document.querySelector('.barra_lateral');
    const content = document.querySelector('.content');
    const pin = document.querySelector('.pin');
    const itensMenu = document.querySelectorAll('#menu li');


    if (barra.classList.contains('movimentacao_barra_lateral_l')) {

        barra.classList.remove('movimentacao_barra_lateral_l');
        barra.classList.add('movimentacao_barra_lateral_r');

    
        for (var i = 0; i < links.length; i++) {
            links[i].style.display = "block";
        }

        
        for (var i = 0; i < itensMenu.length; i++) {
            itensMenu[i].style.justifyContent = 'left'
            itensMenu[i].style.marginLeft = '0px'

            
        }

        pin.style.marginRight = '40px'

        

    } else {
        barra.classList.remove('movimentacao_barra_lateral_r');
        barra.classList.add('movimentacao_barra_lateral_l');

       
   

        for (var i = 0; i < links.length; i++) {
            links[i].style.display = "none";
        }

        
        for (var i = 0; i < itensMenu.length; i++) {
            itensMenu[i].style.justifyContent = 'center'
            itensMenu[i].style.marginLeft = '10px'
        }

        pin.style.marginRight = '28px'
        
    }

    if (content.classList.contains('movimentacao_content_l ')) {
        content.classList.remove('movimentacao_content_l');
        content.classList.add('movimentacao_content_r');
    } else {
        content.classList.remove('movimentacao_content_r');
        content.classList.add('movimentacao_content_l');
    }

}