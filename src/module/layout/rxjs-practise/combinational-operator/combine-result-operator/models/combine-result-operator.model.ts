export const countriesWithStates = [
    {
      country: "United States",
      states: ["California", "Texas", "New York", "Florida", "Illinois"]
    },
    {
      country: "India",
      states: ["Gujarat", "Maharashtra", "Tamil Nadu", "Karnataka", "West Bengal"]
    },
    {
      country: "Canada",
      states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"]
    },
    {
      country: "Australia",
      states: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia"]
    },
    {
      country: "Germany",
      states: ["Bavaria", "Berlin", "Hesse", "Saxony", "North Rhine-Westphalia"]
    }
  ];
  
export interface ICountryState{
    country:string; 
    state:string[];
}