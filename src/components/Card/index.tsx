import React from 'react';
import * as S from './style'

const Card: React.FC<{ image: string; title: string; rating?: number; id: string; }> = ({ image, title, rating, id }) => {
  return (
    <S.Container href={`/${id}`}>
      <S.Image src={image} >

      </S.Image>
      <S.Title>
        {title}
      </S.Title>

    </S.Container>
  )
}
export default Card