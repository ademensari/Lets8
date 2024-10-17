import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p class="large">App herunterladen</p>
            <p class="medium">neue Angeboten zu profitieren.</p>
            <p class="small">Let's ei<span class="lowercase">8</span>ht App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt=""/>
                <img src={assets.app_store} alt=""/>
            </div>

        </div>
    )
}

export default AppDownload