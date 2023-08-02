import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <li className="image-container">
        <img className="image" alt={`${imageAltText}`} src={imageUrl} />
      </li>
    </>
  )
}

export default LanguageItem
