let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img'),
    max = images.length;
/* document.querySelectorAll -  devolve um array of images */

function nextImage() {
    /* console.log(images) */
    /* incremento */
    /* currentImageIndex = currentImageIndex + 1 */
    // images[currentImageIndex].classList.remove("selected", "animate__animated", "animate__fadeInLeft");
    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++

    if(currentImageIndex >= max) 
        currentImageIndex = 0

        /* images = [0, 1, 2, 3] */
        // images[currentImageIndex].classList.add("selected", "animate__animated", "animate__fadeInLeft");
        images[currentImageIndex].classList.add("selected");


}

function start(){
    setInterval( function() {
        /* trocar de imagem */
        nextImage()
    }, time)
}

window.addEventListener('load', start)