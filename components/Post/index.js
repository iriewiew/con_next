import React from "react"
import Markdown from "react-markdown"
import moment from "moment";
import Link from "next/link";
import { motion } from 'framer-motion';

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

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
    <motion.div
      className="col-md-6 col-lg-4 mb-4"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <Link href={`/blog/${slug}`}>
        <a>
          <div className="card mx-0 h-100">
            {
              coverImage && (
                <img src={coverImage.file.url} className="card-img-top" alt="" />)
            }
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div className="card-text">
                <Markdown source={description.substring(0, 150)} escapeHtml={true} />
              </div>
              {/* <Author author={author} /> */}
            </div>
            <div className="card-footer">
              <small className="text-muted">
                Published: {moment(date).format("MMMM Do YYYY")}
              </small>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  )
}