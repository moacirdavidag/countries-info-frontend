import React, { useEffect, useState } from "react";
import {
  CountriesListWrapper,
  HomeContainer,
  SearchCountryInput,
} from "./style";
import API from "../../services/api";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [countriesFiltered, setCountriesFiltered] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState<string>("");

  const handleChangeInputSearchValue = (value: string) => {
    setInputSearchValue(value);
  };

  const getCountries = async () => {
    try {
      await API.get('/countries')
      .then((response) => {
        if(response.status === 200) {
          setCountries(response.data);
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, [])

  return (
    <HomeContainer>
      <h1>Countries</h1>
      <h2>Search by your country info :)</h2>
      <SearchCountryInput
        placeholder="Type your country name..."
        value={inputSearchValue}
        onChange={(event) => {
          const value = event.target.value;
          handleChangeInputSearchValue(value);
        }}
      />
      <CountriesListWrapper />
    </HomeContainer>
  );
};

export default Home;
