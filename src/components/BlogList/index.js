// Write your JS code here
import './index.css'

const BlogList = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails

  return (
    <li className="item-details">
      <div className="title-date-container">
        <h1 className="title-text">{title}</h1>
        <p className="date-text">{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogList
