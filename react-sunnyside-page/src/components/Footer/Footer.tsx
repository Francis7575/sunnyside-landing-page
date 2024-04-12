import styles from './Footer.module.css'
import logo from '../../assets/logo-footer.svg'
import facebook from '../../assets/icon-facebook.svg'
import instagram from '../../assets/icon-instagram.svg'
import twitter from '../../assets/icon-twitter.svg'
import pinterest from '../../assets/icon-pinterest.svg'

const Footer = () => {
    return (
        <footer>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Sunnyside logo" />
            </div>
            <ul className={styles.ul}>
                <li><a className={styles.link} href="#">About</a></li>
                <li><a className={styles.link} href="#">Services</a></li>
                <li><a className={styles.link} href="#">Projects</a></li>
            </ul>

            <div className={styles.mediaContainer}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
            </div>
        </footer>
    )
}

export default Footer