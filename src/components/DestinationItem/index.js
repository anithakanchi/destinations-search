// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <div className="card-container">
      <img src={imgUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
    </div>
  )
}

export default DestinationItem
