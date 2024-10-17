import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {


    const {url, setToken} = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("Einloggen")
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name ;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currentState === "Einloggen") {
            newUrl += "/api/user/login"
        }

        else {
            newUrl += "/api/user/register"
        }


        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }






    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">


                <div className="login-popup-title">
                    <h2>{currentState === "Einloggen" ? "Einloggen" : "Anmelden"}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt=""/>
                </div>

                <div className="login-popup-input">
                    {/* Eğer 'Anmelden' ise isim sor, 'Einloggen' ise sorma */}
                    {currentState === "Anmelden" && (
                        <input
                            name='name'
                            onChange={onChangeHandler}
                            value={data.name}
                            type='text'
                            placeholder='Ihr Name'
                            required
                        />
                    )}
                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder='Ihr E-Mail Adresse'
                        required
                    />
                    <input
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder='Passwort'
                        required
                    />
                </div>

                {currentState === "Anmelden" && (
                    <div className="login-popup-offers">
                        <label>
                            <input
                                type="checkbox"
                                name="receiveOffers"
                                checked={data.receiveOffers}
                                onChange={onChangeHandler}
                            />
                            Ich möchte Rabatte, Angebote, und Updates erhalten.
                        </label>
                    </div>
                )}

                <button type='submit'>
                    {currentState === "Einloggen" ? "Einloggen" : "Anmelden"}
                </button>

                {/* Checkbox ve mesaj */}
                {currentState === "Anmelden" && (
                    <div className="login-popup-condition">
                        <input type="checkbox" required />
                        <p>Beim Klicken auf "Account erstellen“ erklärst du dich mit unseren AGB, Geschäftsbedingungen zur Sammlung von Punkten und Datenschutzerklärung einverstanden.</p>
                    </div>
                )}

                {/* Duruma göre yönlendirme */}
                {currentState === 'Einloggen' ? (
                    <p>Neues Konto erstellen? <span onClick={() => setCurrentState('Anmelden')}>Hier klicken</span></p>
                ) : (
                    <p>Bereits ein Konto? <span onClick={() => setCurrentState('Einloggen')}>Hier Einloggen</span></p>
                )}
            </form>
        </div>
    )
}

export default LoginPopup;