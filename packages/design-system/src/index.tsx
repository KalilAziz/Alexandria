import { colorsWhite } from '@alexandria-ui/tokens'
import { styled } from './styles'

const Button = styled('div', {
  color: '$amber10',
})

export const App = () => {
  console.log(colorsWhite.yellow9)
  return <Button>teste teste</Button>
}
