export default function WelcomeMessage({ userData }) {     
    if (userData.hasEntered) {
        return <p> Welcome!</p>
        } else {
            return null
        }
}