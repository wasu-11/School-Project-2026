const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

let current = 0;

function showImage(index){
    mainImage.src = thumbs[index].src;

    thumbs.forEach(function(img){
        img.classList.remove("active");
    });

    thumbs[index].classList.add("active");
}

thumbs.forEach(function(img, index){
    img.addEventListener("click", function(){
        current = index;
        showImage(current);
    });
});

setInterval(function(){
    current++;

    if(current >= thumbs.length){
        current = 0;
    }

    showImage(current);
}, 3000);