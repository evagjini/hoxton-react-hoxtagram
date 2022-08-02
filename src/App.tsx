import { useEffect, useState } from 'react'
import './App.css'
import Comments from './components/Comments'
import Logo from './components/Logo'



type image = {
  id: number
  title: string
  likes: number
  image: string
  comments: Comment[]

}
type Comment = {
  id: number
  content: string
  imageId: number
}
function App() {
  const [images, setImages] = useState<image[]>([])
  const [comments, setcomments] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3005/images`)

      .then(resp => resp.json())
      .then(imagesFromServer => setImages(imagesFromServer))


  }, [])

  // function likeImage(image) {

  //   return fetch(`http://localhost:3005/images)${image.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ like: image.likes + 1 })
  //   })

  //   const imagesCopy = JSON.parse(JSON.stringify(images))
  //   let match = images.copyWithin.find(target => target.id === image.id)
  //   match.likes++
  //   setImages(imagesCopy)
  // }









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
              <button className="like-button"

              >♥</button>
            </div>




          </article>

        ))}

      </section>

    </div >
  )

}
export default App
