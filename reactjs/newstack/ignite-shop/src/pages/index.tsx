import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  padding: '12px 16px',
  border: 0,
  color: 'White',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  borderRadius: 4
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
