import { useEffect, useState } from 'react'
import './App.css'
import CardList from './components/CardList'
import CardImage from './components/CardList'
import Comments from './components/Comments'
import Logo from './components/Logo'

export type Comment = {
  id: number
  content: string
  imageId: number
}

export type Image = {
  id: number
  title: string
  likes: number
  image: string
  comments: Comment[]

}

function App() {
  const [images, setImages] = useState<Image[]>([])
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

      <CardList images={images} />




    </div >
  )

}
export default App
