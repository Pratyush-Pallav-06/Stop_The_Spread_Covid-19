import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

import styles from "./Country.module.css";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => handleCountryChange(event.target.value)}
      >
        <option value="">United States</option>
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
