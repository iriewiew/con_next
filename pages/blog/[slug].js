import { useRouter } from "next/router";
import ErrorPage from "next/error";

import Layout from "../../components/Layouts";
import BlogHeader from "../../components/BlogHeader";
import BlogBody from "../../components/BlogBody";
import MorePost from "../../components/MorePost";
import ShareButton from "../../components/ShareButton";

import { getPostBySlug, getMorePosts, getAllPostsWithSlug } from "../../lib/index";

// import { Container, Grid, Typography } from "@material-ui/core";

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    // fallback: true,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log('params', params);
  const post = await getPostBySlug(params.slug);
  const morePosts = await getMorePosts(params.slug);
  return {
    props: {
      post: post ? post : null,
      morePosts: morePosts ? morePosts : null,
    },
    revalidate: 1,
  };
}

const Blog = ({ post, morePosts }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={post?.fields.title}
      // description={post?.fields.subTitle}
      ogImage={post?.fields.heroImage.fields.file.url}
      url={`https://blog-with-nextjs-and-contentful.vercel.app/blog/${post?.fields.slug}`}
    >
      <BlogHeader
        title={post?.fields.title}
        // subtitle={post?.fields.subTitle}
        // authorName={post?.fields.author.fields.name}
        // authorImage={post?.fields.author.fields.image.fields.file.url}
        slug={post?.fields.slug}
        date={post?.fields.date}
        coverImage={post?.fields.heroImage.fields.file.url}
      />
      <BlogBody content={post?.fields.body} />
      <div className="container-lg mt-4">
        <div className="social">

          <h3 className="mt-5 mb-5">Share</h3>
          <ShareButton
            url={`https://blog-with-nextjs-and-contentful.vercel.app/blog/${post?.fields.slug}`}
          />
        </div>
        <div className="recent-entries">
          <h3 className="mt-5 mb-5">Recent Entries</h3>
          <div className="row">
            {morePosts?.map(({ fields }) => (
              <div className="col-4" key={fields.slug}>
                <MorePost
                  title={fields.title}
                  // subtitle={fields.subTitle}
                  // authorName={fields.author.fields.name}
                  // authorImage={fields.author.fields.image.fields.file.url}
                  slug={fields.slug}
                  date={fields.date}
                  coverImage={fields.heroImage.fields.file.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;