import React from 'react';

interface AvatarInitialsProps {
  name?: string;
  src?: string;
}

const AvatarInitials: React.FC<AvatarInitialsProps> = ({ name = 'U' }) => {
  const getInitials = (name: string) => {
    const nameArray = name.split(' ');
    if (nameArray.length > 1) {
      return nameArray.map((name) => name[0]).join('');
    }
    return name[0];
  };

  const initials = getInitials(name);
  return (
    <div tabIndex={0} className="avatar-placeholder avatar">
      <div className="w-8 rounded-full bg-neutral text-neutral-content">
        <span className="text-lg">{initials}</span>
      </div>
    </div>
  );
};

export default AvatarInitials;
