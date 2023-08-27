import { useState } from "react";
import PropTypes from "prop-types"
import FlashStatus from "./FlashStatus";

const LoginForm = ({ userName, password }) => {

    const [formUserName, setFormUserName] = useState(undefined)
    const [formPassword, setFormPassword] = useState(undefined)

    const [displayMessage, setDisplayMessage] = useState(false)

    const [messageStatus, setMessageStatus] = useState(undefined)



const handleChangeUsername = (event) => {
    setFormUserName(event.target.value)
}

const handleChangePassword = (event) => {
    setFormPassword(event.target.value)
}

    const submitForm = (event) => {

        setDisplayMessage(true)

        if (userName === formUserName && password === formPassword) {
            setMessageStatus("Connexion réussie. Veuillez patienter...")
        } else if (!formUserName || !formPassword) {
            setMessageStatus("Veuillez remplir tous les champs.")
        } else {
            setMessageStatus("Erreur de connexion.")
        }

        event.preventDefault()
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Nom d'utilisateur" name="userName" onChange={handleChangeUsername} />
                <input type="password" placeholder="Mot de passe" name="password" onChange={handleChangePassword} />
                <input type="submit" />
                {displayMessage ? <FlashStatus message={messageStatus} /> : ""}
            </form>
        </>
    )
}

LoginForm.propTypes = {
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm;
