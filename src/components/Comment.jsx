import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
display:flex;
flex-direction:column
gap:10px
color:${({ theme }) => theme.textSoft}`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
font-size:12px;
font-weight:400
color:${({ theme }) => theme.textSoft}
margin-left:5px`;
const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://media.licdn.com/dms/image/D4D35AQGJMORsETlDVw/profile-framedphoto-shrink_400_400/0/1701264999445?e=1717077600&v=beta&t=4ai2ZMpF-yPHewx6T-1d4OyGH0JtTGP_8u9hqk_TBeE" />
      <Details>
        <Name>
          Onur Gulecoglu <Date>1 Day ago</Date>{" "}
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          repellendus placeat iusto blanditiis nihil pariatur eaque rerum sint
          cupiditate! Blanditiis temporibus fuga perspiciatis tempora aliquam
          impedit perferendis adipisci repellendus tenetur.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
