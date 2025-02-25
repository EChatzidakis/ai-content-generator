'use client';
import React, { JSX, useEffect, useState } from 'react';

import axios from 'axios';
import PageWrapper from '../components/ui/PageWrapper';
import Card from '../components/ui/Card';
import ChatBubble from '../components/ui/ChatBubble';
import Textarea from '../components/ui/Textarea';

interface DialogItem {
  message: string;
  role: 'gpt' | 'user';
  timestamp: string;
}

const Home: React.FC = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [dialog, setDialog] = useState<DialogItem[]>([]);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  useEffect(() => {
    const shouldDisableGenerateButton = textareaValue.length === 0;
    setDisabledSubmit(shouldDisableGenerateButton);
  }, [textareaValue]);

  const handleSetInputValue = (val: string) => {
    setTextareaValue(val);
  };

  const handleGenerate = async () => {
    try {
      const userDialogItem: DialogItem = {
        message: textareaValue,
        role: 'user', 
        timestamp: new Date().toISOString()
      };
      const prompt = textareaValue;
      const res = await axios.post('/api/generate', { prompt });
      const gptDialogItem: DialogItem = {
        message: res.data.result,
        role: 'gpt',
        timestamp: new Date().toISOString()
      };
      const newDialogItems = [...dialog, userDialogItem, gptDialogItem];
      setDialog(newDialogItems);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleRenderDialog: () => JSX.Element | null = () => {
    if (dialog.length === 0) {
      return null;
    }

    const chatBubbles = dialog.map((item, index) => {
      return (
        <ChatBubble
          key={index}
          content={item.message}
          isUser={item.role === 'user'}
        />
      );
    });

    return (
      <React.Fragment>
        <div className="dialog-wrapper max-h-[250px] overflow-y-auto">{chatBubbles}</div>
        <div className="divider" />
      </React.Fragment>
    );
  };

  return (
    <PageWrapper>
      <div className='left-sidebar w-[25vw] h-[100%] bg-teal'>I have to fit on the left side of the screen</div>
      <Card
        title="Write a prompt!"
        hasButton
        isButtonDisabled={disabledSubmit}
        buttonName="Generate"
        onButtonClick={handleGenerate}
      >
        {handleRenderDialog()}
        <Textarea
          placeholder="Write a prompt."
          value={textareaValue}
          onChange={handleSetInputValue}
          onSubmit={handleGenerate}
        />
      </Card>
    </PageWrapper>
  );
};

export default Home;
