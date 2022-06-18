import React from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import "../../assets/scss/pages/_home-page.scss";
import { NavLink } from "react-router-dom";
import ListItem from "./ListItem";
import Carosel from "./Carosel";

export default function HomePage(props) {
  return (
    <div>
    <Carosel></Carosel>
    <ListItem></ListItem>
    </div>
    
  );
}
