import './index.css'

const Tabs = props => {
  const {tab, clickTabItem, isActive} = props
  const {id, buttonText} = tab
  console.log(isActive)

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activateTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activateTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
