const $heart = document.querySelector(".-heart");
const $firstStar = document.querySelector(".star");


$heart.addEventListener("click", handleClickHeart);
$firstStar.addEventListener("click", handleClickStar);

function handleClickHeart() {
    $heart.classList.toggle("-active");
      
}

function handleClickStar() {
    $firstStar.classList.toggle("-active");
}