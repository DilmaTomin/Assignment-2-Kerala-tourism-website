


function EmailValidation() {
    // Get the input field
    var emailInput = document.getElementById("email");

    // Get the email value and trim any leading/trailing white spaces
    var email = emailInput.value.trim();
    console.log("email", email)
    // Regular expression pattern for email validation
    var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // var submitButton = document.getElementById("submitButton");
    // Check if the email matches the pattern
    if (email.match(emailPattern)) {
        // Valid email format
        // error.innerHTML = ""
        // return true;
        emailError.innerHTML = "";
        emailError.style.display = "none";
        // submitButton.disabled = true;
    } else {
        // Invalid email format
        //   emailInput.classList.add("error");
        emailError.innerHTML = "Invalid email id";
        emailError.style.color = "red";
        // submitButton.disabled = true;
        // return false;
    }
    if (email == "") {
        emailError.innerHTML = "Email is required";
        emailError.style.color = "red";
        // submitButton.disabled = false;
    }
    return true;
}
function phoneValidation() {
    var phoneInput = document.getElementById("phone-number");
    var phoneNumber = phoneInput.value.trim();
    console.log("emphoneNumberail", phoneNumber)
    var phoneError = document.getElementById("phoneError");
    var phonePattern = /^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;
    var submitButton = document.getElementById("submitButton");
    if (phoneNumber === "") {
        // Empty input, clear error
        phoneError.innerText = "phone number is required";
        phoneError.style.color = "red";
        // submitButton.disabled = true;
    } else if (!phonePattern.test(phoneNumber)) {
        // Invalid phone number
        phoneError.innerText = "Invalid phone number. Please enter a 10-digit number in one of the following formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
        phoneError.style.color = "red";
        // submitButton.disabled = true;
    } else {
        // Valid phone number
        phoneError.innerText = "";
        phoneError.style.display = "none";
        // submitButton.disabled = false;
    }
    return true;
}

function passwordValidation() {
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");

    // passwordInput.addEventListener("input", function(event) {
    var password = passwordInput.value;
    var submitButton = document.getElementById("submitButton");

    // Check password strength
    var passwordStrength = checkPasswordStrength(password);

    // Update error message and color based on password strength
    if (password.length == 0) {
        passwordError.innerText == "Password Required";
        passwordError.style.color = "red";
        // submitButton.disabled = true;
    }
    if (passwordStrength === "weak") {
        passwordError.innerText = "Weak password";
        passwordError.style.color = "red";
        // submitButton.disabled = true;
        // passwordError.classList.add("password-strength-weak");
        // passwordError.classList.remove("password-strength-medium", "password-strength-strong");
    } else if (passwordStrength === "medium") {
        passwordError.innerText = "Medium password";
        passwordError.style.color = "orange";
        // submitButton.disabled = false;
        // passwordError.classList.add("password-strength-medium");
        // passwordError.classList.remove("password-strength-weak", "password-strength-strong");
    } else if (passwordStrength === "strong") {
        passwordError.innerText = "Strong password";
        passwordError.style.color = "green";
        // submitButton.disabled = false;
        // passwordError.classList.add("password-strength-strong");
        // passwordError.classList.remove("password-strength-weak", "password-strength-medium");
    } else {
        passwordError.innerText == "";
        passwordError.style.color = "white"
        // passwordError.classList.remove("password-strength-weak", "password-strength-medium", "password-strength-strong");
    }
    // });

    return true;

}
function checkPasswordStrength(password) {
    // Password strength rules
    var minLength = 8;
    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);

    // Evaluate password strength
    if (password.length < minLength || !hasUppercase || !hasLowercase || !hasNumber) {
        return "weak";
    } else if (password.length >= minLength && (hasUppercase || hasLowercase || hasNumber)) {
        return "medium";
    } else {
        return "strong";
    }
}
function validateConfirmPassword() {
    // var form = document.getElementById("myForm");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var confirmPasswordError = document.getElementById("confirm-passwordError");
    var passwordvalue = passwordInput.value;
    var confirmPasswordvalue = confirmPasswordInput.value;
    console.log("passwordvalue", passwordvalue)
    console.log("confirmPasswordvalue", confirmPasswordvalue)
    if (passwordvalue !== confirmPasswordvalue) {
        confirmPasswordError.innerText = "Passwords do not match";
        confirmPasswordError.style.color = "red";

    } else {
        confirmPasswordError.innerText = "";
        confirmPasswordError.style.display = "none";
    }
    return true
}
function nameValidation() {
    var nameInput = document.getElementById("name");
    var NameError = document.getElementById("nameError");
    var name = nameInput.value;
    console.log("name", name)
    // var nameError = document.getElementById("nameError")
    if (name === "") {
        // Empty input, clear error
        NameError.innerText = "Name is required";
        NameError.style.color = "red";
        // 
    } else {
        NameError.innerText = "";
        NameError.style.display = "none";
    }
}


// var form = document.getElementById("myForm");
// form.addEventListener("submit", function (event) {
    function submitSignUpForm(){
    // event.preventDefault(); // Prevent form submission for now
    var nameInput = document.getElementById("name");

    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    var phoneInput = document.getElementById("phone-number");
    var successmessage = document.getElementById("successMessage");


    var isValidname = nameValidation(nameInput.value);
    // Validate email
    var isValidEmail = EmailValidation(emailInput.value);
    // ... additional email validation logic

    // Validate password
    var isValidPassword = passwordValidation(passwordInput.value);
    // ... additional password validation logic

    // Validate confirm password
    var isValidConfirmPassword = validateConfirmPassword(passwordInput.value, confirmPasswordInput.value);
    // ... additional confirm password validation logic

    // Validate phone number
    var isValidPhoneNumber = phoneValidation(phoneInput.value);
    // ... additional phone number validation logic

    // Submit the form if all validations pass
    if (isValidname && isValidEmail && isValidPassword && isValidConfirmPassword && isValidPhoneNumber) {
        successmessage.innerText = "Form submitted successfully";
        // successmessage.style.color = "green";
        setTimeout(function () {
            // form.reset();
            successmessage.style.display = "block";
        }, 3000);

        // successMessage.innerText = "Form saved successfully!";

        // Reset the form after a delay (optional)
        setTimeout(function () {
            // form.reset();
            successmessage.style.display = "none";
        }, 3000);

    }
    }
// });

// Example usage



function submitLoginForm(){
var loginform = document.getElementById("loginForm");
// loginform.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now


    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var successmessage = document.getElementById("successMessage");
    console.log("emailInput22", emailInput)
    console.log("passwordInput22", passwordInput)
    // console.log("name", name)
    // Validate email
    var isValidEmail = EmailValidation(emailInput.value);
    // ... additional email validation logic

    // Validate password
    var isValidPassword = passwordValidation(passwordInput.value);
    // ... additional password validation logic

    // Submit the form if all validations pass
    if ( isValidEmail && isValidPassword) {
        successmessage.innerText = "Form submitted successfully";
        // successmessage.style.color = "green";
        setTimeout(function () {
            // form.reset();
            successmessage.style.display = "block";
        }, 3000);

        // successMessage.innerText = "Form saved successfully!";

        // Reset the form after a delay (optional)
        setTimeout(function () {
            // form.reset();
            successmessage.style.display = "none";
        }, 3000);

    }
// });
}