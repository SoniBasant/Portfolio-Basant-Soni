
const controlBtn = document.querySelectorAll(".control");
const activePage = document.querySelectorAll(".section");
const toggle = document.querySelector(".theme-btn");


controlBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        // navigation button functionality
        // remove style from all button
        controlBtn.forEach(btn => {
            btn.classList.remove('active-btn');
        });
        // add style to clicked button
        btn.classList.add('active-btn');

        // section page functionality
        // remove style from all sections
        activePage.forEach((section) => {
            section.classList.remove('active');
        });
        // add style to section same as clicked button
        const id = e.target.dataset.id;
        const element = document.getElementById(id);
        element.classList.add('active');
    });
});


// For theme change

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
})
