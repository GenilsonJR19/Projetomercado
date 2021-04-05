import React, { useRef, useState, Component } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { MdEmail, MdLock } from "react-icons/md"
import {signInWithGoogle} from "../firebase"
import './login.css'



export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

  
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Falha ao logar")
    }

    setLoading(false)
  }

  return (
    <>
    
    <div className="login">
      <div className="login-right">
            <h1>LOGIN</h1>
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
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="login-loginInputEmail">
               <MdEmail />
               <input placeholder="Digite seu email" type="email" ref={emailRef} required /> 
            </div>

            <div className="login-loginInputPassword">
               <MdLock />
               <input placeholder="Digite sua senha" type="password" ref={passwordRef} required />

            </div>
            
            <Form onSubmit={handleSubmit}>

            <div className="recuperacao">
  <Link to="/forgot-password">Esqueceu sua senha?</Link>
</div> 
            <Button disabled={loading} className="w-100" type="submit">
             Entrar
            </Button>

            </Form>

      <div className="cadastrobutton">
        Ainda não tem conta? <Link to="/signup">Cadastre-se</Link>
      </div>
      </div> 
      </div>
      
      

   
     





    </>
  )
}

/*src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"

var config = {
  apiKey: "AIzaSyCvTdQ8L8HSr7cWigV5WADBLtFyvqy1M9c",
  authDomain: "mercado-em-casa-306815.firebaseapp.com",
  projectId: "mercado-em-casa-306815",
  storageBucket: "mercado-em-casa-306815.appspot.com",
  messagingSenderId: "251036632295",
  appId: "1:251036632295:web:7d14285085bbe1c5fb8e42",
  measurementId: "G-3K7MM04DRT"
  };

  firebase.initializeApp(config);

  googleSignin=()=>
    base_provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signinWithPopup(base_provider).then(function(result){
        console.log(result)
        console.log("Success.. Google Account Linked")
    }).catch(function(err){
      console.log(err)
      console.log("Failed to do")
    })
*/