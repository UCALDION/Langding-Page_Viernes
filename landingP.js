function openModal() {
    document.getElementById('authModal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}
function toggleAuthMode() {
    const title = document.getElementById('modalTitle');
    const toggleText = document.getElementById('toggleText');
    if (title.textContent === 'Login') {
        title.textContent = 'Sign Up';
        toggleText.innerHTML = 'Already have an account? <a href="#" onclick="toggleAuthMode()">Login</a>';
    } else {
        title.textContent = 'Login';
        toggleText.innerHTML = "Don't have an account? <a href='#' onclick='toggleAuthMode()'>Sign Up</a>";
    }
}

document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful! Redirecting to Home page...');
    window.location.href = "Home.html";
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.profilebtn a').addEventListener('click', function(event) {
        event.preventDefault();
        openModal();
    });
});