// import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     width: "3em",
//     height: "3em",
//     boxShadow: "0px 0px 10px 1px #b2b2b28f",
//   },
//   root: {
//     maxWidth: "800px",
//   },
// }));

const BlogHeader = ({
  title,
  subtitle,
  authorName,
  authorImage,
  date,
  coverImage,
}) => {
  // const classes = useStyles();
  return (
    <section className="hero">
      <div className="container">
        <nav className="" aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center no-border mb-0">
              <li className="breadcrumb-item">
                <a className="" href="/">Home</a>
              </li>
              <li className="active breadcrumb-item" aria-current="page">
                <span className="">{title}</span>
              </li>
          </ol>
        </nav>
        <div className="hero-content pb-5 text-center">
          {/* <h1 className="mb-5"></h1> */}
          <h2 className="post-title">{title}</h2>
          <div className="row">
            <div className="mx-auto col-xl-8">
              {/* {moment(date).format("MMMM Do YYYY")} */}
              {/* {subtitle} */}
            </div>
          </div>
        </div>
        <div className="header-post">
          <div className="post-info">
            <div className="post-info-content">
              <div className="cat-post">
                <a href="https://zonex.famithemes.com/category/shoping/" rel="category tag">
                  category
                </a>
              </div>
              <h2 className="post-title">{title}</h2>
              <div className="post-meta-content">
                <a className="post-author" href="https://zonex.famithemes.com/author/znadmin/">
                  {authorName}
                </a>
                <a className="post-date" href="https://zonex.famithemes.com/roselle-ebarle-hat/">
                  {moment(date).format("MMMM Do YYYY")}
                </a>
                <div className="post-comment">
                  0 Comments
                </div>
              </div>
            </div>
          </div>
          <img src={coverImage} style={{ height: "auto", width: "100%" }} />
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;