import React from 'react';
import { Form, Select } from '../UI';

const PromptSettingsFormComponent: React.FC = () => {
  return (
    <Form>
      {/* Add form fields here */}
      <Select
        label="Type"
        options={['Option 1', 'Option 2']}
        selected={'Option 1'}
        onChange={(value) => console.log(value)}
      />
      <Select
        label='Tone'
        options={['Option 1', 'Option 2']}
        selected='Option 1'
        onChange={(value) => console.log(value)}
      />
      <Select
        label='Creativity'
        options={['Option 1', 'Option 2']}
        selected='Option 1'
        onChange={(value) => console.log(value)}
      />
    </Form>
  );
};

export const PromptSettingsForm = PromptSettingsFormComponent;
