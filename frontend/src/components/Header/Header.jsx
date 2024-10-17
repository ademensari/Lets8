import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Bestellen einfach und bequem hier</h2>
                <p className='header-p'> Wählen Sie aus einem vielfältigen Menü, das eine köstliche Auswahl an Gerichten bietet, die mit den besten Zutaten und kulinarischer Expertise zubereitet werden. Unsere Mission ist es, Ihre Gelüste zu stillen und Ihr kulinarisches Erlebnis mit jeder köstlichen Mahlzeit zu bereichern. </p>
                <button>Entdecken Sie unseren Menu</button>
            </div>
        </div>
    )
}

export default Header