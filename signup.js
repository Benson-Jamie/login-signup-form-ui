function checkPassword() {
	const password = document.getElementById("passwordInput").value;
  const confirmPassword = document.getElementById("passwordIn").value;
  const icon = document.getElementById("message-icon");
  const text = document.getElementById("message-text");
  const message = document.getElementById("message");

  function showMessage(iconClass, color, msg) {
    icon.className = `fa ${iconClass}`;
    message.style.color = color;
    text.textContent = msg;
  }
  
 if (password.length === 0) {
  showMessage("fa-exclamation-circle", "White ", "Please enter a password first.");
  return;
}

if (password.length < 8) {
  showMessage("fa-exclamation-circle", "White ", "Short password, should be at least 8 characters long.");
  return;
}

if (confirmPassword.length > 0 && confirmPassword !== password) {
  showMessage("fa-exclamation-triangle", "White", "Passwords do not match.");
  return;
  }

  if (!/[a-zA-Z]/.test(password)) {
    showMessage("fa-exclamation-circle", "White", "Password must contain at least one letter.");
    return;
  }

  if (!/[0-9]/.test(password)) {
    showMessage("fa-exclamation-circle", "White", "Password must contain at least one number.");
    return;
  }

  if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
    showMessage("fa-exclamation-circle", "White", "Password must contain at least one special character.");
    return;
  }
  
  showMessage("fa-check-circle", "lightgreen", "Password is valid and matches");
}

function togglePassword() {
  const passwordInput = document.getElementById("passwordInput");
  const toggleIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}


function togglePass() {
  const passwordIn = document.getElementById("passwordIn");
  const toggleIcon = document.getElementById("togglePass");

  if (passwordIn.type === "password") {
    passwordIn.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordIn.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

 function togglePasswords() {
    const pass = document.getElementById("pass");
    const toggleIcon = document.getElementById("togglePasswords");

  if (pass.type === "password") {
    pass.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    pass.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

