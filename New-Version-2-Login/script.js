function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Fill all fields");
  } else {
    alert("Login successful");
  }
}