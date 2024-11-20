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
import { useNavigate } from "react-router-dom";

type Country = {
  name: string;
  countryCode: string;
};

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesFiltered, setCountriesFiltered] = useState<Country[]>([]);
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeInputSearchValue = (value: string) => {
    setInputSearchValue(value);
    handleFilterCountries(value);
  };

  const handleFilterCountries = (value: string) => {
    if (countries && countries.length > 0) {
      const findedCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase())
      );
      setCountriesFiltered(findedCountries);
    }
  };

  const handleNavigateToCountryPage = (code: string) => {
    navigate(`/country/${code}`);
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
        {countriesFiltered && countriesFiltered.length > 0 ? (
          countriesFiltered.map((country) => (
            <div>
              <span>{country.name}</span>
              <span>
                {" "}
                <img
                  src={infoIconSVG}
                  alt="Country info icon"
                  onClick={() => {
                    handleNavigateToCountryPage(country.countryCode);
                  }}
                />
              </span>
            </div>
          ))
        ) : countries && countries?.length > 0 ? (
          countries.map((country) => (
            <div>
              <span>{country.name}</span>
              <span>
                {" "}
                <img src={infoIconSVG} alt="Country info icon" onClick={() => {
                  handleNavigateToCountryPage(country.countryCode)
                }} />
              </span>
            </div>
          ))
        ) : (
          <p>No results for {inputSearchValue}</p>
        )}
      </CountriesListWrapper>
      <HomeFooter>
        Developed with &#10084; by{" "}
        <a
          href="https://www.linkedin.com/in/moacir-david-7735b7158/"
          target="_blank"
        >
          Moacir David
        </a>
      </HomeFooter>
    </HomeContainer>
  );
};

export default Home;
