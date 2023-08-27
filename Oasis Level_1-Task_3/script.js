document.addEventListener("DOMContentLoaded", function () {
    const conversionType = document.getElementById("conversionType");
    const inputValue = document.getElementById("inputValue");
    const convertButton = document.getElementById("convertButton");
    const resultDiv = document.getElementById("result");
  
    convertButton.addEventListener("click", function () {
      const selectedConversion = conversionType.value;
      const value = parseFloat(inputValue.value);
  
      if (!isNaN(value)) {
        let convertedValue;
        let resultText;
  
        if (selectedConversion === "cToF") {
          convertedValue = celsiusToFahrenheit(value);
          resultText = `${value}°C is ${convertedValue}°F`;
        } else if (selectedConversion === "fToC") {
          convertedValue = fahrenheitToCelsius(value);
          resultText = `${value}°F is ${convertedValue}°C`;
        } else if (selectedConversion === "cToK") {
          convertedValue = celsiusToKelvin(value);
          resultText = `${value}°C is ${convertedValue} K`;
        } else if (selectedConversion === "kToC") {
          convertedValue = kelvinToCelsius(value);
          resultText = `${value} K is ${convertedValue}°C`;
        } else if (selectedConversion === "kToF") {
          convertedValue = kelvinToFahrenheit(value);
          resultText = `${value} K is ${convertedValue}°F`;
        } else if (selectedConversion === "fToK") {
          convertedValue = fahrenheitToKelvin(value);
          resultText = `${value}°F is ${convertedValue} K`;
        }
  
        resultDiv.textContent = resultText;
      }
    });
  });
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
  }
  
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
  }
  