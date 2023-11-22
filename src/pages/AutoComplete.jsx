import ToDoList from "../components/autocomplete/ToDoList"
import BottomBar from "../components/autocomplete/BottomBar"
import Header from "../components/autocomplete/Header"
import GlobalStyle from "../styles/autocomplete/global.css"
import { Wrapper } from "../styles/autocomplete/autocomplete.css"

export default function AutoComplete() {
        
  return (
    <>
        <GlobalStyle />
        <Wrapper>
            <Header />
            <ToDoList />
            <BottomBar />
        </Wrapper>
    </>
  )
}