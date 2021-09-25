import React from 'react';
import styled from 'styled-components';
import { FaSlack } from 'react-icons/fa';
import { darkThemeColor, hoverEffect, themeColor } from '../utils';

function Slack() {
  return (
    <JoinChannel>
      <CardContent>
        <SlackCard>
          <SlackLogo>
            <FaSlack />
          </SlackLogo>
          <SlackText>
            <SlackHead>Engage with Clients</SlackHead>
            <SlackFoot>Join our slack channel</SlackFoot>
          </SlackText>
        </SlackCard>
        <SlackJoin>Join Now!</SlackJoin>
      </CardContent>
    </JoinChannel>
  );
}

const JoinChannel = styled.div`
  background-color: ${darkThemeColor};
  height: 50%;
  margin-top: 6rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.5s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SlackCard = styled.div`
  display: flex;
`;

const SlackLogo = styled.div``;

const SlackText = styled.div``;

const SlackHead = styled.h2``;

const SlackFoot = styled.h5``;

const SlackJoin = styled.button``;

export default Slack;
