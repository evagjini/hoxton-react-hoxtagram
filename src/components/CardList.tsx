
import { Image } from '../App'
import ImageItem from './ImageItem'

type Props = {
    images: Image[]
}


function CardList({ images }: Props) {
    return (
        <section className="image-container">
            {images.map(image => (

                <ImageItem key={image.image} image={image} />

            ))}

        </section>
    )
}

export default CardList