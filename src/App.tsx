import { useEffect, useState } from 'react'
import './App.css'
import Comments from './components/Comments'
import Logo from './components/Logo'

function App() {
  const [images, setImages] = useState([])
  const [comments, setcomments] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3005/images`)

      .then(resp => resp.json())
      .then(imagesFromServer => setImages(imagesFromServer))


  }, [])

  function likeImage(image: any) {

    return fetch(`http://localhost:3005/images)${image.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ like: image.likes + 1 })
    })

    const updatedImages = (images)

    // const match = updatedImages.find(target => target.id === image.id)
    // match.likes++

    // setImages(updatedImages)
  }









  return (
    <div className="App">

      < Logo />


      <section className="image-container">
        {images.map(image => (
          <article className="image-card">
            <h2 className="title">
              {image.title}</h2>
            <img src={image.image} className="image" />
            <div className="likes-section">
              <span className="likes">{image.likes}</span>
              <button className="like-button">♥</button>
            </div>
            <ul className="comments">
              <li>Get rid of these comments</li>
              <li>And replace them with the real ones</li>
              <li>From the server</li>
            </ul>
          </article>

        ))}

      </section>

    </div >
  )

}
export default App
