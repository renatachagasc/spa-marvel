import React from 'react';
import './styles.css';
import { FaHeart } from 'react-icons/fa';

interface HeroCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} className='card-image' />
      <div className='card-content'>
        <div className='card-header'>
          <p className='card-title'>{title}</p>
          <FaHeart/>
        </div>
        <p className='card-description'>{description}</p>
      </div>
    </div>
  );
};

export default HeroCard;
