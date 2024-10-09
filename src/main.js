import './style.css'

document.addEventListener("DOMContentLoaded", () => {
    console.log('FitTrack app initialized')
});

// Add any JavaScript functionality here
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Goals saved!');
    });
});

// Add click handlers for the settings options
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (e) => {
                const settingName = e.currentTarget.querySelector('h2').textContent;
                console.log(`Clicked: ${settingName}`);
                // Here you can add navigation or modal functionality
            });
        });