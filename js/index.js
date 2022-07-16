const scrollElement = document.querySelector(".scroll-top");

const scrollTop = () => {
    firstsection.scrollIntoView({ behaviour: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);