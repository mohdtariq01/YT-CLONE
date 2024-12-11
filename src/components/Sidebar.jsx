import React, { useContext } from 'react'
import { categories } from '../assets/Constant'
import { Context } from '../assets/contextAPI'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const { setselectedCategories } = useContext(Context);
    return (
        <Link to= {'/'}>
            <div className='fixed top-16 px-4 py-4 h-full w-[15%] bg-light-white dark:bg-dark-black'>
                {
                    categories.map((e) => {
                        return (
                            <div className='my-2 hover:cursor-pointer hover:text-lg transition-all ease-out delay-75'
                                onClick={() => { setselectedCategories(e.name) }}
                            >
                                <span className='text-base-red mx-2'>{e.icon}</span>
                                <span className='mx-2 dark:text-font-dark'>{e.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </Link>
    )
}

export default Sidebar