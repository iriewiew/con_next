import React from "react"
import Markdown from "react-markdown"
import Author from "../Author"
import moment from "moment";
import Link from "next/link";

export default function Post({
  title,
  subtitle,
  body,
  author,
  authorName,
  authorImage,
  description,
  slug,
  date,
  coverImage,
}) {
  // export default function Post({ post }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <Link href={`/blog/${slug}`}>
        <a>
          <div className="card h-100">
            {
              coverImage && (<img src={coverImage.file.url} className="card-img-top" alt="" />)
            }
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="card-text">
                <Markdown source={description} escapeHtml={true} />
              </div>
              <Author author={author} />
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Published: {moment(date).format("MMMM Do YYYY")}
              </small>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        header {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #949499;
        }
        header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        /*
        The section :global() selector is necessary to target the content
        that will be rendered by the Markdown component.
        */
        section :global(h1) {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        section :global(h2) {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        section :global(p) {
          line-height: 1.75rem;
          margin: 2rem 0;
        }
        section :global(img) {
          max-width: 100%;
        }
        section :global(blockquote) {
          border-left: 0.5rem solid #949499;
          margin-left: 0;
          padding: 0 2rem;
          color: #646469;
        }
        section :global(li) {
          margin: 1rem 0;
          line-height: 1.5rem;
        }
        section :global(hr) {
          border: none;
          background: #949499;
          height: 1px;
        }
      `}</style>
    </div>
  )
}