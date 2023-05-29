// Write your code here
import './index.css'
import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props
  return (
    <div className="bg-container">
      <h1>Destination Search</h1>
      <input type="search" placeholder="Search" />
      {destinationsList.map(eachItem => (
        <DestinationItem destinationsList={eachItem} />
      ))}
    </div>
  )
}
export default DestinationSearch
