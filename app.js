// Change background color
const boxes = document.querySelectorAll(".color-box");

boxes.forEach(box => {
  box.style.background = `${box.id}`;
});

boxes.forEach(box => {
  box.addEventListener("click", change);
});

function change(e) {
  console.log(e.target.id);
  document.body.style.background = `var(--${e.target.id})`;
}

// Change Font size

const size = document.getElementById("size");
const article = document.querySelector(".article");

size.addEventListener("change", fontSize);
size.addEventListener("mousemove", fontSize);

function fontSize(e) {
  const fontSize = e.target.value + "px";
  article.style.setProperty("font-size", `${fontSize}`);
}
