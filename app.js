//Setting NavBar
menuLinks = [
    {text: "about", href: "#"},
    {text: "contact", href: "#"}
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
console.log(subCtn1)

const videoCtn = document.querySelector("#sub-ctn1 .video-ctn")
console.log(videoCtn)

let video = document.createElement('video');
console.log(video)
videoCtn.append(video)
video.setAttribute('id', 'galapagos-video');
video.setAttribute('width', '100%')
const source = document.createElement('source');
const path = `img/island.mp4`
source.setAttribute('src', path);
source.setAttribute('type', 'video/mp4');
source.setAttribute('width', '500px');
video.append(source);

getLinks(menuLinks)



//Second section
let subCtn2 = document.querySelector("#sub-ctn2 #cardsContainer")
subCtn2.classList.add("cardsCtn")


const cards = [
    {text: "lorum ........", src: "img/bird.jpg"},
    {text: "lorum ........", src: "img/iguana.jpg"},
    {text: "lorum ........", src: "img/turtle.jpg"},
];

function getCards(cards){
    for(let i = 0; i < cards.length; i++){
        let card = document.createElement("div")
            card.classList.add("card-ctn")
        let parag = document.createElement("p")
        let image = document.createElement("img")
        let button = document.createElement("button")
            button.textContent = "Know More"
            image.setAttribute("src", cards[i].src)
            image.setAttribute("width", "100%")
            image.setAttribute("height", "80%")
            card.append(image)
            card.append(button)
            subCtn2.append(card)
            button.classList.add("knowMoreBtn")
    }
}

getCards(cards)
console.log(subCtn2)

const subCtn3 = document.getElementById("sub-ctn3")
console.log(subCtn3)
subCtn3.classList.add('centerForm')


