import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useSelector} from 'react-redux'

import "./nav.css";

const Nav = () => {
  const {list} = useSelector(state => state.cart)
  console.log(list.length)

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="nav-main">
      <Link to={"/"}>Products</Link>
      <Link to={"/cart"}>
        <Button aria-label="cart">
          <StyledBadge badgeContent={list.length=== 0 ? "0" : list.length} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </Button>
      </Link>
    </div>
  );
};

export default Nav;
