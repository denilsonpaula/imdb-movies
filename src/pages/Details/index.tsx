import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import API, { API_TOKEN } from '../../services/api';
import * as S from './style'


const Details = () => {
  const { id } = useParams()
  const [values, setValues] = useState<{ title: string, synopsis: string, banner: string }>({ title: '', synopsis: '', banner: '' })
  const handleDetails = useCallback(async () => {
    const { data } = await API.get(`/Title/${API_TOKEN}/${id}`)
    setValues({ title: data.title, synopsis: data.plot, banner: data.image })
    console.log(data);
  }, [id])

  useEffect(() => {
    handleDetails()
  }, [handleDetails, id])

  return (
    <S.Container>
      <S.Back>
        Voltar
      </S.Back>
      <S.Wrapper>
        <S.WrapperText>
          <S.Title>
            {values.title}
          </S.Title>
          <S.Synopsis>
            {values.synopsis}
          </S.Synopsis>
        </S.WrapperText>
        <S.Banner>
          <S.Image src={values.banner} >

          </S.Image>
        </S.Banner>
      </S.Wrapper>
    </S.Container>
  );
}

export default Details;
