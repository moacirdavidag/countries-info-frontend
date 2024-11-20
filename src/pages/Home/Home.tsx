import React, { useEffect, useState } from "react";
import {
  CountriesListWrapper,
  HomeContainer,
  HomeFooter,
  SearchCountryInput,
  SearchInputDivWrapper,
} from "./style";
import API from "../../services/api";
import searchIconSVG from "../../assets/ico/search-ico.svg";
import infoIconSVG from "../../assets/ico/info-circle.svg";

type Country = {
  name: string;
  code: string;
};

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesFiltered, setCountriesFiltered] = useState<Country[]>([]);
  const [inputSearchValue, setInputSearchValue] = useState<string>("");

  const handleChangeInputSearchValue = (value: string) => {
    setInputSearchValue(value);
  };

  const getCountries = async () => {
    try {
      await API.get("/countries").then((response) => {
        if (response.status === 200) {
          setCountries(response.data);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <HomeContainer>
      <h1>Countries</h1>
      <h2>Search by your country info :)</h2>
      <SearchInputDivWrapper>
        <SearchCountryInput
          placeholder="Type your country name..."
          value={inputSearchValue}
          onChange={(event) => {
            const value = event.target.value;
            handleChangeInputSearchValue(value);
          }}
        />
        <img src={searchIconSVG} alt="Search icon" />
      </SearchInputDivWrapper>

      <CountriesListWrapper>
        {countries && countries?.length > 0 ? (
          countries.map((country) => (
            <div>
              <span>{country.name}</span>
              <span>
                {" "}
                <img src={infoIconSVG} alt="Country info icon" />
              </span>
            </div>
          ))
        ) : (
          <p>No country finded.</p>
        )}
      </CountriesListWrapper>
      <HomeFooter>
        Developed with &#10084; by <a href='https://www.linkedin.com/in/moacir-david-7735b7158/' target="_blank">Moacir David</a>
      </HomeFooter>
    </HomeContainer>
  );
};

export default Home;
