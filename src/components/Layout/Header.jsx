import React from "react";
import { Link } from "react-router-dom";
import { pageLinks } from "../../constants";
import "./style.scss";
import homeImg from "../../assets/images/folder_home.png";
import cartImg from "../../assets/images/shopping_cartred.png";
import userImg from "../../assets/images/user-password.png";

export default function Header() {
  return (
    <header className={"header"}>
      <Link to={pageLinks.home.path}><img src={homeImg} alt={pageLinks.home.title} title={pageLinks.home.title}/></Link>
      <Link to={pageLinks.cart.path}><img src={cartImg} alt={pageLinks.cart.title} title={pageLinks.cart.title}/></Link>
      <Link to={pageLinks.login.path}><img src={userImg} alt={pageLinks.login.title} title={pageLinks.login.title}/></Link>
    </header>
  );
}
