import reminder from '../../assets/images/autocomplete/reminder.svg';
import addCollaborator from '../../assets/images/autocomplete/add-collaborator.svg';
import palette from '../../assets/images/autocomplete/palette.svg';
import addImage from '../../assets/images/autocomplete/add-image.svg';
import more from '../../assets/images/autocomplete/more.svg';
import undo from '../../assets/images/autocomplete/undo.svg';
import redo from '../../assets/images/autocomplete/redo.svg';

export default function BottomBar() {
    return (
        <footer className="bottom-bar-container">
            <img className="icon" src={reminder}/>
            <img className="icon" src={addCollaborator}/>
            <img className="icon" src={palette}/>
            <img className="icon" src={addImage}/>
            <img className="icon" src={more}/>
            <div>
                <img className="icon" src={undo}/>
                <img className="icon" src={redo}/>
            </div>
        </footer>
    )
}