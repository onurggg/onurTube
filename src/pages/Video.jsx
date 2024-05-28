import React from "react";
import styled from "styled-components";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import DownloadIcon from "@mui/icons-material/Download";
import { Reply } from "@mui/icons-material";
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Hr = styled.hr`
  margon: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  cursor: pointer;
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display:flex
  justify-content:space-between;;

`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 54400;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;

  padding: 10px 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
margin-top:5px
margin-bottom:50px
color:${({ theme }) => theme.textSoft};
font-size:12px;
`;
const Description = styled.p`
  font-size: 14px;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="
          https://www.youtube.com/watch?v=Pt7CHgVyYLk"
            title="Youtube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title> Test Video</Title>
        <Details>
          7,948,154 views Jun 22, 2022
          <Buttons>
            <Button>
              <ThumbUpAltIcon />
              123
            </Button>
            <Button>
              <ThumbDownIcon />
            </Button>
            <Button>
              <ReplyIcon />
            </Button>
            <Button>
              <ThumbDownIcon />
            </Button>
            <Button>
              <DownloadIcon />
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://media.licdn.com/dms/image/D4D35AQGJMORsETlDVw/profile-framedphoto-shrink_400_400/0/1701264999445?e=1717077600&v=beta&t=4ai2ZMpF-yPHewx6T-1d4OyGH0JtTGP_8u9hqk_TBeE" />
            <ChannelDetail>
              <ChannelName>OnurPap</ChannelName>
              <ChannelCounter>200k Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                beatae perspiciatis ab omnis corrupti amet sit vel praesentium
                ducimus id hic veniam nulla dicta eum a saepe odio? Accusamus,
                praesentium!
              </Description>
            </ChannelDetail>
            <Subscribe>SUBSCRİBE</Subscribe>
          </ChannelInfo>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
