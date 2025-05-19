import React from 'react';
import styled from 'styled-components';

const NotFound404 = () => (
    <NotFoundContainer>
        <NotFountContent>
            <NotFoundInfo>Ooops! The page you are looking for could not be found :(</NotFoundInfo>
        </NotFountContent>
    </NotFoundContainer>
);

export default NotFound404;


const NotFoundContainer = styled.div`
  text-align: center;
  height: 90vh;
  overflow: auto;
  display: flex;
  // background: url(/img/404/bg_404.jpeg) no-repeat center;
  background-size: cover;

  button {
    margin: 0;
  }
`;

const NotFountContent = styled.div`
  margin: auto;
  padding: 10px;
`;

const NotFoundInfo = styled.h3`
  margin-bottom: 20px;
  margin-top: 90px;
`;

