const introheader = document.getElementById("introheader");

//Change background depending on time - Images are from pixabay.com
var now = new Date();
var hours = now.getHours();
var ft = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
});
console.log(now);
if (20 <= hours && hours < 23.99) {
   introheader.style.background = "url(/images/header/nordlys.jpg)";
   contactme.style.background = "url(/images/header/nordlys.jpg)";
   somecontact.style.color = "white";
}
else if (0 <= hours && hours < 5) {
    introheader.style.background = "url(/images/header/nordlys.jpg)";
    contactme.style.background = "url(/images/header/nordlys.jpg)";
    somecontact.style.color = "white";
 }  else if (5 <= hours && hours < 8){
    introheader.style.background = "url(/images/header/solopgang.jpg)";
    contactme.style.background = "url(/images/header/solopgang.jpg)";
    somecontact.style.color = "white";
} else if (8 <= hours && hours < 12) {
introheader.style.background = "url(/images/header/bjerg.jpg)";
contactme.style.background = "url(/images/header/bjerg.jpg)";
} else if (12 <= hours && hours < 17) {
    introheader.style.background = "url(/images/header/glacier.jpg)";
    contactme.style.background = "url(/images/header/glacier.jpg)";
    contactheader1.style.color = "white";
    contactheader2.style.color = "white";
    somecontact.style.color = "white";
} else if (17 <= hours && hours < 20){
    introheader.style.background = "url(/images/header/kirkjufell.jpg)";
    contactme.style.background = "url(/images/header/kirkjufell.jpg)";
    scrolldown.style.color = "white";
    somecontact.style.color = "white";
}