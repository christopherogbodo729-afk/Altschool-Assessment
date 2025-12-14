// -------- VALIDATION FUNCTIONS -------- //

// 1. Full Name: at least 2 words
function validateFullName(name) {
    if (!name) return false;
    return name.trim().split(/\s+/).length >= 2;
}

// 2. Email format
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// 3. Password strength
function validatePassword(password) {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return pattern.test(password);
}

// 4. Age: must be >= 18
function validateAge(age) {
    const num = Number(age);
    return !isNaN(num) && num >= 18;
}


// -------- COLLECT USER INPUT WITH PROMPT() -------- //

alert("Welcome! Please complete the registration form.");

let fullName = prompt("Enter your full name (first + last):");
let email = prompt("Enter your email address:");
let password = prompt("Create a strong password:");
let confirmPassword = prompt("Confirm your password:");
let age = prompt("Enter your age:");


// -------- VALIDATION PHASE -------- //

let errors = [];

// Full Name
if (!validateFullName(fullName)) {
    errors.push("❌ Full Name must contain at least 2 words.");
}

// Email
if (!validateEmail(email)) {
    errors.push("❌ Email address is invalid.");
}

// Password
if (!validatePassword(password)) {
    errors.push("❌ Password must be at least 8 characters, include an uppercase letter, a number, and a special character.");
}

// Confirm Password
if (password !== confirmPassword) {
    errors.push("❌ Passwords do not match.");
}

// Age
if (!validateAge(age)) {
    errors.push("❌ You must be 18 years or older.");
}


// -------- FINAL FEEDBACK -------- //

if (errors.length > 0) {
    alert("Registration Failed:\n\n" + errors.join("\n"));
} else {
    alert("🎉 Registration Successful! Welcome, " + fullName + "!");
}
