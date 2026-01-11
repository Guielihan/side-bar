const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const lightBtn = document.getElementById('lightModeBtn');
const darkBtn = document.getElementById('darkModeBtn');
const body = document.body;

// Sidebar Toggle
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Light Mode Click
lightBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    lightBtn.classList.add('active-mode');
    darkBtn.classList.remove('active-mode');
});

// Dark Mode Click
darkBtn.addEventListener('click', () => {
    body.classList.add('dark-mode');
    darkBtn.classList.add('active-mode');
    lightBtn.classList.remove('active-mode');
});
