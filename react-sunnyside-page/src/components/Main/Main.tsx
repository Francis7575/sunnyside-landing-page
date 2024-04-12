import styles from './Main.module.css'
import iconArrowDown from '../../assets/icon-arrow-down.svg'
import GridItems from '../GridItems/GridItems'
import Testimonials from '../Testimonials/Testimonials'
import ImagesSection from '../ImagesSection/ImagesSection'
const MainComponent = () => {
    return (
        <main>
            <section className={styles.section}>
                <h1 className={styles.h1}>We are creatives</h1>
                <div className={styles.iconArrowContainer}>
                    <img src={iconArrowDown} alt="Icon Arrow Down" />
                </div>
            </section>
            <GridItems />
            <Testimonials />
            <ImagesSection />
        </main>
    )
}

export default MainComponent