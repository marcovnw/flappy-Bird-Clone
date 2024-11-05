import React from 'react';
import { View } from 'react-native';
import Obstacle from '../src/components/Obstacle'; // Adjust the path as necessary

export default {
  title: 'Game/Obstacle',
  component: Obstacle,
};

const Template = (args) => <Obstacle {...args} />;

export const DefaultObstacle = Template.bind({});
DefaultObstacle.args = {
  size: 50,
  color: 'green',
};

export const LargeObstacle = Template.bind({});
LargeObstacle.args = {
  size: 100,
  color: 'red',
};
