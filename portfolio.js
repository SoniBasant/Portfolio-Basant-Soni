const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const wholebody = document.querySelector('.main-content');

function sectionNavigation() {
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    // section active
    wholebody.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            // remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

sectionNavigation();


// const controlBtn = document.querySelectorAll(".control");
// // const activeBtn = document.querySelector(".active-btn");
// const activePage = document.querySelector(".section");

// controlBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         // console.log(btn);
//         removeActiveClass();
//         // btn.classList.add('active-btn');
//         btn.classList.add('active-btn');
//         activePage.classList.add('active');
//     });
// })



// function removeActiveClass() {
//     controlBtn.forEach(btn => btn.classList.remove('active-btn'));
    
//     activePage.forEach(page => page.classList.remove('active'));
// }