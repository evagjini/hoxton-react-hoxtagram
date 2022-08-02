type Props = {
    image: image[]
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