let saveBtn = document.getElementById("button__save");
let increaseBtn = document.getElementById("button__increase");
let decreaseBtn = document.getElementById("button__decrease");
let counter = document.getElementById("counter");
let logs = document.getElementById("logs");
let count = 0;
let res = [];

saveBtn.addEventListener("click", () => {
  console.log(count)
  localStorage.setItem("counter", count);
  console.log(localStorage.length)

  var x = document.createElement("LI");
  var t = document.createTextNode(localStorage.getItem("counter"));
  x.appendChild(t);
  document.getElementById("logs").appendChild(x);

});


decreaseBtn.addEventListener("click", () => {
  count--;
  counter.innerHTML = count;
  counterStyle();
});

increaseBtn.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
  counterStyle();
});

function counterStyle() {
  if (count < 0) {
    counter.classList.add("negative");
  } else if (count > 0) {
    counter.classList.add("positive");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}
