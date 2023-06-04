import React from "react";
import styled from "styled-components";
import color from "@/styles/color";
import Image from "next/image";
import Column from "../Flex/Column";
import Row from "../Flex/Row";

import QR from "./images/QR.png";

const Info = () => {
  const content = {
    name: "BSM",
    service: "부산소마고 학생 정보 관리 시스템",
    serviceInfo: `부산소마고학생정보관리시스템 | 대표 : 이현준 | 부산광역시 강서구 가락대로 1393`,
    policy: "개인정보책임관리자 : 김호현 | 소개 사이트 : insert.com",
    inquery: "비즈니스 문의 : insert@gmail.com",
    copyRight: " @2023. team insert. All rights reserved.",
  };

  return (
    <>
      <Service>{content.name}</Service>
      <ServiceInfo>{content.service}</ServiceInfo>
      <Policy>이용약관 | 개인정보처리방침</Policy>
      <Line />
      <Row>
        <Column gap="2px">
          <Policy>{content.service}</Policy>
          <Policy>{content.serviceInfo}</Policy>
          <Policy>{content.policy}</Policy>
          <Policy>{content.inquery}</Policy>
          <Copyright>{content.copyRight}</Copyright>
        </Column>
        <QRCode src={QR} alt="qr" />
      </Row>
    </>
  );
};

const Service = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const ServiceInfo = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3%;
`;

const Policy = styled.div`
  font-size: 10px;
  font-weight: 200;
`;

const Copyright = styled.div`
  font-size: 10px;
  font-weight: 200;
  margin-top: 4%;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  margin: 2% 0;
  background-color: ${color.footerContent};
`;

const QRCode = styled(Image)`
  margin-left: auto;
`;

export default Info;
