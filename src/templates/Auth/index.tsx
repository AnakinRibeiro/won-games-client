import Heading from 'components/Heading'
import Logo from 'components/Logo'
import React from 'react'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />
      <Heading>All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complet gaming platform
      </S.Subtitle>
      <S.Footer>Won Games 2021 © Todos os Direitos Reservados</S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo color="black" size="large" />
      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
