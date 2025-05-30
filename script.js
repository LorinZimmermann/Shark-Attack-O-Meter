const container = document.querySelector("#shark-attacks");

const northernTerritoryElement = document.querySelector(".northern_territory");
const newSouthWalesElement = document.querySelector(".new_south_wales");
const queenslandElement = document.querySelector(".queensland");
const westernAustraliaElement = document.querySelector(".western_australia");
const victoriaElement = document.querySelector(".victoria");
const tasmaniaElement = document.querySelector(".tasmania");
const southAustraliaElement = document.querySelector(".south_australia");

const overlay = document.querySelector(".overlay");
const button = document.querySelectorAll(".button");
const overlayContent = document.querySelector(".overlay_content");

const dateElement = document.querySelector(".date");
const locationElement = document.querySelector(".location");
const injuryElement = document.querySelector(".injury");

const total = document.querySelector(".total");
const territoryCount = document.querySelector(".territory_count");

const audio = document.getElementById("audio");
const playButton1 = document.querySelector(".khai_1");
const playButton2 = document.querySelector(".khai_2");

let API_URL = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?limit=20&refine=country%3A%22AUSTRALIA%22&refine=area%3A%22";

let currentTerritoryUrl = "";

if (northernTerritoryElement) {
    northernTerritoryElement.addEventListener("click", () => {
        const territoryName = "Northern Territory";
        territoryCount.textContent = territoryName;
        const territoryUrl = `${API_URL}Northern%20Territory%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl);
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (newSouthWalesElement) {
    newSouthWalesElement.addEventListener("click", () => {
        const territoryName = "New South Wales";
        territoryCount.textContent = territoryName;
        const territoryUrl = `${API_URL}New%20South%20Wales%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl);
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (queenslandElement) {
    queenslandElement.addEventListener("click", () => {
        const territoryName = "Queensland";
        territoryCount.textContent = territoryName;
        const territoryUrl = `${API_URL}Queensland%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl);
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (westernAustraliaElement) {
    westernAustraliaElement.addEventListener("click", () => {
        const territoryName = "Western Australia";
        territoryCount.textContent = territoryName;
        const territoryUrl = `${API_URL}Western%20Australia%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl);
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (victoriaElement) {
    victoriaElement.addEventListener("click", () => {
        const territoryName = "Victoria";
        territoryCount.textContent = territoryName;
        const territoryUrl = `${API_URL}Victoria%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl);
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (tasmaniaElement) {
    tasmaniaElement.addEventListener("click", () => {
        const territoryName = "Tasmania";
        territoryCount.textContent = territoryName;
        const territoryUrl = `${API_URL}Tasmania%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl);
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (southAustraliaElement) {
    southAustraliaElement.addEventListener("click", () => {
        const territoryName = "South Australia";
        territoryCount.textContent = territoryName;
        const territoryUrl = `${API_URL}South%20Australia%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl);
        fetchData(territoryUrl).then(showLatestAttack);   
    });
}

async function fetchData() {
    try {
        const response = await fetch(currentTerritoryUrl);
        const data = await response.json();

        if (data.total_count !== undefined) {
            total.textContent = data.total_count;
        } else {
            total.textContent = "Unknown";
        }

        return data.results;
    } catch (e) {
        console.error(e);
        total.textContent = "Unknown";
        return [];
    }
}

function showLatestAttack(data) {
    const sorted = data
        .filter(d => d.date)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const latest = sorted[0];

    if (latest) {
        console.log("Latest Shark Attack:");
        console.log("Date:", latest.date);
        console.log("Location:", latest.location || "Unknown");
        console.log("Injury:", latest.injury || "Not specified");
        dateElement.textContent = latest.date || "Unknown";
        locationElement.textContent = latest.location || "Unknown";
        injuryElement.textContent = latest.injury || "Not specified";
    } else {
        console.log("No data available for this territory.");
        container.innerText = "No data available.";
    }
}

button.forEach(button => {
    button.addEventListener('click', () => {
        overlay.style.display = 'grid';
    });
    button.querySelector("path").addEventListener('mouseover', () => {
        button.classList.add('hover');
    });
    button.querySelector("path").addEventListener('mouseout', () => {
        button.classList.remove('hover');
    });
});

overlay.addEventListener('click', (e) => {
    if (!overlayContent.contains(e.target)) {
      overlay.style.display = 'none';
    }
  });

playButton1.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton1.classList.add('playing');
        playButton2.classList.add('playing'); 
    } else {
        audio.pause();
        playButton1.classList.remove('playing');
        playButton2.classList.remove('playing'); 
    }
});

playButton2.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton1.classList.add('playing'); 
        playButton2.classList.add('playing');
    } else {
        audio.pause();
        playButton1.classList.remove('playing'); 
        playButton2.classList.remove('playing');
    }
});