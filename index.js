// Greeting button
document.getElementById('greetBtn').addEventListener('click', function() {
    document.getElementById('greeting').textContent = 'Hello! Thanks for visiting my page 😊';
});

// Light/Dark mode toggle
document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    this.textContent = isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});
