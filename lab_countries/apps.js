
const countryInfo = document.querySelector("#countries-description");


  const displayCountryInfo = (country) => {

    const countryDiv = document.createElement("div")
    const nameOutput = document.createElement("p");
    const nameInfo = country.name.common;
    nameOutput.innerText = `Name: ${nameInfo}`;
    // countryDiv.appendChild(nameOutput);


    const populationOutput = document.createElement("p");
    const populationInfo = country.population;
    populationOutput.innerText = `Population: ${populationInfo}`;
    // countryDiv.appendChild(populationOutput);


    const languagesOutput = document.createElement("ul");
    Object.values(country.languages).forEach((language) => {
    const languagesInfo = document.createElement("li") 
    languagesInfo.innerText= language;
    languagesOutput.appendChild(languagesInfo)    
    });
    
    const capitalOutput = document.createElement("p");
    const capitalInfo = country.capital[0];
    capitalOutput.innerText = `Capital: ${capitalInfo}`;

    countryDiv.appendChild(nameOutput);
    countryDiv.appendChild(populationOutput);
    countryDiv.appendChild(languagesOutput)
    countryDiv.appendChild(capitalOutput)

  
   countryInfo.appendChild(countryDiv)

   
}

const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();
    // the getCountryByName is asynchronous , so have to wait for getCountryByName and then use the results
    displayCountryInfo(jsonData[0])
    // console.log(jsonData)
}
getCountryByName("Papua New Guinea")


