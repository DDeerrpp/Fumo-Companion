const cirnoChats = [
    "I'm the smartest!",
    "What are you doing with your life?",
    "I think I got a frostbite.",
    "I'M MELTING!",
    "Help Help Help Help Help Help Help ",
    "Tip: Staying in a steam room for 10 hours will increase your years of life!",
    "I don't know what to do anymore...",
    "My schizophrenia is acting up.",
    "I don't think being on your pc is helping you do any better.",
    "Look at you! Bahahahaha.",
    "GET ME OUT GET ME OUT GET ME OUT GET ME OUT",
    "August 12, 2036. August 12, 2036. August 12, 2036. August 12, 2036. August 12, 2036.",
    "Check behind you...",
    "Check your walls :)"
]

let chatBoxText = document.querySelector(".chat-container span p");
let chatBox = document.querySelector(".chat-container");
let prevText = '';
setInterval(function() {
    let text = cirnoChats[Math.floor(Math.random() * cirnoChats.length)];
    
    while(text == prevText) text = cirnoChats[Math.floor(Math.random() * cirnoChats.length)];
    prevText = text;
    chatBoxText.innerText = text;
    chatBox.style.opacity = '1';
    const closeChatbox = setTimeout(() => {
        chatBox.style.opacity = '0';
    }, 10000); //time on how long cirno will shut up
}, Math.floor(Math.random() * (17000 - 10000) + 10000)) //time on how long cirno will talk again
