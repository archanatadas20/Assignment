
function sendVerificationCode(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert('Verification code sent to ' + email);
}

function continueWithGoogle() {
    alert('Redirecting to Google login...');
}
