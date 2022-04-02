import React, { useState } from "react";
import Button from "../Button/Button";
import {
  Cabecalho,
  Lista,
  ListaLink,
  Right,
  Hamburger,
  BtnMobile,
} from "./styles";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Cabecalho className={isMenuOpen ? "active" : ""}>
      <img src="img/Vector (39).png" alt="finsweet" width="122" height="28" />
      <Right>
        <Lista className="nav">
          <li>
            <ListaLink href="Home">Home</ListaLink>
          </li>
          <li>
            <ListaLink href="About us">About us</ListaLink>
          </li>
          <li>
            <ListaLink href="Features">Features</ListaLink>
          </li>
          <li>
            <ListaLink href="Pricing">Pricing</ListaLink>
          </li>
          <li>
            <ListaLink href="FAQ">FAQ</ListaLink>
          </li>
          <li>
            <ListaLink href="Blog">Blog</ListaLink>
          </li>
        </Lista>
        <Button className="botao">Contact us</Button>
        <BtnMobile id="btn-mobile" onClick={handleMenu}>
          Menu
          <Hamburger id="hamburger" />
        </BtnMobile>
      </Right>
    </Cabecalho>
  );
};
export default Header;
