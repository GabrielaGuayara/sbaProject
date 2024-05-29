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

let menu = document.querySelector("nav .menu")
console.log(menu)

function getLinks(arr){
    arr.forEach(aElem =>{
        let link = document.createElement("a")
        link.textContent = aElem.text;
        link.setAttribute("href", aElem.href)
        menu.append(link)
    })
}

getLinks(menuLinks)

let nav = document.querySelector("nav")
nav.classList.add('flex-between')