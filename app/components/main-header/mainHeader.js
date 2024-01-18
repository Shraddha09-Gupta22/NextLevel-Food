import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';
import Image from 'next/image';
import MainHeaderBackgraound from './mainHeaderBackground';
import NavLink from './nav-link';


export default function MainHeader(){
    return(
        <>
        <MainHeaderBackgraound />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
               <Image src = {logoImg} alt="Food on the plate" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href = "/meals">Browse Meals</NavLink>
                </li>
                <li>
                   <NavLink href = "/community">Foodies Community</NavLink>
                </li>
            </ul>
            </nav>
        </header>
        </>
    );
}