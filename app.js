import {cards} from "./arrayOfAnimals.js"

//Setting NavBar
const menuLinks = [
    {text: "About", href: "#sub-ctn2"},
    {text: "Contact", href: "#sub-ctn3"}
]

let navBar = document.querySelector('nav')
navBar.classList.add('flex-between')
navBar.style.background = 'var(--nav-ctn)'
let navLinks = document.querySelector("nav .menu-links")
let span = document.getElementById('logoImage')
let logoImg = document.createElement('img')
span.appendChild(logoImg)
logoImg.setAttribute("src",'img/logo.jpg')
function getLinks(arr){
    arr.forEach(aElem =>{
        let link = document.createElement("a")
        link.textContent = aElem.text;
        link.setAttribute("href", aElem.href)
        navLinks.append(link)
    })
}

navLinks.classList.add('flex-between')

//First section
const subCtn1 = document.getElementById("sub-ctn1")
const videoCtn = document.querySelector("#sub-ctn1 .video-ctn")
let video = document.createElement('video');


videoCtn.append(video)
video.setAttribute('id', 'galapagos-video');
video.setAttribute('width', '100%')
const source = document.createElement('source');
const path = `img/island.mp4`
source.setAttribute('src', path);
source.setAttribute('type', 'video/mp4');
source.setAttribute('width', '500px');
video.autoplay = true;
video.muted = true;
video.append(source);

getLinks(menuLinks)



//Second section
let subCtn2 = document.querySelector("#sub-ctn2 #cardsContainer")
subCtn2.classList.add("cardsCtn")



function getCards(cards){
    subCtn2.innerHTML = "";
    const maxCards = 3;
    for(let i = 0; i < maxCards; i++){
        let title = document.createElement('h3')
            title.innerText = cards[i].title;
        let card = document.createElement("div")
            card.classList.add("card-ctn")
        let parag = document.createElement("p")
            parag.textContent = cards[i].text
        let image = document.createElement("img")
        let button = document.createElement("button")
            button.textContent = "Know More"
            image.setAttribute("src", cards[i].imgSrc)
            card.append(title)
            card.append(image)
            // card.append(button)
            subCtn2.append(card)
            card.append(parag)
            // button.classList.add("knowMoreBtn")
    }
}


const getMoreBtn = document.getElementById("getMore")
console.log(getMoreBtn)

getMoreBtn.addEventListener('click', (e)=>{
    subCtn2.innerHTML = "";
    const newCards = [];
    const maxCards = 3;

    for(let i = 0; i < maxCards; i++){
        let randomIndex = Math.floor(Math.random()*cards.length)
        let newCard = cards[randomIndex]
        newCards.push(newCard)
    }

    getCards(newCards);
})


getCards(cards)
// console.log(subCtn2)
let knowMoreBtns = document.querySelectorAll('.card-ctn button');



//Third section
const subCtn3 = document.getElementById("sub-ctn3")
// console.log(subCtn3)
subCtn3.classList.add('centerForm')


//FORM VERIFICATION
let submitBtn = document.querySelector('form button[type="submit"]');
const errorMessg = document.getElementById('error')
console.log(errorMessg)
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let inpFields = document.querySelectorAll('form input[type="text"]');
    let isValid = true;
    let messagesErrors =[];
    
        for(let i = 0; i < inpFields.length; i++){
            if(inpFields[i].value === "" || inpFields === null){
                isValid = false;
            }
        }
        if(!isValid){
            messagesErrors.push("ERROR: Please fill in all fields")
            errorMessg.innerText = messagesErrors;
            errorMessg.style.background = 'red'

        }else{
            window.alert("Form submitted sucessfully")
            errorMessg.display = 'none'
        }
})


//Personalize website by using window.prompt()
let nameFromUser = window.prompt('Enter your name');
document.getElementById('name').innerText = nameFromUser;


document.querySelector('footer').style.background = 'var(--nav-ctn)'