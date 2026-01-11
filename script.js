const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const lightBtn = document.getElementById('lightModeBtn');
const darkBtn = document.getElementById('darkModeBtn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

lightBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    lightBtn.classList.add('active-mode');
    darkBtn.classList.remove('active-mode');
});

darkBtn.addEventListener('click', () => {
    body.classList.add('dark-mode');
    darkBtn.classList.add('active-mode');
    lightBtn.classList.remove('active-mode');
});
