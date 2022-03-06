import { Form, Formik } from 'formik';
import React from 'react';
import { CheckBox } from './CheckBox';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Ui/Atom/CheckBox',
  component: CheckBox,
  decorators: [
    (story) => (
      <Formik
        initialValues={{
          input: '',
        }}
      >
        <Form>{story()}</Form>
      </Formik>
    ),
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ children, ...args }) => (
  <CheckBox name='checkbox' {...args}>
    {children}
  </CheckBox>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Content CheckBox',
};
