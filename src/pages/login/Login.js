import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import "./Login.css";
import CartCard from "../../Components/CartCard";
import FeedCard from "../../Components/FeedCard";

const Login = (props) => {
  return (
    <div className="telatoda">
      <CartCard />
    </div>
  );
};

export default Login;
