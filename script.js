function sendMsg() {
  const name = document.getElementById("name").value;
  const msg = document.getElementById("msg").value;

  if (!name || !msg) {
    alert("Fill all fields");
    return;
  }

  const div = document.createElement("div");
  div.innerHTML = `<b>${name}:</b> ${msg}`;

  document.getElementById("output").appendChild(div);

  document.getElementById("name").value = "";
  document.getElementById("msg").value = "";
}