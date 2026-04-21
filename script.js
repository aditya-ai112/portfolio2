function sendMsg() {
  const name = document.getElementById("name").value;
  const msg = document.getElementById("msg").value;

  if (name === "" || msg === "") {
    alert("Please fill all fields");
    return;
  }

  const output = document.getElementById("output");

  const div = document.createElement("div");
  div.innerHTML = `<b>${name}:</b> ${msg}`;

  output.appendChild(div);

  document.getElementById("name").value = "";
  document.getElementById("msg").value = "";
}