// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="list-container">
      {blogsList.map(item => (
        <BlogItem key={item.id} blog={item} />
      ))}
    </div>
  )
}

export default BlogList
