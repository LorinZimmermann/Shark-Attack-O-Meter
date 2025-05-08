const container = document.querySelector("#shark-attacks");
const northernTerritoryElement = document.querySelector(".northern_territory");
const newSouthWalesElement = document.querySelector(".new_south_wales");
const queenslandElement = document.querySelector(".queensland");
const westernAustraliaElement = document.querySelector(".western_australia");
const victoriaElement = document.querySelector(".victoria");
const tasmaniaElement = document.querySelector(".tasmania");
const southAustraliaElement = document.querySelector(".south_australia");

let API_URL = " https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records?limit=20&refine=country%3A%22AUSTRALIA%22&refine=area%3A%22";


let currentTerritoryUrl = "";

if (northernTerritoryElement) {
    northernTerritoryElement.addEventListener("click", () => {
        const territoryUrl = `${API_URL}Northern%20Territory%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl); // Log the new API URL
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (newSouthWalesElement) {
    newSouthWalesElement.addEventListener("click", () => {
        const territoryUrl = `${API_URL}New%20South%20Wales%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl); // Log the new API URL
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (queenslandElement) {
    queenslandElement.addEventListener("click", () => {
        const territoryUrl = `${API_URL}Queensland%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl); // Log the new API URL
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (westernAustraliaElement) {
    westernAustraliaElement.addEventListener("click", () => {
        const territoryUrl = `${API_URL}Western%20Australia%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl); // Log the new API URL
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (victoriaElement) {
    victoriaElement.addEventListener("click", () => {
        const territoryUrl = `${API_URL}Victoria%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl); // Log the new API URL
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (tasmaniaElement) {
    tasmaniaElement.addEventListener("click", () => {
        const territoryUrl = `${API_URL}Tasmania%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl); // Log the new API URL
        fetchData(territoryUrl).then(showLatestAttack);
    });
}

if (southAustraliaElement) {
    southAustraliaElement.addEventListener("click", () => {
        const territoryUrl = `${API_URL}South%20Australia%22`;
        currentTerritoryUrl = territoryUrl;
        console.log("New API URL:", territoryUrl); // Log the new API URL
        fetchData(territoryUrl).then(showLatestAttack);   
    });
}

// count wie viel elements es ii dem array hett im jewilige territorium

async function fetchData() {
    try {
        const response = await fetch(currentTerritoryUrl);
        const data = await response.json();
        return data.results;
    } catch (e) {
        console.error(e);
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
    } else {
        console.log("No data available for this territory.");
        container.innerText = "No data available.";
    }
}