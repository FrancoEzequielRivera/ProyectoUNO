document.addEventListener('DOMContentLoaded', function(){
    botonBlack = document.getElementById('img-black')
    img1 = document.getElementsByClassName('img1')[0]
    img2 = document.getElementsByClassName('img2')[0]
    img3 = document.getElementsByClassName('img3')[0]

    botonBlack.addEventListener('click', function(){
        img1.style.zIndex = '3';
        img2.style.zIndex = '2';
        img3.style.zIndex = '1';
    })
})

document.addEventListener('DOMContentLoaded', function(){
    botonBlue = document.getElementById('img-blue')
    img1 = document.getElementsByClassName('img1')[0]
    img2 = document.getElementsByClassName('img2')[0]
    img3 = document.getElementsByClassName('img3')[0]

    botonBlue.addEventListener('click', function(){
        img1.style.zIndex = '1';
        img2.style.zIndex = '2';
        img3.style.zIndex = '3';
    })
})

document.addEventListener('DOMContentLoaded', function(){
    botonWhite = document.getElementById('img-white')
    img1 = document.getElementsByClassName('img1')[0]
    img2 = document.getElementsByClassName('img2')[0]
    img3 = document.getElementsByClassName('img3')[0]

    botonWhite.addEventListener('click', function(){
        img1.style.zIndex = '1';
        img2.style.zIndex = '3';
        img3.style.zIndex = '2';
    })
})