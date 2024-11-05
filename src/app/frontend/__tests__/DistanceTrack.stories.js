import React from 'react';
import GameComponent from '../src/GameComponent';

export default {
  title: 'Game/Obstacle Increase',
  component: GameComponent,
};

const Template = (args) => <GameComponent {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {
  passObstacleCount: 0,
};

export const IncreasedObstacles = Template.bind({});
IncreasedObstacles.args = {
  passObstacleCount: threshold,
};
