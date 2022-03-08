import React from 'react';
import spider from '../../images/spider.jpg'
import chihiro from '../../images/chihiro.jpg'
import stars from '../../images/stars.jpg'
import * as S from './style'
import Card from '../../components/Card';
const Home = () => {
  return (
    <S.Container>
        <Card image={spider} title='Espetacular Homem Aranha' id='tt0976192' />
        <Card image={chihiro} title='A Viagem de Chihiro' id='tt0245429'/>
        <Card image={stars} title='Senhor dos Aneis a ' id='tt0120737'/>
    
    
    </S.Container>
  );
}

export default Home;
