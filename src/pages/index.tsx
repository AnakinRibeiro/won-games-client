import Home from 'templates/Home'

export default function Index() {
  return <Home />
}

// // Static => gerar estático em build time
// export function getServerSideProps() {
//   return {
//     props: {
//       heading: 'AAAAaaa'
//     }
//   }
// }
