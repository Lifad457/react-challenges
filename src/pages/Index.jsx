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
                <Link to='original-calculator'>Original Calculator</Link>
                <Link to='dashboard'>Save the Dashboard</Link>
                <Link to='fire-starter'>Fire Starter</Link>
                <Link to='autocomplete'>Auto Complete</Link>
                <Link to='bd-card'>Birth Day Card</Link>
                <Link to='photo-editor'>Photo Editor</Link>
                <Link to='finger-strength'>Finger Strength Test</Link>
                <Link to='sonnet-central'>Sonnet Central</Link>
                <Link to='virtual-reality'>Virtual Reality Site</Link>
                <Link to='sketch-o-matic'>Sketch-O-Matic</Link>
                <Link to='pookemon'>Pookemon</Link>
                <Link to='space-warrior'>Space Warrior</Link>
              </Links>
          </Container>
    </>
  )
}

export default Index
