import styled from "styled-components";

type RowProps = {
  $rowDirection?: string;
  $gap?: number;
};

export const CountryContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .bold-span {
    font-weight: 600;
  }
`;

export const TopBackComponent = styled.div`
  width: 50%;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 600;
  img {
    width: 30px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CountryInfoWrapper = styled.div`
  width: 50%;
  margin-top: 24px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #cecece;
  @media screen and (max-width: 420px) {
    width: 100%;
    padding: 8px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Row = styled.div<RowProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $rowDirection }) =>
    $rowDirection === "row" ? "row" : "column"};
  gap: 6px;
  .country-flag {
    max-width: 150px;
    height: auto;
  }
  .country-name {
    font-size: 24px;
    font-weight: 800;
  }
`;

export const CountryBordersList = styled.div`
  width: 100%;
  min-height: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  margin-top: 12px;
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
