import React, { useEffect, useState } from "react";
import {
    CountryBordersList,
  CountryContainer,
  CountryInfoWrapper,
  Row,
  TopBackComponent,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../services/api";

import arrowBackIcon from "../../assets/ico/arrow-back-icon.svg";
import infoIconSVG from "../../assets/ico/info-circle.svg";

type Country = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: [
    {
      commonName: string;
      officialName: string;
      countryCode: string;
      region: string;
    },
  ];
};

type CountryFlag = {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
};

const Country = () => {
  const { code } = useParams();
  const [countryInfo, setCountryInfo] = useState<Partial<Country>>({});
  const [countryPopulation, setCountryPopulation] = useState<
    Partial<CountryFlag>
  >({});
  const [countryFlagURL, setCountryFlagURL] = useState<Partial<CountryFlag>>(
    {}
  );

  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/");
  };

  const handleNavigateToCountryPage = (code: string) => {
    navigate(`/country/${code}`);
  };

  const getCountryInfo = async () => {
    try {
      await API.get(`/countries/${code}`).then((response) => {
        if (response.status === 200) {
          setCountryInfo(response.data);
        }
      });
      await API.get(`/countries/flag/${code}`).then((response) => {
        if (response.status === 200) {
          setCountryFlagURL(response.data);
        }
      });
      await API.get(``);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountryInfo();
  }, [code]);
  return (
    <CountryContainer>
      <TopBackComponent>
        <img src={arrowBackIcon} alt="Back" onClick={handleNavigateBack} /> Back
      </TopBackComponent>
      <CountryInfoWrapper>
        <Row $rowDirection="row" $gap={24}>
          <div>
            <img
              src={countryFlagURL.flag}
              alt={countryFlagURL.name}
              className="country-flag"
            />
          </div>

          <Row $rowDirection="column" $gap={12}>
            <span className="country-name">{countryInfo.commonName}</span>
            <p><span className="bold-span">Official Name:</span> {countryInfo.officialName}</p>
            <p><span className="bold-span">Region:</span> {countryInfo.region}</p>
          </Row>
        </Row>
        <Row>
            <span className='bold-span'>Country borders:</span>
        </Row>
        <CountryBordersList>
        {countryInfo.borders && countryInfo.borders?.length > 0 ? (
          countryInfo.borders.map((country) => (
            <div>
              <span>{country.commonName}</span>
              <span>
                {" "}
                <img src={infoIconSVG} alt="Country info icon" onClick={() => {
                  handleNavigateToCountryPage(country.countryCode)
                }} />
              </span>
            </div>
          ))
        ) : (
          <p>No countries has border with {countryInfo.commonName}</p>
        )}
        </CountryBordersList>
      </CountryInfoWrapper>
    </CountryContainer>
  );
};

export default Country;
