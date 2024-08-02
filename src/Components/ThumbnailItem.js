import './ThumbnailItem.css'

const ThumbnailItem = props => {
  const {details, onClickThumbnail} = props
  const {id, imageUrl, thumbnailUrl, category} = details

  const onClickThumbnailItem = () => {
    onClickThumbnail(imageUrl)
  }

  return (
    <li>
      <button className="thumbnail-btn" type="button">
        <img
          src={thumbnailUrl}
          className="thumbnailitem-img"
          alt="thumbnail"
          onClick={onClickThumbnailItem}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
