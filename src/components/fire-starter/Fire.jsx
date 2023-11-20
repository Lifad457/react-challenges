import { FireContainer } from "../../styles/fire-starter/fire-starter.css"

export default function Fire({woodOnFire}) {
    if (woodOnFire) {
        return (
            <FireContainer>
				<span className="fire vibrate">🔥</span>
			</FireContainer>  
        )     
    } else {
        return null
    }
}