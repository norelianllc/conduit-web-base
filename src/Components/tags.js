import React from 'react'

const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <div key={tag} className="btn btn-sm btn-outline-primary">
          {tag}
        </div>
      ))}
    </>
  )
}

export default Tags
