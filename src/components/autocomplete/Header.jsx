import squareCheckSolid from '../../assets/images/autocomplete/square-check-solid.svg';
import { HeaderIcon, HeaderIconContainer } from '../../styles/autocomplete/autocomplete.css';

export default function Header() {
    return (
        <header>
            <div>
                <HeaderIconContainer>
                    <HeaderIcon src={squareCheckSolid}/>
                </HeaderIconContainer>
                <h1>AutoComplete</h1>
            </div>
            <h2>The Automated To-Do List</h2>
        </header>
    )
}