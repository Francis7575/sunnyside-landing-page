import styles from './ImagesSection.module.css'
import bottlesImageMobile from '../../assets/mobile/image-gallery-milkbottles.jpg'
import bottlesImageDesktop from '../../assets/desktop/image-gallery-milkbottles.jpg'
import orangeImageMobile from '../../assets/mobile/image-gallery-orange.jpg'
import orangeImageDesktop from '../../assets/desktop/image-gallery-orange.jpg'
import coneImageMobile from '../../assets/mobile/image-gallery-cone.jpg'
import coneImageDesktop from '../../assets/desktop/image-gallery-cone.jpg'
import sugarCubesImageMobile from '../../assets/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesImageDesktop from '../../assets/desktop/image-gallery-sugarcubes.jpg'

const ImagesSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <img className={styles.imageMobile} src={bottlesImageMobile} alt="Milk bottles image" />
                <img className={styles.imageDesktop} src={bottlesImageDesktop} alt="Milk bottles image" />
                <img className={styles.imageMobile} src={orangeImageMobile} alt="Orange image" />
                <img className={styles.imageDesktop} src={orangeImageDesktop} alt="Orange image" />
                <img className={styles.imageMobile} src={coneImageMobile} alt="Cone image" />
                <img className={styles.imageDesktop} src={coneImageDesktop} alt="Cone image" />
                <img className={styles.imageMobile} src={sugarCubesImageMobile} alt="Sugar Cubes image" />
                <img className={styles.imageDesktop} src={sugarCubesImageDesktop} alt="Sugar Cubes image" />
            </div>
        </section>
    )
}

export default ImagesSection