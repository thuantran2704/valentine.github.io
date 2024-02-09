const answers = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Please????",
    "Don't believe in second chances?",
    "Why are you acoustic?",
    "Fat bitch",
    "I am not going to ask again!",
    "Did you fall asleep on the freaking mouse???",
    "Ur just a level 3 gyatt anyways",
    "Oh cmon habibi",
    "Please give me a chance!",
    "Fat ass",
    "No wonder your dad left"
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "./public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

function cheer(){
    const path = "./public/images/"
    let gif4use = "";
    const gifs = ["yes.gif", "iu.gif", "em_be.gif", "cunglam.gif", "thuongm.gif"]
    const random = Math.floor(Math.random() * gifs.length);
    gif4use += gifs[random]
    let banner = document.getElementById('banner');
    banner.src = path + gif4use;
    refreshBanner();
}

yes_button.addEventListener('click', () => {
    // change banner gif path
    
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
    setInterval(cheer,1500);
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}