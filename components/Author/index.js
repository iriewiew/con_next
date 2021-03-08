import React from "react"

export default function Author({ author }) {
  return (
    <div className="author">
      {
        author.fields && author.fields.avatar &&
        <img
          src={author.fields.avatar.fields.file.url}
          alt={author.fields.name}
        />
      }
      <div className="info">
        <span className="name">{author.fields.name}</span>
        {/* <span className="bio">{author.fields.bio}</span> */}
      </div>
      <style jsx>{`
        .author {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 36rem;
          margin: 1rem auto;
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .name {
          font-weight: bold;
          font-size: 1.2rem;
        }
        .bio {
          font-size: 0.875rem;
        }
        img {
          width: 6.25rem;
          border-radius: 50%;
          margin: 1rem;
        }
      `}</style>
    </div>
  )
}