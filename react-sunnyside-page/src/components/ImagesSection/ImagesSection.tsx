import styles from './ImagesSection.module.css'
import bottlesImage from '../../assets/mobile/image-gallery-milkbottles.jpg'
import orangeImage from '../../assets/mobile/image-gallery-orange.jpg'
import coneImage from '../../assets/mobile/image-gallery-cone.jpg'
import sugarCubesImage from '../../assets/mobile/image-gallery-sugar-cubes.jpg'

const ImagesSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                <img src={bottlesImage} alt="Milk bottles image" />
                <img src={orangeImage} alt="Orange image" />
                <img src={coneImage} alt="Cone image" />
                <img src={sugarCubesImage} alt="Sugar Cubes image" />
            </div>
        </section>
    )
}

export default ImagesSection