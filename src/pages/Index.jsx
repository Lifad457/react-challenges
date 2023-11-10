import viteLogo from '../assets/icons/vite.svg'
import reactLogo from '../assets/icons/react.svg'
import { 
  Container,
  Images,
  Links
} from '../styles/index.css'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <>
       <Container>
              <Images src={viteLogo} alt="Vite logo" />
              <Images src={reactLogo} alt="React logo" />
              <h1>React Challenges : </h1>
              <Links>
                <Link to='study-buddy'>Study Buddy</Link>
                <Link to='character-creator'>RPG Character Creator</Link>
                <Link to='math-o-matic'>Math-O-Matic</Link>
              </Links>
          </Container>
    </>
  )
}

export default Index