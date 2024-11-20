import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SearchCountryInput = styled.input`
    width: 300px;
    height: 40px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #d3d3d3;
    outline: none;
    margin-top: 24px;
`;

export const CountriesListWrapper = styled.div`
    width: 30%;
    min-height: 60px;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    margin-top: 24px;
    padding: 8px;
    overflow-y: scroll;
`;