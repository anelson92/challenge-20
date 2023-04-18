import Navigation from './Nav';
import Button from '@mui/material/Button'
import styles from '../styles/styles.module.css'


const Header  = () => {
    return (
        <header className="header">
            <h1 style={{fontSize: '100px'}}>Amanda Nelson</h1>
            <Button className={styles.navLink} onClick={() =>handlePageChange('Home')} variant="text">Home</Button>
            <Button className={styles.navLink} onClick={() =>handlePageChange('About')} variant="text">About</Button>
            <Button className={styles.navLink} onClick={() => handlePageChange('Portfolio')} variant="text">Portfolio</Button>
            <Button className={styles.navLink} onClick={() =>handlePageChange('Contact')} variant="text">Contact</Button>
           
        </header>
    )
}

export default Header;