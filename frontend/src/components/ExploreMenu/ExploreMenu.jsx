import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Entdecken Sie unseren Menu</h1>
            <p className='explore-menu-text'>Wählen Sie aus unserem vielfältigen Menü, das eine köstliche Auswahl an Gerichten bietet, die mit den besten Zutaten und kulinarischer Expertise zubereitet werden. Unsere Mission ist es, Ihre Gelüste zu stillen und Ihr kulinarisches Erlebnis mit jeder köstlichen Mahlzeit zu bereichern.</p>

            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>

            <hr />
        </div>
    )
}

export default ExploreMenu