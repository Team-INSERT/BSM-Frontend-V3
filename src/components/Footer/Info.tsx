import React from "react";
import styled from "styled-components";
import Image from "next/image";

import QR from "./images/QR.png";

const Info = () => {
  return (
    <>
      <Title>BSM</Title>
      <Service>부산소마고 학생 정보 관리 시스템</Service>
      <Policy>이용약관 | 개인정보처리방침</Policy>
      <Line />
      <Flex>
        <Wrap>
          <Policy>
            부산소마고학생정보관리시스템 | 대표 : 홍지민 | 부산광역시 강서구
            가락대로 1393
          </Policy>
          <Policy>
            개인정보책임관리자 : 김호현 | 소개 사이트 : insert.com
          </Policy>
          <Policy>비즈니스 문의 : insert@gmail.com</Policy>
          <Policy style={{ margin: "1% 0" }}>
            ©2023. team insert. All rights reserved.
          </Policy>
        </Wrap>
        <QRCode src={QR} alt="qr" />
      </Flex>
    </>
  );
};

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const Service = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 3% 0;
`;

const Policy = styled.div`
  font-size: 10px;
  line-height: 15px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 2% 0;
  background-color: #d9d9d9;
`;

const Flex = styled.div`
  display: flex;
`;

const Wrap = styled.div``;

const QRCode = styled(Image)`
  margin-left: auto;
`;

export default Info;
