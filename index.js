// _____________________________________________CARROUSSEL

document.body.onload = function () {
    nbr = 6;
    p = 0;
    container = document.getElementById("container");
    container.style.width = 300 * nbr + "px";
    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('image/carrou" + i + ".jpg')";
        container.appendChild(div);
    }
};

g.onclick = function () {
    if (p > -nbr + 1) p--;
    container.style.transform = "translate(" + p * 300 + "px)";
    container.style.transition = "all 0.5s ease";
    afficherMasquer();
};
d.onclick = function () {
    if (p < 0) p++;
    container.style.transform = "translate(" + p * 300 + "px)";
    container.style.transition = "all 0.5s ease";
    afficherMasquer();
};

// _____________________________________________defilement article 2
window.addEventListener("scroll", () => {
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    // console.log(scrollValue);
    if (scrollValue > 0.3) {
        console.log("battleroyale");
        battleroyale.style.opacity = 1;
        battleroyale.style.transform = "none";
        sauverlemonde.style.opacity = 1;
        sauverlemonde.style.transform = "none";
        creatif.style.opacity = 1;
        creatif.style.transform = "none";
    } else {
        battleroyale.style.opacity = 0;
        battleroyale.style.transform = "translateX(-1000px)";
        sauverlemonde.style.opacity = 0;
        sauverlemonde.style.transform = "translateX(1000px)";
        creatif.style.opacity = 0;
        creatif.style.transform = "translateX(-1000px)";
    }
});

// __________________________________________________________

// _____________________________________________3traits

const btn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#side-bar");
console.log(sidebar);
// pour un toggle il faut injecter une class dans le css pour ici .active et ne pas oublier de faire attention aux priorités
btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

content.addEventListener("click", () => {
    sidebar.classList.remove("active");
});
