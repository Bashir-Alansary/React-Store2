import React from 'react'
import { Link } from 'react-router-dom';
import { pages, media, paymentWays, contactWays } from '../Assets/footerData'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
            <div className='content'>
                <div className='container'>
                    <div className='info'>
                        <div className='desc'>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus,
                                 duis faucibus enim vitae duis faucibus enim vitae
                            </p>
                            <ul className='media'>
                                {
                                    media.map(item=>{
                                        const{id, icon, link} = item;
                                        return(
                                            <li key={id}>
                                                <a href={link} >
                                                    <img src={icon} />
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='footer-logo'>
                            <img src='images/logo.png' />
                            <ul className='pages'>
                                {
                                    pages.map((item, i)=>{
                                        const{id, name, link} = item;
                                        return(
                                            <li key={id} className='page'>
                                                {i < pages.length - 1 ?
                                                <><Link className='link' to={link} >{name}</Link><span className='slash'>/</span></>
                                                : <Link className='link' to={link} >{name}</Link>
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='details'>
                            <ul className='contact-ways'>
                                {
                                    contactWays.map(item=>{
                                        const{id, name, icon} = item;
                                        return(
                                            <li key={id}>
                                                <div className='icon'>{icon}</div>
                                                <p>{name}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className='payment-ways'>
                                {
                                    paymentWays.map(item=>{
                                        const{id, name, img} = item;
                                        return(
                                            <li key={id}>
                                                <img src={img} alt={name} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        <hr />
        <div className='rights'>
            <div className='container'>
                <p className='copyright'>
                    Copyright © 2021 Vinovathemes. All rights reserved.
                </p>
                <div className='terms'>
                    <a href='#'>Privacy Policy</a>
                    <span className='slash'>|</span>
                    <a href='#'>Terms of Use</a>
                    <span className='slash'>|</span>
                    <a href='#'>FAQs</a>
                </div>
            </div>
        </div>
        <div className='blur-color'></div>
    </div>
  )
}
