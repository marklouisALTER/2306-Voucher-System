import { useState } from 'react';
import { Input, Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

const Clipboard = ({ user_num }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = user_num;

    if (!textToCopy) {
      // Handle the case where userInformation.user_num is undefined or null
      message.error('No text to copy');
      return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    // Make the textarea invisible
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    
    document.body.appendChild(textArea);

    // Select and copy the text
    textArea.select();
    document.execCommand('copy');

    // Clean up and notify the user
    document.body.removeChild(textArea);
    setIsCopied(true);
    message.success('Text copied to clipboard');
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-md mt-5 font-primary text-white mb-2'>
        Key ID: {user_num}        
      </h1>
      <Input value={user_num} readOnly hidden/>
      <Button
        type="primary"
        onClick={handleCopyClick}
        icon={<CopyOutlined />}
        disabled={isCopied}
      >
        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
      </Button>
    </div>
  );
};

export default Clipboard;
