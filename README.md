# Création d'un formulaire avec les States et les Props

## Description de l'atelier

Dans cet atelier, nous devions rendre notre formulaire dynamique en respectant les critères suivants :

- Récupérer les valeurs des inputs
- Afficher un message selon les différents cas de figure (Connexion réussie, rejetée, remplir tous les champs)

## Préparation de l'atelier

Avant toute chose, nous spécifions quel utilisateur sera autorisé. Pour cela nous avons crée dans `App.jsx` la variable suivante :

```
  const allowedUser = {
    userName: "admin",
    password: "secret"
  }
```
Et nous appelons notre composant en envoyant nos props venant de la variable `allowedUser`. 

**ATTENTION :** Ici j'ai utilisé le spread operator.
J'avais oublié que Eslint ne voulait pas qu'on l'utilise. Mais le principe reste le même.

```
<LoginForm {...allowedUser} />
```

Puis maintenant nous pouvons créer le composant `LoginForm.jsx` qui va contenir le formulaire.
N'oubliez pas de dire à notre composant qu'il va recevoir des props.

## Création et utilisation de nos states

Notre formulaire va prendre en compte deux valeurs :
- un username
- un password

Nous devons alors créer nos deux états. **N'OUBLIEZ PAS D'IMPORTER LE HOOK USESTATE** :

```
const [userLogin, setUserLogin] = useState(undefined)
const [userPassword, setUserPassword] = useState(undefined)
```

Nous avons deux fonctions qui permettent d'écouter ce qu'il se passe dans nos inputs text :

```
    const handleChangeUserName = (event) => {
        setUserLogin(event.target.value)

    }

    const handleChangePassword = (event) => {
        setUserPassword(event.target.value)
    }
```

Lorsque la valeur de l'input text change, la valeur est immédiatement stockée dans nos états `userLogin` et `userPassword`.

Pour exécuter ces deux fonctions, nous allons utiliser `onChange` sur nos inputs text :

```
<input type="text" placeholder="Nom d'utilisateur" name="userName" onChange={handleChangeUserName} />
<input type="password" placeholder="Mot de passe" name="password" onChange={handleChangePassword} />
```

## Soumission du formulaire

Lorsque nous appuyons sur le bouton `submit` ou sur la touche "entrée" de notre clavier, nous executons la fonction **submitForm** :

```
<form onSubmit={submitForm}>
```

Analysons la fonction `submitForm` :

```
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
```

La fonction prend en paramètre `event` car dans notre fonction nous utilisons `event.preventDefault()`qui empèche le raffraichissement du formulaire lorsqu'on le soumet.
Puis écrivons nos trois conditions qui vont chacune stocker dans le state `messageStatus` un message à envoyer en tant que props à notre composant `FlashStatus.jsx`. De plus, l'état `displayMessage` passe de false à true afin d'afficher le message en conséquences :
```
const [messageStatus, setMessageStatus] = useState(undefined)

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

```

Et dans le `return` :

```
{displayMessage ? <FlashStatus message={messageStatus} /> : ""}
```

Du côté du composant `FlashStatus.jsx`, nous avons simplement crée un composant qui reçoit les props qui viennent de `messageStatus` :

```
import PropTypes from "prop-types"

const FlashStatus = ({ message }) => {
    return (
        <>
            <p>{message}</p>
        </>
    )
}

FlashStatus.propTypes = {
    message: PropTypes.string.isRequired
}

export default FlashStatus
```








