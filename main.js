function addCountries(selectElementId) {
    var countryList = [
      "USA", "Canada", "UK", "Germany", "France", "Spain",
      "Italy", "Netherlands", "Sweden", "Norway", "Denmark",
      "Finland", "Japan", "Australia", "New Zealand"
    ];
  
    var selectElement = document.getElementById(selectElementId);
    countryList.forEach(function(country) {
      var optionElement = document.createElement("option");
      optionElement.value = country;
      optionElement.text = country;
      selectElement.add(optionElement);
    });
  }
  
  addCountries("#country")