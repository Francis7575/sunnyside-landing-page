import transformImageMobile from '../../assets/mobile/image-transform.jpg'
import transformImageDesktop from '../../assets/desktop/image-transform.jpg'
import standOutImageMobile from '../../assets/mobile/image-stand-out.jpg'
import standOutImageDesktop from '../../assets/desktop/image-stand-out.jpg'
import graphicDesignMobile from '../../assets/mobile/image-graphic-design.jpg'
import graphicDesignDesktop from '../../assets/desktop/image-graphic-design.jpg'
import photographyMobile from '../../assets/mobile/image-photography.jpg'
import photographyDesktop from '../../assets/desktop/image-photography.jpg'

type GridSectionProps = {
    heading?: string;
    paragraph?: string;
    link?: string;
    imageMobile?: string;
    imageDesktop?: string,
    title?: string;
    description?: string,
    figureMobile?: string,
    figureDesktop?: string,
    className?: string,
    wrapContent?: boolean
};

const gridSection: GridSectionProps[] = [
    {
        heading: 'Transform your brand',
        paragraph: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
        link: 'Learn more',
        className: 'firstContainer',
        wrapContent: true
    },
    {
        imageMobile: transformImageMobile,
        imageDesktop: transformImageDesktop,
        className: 'transformImgContainer'
    },
    {
        imageMobile: standOutImageMobile,
        imageDesktop: standOutImageDesktop,
        className: 'standOutImgContainer'
    },
    {
        heading: 'Stand out to the right audience',
        paragraph: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
        link: 'Learn more',
        className: 'secondContainer',
        wrapContent: true
    },
    {
        figureMobile: graphicDesignMobile,
        figureDesktop: graphicDesignDesktop,
        title: 'Graphic Design',
        description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
        className: 'graphicImgContainer'
    },
    {
        figureMobile: photographyMobile,
        figureDesktop: photographyDesktop,
        title: 'Photography',
        description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        className: 'photographyImgContainer'
    }
];

export { gridSection };