// Function to show greeting alert when the page loads
window.onload = function() {
    alert("Welcome to Tanisha Parveen's Portfolio!");
};

// Function to highlight skill on hover
document.addEventListener('DOMContentLoaded', (event) => {
    let skills = document.querySelectorAll('.section h2');
    
    skills.forEach(skill => {
        skill.addEventListener('mouseover', function() {
            this.style.color = 'red';
        });
        
        skill.addEventListener('mouseout', function() {
            this.style.color = 'black';
        });
    });
});
