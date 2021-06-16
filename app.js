const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1604941138781-78fbefc0d888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" />';
  title.innerHTML = "@GB e-Sprots.com";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_img.innerHTML =
    '<img src="https://i.etsystatic.com/5859868/r/il/c6edb3/1458238811/il_570xN.1458238811_hr1b.jpg" alt="" />';
  name.innerHTML = "Musiabe";
  date.innerHTML = "July : 15 : 2021:";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
