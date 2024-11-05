import React from 'react';
import Background from '../src/components/Background';

export default {
  title: 'Game/Background',
  component: Background,
};

const Template = (args) => <Background {...args} />;

export const InitialBackground = Template.bind({});
InitialBackground.args = {
  progress: 0,
};

export const MidProgressBackground = Template.bind({});
MidProgressBackground.args = {
  progress: 50, // Simulates 50% progression
};

export const FullProgressBackground = Template.bind({});
FullProgressBackground.args = {
  progress: 100, // Simulates complete progression
};
