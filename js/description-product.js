const $heart = document.querySelector(".-heart");
const $firstStar = document.querySelectorAll(".star");
const $stars = document.querySelectorAll(".star");


$heart.addEventListener("click", handleClickHeart);

$stars[0].addEventListener("click", handleClickStar);

function handleClickHeart() {
    $heart.classList.toggle("-active");
      
}

function handleClickStar() {
    $stars[0].classList.toggle("-active");
}