const heading = document.querySelector('#mainHeading')

const agileNJira = document.querySelector('#notTaught');
const parent = document.querySelector('#stackList')
parent.removeChild(agileNJira);

heading.addEventListener('click', () => {
    alert('Hello you clicked me')
;})
function show(){
    alert('you clicked me');
}
const ListedEle = document.querySelector('#para')
console.log(ListedEle);
heading.addEventListener('mouseover', () => {
    heading.style.color = 'green'
})
heading.addEventListener('mouseout', () => {
    heading.style.color = 'orange'
})

const techStack = document.getElementById('myStack')
techStack.style.color = 'red'



