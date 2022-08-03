import { Image } from "../App"
import Comments from "./Comments"

type Props = {
    image: Image
}


function ImageItem({ image }: Props) {
    return (
        <article className="image-card">
            <h2 className="title">
                {image.title}</h2>
            <img src={image.image} className="image" />
            <div className="likes-section">
                <span className="likes">{image.likes}</span>
                <button className="like-button">♥</button>
            </div>
            <Comments image={image} />




        </article>

    )
}
export default ImageItem