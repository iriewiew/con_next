// import { useRouter } from 'next/router'
import Post from "../../components/Post";
import Layout from "../../components/Layouts";
// import PageHeader from "components/PageHeader";

import { getAllPosts, getPostsByCategory } from "../../lib/index";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({fields}) => ({
    params: {slug: fields.category.toString()},
  }))
  return {
    paths,
    // fallback: true,
    fallback: false,
  };
  // return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await getAllPosts();
  const post2 = await getPostsByCategory(slug)
  // const post2 = posts.filter(post => post.fields.category.fields.some(cate => cate.name === 'wcommerce'));
  // const category = [...new Map(posts.map(item => [item.fields.category.fields.name, item])).values()]
  const category = [...new Map(posts.map(item => [item.fields.category, item])).values()]
  return { revalidate: 1, props: { posts, category, post2 } };
}

export default function Categories ({ posts, category, post2 }) {
  console.log('category', posts, post2)
  return (
    <Layout title="Blog with Next.js and Contentful">
      {/* <Layout
        // type your page title and page description.
        title="Blog with Next.js and Contentful"
        description="This is a Blog Demo with Next.js and Contentful. You can see the code in github. And you can use the code to make your own blog. "
      > */}
        <div className="container-lg py-4">
          {/* you can delete this component or you can use this for your page header. */}
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="/">All</a>
            </li>
          {
            category?.map(({fields}, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link active" href={fields.category}>
                    {fields.category}
                  </a>
                </li>
                // <li className="nav-item">
                //   <a className="nav-link disabled" href="#">Disabled</a>
                // </li>
            ))
          }
          </ul>
          {/* <PageHeader /> */}
          {/* blog post */}
          <div className="card-deck flex-wrap">
            {post2?.map(({fields}, index) => {
              return (
                <Post
                  key={index}
                  title={fields.title}
                  author={fields.author}
                  date={fields.publishDate}
                  description={fields.description}
                  slug={fields.slug}
                  coverImage={fields.heroImage.fields}
                />
            )})}
          </div>
          <style jsx>{`
            .card-deck .card {
              display: flex;
              flex: 1 0 auto;
            }
          `}</style>
        </div>
      {/* </Layout> */}
    </Layout>
  );
}