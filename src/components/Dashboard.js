import React, { useState } from "react"
import {Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './perfil.css'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    
     <div className="perfil">
       <div className= "perfil-right">
          <h2 className="text-center mb-4">Perfil</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}

          <Link to="/update-profile" className="atualizar">
            Atulaizar Perfil
          </Link>
    
      <div className="sair">
        <Button variant="link" onClick={handleLogout}>
          Sair
        </Button>
      </div>
      </div>
      </div>
    </>
  )
}
