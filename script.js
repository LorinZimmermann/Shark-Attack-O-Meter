const container = document.querySelector("#shark-attacks");

let API_URL = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records";

const TERRITORIES = [
    "Western Australia",
    "South Australia",
    "Victoria",
    "Tasmania",
    "New South Wales",
    "Northern Territory",
    "Queensland"
];

//API_URL += "&refine.area" --> mer mached eif jedes mal es neus API

// count wie viel elements es ii dem array hett im jewilige territorium

async function fetchData(url) {
    try {
        const response = await fetch(url);
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
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
            <p><strong>Date:</strong> ${latest.date}</p>
            <p><strong>Location:</strong> ${latest.location || "Unknown"}</p>
            <p><strong>Injury:</strong> ${latest.injury || "Not specified"}</p>
        `;
        container.appendChild(card);
    } else {
        container.innerText = "No data available.";
    }
}

fetchData(API_URL).then(showLatestAttack);
