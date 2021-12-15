import styled from "styled-components";

export const View = styled.div`
  text-align: center;
  color: #393b3c;
  font-size: 20px;
  padding-top: 10px;
`;

export const Search = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background-color: #699cb3;
  color: white;
  transition: all 0.3s;
  height: 50px;
  width: 150px;

  :hover {
    border: 1px solid #699cb3;
    background-color: white;
    color: #699cb3;
    transition: all 0.3s;
  }
`;

export const Searchbar = styled.input`
  outline: 0;
  margin: 0;
  font-size: 20px;
  text-align: center;
  color: #393b3c;
  height: 50px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #8c92ac;
  margin-bottom: 50px;
  transition: all 0.3s;

  :focus {
    border-bottom: 2px solid #393b3c;
    transition: all 0.3s;
  }
`;

export const Flag = styled.a`
  text-decoration: none;
  color: #393b3c;

  :hover {
    color: #979c9f;
  }
`;

export const Info = styled.div`
  padding-top: 2px;
`;

export const XLS = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  background-color: #699cb3;
  color: white;
  transition: all 0.3s;
  height: 50px;
  width: 150px;

  :hover {
    border: 1px solid #699cb3;
    background-color: white;
    color: #699cb3;
    transition: all 0.3s;
  }
`;

export const CSV = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  margin-left: 10px;
  background-color: #699cb3;
  color: white;
  transition: all 0.3s;
  height: 50px;
  width: 150px;

  :hover {
    border: 1px solid #699cb3;
    background-color: white;
    color: #699cb3;
    transition: all 0.3s;
  }
`;

export const XML = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  margin-left: 10px;
  background-color: #699cb3;
  color: white;
  transition: all 0.3s;
  height: 50px;
  width: 150px;

  :hover {
    border: 1px solid #699cb3;
    background-color: white;
    color: #699cb3;
    transition: all 0.3s;
  }
`;
