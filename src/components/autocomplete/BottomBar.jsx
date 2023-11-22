import reminder from '../../assets/images/autocomplete/reminder.svg';
import addCollaborator from '../../assets/images/autocomplete/add-collaborator.svg';
import palette from '../../assets/images/autocomplete/palette.svg';
import addImage from '../../assets/images/autocomplete/add-image.svg';
import more from '../../assets/images/autocomplete/more.svg';
import undo from '../../assets/images/autocomplete/undo.svg';
import redo from '../../assets/images/autocomplete/redo.svg';
import { BottomBarContainer, Icon } from '../../styles/autocomplete/autocomplete.css';

export default function BottomBar() {
    return (
        <BottomBarContainer>
            <Icon src={reminder}/>
            <Icon src={addCollaborator}/>
            <Icon src={palette}/>
            <Icon src={addImage}/>
            <Icon src={more}/>
            <div>
                <Icon src={undo}/>
                <Icon src={redo}/>
            </div>
        </BottomBarContainer>
    )
}