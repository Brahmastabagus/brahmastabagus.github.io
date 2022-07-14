document.querySelector('.second-button').addEventListener('click', function () {

    document.querySelector('.animated-icon2').classList.toggle('open');
});

// Modal
let modal = document.getElementById("myModal");

let imgs = document.querySelectorAll(".card .myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
imgs.forEach(img => {
    img.addEventListener("click", () => {
        console.log(img)
        modal.style.display = "block";
        let src = img.getElementsByTagName("img")[0].src;
        let alt = img.getElementsByTagName("img")[0].alt;
        console.log(alt)
        modalImg.src = src;
        captionText.innerHTML = alt;
    })
});

let span = document.getElementsByClassName("close")[0];

span.addEventListener("click", () => {
    modal.style.display = "none";
})