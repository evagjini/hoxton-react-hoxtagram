function CardImage(props: any) {
    return (
        <article className="image-card">
            <h2 className="title">
                {props.image.title}</h2>
            <img src={props.image.image} className="image" />
            <div className="likes-section">
                <span className="likes">{props.image.likes}</span>
                <button className="like-button"

                    onClick={() =>
                        props.likeImages}>
                    ♥
                </button>
            </div>

        </article>

    )
}

export default CardImage