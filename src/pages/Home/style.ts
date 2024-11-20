import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SearchInputDivWrapper = styled.div`
  width: 300px;
  height: 40px;
  position: relative;
  margin-top: 24px;
  img {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    height: auto;
  }
`;

export const SearchCountryInput = styled.input`
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  outline: none;
`;

export const CountriesListWrapper = styled.div`
  width: 30%;
  min-height: 60px;
  height: 100px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  margin-top: 24px;
  padding: 12px;
  overflow-y: scroll;
  div {
    margin: 4px;
    display: flex;
    justify-content: space-between;
    &:hover {
        background-color: #eeeeee;
        transition: 300ms ease-in-out;
    }
    span img {
        width: 20px;
        height: auto;
        cursor: pointer;
    }
  }
`;

export const HomeFooter = styled.footer`
    width: 100%;
    text-align: center;
    color: #808080;
    margin-top: 24px;
`;
