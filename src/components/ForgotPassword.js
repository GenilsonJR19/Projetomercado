import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import './recuperar.css' 

import { MdEmail } from "react-icons/md"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
  
      <div className="recuperar">
      <div className="recuperar-right">
          <h2 className="text-center mb-4">Recuperar senha</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          
          <div className="recuperar-recuperarInputemail">
               <MdEmail />
                <input
               placeholder="Digite seu email"
                 type="email" ref={emailRef} required /> 
                   </div>
          <Form onSubmit={handleSubmit}>
            <Button disabled={loading} className="Buttonrec" type="submit">
              Recuperar senha
            </Button>
          </Form>
        
      <div className="lembrei">
        Lebrou sua Senha? <Link to="/login">Logar</Link>
      </div>
      </div>
      </div>
    </>
  )
}
