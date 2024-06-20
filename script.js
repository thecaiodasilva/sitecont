let nav = document.querySelector('nav');
    let items = document.querySelectorAll('li');
    let sections = document.querySelectorAll('.content-section');

    function setActiveSection(sectionId) {
        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));
        // Show the section related to the clicked item
        document.getElementById(sectionId).classList.add('active');
    }

    items.forEach(item => {
        item.onclick = () => {
            let oldActive = nav.querySelector('li.active');
            if (oldActive) oldActive.classList.remove('active');
            item.classList.add('active');
            nav.style.setProperty('--position-x-active', item.offsetLeft + 'px');
            
            // Show the section related to the clicked item
            let sectionId = item.getAttribute('data-section');
            setActiveSection(sectionId);
        }
    });

    // Set the Home section as active on page load
    document.addEventListener('DOMContentLoaded', () => {
        let homeItem = nav.querySelector('li[data-section="home"]');
        homeItem.classList.add('active');
        setActiveSection('home');
        nav.style.setProperty('--position-x-active', homeItem.offsetLeft + 'px');
    });