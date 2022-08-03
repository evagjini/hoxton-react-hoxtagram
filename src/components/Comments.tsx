import { Image } from "../App"

type Props = {
    image: Image

}

function Comments({ image }: Props) {
    return (
        <ul className="comments">
            {image.comments.map(comment => (
                <li key={comment.id}> {comment.content}</li>
            ))}
        </ul>
    )
}

export default Comments