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

const JoinChannel = styled.div``;

const CardContent = styled.div``;

const SlackCard = styled.div``;

const SlackLogo = styled.div``;

const SlackText = styled.div``;

const SlackHead = styled.h2``;

const SlackFoot = styled.h5``;

const SlackJoin = styled.button``;

export default Slack;
