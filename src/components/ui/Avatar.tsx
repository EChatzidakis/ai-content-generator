import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  name?: string;
  src?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name = '', src = '/globe.svg' }) => {
  return (
    <div tabIndex={0} role="button" className="avatar cursor-pointer">
      <div className="w-8 rounded-full">
        <Image alt={name} src={src} height={8} width={8} />
      </div>
    </div>
  );
};

export default Avatar;
