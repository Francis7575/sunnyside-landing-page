import { testimonials } from "./Data"
import styles from './Testimonials.module.css'

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <h4 className={styles.h4}>CLIENT TESTIMONIALS</h4>
            {testimonials.map((section, index) => (
                <div key={index} className={styles.container}>
                        <img className={styles.image} src={section.image} alt="Profile picture" />
                        <p className={styles.paragraph}>{section.paragraph}</p>
                        <div>
                            <p className={styles.name}>{section.name}</p>
                            <p className={styles.occupation}>{section.occupation}</p>
                        </div>
                </div>
            ))}
        </section>
    )
}

export default Testimonials