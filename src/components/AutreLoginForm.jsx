/* AUTRE SYNTAXE */
/* Dans cette syntaxe on ne crée pas deux états (loginUserName et loginPassword), mais */
/* un seul état user qui est un objet */

import { useState } from "react";
import PropTypes from "prop-types"
import FlashStatus from "./FlashStatus";

const LoginForm = ({ userName, password }) => {

    const [user, setUser] = useState({
        userName: undefined,
        password: undefined
    })

    const [displayMessage, setDisplayMessage] = useState(false)

    const [messageStatus, setMessageStatus] = useState(undefined)

    const handleChangeValues = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    console.log(user)

    const submitForm = (event) => {

        setDisplayMessage(true)

        if (user.userName === userName && user.password === password) {
            setMessageStatus("Connexion réussie. Veuillez patienter...")
        } else if (!user.userName || !user.password) {
            setMessageStatus("Veuillez remplir tous les champs.")
        } else {
            setMessageStatus("Erreur de connexion.")
        }

        event.preventDefault()

    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Nom d'utilisateur" name="userName" onChange={handleChangeValues} />
                <input type="password" placeholder="Mot de passe" name="password" onChange={handleChangeValues} />
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
