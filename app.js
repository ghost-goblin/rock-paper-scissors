// Button Event Listeners
const rock = document.querySelector('#rock');
rock.addEventListener('click', (e) => {
    console.log(e,target);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    alert('Hello World!');
});