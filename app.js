//Setting NavBar
menuLinks = [
    {text: "About", href: "#sub-ctn2"},
    {text: "Contact", href: "#sub-ctn3"}
]

let navBar = document.querySelector('nav')
navBar.classList.add('flex-between')
let navLinks = document.querySelector("nav .menu-links")
let span = document.querySelector('span')
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
// subCtn1.setAttribute('id', '#')
// console.log(subCtn1)

const videoCtn = document.querySelector("#sub-ctn1 .video-ctn")
// console.log(videoCtn)

let video = document.createElement('video');
// console.log(video)
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


const cards = [
    {text: "lorum ........", src: "img/bird.jpg"},
    {text: "lorum ........", src: "img/iguana.jpg"},
    {text: "lorum ........", src: "img/turtle.jpg"},
    {text: "lorum ........", src: "img/redbird.jpg"},
    {text: "lorum ........", src: "img/tommaso.jpg"},
];

function getCards(cards){
    subCtn2.innerHTML = "";
    const maxCards = 3;
    for(let i = 0; i < maxCards; i++){
        let card = document.createElement("div")
            card.classList.add("card-ctn")
        let parag = document.createElement("p")
            parag.textContent = cards[i].text
        let image = document.createElement("img")
        let button = document.createElement("button")
            button.textContent = "Know More"
            image.setAttribute("src", cards[i].src)
            image.setAttribute("width", "100%")
            image.setAttribute("height", "80%")
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