
import { NavLink } from 'react-router'

function Header() {

    return (
        <>
            <header className='w-full h-16 bg-gray-800 text-white'>
                <ul className='flex justify-center items-center h-full'>
                    <li className='text-white'>
                        <NavLink to="/" className='p-4'>Home</NavLink>
                    </li>
                    <li className='text-white'>
                        <NavLink to="/about" className='p-4'>About</NavLink>
                    </li>
                    <li className='text-white'>
                        <NavLink to="/contact" className='p-4'>Contact</NavLink>
                    </li>
                    <li className='text-white'>
                        <NavLink to="/posts" className='p-4'>
                            Posts
                        </NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header