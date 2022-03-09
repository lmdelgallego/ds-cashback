import React from 'react';
import {Message} from './Message';

export default {
  title: 'Ui/Molecules/Messsage',
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const Default = Template.bind({});
Default.args = {
  copy: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quas exercitationem necessitatibus autem expedita assumenda quidem laudantium in facere. Vero itaque quaerat reprehenderit nobis consequuntur id, libero facilis ipsa placeat?'
};
