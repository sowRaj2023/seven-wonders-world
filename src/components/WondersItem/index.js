import './index.css'

const WondersItem = props => {
  const {wondersData} = props
  const {id, imageUrl,title,description} = wondersData
  return (
    <div className="wonders-container">
    <img className="wonder-image" src={imageUrl} alt={`item${id}`} />

    <div className="wonder-info">
      

      <p className="item-title">{title}</p>
      <p>{description}</p>
      </div>
      </div>
    
  )
}

export default WondersItem