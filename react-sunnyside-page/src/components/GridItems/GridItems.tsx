import { gridSection } from './Data';
import styles from './GridItems.module.css'

const GridComponent = () => {
    return (
        <section className={styles.section}>
            {gridSection.map((section, index) => (
                <div key={index}
                    className={`${styles.container} ${section.className && styles[section.className]}`}>
                    {section.imageMobile && (
                        <img className={styles.mobileImage} src={section.imageMobile} alt="" />
                    )}
                    {section.imageDesktop && (
                        <img className={styles.desktopImage} src={section.imageDesktop} alt="" />
                    )}

                    {section.wrapContent && (
                        <div className={styles.content}>
                            <h2 className={styles.heading}>{section.heading}</h2>
                            <p className={styles.paragraph}>{section.paragraph}</p>
                            <div
                                className={`${styles.linkContainer} 
                                ${section.linkContainerClassName && styles[section.linkContainerClassName]}`}>
                                <a className={styles.link} href="#">
                                    {section.link}
                                </a>
                            </div>
                        </div>
                    )}

                    {section.figureMobile && (
                        <figure className={styles.figureContainer}>
                            <img className={styles.figureMobileImage} src={section.figureMobile} alt="" />
                            <img className={styles.figureDesktopImage} src={section.figureDesktop} alt="" />
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