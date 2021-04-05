import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { MdEmail, MdLock } from "react-icons/md"
import './update.css'

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Senhas diferentes")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
          <div className="update">
          <div className="update-right">
          <h2 className="text-center mb-4">Atualizar Perfil</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          
          <div className="updateInputemail">
               <MdEmail />
                <input
               placeholder="Digite seu email"
                 type="email" ref={emailRef} required defaultValue={currentUser.email} /> 
               
            </div>

            <div className="updateInputPassword">
               <MdLock />
               <input
                  placeholder="Digite sua senha"
                  type="password" ref={passwordRef} required />

            </div>
            <div className="updateInputConfPassword">
               <MdLock />
               <input
                  placeholder="Confirme sua Senha"
                  type="password" ref={passwordConfirmRef} required />

            </div>
          <Form onSubmit={handleSubmit}>
            <Button disabled={loading} className="buttonUpdate" type="submit">
              Atualizar
            </Button>
          </Form>
        
      <div className="cancelar">
        <Link to="/">Cancelar</Link>
      </div>
      </div>
      </div>
    </>
  )
}
