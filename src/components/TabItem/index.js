// Write your code here

const TabItem = props => {
  const {item, updateTabItem} = props
  const {displayText, tabId} = item

  const onClickTab = () => {
    updateTabItem(tabId)
  }

  return (
    <>
      <li className="list-item">
        <button type="button" onClick={onClickTab} className="social-para">
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabItem
