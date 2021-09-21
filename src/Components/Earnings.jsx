import React from 'react';
import styled from 'styled-components';
import { IoStatsChart } from 'react-icons/io5';
import { themeColor, hoverEffect } from '../utils';

function Earnings() {
  return (
    <EarningsCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <EarningsText>Earnings</EarningsText>
        <Earning>$11,875</Earning>
        <EarningsIncrease>+ 14% since last month</EarningsIncrease>
      </CardContent>
    </EarningsCard>
  );
}

const EarningsCard = styled.div``;

const CardContent = styled.div``;

const Chart = styled.div``;

const EarningsText = styled.h3``;

const Earning = styled.h2``;

const EarningsIncrease = styled.h5``;

export default Earnings;
