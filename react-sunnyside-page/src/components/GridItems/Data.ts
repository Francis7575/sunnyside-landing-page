import transformImage from '../../assets/mobile/image-transform.jpg'
import standOutImage from '../../assets/mobile/image-stand-out.jpg'
import graphicDesign from '../../assets/mobile/image-graphic-design.jpg'
import photography from '../../assets/mobile/image-photography.jpg'

type GridSectionProps = {
    heading?: string;
    paragraph?: string;
    link?: string;
    image?: string;
    title?: string;
    description?: string,
    figure?: string,
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
        image: transformImage,
        className: 'transformImgContainer'
    },
    {
        image: standOutImage,
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
        figure: graphicDesign,
        title: 'Graphic Design',
        description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
        className: 'graphicImgContainer'
    },
    {
        figure: photography,
        title: 'Photography',
        description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        className: 'photographyImgContainer'
    }
];

export { gridSection, transformImage, standOutImage, graphicDesign, photography };