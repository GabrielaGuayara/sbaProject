//Import the card array from the arrayOfAnimals file
import {cards} from "./arrayOfAnimals.js"

//Personalize website by using window.prompt()
let nameFromUser = window.prompt('Enter your name');
document.getElementById('name').innerText = nameFromUser;



//Setting NavBar by using an array of links
const menuLinks = [
    {text: "About", href: "#sub-ctn2"},
    {text: "Contact", href: "#sub-ctn3"}
]
let navBar = document.querySelector('nav')
    navBar.classList.add('flex-between')
    navBar.style.background = 'var(--nav-ctn)'

let navLinks = document.querySelector("nav .menu-links")
let span = document.getElementById('logoImage')
    span.appendChild(logoImg)
let logoImg = document.createElement('img')
    logoImg.setAttribute("src",'img/logo.jpg')

//Funtion that takes the array of links and asign them content and href attribute
function getLinks(arr){
    arr.forEach(aElem =>{
        let link = document.createElement("a")
        link.textContent = aElem.text;
        link.setAttribute("href", aElem.href)
        navLinks.append(link)
    })
}

//Added a css class to links
navLinks.classList.add('flex-between')



//FIRST SECTION
const videoCtn = document.querySelector("#sub-ctn1 .video-ctn")

//Creates a video and source tag. Then, sets attributes for the source tag
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

//Calls the funtion tue getlInks funtion
getLinks(menuLinks)



//SECOND SECTION
let subCtn2 = document.querySelector("#sub-ctn2 #cardsContainer")
subCtn2.classList.add("cardsCtn")

//Funtion that takes the array of animals and built the card for the second section
function getCards(cards){
    subCtn2.innerHTML = "";
    const maxCards = 3;
    const useDocFrag = document.createDocumentFragment();
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
            card.appendChild(title)
            card.appendChild(image)
            card.append(parag)
             useDocFrag.appendChild(card)
    }
    subCtn2.append(useDocFrag);
}

//Selects the get more animals buttons from the html and then uses it to get random animals by using an event listener
const getMoreBtn = document.getElementById("getMore")
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

//Call the getCards function that creates cards for the second section
getCards(cards)



//THIRD SECTION
const subCtn3 = document.getElementById("sub-ctn3")
subCtn3.classList.add('centerForm')


//FORM VERIFICATION
//Caches the submit button into a variable called submitBtn
let submitBtn = document.querySelector('form button[type="submit"]');
const errorMessg = document.getElementById('error')

//Using event listener to verify that the user fills all the required fields.
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let inpFields = document.querySelectorAll('form input[type="text"]');
    console.log(inpFields)
    let submitted= true;
    let messagesErrors =[];
    
        //For Loop to iterate the nodelist that contains the name and lastname fields.
        for(let i = 0; i < inpFields.length; i++){
            if(inpFields[i].value === "" || inpFields[i] === null){
                submitted = false;
                messagesErrors.push(`Your ${inpFields[i].name} is required`)
            }
        }
       
        if(!submitted){
            errorMessg.innerText = messagesErrors.join(',');
            errorMessg.style.background = 'red';
        }else{
        window.alert("Form submitted sucessfully")
        errorMessg.innerHTML = ""
        errorMessg.style.display= 'none';
        document.querySelector('form').reset()

        }

    })

//Adding a color to the footer by using customized css
document.querySelector('footer').style.background = 'var(--nav-ctn)'