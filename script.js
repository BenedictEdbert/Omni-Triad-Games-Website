const home_btn = document.getElementById("home_btn");
const games_btn = document.getElementById("games_btn");
const about_us_btn = document.getElementById("about_us_btn");
const contacts_btn = document.getElementById("contacts_btn");

const home_page = document.getElementById("home_page");
const games_page = document.getElementById("games_page");
const about_us_page = document.getElementById("about_us_page");
const contacts_page = document.getElementById("contacts_page");

let current_page = "Home";

function pageManager() {
    if (current_page == "Home") {
        home_btn.style.color = "orange";
        games_btn.style.color = "white";
        about_us_btn.style.color = "white";
        contacts_btn.style.color = "white";
        
        home_page.style.display = "block";
        games_page.style.display = "none";
        about_us_page.style.display = "none";
        contacts_page.style.display = "none";
    }
    else if (current_page == "Games") {
        home_btn.style.color = "white";
        games_btn.style.color = "orange";
        about_us_btn.style.color = "white";
        contacts_btn.style.color = "white";

        home_page.style.display = "none";
        games_page.style.display = "block";
        about_us_page.style.display = "none";
        contacts_page.style.display = "none";
    }
    else if (current_page == "About Us") {
        home_btn.style.color = "white";
        games_btn.style.color = "white";
        about_us_btn.style.color = "orange";
        contacts_btn.style.color = "white";

        home_page.style.display = "none";
        games_page.style.display = "none";
        about_us_page.style.display = "block";
        contacts_page.style.display = "none";
    }
    else if (current_page == "Contacts") {
        home_btn.style.color = "white";
        games_btn.style.color = "white";
        about_us_btn.style.color = "white";
        contacts_btn.style.color = "orange";

        home_page.style.display = "none";
        games_page.style.display = "none";
        about_us_page.style.display = "none";
        contacts_page.style.display = "block";
    }
}

function homePage() {
    current_page = "Home";
    pageManager();
}

function gamesPage() {
    current_page = "Games";
    pageManager();
}

function aboutUsPage() {
    current_page = "About Us";
    pageManager();
}

function contactsPage() {
    current_page = "Contacts";
    pageManager();
}

pageManager();

const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }
    else {
        entry.target.classList.remove('show');
    }
  });
}, {threshold: 0.2
});

elements.forEach(el => observer.observe(el));