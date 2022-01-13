// use querySelectorAll to put all '.panel' into NodeList
const panels = document.querySelectorAll('.panel');
// loop through NodeList, on click event, add active class to panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}