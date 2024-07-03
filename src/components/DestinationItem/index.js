import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="destination-item">
      <div>
        <img src={imgUrl} className="destination-image" alt={name} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
