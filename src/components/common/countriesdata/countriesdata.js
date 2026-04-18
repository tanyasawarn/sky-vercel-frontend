 import countryData from '../countriesdata/countriesdata.json';


// Get all countries sorted alphabetically
export const getCountryOptions = () => {
 return [...countryData].sort((a, b) => a.name.localeCompare(b.name));
};


// Find a specific country by code
export const getCountryByCode = (code) => {
 return countryData.find(country => country.code === code) || {
   code: 'IN',
   callingCode: '+91',
   name: 'India'
 };
};


// Get calling code for a country
export const getCallingCode = (code) => {
 const country = getCountryByCode(code);
 return country.callingCode;
};


// Get country name by code
export const getCountryName = (code) => {
 const country = getCountryByCode(code);
 return country.name;
};


// Search countries by name or code
export const searchCountries = (query) => {
 const lowerQuery = query.toLowerCase();
 return countryData.filter(country =>
   country.name.toLowerCase().includes(lowerQuery) ||
   country.code.toLowerCase().includes(lowerQuery) ||
   country.callingCode.includes(query)
 ).sort((a, b) => a.name.localeCompare(b.name));
};
