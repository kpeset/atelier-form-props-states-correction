import { useState } from "react";
import PropTypes from "prop-types"
import FlashStatus from "./FlashStatus";

const LoginForm = ({ userName, password }) => {

    const [userLogin, setUserLogin] = useState(undefined)
    const [userPassword, setUserPassword] = useState(undefined)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [messageStatus, setMessageStatus] = useState(undefined)

    const handleChangeUserName = (event) => {
        setUserLogin(event.target.value)

    }

    const handleChangePassword = (event) => {
        setUserPassword(event.target.value)
    }

    const submitForm = (event) => {

        setDisplayMessage(true)

        if (userLogin === userName && userPassword === password) {
            setMessageStatus("Connexion réussie. Veuillez patienter...")
        } else if (!userLogin || !userPassword) {
            setMessageStatus("Veuillez remplir tous les champs.")
        } else {
            setMessageStatus("Erreur de connexion.")
        }

        event.preventDefault()
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Nom d'utilisateur" name="userName" onChange={handleChangeUserName} />
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
