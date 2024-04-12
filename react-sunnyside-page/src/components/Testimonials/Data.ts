import EmilyImage from '../../assets/image-emily.jpg'
import ThomasImage from '../../assets/image-thomas.jpg'
import JennieImage from '../../assets/image-jennie.jpg'

type Props = {
    image: string,
    paragraph: string,
    name: string,
    occupation: string
}

const testimonials: Props[] = [
    {
        image: EmilyImage,
        paragraph: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: 'Emily R.',
        occupation: 'Marketing Director'
    },
    {
        image: ThomasImage,
        paragraph: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
        name: 'Thomas S.',
        occupation: 'Chief Operating Officer'
    },
    {
        image: JennieImage,
        paragraph: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: 'Jennie F.',
        occupation: 'Business Owner'
    }
]

export {testimonials}