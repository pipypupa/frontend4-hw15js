import debounce from "lodash.debounce";
const input = document.querySelector("#input");
const div = document.querySelector("#countryDiv");

let countries = [];

async function fetchCountry(name) {
  try {
    const res = await fetch(
      `https://api.countrylayer.com/v2/name/${encodeURIComponent(
        name
      )}?access_key=a20e4d33eff6d2a836d5697c414446fb&fullText=true`
    );
    if (!res.ok) throw new Error("Country not found");
    const data = await res.json();
    countries = data;
  } catch (error) {
    console.error("Error fetching country:", error);
    countries = [];
  }
}

function countryFunction(array, inputValue) {
  let countryName;
  let objectName;
  let html;
  let dependense;

  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toLowerCase() === inputValue.toLowerCase()) {
      countryName = array[i].name;
      objectName = array[i];
      dependense = objectName.independent
        ? "Independent country"
        : "Dependent country";

      const currencyCode = objectName.currencies?.[0]?.code || "N/A";
      const currencySymbol = objectName.currencies?.[0]?.symbol || "N/A";
      const currencyName = objectName.currencies?.[0]?.name || "N/A";

      const languageValues = objectName.languages
        ? Object.values(objectName.languages)
        : ["N/A"];

      html = `
        <h2 class='countryName'>Name of the country: ${countryName}</h2>
        <p>Oficial name: ${objectName.altSpellings?.[1] || "N/A"}</p>
        <p>Area: ${objectName.area || "N/A"} km²</p>
        <p>Capital city: ${objectName.capital || "No capital"}</p>
        <p>Continent: ${objectName.region || "N/A"}</p>
        <p>Population: ${objectName.population || "N/A"} people</p>
        <p>Languages: ${languageValues}</p>
        <p>Borders: N/A</p> <!-- CountryLayer не дає borders -->
        <p>Dependense: ${dependense}</p>
        <div>
          <p>Currency code: ${currencyCode}</p>
          <p>Currency symbol: ${currencySymbol}</p>
          <p>Currency name: ${currencyName}</p>
        </div>
        <img src='https://flagsapi.com/${
          objectName.alpha2Code
        }/flat/64.png' alt="Flag of ${countryName}">
        <p>Car side: N/A</p>
        <p>Region: ${objectName.region}</p>
        <p>Subregion: ${objectName.subregion || "N/A"}</p>
        <p>Timezones: ${objectName.timezones?.join(", ") || "N/A"}</p>
        <p>Status: ${objectName.status || "N/A"}</p>
        <p>Start of a week: N/A</p>
        <p class='maps'>${countryName} on a map: <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        countryName
      )}" target="_blank">Google Maps</a></p>
      `;
      break;
    }
  }

  return html;
}

input.addEventListener(
  "input",
  debounce(async (e) => {
    const inputText = e.target.value.trim();

    if (inputText.length > 0) {
      await fetchCountry(inputText);

      if (countryFunction(countries, inputText) === undefined) {
        div.innerHTML = "Country that you entered is undefined. Try again";
      } else {
        div.innerHTML = countryFunction(countries, inputText);
      }
    } else {
      div.innerHTML = "Enter a country";
    }
  }, 500)
);
