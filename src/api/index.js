import axios from "axios";

// this is the variable .. which will take the response from the api and will return the response back inside the App.jsx

// here we took out the data from the api and DeStructured it  and correlate the data from the confirmed , recoverd , deaths etc ...

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/us/daily.json"
    );

    return data.map(({ positive, death, dateChecked: date }) => ({
      confirmed: positive,

      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
