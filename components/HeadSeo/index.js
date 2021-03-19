import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const HeadSeo = ({
  siteName,
  title,
  desc,
  imgSrc,
  metaUrl,
  keyWords,
  author,
}) => {
  return (
    <Head>
      <title>{title.replace(/(<([^>]+)>)/gi, "").substring(0, 70)} - {siteName}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content={desc.replace(/(<([^>]+)>)/gi, "").substring(0, 200)}
      />
      <meta name="keywords" content={keyWords} />
      <meta name="author" content={author} />
      {/* facebook */}
      <meta
        property="og:title"
        content={title.replace(/(<([^>]+)>)/gi, "").substring(0, 70)}
      />
      <meta
        property="og:description"
        content={desc.replace(/(<([^>]+)>)/gi, "").substring(0, 200)}
      />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={imgSrc} />
      <meta
        property="og:image:alt"
        content={title.replace(/(<([^>]+)>)/gi, "").substring(0, 70)}
      />

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
      <meta property="og:url" content={metaUrl} />
      <meta
        property="og:title"
        content={title.replace(/(<([^>]+)>)/gi, "").substring(0, 70)}
      />
      <meta
        property="og:description"
        content={desc.replace(/(<([^>]+)>)/gi, "").substring(0, 200)}
      />
      <meta property="og:image" content={imgSrc} />
    </Head>
  );
};

HeadSeo.propTypes = {
  siteName: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  imgSrc: PropTypes.string,
  metaUrl: PropTypes.string,
  keyWords: PropTypes.string,
  author: PropTypes.string,
};
HeadSeo.defaultProps = {
  title: "",
  desc: "",
};

export default HeadSeo;
