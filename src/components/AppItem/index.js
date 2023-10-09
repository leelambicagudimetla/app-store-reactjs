// Write your code here
const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList

  return (
    <>
      <li className="item-card-container">
        <img src={imageUrl} alt={appName} className="img-page" />

        <p className="para ">{appName}</p>
      </li>
    </>
  )
}
export default AppItem
