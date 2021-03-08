import Link from "next/link";
import moment from "moment";

export default function Post({
  title,
  subtitle,
  authorName,
  authorImage,
  slug,
  date,
  coverImage,
}) {
  return (
      <div className="card">
        <img src={coverImage} alt={title} />
        <div className="card-body">
          <h2><Link className="d-block" href={`/blog/${slug}`}>{title}</Link></h2>
          {/* <p>{subtitle.length > 80 ? subtitle.substr(0, 80) + "..." : subtitle}</p> */}
        </div>
        {/* if you don't need author section, delete this block */}
        {/* author */}
        <div className="card-header">
          <Link className="d-block" href={`/blog/${slug}`}>
            <span>
              <img className="rounded-circle" src={authorImage} alt={authorName} />
            </span>
          </Link>
          <span>{authorName}</span>
          <span>{moment(date).format("MMMM Do YYYY")}</span>
        </div>
        {/* author */}
      </div>
  );
}