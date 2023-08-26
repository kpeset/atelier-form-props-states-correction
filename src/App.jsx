/* eslint-disable react/no-unescaped-entities */

import LoginForm from "./assets/components/LoginForm"

function App() {

  const allowedUser = {
    userName: "admin",
    password: "secret"
  }

  return (
    <>
      <header>
        <h1>Espace connexion</h1>
        <p>Connectez-vous pour accéder à l'intégralité de nos services en ligne.</p>
      </header>

      <LoginForm {...allowedUser} />
    </>
  )
}

export default App
