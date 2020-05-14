import * as React from 'react'
import logo from '../assets/static/logo.svg'
import { Link } from 'react-router-dom'
import '../assets/style/components/Header.scss'

const Header: React.FC = () => {

    return (
        <header className='Header'>
            <div className='container'>
                <Link to='/'><img src={logo} alt='logo'/></Link>
            </div>
        </header>
    )
}
export default Header
