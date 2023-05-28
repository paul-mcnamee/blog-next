import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa';

interface IconProps {
  href: string;
  icon: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='transform text-gray-700 transition-colors duration-300 hover:scale-150 hover:text-primary-500'
    >
      {icon}
    </a>
  );
};

const SocialMediaIcons: React.FC = () => {
  return (
    <div className='flex justify-center space-x-4'>
      <Icon href='mailto:Paul@FourthMouse.com' icon={<FaEnvelope />} />
      <Icon href='https://github.com/paul-mcnamee' icon={<FaGithub />} />
      <Icon
        href='https://www.linkedin.com/in/paul-j-mcnamee/'
        icon={<FaLinkedin />}
      />
      <Icon
        href='https://stackoverflow.com/users/9683122/pmcnamee'
        icon={<FaStackOverflow />}
      />
      <Icon href='https://twitter.com/PMacDev' icon={<FaTwitter />} />
    </div>
  );
};

export default SocialMediaIcons;
