import './TabItem.css'

const TabItem = props => {
  const {details, onClickTabItem, isActive} = props
  const {tabId, displayText} = details

  const onClickTabItems = () => {
    onClickTabItem(tabId)
  }
  return (
    <li>
      <button className="tabs-btn" onClick={onClickTabItems}>
        <li className={`tabs-text ${isActive ? 'yellow-text' : ''}`}>
          {displayText}
        </li>
      </button>
    </li>
  )
}

export default TabItem
