const users = [
  [
    (user1 = {
      name: "user1",
      lastSeen: "1Jan",
      lastMsg: "Lorem ipsum dolor sit amet.",
    }),
  ],
  [
    (user2 = {
      name: "user2",
      lastSeen: "2Jan",
      lastMsg: "Lorem ipsum dolor sit amet.",
    }),
  ],
  [
    (user1 = {
      name: "user1",
      lastSeen: "1Jan",
      lastMsg: "Lorem ipsum dolor sit amet.",
    }),
  ],
  [
    (user2 = {
      name: "user2",
      lastSeen: "2Jan",
      lastMsg: "Lorem ipsum dolor sit amet.",
    }),
  ],
  [
    (user1 = {
      name: "user1",
      lastSeen: "1Jan",
      lastMsg: "Lorem ipsum dolor sit amet.",
    }),
  ],
  [
    (user2 = {
      name: "user2",
      lastSeen: "2Jan",
      lastMsg: "Lorem ipsum dolor sit amet.",
    }),
  ],
  [
    (user1 = {
      name: "user1",
      lastSeen: "1Jan",
      lastMsg: "Lorem ipsum dolor sit amet.",
    }),
  ],
  [
    (user2 = {
      name: "user2",
      lastSeen: "2Jan",
      lastMsg: "Lorem ipsum dolor sit amet.",
    }),
  ],
];
window.addEventListener("DOMContentLoaded", loadAll);

function setPeople(list) {
  list.map((user) => {
    const div = document.createElement("div");
    div.innerHTML = `<i class="fas fa-user"></i>
    <div class="d-flex flex-column">
       <h6 class="mb-0 col user-name">${user.name}</h6>
       <p class="font-italic mb-0 text-small col">
       ${user.lastMsg}
       </p>
    </div>
    <small class="small font-weight-bold msg">${user.lastSeen}</small>`;
    let classesToAdd = [
      "p-3",
      "d-flex",
      "align-items-center",
      "justify-content-between",
      "border-bottom",
      "chat",
    ];
    div.classList.add(...classesToAdd);

    contacts.append(div);
  });
}

function loadAll() {
  users.map((userlist) => setPeople(userlist));
}

//Variables
var contacts = document.getElementById("contacts");
var messages = document.querySelector(".message-list");
var btn = document.querySelector(".btn-send");
var msgInput = document.getElementById("message-input");
var form = document.getElementById("form");
const customStatus = document.getElementById("status");
var emojiBtn = document.getElementById("emo");

var customEmojiBtn = document.getElementById("emoji-btn");

var customEmojiDiv = document.getElementById("custom-emoji-box");
var peopleList = document.getElementById("people");
var searchPeople = document.getElementById("search");
var searchChats = document.getElementById("search-chat");

searchChats.addEventListener("keyup", function(e){
let term = e.target.value.toLowerCase();
const contactList = document.querySelectorAll(".chat")
contactList.forEach(function(chat){
let username = chat.querySelector(".user-name").textContent.toLowerCase();
let text = chat.querySelector(".text-small").textContent.toLowerCase();
if (username.indexOf(term) === -1 && text.indexOf(term) === -1)
      chat.setAttribute("style", "display : none!important");
    else {
      chat.setAttribute("style", "flex : none!important");
    }
})
})


searchPeople.addEventListener("keyup", function (e) {
  let term = e.target.value.toLowerCase();
  const personList = document.querySelectorAll(".person");
  personList.forEach(function (person) {
    let username = person.querySelector(".username").textContent.toLowerCase();
    let bio = person.querySelector(".bio").textContent.toLowerCase();
    if (username.indexOf(term) === -1 && bio.indexOf(term) === -1)
      person.setAttribute("style", "display : none!important");
    else {
      person.setAttribute("style", "flex : none!important");
    }
  });
});


peopleList.addEventListener("click", function (e) {
  const personCheck = e.target.classList;
  if (
    personCheck.contains("person") ||
    personCheck.contains("user-img") ||
    personCheck.contains("username") ||
    personCheck.contains("bio")
  ) {
    document.querySelector(".shuffle-wrapper").classList.add("d-none");
    document.querySelector(".container").classList.remove("d-none");
  }
});

function showEmojiDiv(e) {
  if (customEmojiDiv.classList.contains("active")) {
    customEmojiDiv.classList.remove("active");
    customEmojiDiv.style.display = "none";
  } else {
    customEmojiDiv.classList.add("active");
    customEmojiDiv.style.display = "flex";
  }
  e.preventDefault();
}
//Emojis
let emojiList = [
  "👍",
  "👌",
  "👏",
  "🙏",
  "🆗",
  "🙂",
  "😀",
  "😃",
  "😉",
  "😊",
  "😋",
  "😌",
  "😏",
  "😐",
  "😑",
  "😒",
  "😓",
  "😂",
  "🤣",
  "😅",
  "😆",
  "😜",
  "😹",
  "🚶",
  "👫",
  "👬",
  "👭",
  "😙",
  "😘",
  "🏠",
  "👆",
  "🖕",
  "👋",
  "👎",
  "👈",
  "👉",
];

function getSelectedEmoji(e) {
  if (e.target.classList.contains("emoji")) {
    const selectedEmoji = e.target.innerText;
    msgInput.value += selectedEmoji;
  }
}

function events() {
  //Button / Enter Key
  btn.addEventListener("click", sendMessage);
  msgInput.addEventListener("keyup", pressKeyboard);
  msgInput.addEventListener("keyup", showTypingText);
  customEmojiBtn.addEventListener("click", showEmojiDiv);
  customEmojiDiv.addEventListener("click", getSelectedEmoji);
}
events();

emojiList.forEach((element) => {
  let emoji = document.createElement("span");
  emoji.value = element;
  emoji.innerHTML = element;
  emoji.classList.add("emoji");
  customEmojiDiv.appendChild(emoji);
  form.addEventListener("submit", function () {
    sendMessage();
  });
});

//Typing-Online customStatus

function showTypingText() {
  if (this.value.length > 0) {
    customStatus.innerHTML = "Typing..";
  } else if (this.value.length === 0) {
    customStatus.innerHTML = "Online";
  }
}

function pressKeyboard(e) {
  if (e.keyCode === 13) {
    sendMessage();
  }
}

//Messenger Functions
function sendMessage() {
  if (msgInput.value === "") {
    return false;
  } else {
    var date = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    var userText = document.createElement("p");
    var userDate = document.createElement("p");
    userText.innerText = msgInput.value;
    userDate.innerText = date;
    let classesToAdd = ["p-0", "m-0"];
    userText.classList.add(...classesToAdd);
    userDate.classList.add(...classesToAdd);

    writeLine(userText, userDate);
    msgInput.value = "";
    customStatus.innerHTML = "Online";
  }
}

function writeLine(text, date) {
  var message = document.createElement("div");
  var context = document.createElement("div");
  context.classList.add("context", "bg-primary", "text-white");
  context.appendChild(text);
  context.appendChild(date);
  message.classList.add("message-item", "mt-2");

  message.appendChild(context);
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}
