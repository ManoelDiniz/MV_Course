import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon }) => {
  return <>{icon}</>;
};

export default IconWrapper;