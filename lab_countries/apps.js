const countryInfo = document.querySelector("#countries-description");


const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await response.json();
    console.log(jsonData[0]);



    const nameOutput = document.createElement("p");
    const nameInfo = jsonData[0].name.common;
    nameOutput.innerText = `Name: ${nameInfo}`;
    countryInfo.appendChild(nameOutput);


    const populationOutput = document.createElement("p");
    const populationInfo = jsonData[0].population;
    populationOutput.innerText = `Population: ${populationInfo}`;
    countryInfo.appendChild(populationOutput);

    
    // const languagesOutput = document.createElement("div");
    // const languagesInfo = jsonData[0].languages;

    // Loop through the values of the languagesInfo object
    // Object.values(languagesInfo).forEach((language)=>{
            
    //     languagesOutput.innerHTML = `Languages ${(Object.values(language)).join(",")} `
    
    // })

    // countryInfo.appendChild(languagesOutput)


    const languagesOutput = document.createElement("div");
    const languagesInfo = jsonData[0].languages;
    // covert object into a json formatted string
    const convertToJson = JSON.stringify(languagesInfo);

    languagesOutput.innerText = `Languages: ${convertToJson}`;
    countryInfo.appendChild(languagesOutput);

    const capitalOutput = document.createElement("div");
    const capitalInfo = jsonData[0].capital;
    capitalOutput.innerText = `Capital: ${capitalInfo}`;
    countryInfo.appendChild(capitalOutput);    
    
}
getCountryByName("Papua New Guinea")



