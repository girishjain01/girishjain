import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa'; 
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Menu from "./Menu";

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNavbarBrand>MAHAVEER</SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />
              }
              return (
                <NavRoute to={route.link} key={route.name}>{route.name}</NavRoute>
              );
            })}
          </NavRoutes>
          <SearchContainer>
          <FaSearch />
          {/* <SearchInput type="text" placeholder="Search..."/> */}
        </SearchContainer>
          <LoginButton>Login</LoginButton>
        </RightNav>
        

      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  text-color: black;
`; 


const SNavbar = styled.nav`
  background-color: #6f07f6;
  position: fixed;       // This makes the navbar fixed at the top of the viewport
  top: 0;                // Position the navbar at the top of the viewport
  left: 0;               // Stretch the navbar across from the left edge
  right: 0;              // Stretch the navbar across to the right edge
  z-index: 1000;         // Ensures the navbar stays on top of other content
  width: 100%;           // Ensure the navbar spans the full width of the viewport
`;

const NavContainer = styled.div`
  padding: 1rem;
  height: 50px;
  max-width: 100%; // इसे 100% पर सेट किया गया है
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

// यहां बाकी के स्टाइल्ड कंपोनेंट्स...


const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const RightNav = styled.div`
  display: flex;
  gap: 1rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: .5rem 1rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;
