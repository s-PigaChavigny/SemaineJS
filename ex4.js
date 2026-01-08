// 🎠8. Interaction avec des images ⭐️⭐️: Carrousel d'images : Navigation entre images avec flèches, Filtre de galerie : Boutons pour filtrer des images par catégorie
//📰 4. Mini page interactive: likes / boutons

const avant = document.querySelector("#avant");
const apres = document.querySelector("#apres");
const main = document.querySelector("#display");
const image = document.querySelectorAll(".image");
const like = document.querySelector("#like");
const pair = document.querySelector("#pair");
const impair = document.querySelector("#impair");
const tous = document.querySelector("#tous");
const liker = document.querySelector("#liker");
const imgPair = document.querySelectorAll(".pair");
const imgImpair = document.querySelectorAll(".impair");

imgCompt = 0;
let likeImg = Array(image.length).fill(false);

avant.addEventListener("click", function() {
    if (imgCompt == 0) {
        imgCompt=image.length-1;
    } else{
        imgCompt= imgCompt-1;
    }
    main.src = image[imgCompt].src;
    if (likeImg[imgCompt]== true && like.classList.contains ("on")==false) {
        like.classList.toggle("on");
    } else if (likeImg[imgCompt]== false && like.classList.contains ("on")==true){
        like.classList.toggle("on");
    }
    console.log(imgCompt , likeImg[imgCompt]);
});

apres.addEventListener("click", function() {
    if (imgCompt == image.length-1) {
        imgCompt=0;
    } else{
        imgCompt= imgCompt+1;
    }
    main.src = image[imgCompt].src;
    if (likeImg[imgCompt]== true && like.classList.contains ("on")==false) {
        like.classList.toggle("on");
    } else if (likeImg[imgCompt]== false && like.classList.contains ("on")==true){
        like.classList.toggle("on");
    }
    console.log(imgCompt , likeImg[imgCompt]);
});

like.addEventListener("click", function() {
    if (likeImg[imgCompt]== false && like.classList.contains ("on")==false) {
        like.classList.toggle("on");
        likeImg[imgCompt]= true;
    } else if (likeImg[imgCompt]== true && like.classList.contains ("on")==true){
        like.classList.toggle("on");
        likeImg[imgCompt]= false;
    }
    if (liker.classList.contains ("on")) {
        fonctionLike();
    }
    console.log(imgCompt , likeImg[imgCompt]);
});

pair.addEventListener("click", function() {
    if (liker.classList.contains ("on")) {
        liker.classList.toggle("on");
    }
    if (impair.classList.contains ("on")) {
        impair.classList.toggle("on");
    }
    if (tous.classList.contains ("on")) {
        tous.classList.toggle("on");
    }
    if (pair.classList.contains ("on")==false) {
        pair.classList.toggle("on");
    }
    imgImpair.forEach(function(img) {
        img.style.display = "none";
    });
    imgPair.forEach(function(img) {
        img.style.display = "inline-block";
    });
});

impair.addEventListener("click", function() {
    if (pair.classList.contains ("on")) {
        pair.classList.toggle("on");
    }
    if (liker.classList.contains ("on")) {
        liker.classList.toggle("on");
    }
    if (tous.classList.contains ("on")) {
        tous.classList.toggle("on");
    }
    if (impair.classList.contains ("on")==false) {
        impair.classList.toggle("on");
    }
    imgPair.forEach(function(img) {
        img.style.display = "none";
    });
    imgImpair.forEach(function(img) {
        img.style.display = "inline-block";
    });
});

tous.addEventListener("click", function() {
    if (pair.classList.contains ("on")) {
        pair.classList.toggle("on");
    }
    if (impair.classList.contains ("on")) {
        impair.classList.toggle("on");
    }
    if (liker.classList.contains ("on")) {
        liker.classList.toggle("on");
    }
    if ( tous.classList.contains ("on")==false) {
        tous.classList.toggle("on");
    }
    image.forEach(function(img) {
        img.style.display = "inline-block";
    });
});

function fonctionLike() {
    if (pair.classList.contains ("on")) {
        pair.classList.toggle("on");
    }
    if (impair.classList.contains ("on")) {
        impair.classList.toggle("on");
    }
    if (tous.classList.contains ("on")) {
        tous.classList.toggle("on");
    }
    if (liker.classList.contains ("on")==false) {
        liker.classList.toggle("on");
    }
    image.forEach(function(img, index) {
        if (likeImg[index]== false) {
            img.style.display = "none";
        } else {
            img.style.display = "inline-block";
        }
    })
}

liker.addEventListener("click", function() {
    fonctionLike();
});