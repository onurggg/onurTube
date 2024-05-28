import React from "react";
import { styled } from "styled-components";
import reactt from "../img/react-imp.webp";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "25px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
`;

const Details = styled.div`

  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"}
  gap: 12px;
  flex:1;


`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
  background-color: #999;
  margin-top: 5px;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-left: 10px;
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://st.depositphotos.com/1722785/4719/i/450/depositphotos_47194105-stock-photo-spiral-galaxy-in-deep-space.jpg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://media.licdn.com/dms/image/D4D35AQGJMORsETlDVw/profile-framedphoto-shrink_400_400/0/1701264999445?e=1717077600&v=beta&t=4ai2ZMpF-yPHewx6T-1d4OyGH0JtTGP_8u9hqk_TBeE"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Onur Pap</ChannelName>
            <Info>666.666 views * 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
