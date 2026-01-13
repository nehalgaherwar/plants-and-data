// JavaScript for interactive plant web page

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for explore button
    const exploreBtn = document.getElementById('explore-btn');
    exploreBtn.addEventListener('click', function() {
        document.getElementById('plants').scrollIntoView({ behavior: 'smooth' });
    });

    // Add hover effects to plant cards
    const plantCards = document.querySelectorAll('.plant-card');
    plantCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animate fact items on scroll
    const factItems = document.querySelectorAll('.fact-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    factItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Dynamic plant facts
    const facts = [
        "The largest flower in the world is the Rafflesia, which can grow up to 3 feet in diameter!",
        "Plants communicate with each other through chemical signals and even underground networks.",
        "Some plants, like the Venus flytrap, can move quickly to catch prey.",
        "The oldest known tree is over 5,000 years old!"
    ];

    let factIndex = 0;
    setInterval(() => {
        const factElement = document.querySelector('.fact-item p');
        factElement.style.opacity = '0';
        setTimeout(() => {
            factElement.textContent = facts[factIndex];
            factElement.style.opacity = '1';
            factIndex = (factIndex + 1) % facts.length;
        }, 500);
    }, 5000);

    // Add a simple plant growth animation
    const heroSection = document.getElementById('hero');
    let growth = 0;
    const growInterval = setInterval(() => {
        growth += 0.01;
        heroSection.style.backgroundSize = `${100 + growth * 10}%`;
        if (growth >= 1) clearInterval(growInterval);
    }, 100);
});
