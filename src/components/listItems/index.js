import './index.css'

const Components = props => {
  const {detailsList, onDemandDelete, isTrue} = props
  console.log(detailsList)

  const {id, name, password, webUrl} = detailsList

  const onDelete = () => {
    onDemandDelete(id)
  }

  return (
    <li className="list-container">
      <div className="change-Backc">
        <h1>Y</h1>
      </div>
      <div>
        <p>{webUrl}</p>
        <p>{name}</p>
        <p>
          {isTrue ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          ) : (
            password
          )}
        </p>
      </div>
      <button
        data-testid="delete"
        onClick={onDelete}
        className="delete-button"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default Components
