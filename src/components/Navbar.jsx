import React, { useState, useContext} from 'react';
import logo from '../assets/yt-logo.png';
import user from '../assets/user.jpg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';                        
import { Context } from '../assets/contextAPI'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const { setselectedCategories } = useContext(Context);
    const [inputValue, setinputValue] = useState('');
    const [currentThemeIcon, setCurrentThemeIcon] = useState(<DarkModeIcon />)

    const handleInputClick = (event)=>{
        if(event.key === 'Enter'){
            setselectedCategories(inputValue);
        }
    }

    const toggleTheme = ()=>{
        const root = document.getElementById('root');
        if(root.classList.value === 'light'){
            root.classList.value = 'dark';
            setCurrentThemeIcon(<WbSunnyIcon />);
        }else{
            root.classList.value = 'light';
            setCurrentThemeIcon(<DarkModeIcon />)
        }
    }

    return (
        <div className='flex items-center justify-between h-[10%] px-8 bg-light-white dark:bg-dark-black fixed top-0 left-0 w-full z-10'>
            <Link to={'/'}> <img className='h-14 w-14' src={logo} alt="logo" /> </Link>
            <div className="relative">
                <input
                    className="h-10 w-[32rem] border border-dark-black pl-12 pr-4 rounded-3xl outline-none"
                    type="text"
                    placeholder="Search"
                    onChange={(e)=>{ setinputValue(e.target.value)}}
                    onKeyPress={ handleInputClick }
                />
                <SearchIcon className="absolute left-3 top-2.5 text-dark-gray dark:text-gray-500 hover:cursor-pointer" />
            </div>
            <div className='flex items-center hover:cursor-pointer'>
                <NotificationsNoneIcon className='text-dark-black dark:text-light-white mx-4'/>
                <img className='h-8 w-8 rounded-3xl' src={user} alt="user" />
                <div className='mx-2 hover:cursor-pointer dark:text-light-white' onClick={ toggleTheme }>{ currentThemeIcon }</div>
            </div>
        </div>
    )
}

export default Navbar