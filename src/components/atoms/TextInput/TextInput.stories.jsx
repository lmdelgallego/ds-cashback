import { Form, Formik } from 'formik';
import React from 'react';
import { TextInput } from './TextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Ui/Atom/TextInput',
  component: TextInput,
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
const Template = (args) => <TextInput name='input' {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'input',
  label: 'Text Input',
  placeholder: 'TextInput',
};
