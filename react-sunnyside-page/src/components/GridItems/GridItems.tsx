import { gridSection } from './Data';
import styles from './GridItems.module.css'

const GridComponent = () => {
    return (
        <section className={styles.section}>
            {gridSection.map((section, index) => (
                <div key={index}
                    className={`${styles.container} ${section.className && styles[section.className]}`}>
                    {section.image && (
                        <img className={styles.image} src={section.image} alt="" />
                    )}

                    {section.wrapContent && (
                        <div className={styles.content}>
                            <h2 className={styles.heading}>{section.heading}</h2>
                            <p className={styles.paragraph}>{section.paragraph}</p>
                            <div className={styles.linkContainer}>
                                <a className={styles.link} href="#">{section.link}</a>
                            </div>
                        </div>
                    )}

                    {section.figure && (
                        <figure className={styles.figureContainer}>
                            <img src={section.figure} alt="" />
                            <figcaption className={styles.figcaption}>
                                <h3 className={styles.title}>{section.title}</h3>
                                <p className={styles.description}>{section.description}</p>
                            </figcaption>
                        </figure>
                    )}
                </div>

            ))}

        </section>
    )
}

export default GridComponent