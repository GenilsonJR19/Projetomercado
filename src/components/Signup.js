import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './cadastro.css'
import {signInWithGoogle} from "../firebase"

import { MdEmail, MdLock } from "react-icons/md"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Falha ao criar conta")
    }

    setLoading(false)
  }

  return (
    <>
      
      <div className="cadastro">
      <div className="cadastro-right">
          <h2 className="text-center mb-4">Criar conta</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <ul class="list-social-media">
         <a class="link-social-media2" onClick={signInWithGoogle}>
                            <li class="item-social-media2">
                                <i class="fab fa-google"></i>
                            </li>
                        </a>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>
        </ul>
        <h4>ou</h4>
          <div className="cadastro-cadastroInputemail">
               <MdEmail />
                <input
               placeholder="Digite seu email"
                 type="email" ref={emailRef} required /> 
               
            </div>

            <div className="cadastro-cadastroInputPassword">
               <MdLock />
               <input
                  placeholder="Digite sua senha"
                  type="password" ref={passwordRef} required />

            </div>
            <div className="cadastro-cadastroInputConfPassword">
               <MdLock />
               <input
                  placeholder="Confirme sua Senha"
                  type="password" ref={passwordConfirmRef} required />

            </div>

          <Form onSubmit={handleSubmit}>
            <Button disabled={loading} className="button" type="submit">
              Criar conta
            </Button>
          </Form>
       
    
      <div className="logarbutton">
       Já possui conta? <Link to="/login">Logar</Link>
      </div>
      </div>
      </div>
    </>
  )
}
