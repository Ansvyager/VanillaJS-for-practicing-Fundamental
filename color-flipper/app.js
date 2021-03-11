const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#000000"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // mengambil nomor diantara 4

  const nomorAcak = [getnomorBaru()];
  document.body.style.backgroundColor = colors[nomorAcak];
  color.textContent = colors[nomorAcak];
});

function getnomorBaru() {
  return Math.floor(Math.random() * colors.length);
}
