import React from "react";
import styled from "styled-components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height:100%;
  padding;0px 20px;
  justify-content:flex-end;
  position:relative
`;
const Search = styled.div`
  width: 40%;
  position: abolute;
  left: 0px;
  right: 0px;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  margin-right:30px;
  align-items: center;
  gap: 5px:
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input className="input" placeholder="Search" />
          <SearchIcon />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            {" "}
            <PersonOutlineIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
