import React, { useEffect, useState } from 'react';
import './Header.css';
import '../../tailwind.css';
import Button from '../Button/Button';

const Header = ({ title, link, img, sign, signLink }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePathChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePathChange);
        return () => window.removeEventListener('popstate', handlePathChange);
    }, []);

    const navs = [
        {
            links: "#",
            listItem: "Home"
        },
        {
            links: "#",
            listItem: "Careers"
        },
        {
            links: "#",
            listItem: "About"
        },
        {
            links: "#",
            listItem: "Security"
        },
    ];

    return (
        <div className='fixed w-full top-[30px]'>
            <div className='flex items-center justify-between w-[90%] mx-auto bg-[#1C1C1C] rounded-[100px] px-[24px] py-[14px] border border-solid border-[#262626]'>
                <div className=''>
                    <a href={link} className='text-white flex items-center'>
                        <img src={img} alt='Logo' />
                        <h1>{title}</h1>
                    </a>
                </div>
                <div>
                    <ul className='flex items-center gap-5'>
                        {navs.map(nav => {
                            const isActive = currentPath === nav.links;
                            const activeClassName = isActive ? 'text-red-500 font-bold' : 'text-white';

                            return (
                                <li key={nav.listItem}>
                                    <a href={nav.links} className={`text-sm text-white hover:bg-[#262626] py-2.5 px-[18px] rounded-[82px] ${activeClassName}`}>{nav.listItem}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex items-center gap-10'>
                    <a href={signLink} className='text-white text-sm'>
                        {sign}
                    </a>
                    <Button
                        label="Login"
                        type="button"
                        logLink="#"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;