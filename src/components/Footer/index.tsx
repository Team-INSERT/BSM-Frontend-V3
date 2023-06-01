import React from "react";
import styled from "styled-components";
import Info from "./Info";

const Footer = () => {
  return (
    <Layout>
      <Container>
        <Info />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 400px;
  bottom: 0;
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303441;
  border-bottom: 1px solid #e6e6e6;
`;

const Container = styled.div`
  width: 76vw;
  height: 60%;
`;

export default Footer;
