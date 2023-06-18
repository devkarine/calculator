const del = document.getElementById("del");
const reset = document.getElementById("reset");
const res = document.getElementById("res");
const two = document.getElementById("t2");
const three = document.getElementById("t3");
const one = document.getElementById("t1");
const body = document.querySelector("body");

two.addEventListener("click", () => {
  body.classList.add("theme02");
  body.classList.remove("theme03");
  body.classList.remove("theme01");
});

three.addEventListener("click", () => {
  body.classList.add("theme03");
  body.classList.remove("theme02");
});

one.addEventListener("click", () => {
  body.classList.remove("theme02");
  body.classList.remove("theme03");
  body.classList.add("theme01");
});

function insertScreen(num) {
  const input = document.getElementById("screen").value;
  document.getElementById("screen").value = input + num;
  console.log(num);
}

res.addEventListener("click", () => {
  const input = document.getElementById("screen").value;
  document.getElementById("screen").value = eval(input);
});

reset.addEventListener("click", () => {
  document.getElementById("screen").value = "";
});

del.addEventListener("click", () => {
  const value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.length - 1);
});
