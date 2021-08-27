"use strict";

const linkBody = document.querySelector(".link-area");
const list = document.createElement("ul");

const socials = [
  { title: "Twitch", link: "https://www.twitch.tv/formosaboba" },
  {
    title: "Main Instagram",
    link: "https://www.instagram.com/liseypanda/?hl=en",
  },
  {
    title: "Art Instagram",
    link: "https://www.instagram.com/liseypanda_art/?hl=en",
  },
  {
    title: "TikTok",
    link: "https://www.tiktok.com/@formosaboba?lang=en",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/LiseyPanda",
  },
];
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// make an unordered list

linkBody.appendChild(list);

socials.forEach((d) => {
  const link = document.createElement("li");
  list.appendChild(link);

  //   const linkTitle = document.createTextNode(`${d.title}: `);
  //   link.appendChild(linkTitle);

  const btn = document.createElement("input");
  const urlLink = document.createTextNode(`${d.link}`);
  btn.appendChild(urlLink);
  btn.id = `${d.title}-btn`;
  btn.title = `${d.title} link`;
  btn.type = "button";
  btn.value = `${d.title}`;
  btn.className = "link-btns";
  link.appendChild(btn);

  document.getElementById(`${d.title}-btn`).onclick = function () {
    parent.open(`${d.link}`);
  };

  console.log(link);
});
