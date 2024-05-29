menuLinks = [
    {text: "about", href: "#"},
    {text: "contact", href: "#"}
]

const subCtn1 = document.getElementById("sub-ctn1")
console.log(subCtn1)

const videoCtn = document.querySelector("#sub-ctn1 .video-ctn")
console.log(videoCtn)

let video = document.createElement('video');
console.log(video)
videoCtn.append(video)
video.setAttribute('id', 'galapagos-video');
const source = document.createElement('source');
const path = `island.mp4`
source.setAttribute('src', path);
source.setAttribute('type', 'video/mp4');
video.append(source);

// let nav = document.querySelector("nav")
// console.log(menu)
let nav = document.querySelector("nav")

function getLinks(arr){
    arr.forEach(aElem =>{
        let link = document.createElement("a")
        link.textContent = aElem.text;
        link.setAttribute("href", aElem.href)
        nav.append(link)
    })
}

getLinks(menuLinks)


nav.classList.add('flex-between')

let subCtn2 = document.querySelector("#sub-ctn2 #cardsContainer")
subCtn2.classList.add("cardsCtn")


const cards = [
    {text: "lorum ........", imgSrc: "img/bird.jpg"},
    {text: "lorum ........", imgSrc: "img/iguana.jpg"},
    {text: "lorum ........", imgSrc: "img/turtle.jpg"},
];


for(let i = 0; i < cards.length; i++){
    let card = document.createElement("div")
    card.classList.add("card-ctn")
    let parag = document.createElement("p")
    let image = document.createElement("img")

    image.setAttribute("src", cards[i].imgSrc)
    image.setAttribute("width", "100%")
    // image.setAttribute("heigth", "70%")
    card.append(parag)
    card.append(image)
    subCtn2.append(card)
}
console.log(subCtn2)


