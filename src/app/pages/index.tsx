import HeroCard from '@/components/HeroCard';
import React from 'react';

const Home = () => {
  return (
    <>
      <header>
        <div className='container'>
          <div className='description'>
            <h1>EXPLORE O UNIVERSO E CRIE SUA EQUIPE</h1>
            <h2>Os melhores personagens já feitos em quadrinhos. Fique viciado em uma generosa porção de heróis e vilões!</h2>
          </div>
        </div>
      </header>
      <HeroCard title={'Spider Man'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.'} imageUrl={''}/>
    </>
  );
};

export default Home;