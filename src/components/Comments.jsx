import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
display:flex
align-items:center
gap:10px`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  widt: 100px;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://media.licdn.com/dms/image/D4D35AQGJMORsETlDVw/profile-framedphoto-shrink_400_400/0/1701264999445?e=1717077600&v=beta&t=4ai2ZMpF-yPHewx6T-1d4OyGH0JtTGP_8u9hqk_TBeE" />
        <Input placeholder="Add a Comment"></Input>
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};
export default Comments;
