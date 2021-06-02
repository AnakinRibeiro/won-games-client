import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

// page recebe as props do return da getServerSideProps()
export default function Index(props: HomeTemplateProps) {
  // props sendo passadas para o componente (Template Home)
  return <Home {...props} />
}

// Static => gerar estático em build time
export function getServerSideProps() {
  // faz lógica
  // pode buscar dados em uma API
  // fazer calculo/leitura de context

  // retorno dos dados
  // dados serão automaticamente enviados para a page
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
