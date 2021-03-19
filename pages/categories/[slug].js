import { useRouter } from 'next/router'
import Post from "../../components/Post";
import Layout from "../../components/Layouts";
import Link from "next/link";
// import PageHeader from "components/PageHeader";

import { getAllPosts, getPostsByCategory } from "../../lib/index";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ fields }) => ({
    params: { slug: fields.category.toString() },
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
  const category = [...new Map(posts.map(item => [item.fields.category, item])).values()]
  return { revalidate: 1, props: { posts, category, post2, slug } };
}

export default function Categories({ posts, category, post2, slug }) {
  const router = useRouter();
  console.log('router.pathname', router.pathname.substr(0, 12) + slug)
  return (
    <Layout title="Blog with Next.js and Contentful">

      <div className="container-lg py-4">
        <h3 className="mt-5">{slug}</h3>
        <ul className="nav justify-content-end mb-3">
          <li className="nav-item">

            <Link href={{
              pathname: `/contents`,
            }}
              as={`/contents`}
            >
              <a className="nav-link">All Content</a>
            </Link>
          </li>
          {
            category?.map(({ fields }, index) => (
              <li className="nav-item" key={index}>
                <Link

                  href={{
                    pathname: `/categories/${fields.category}`,
                  }}
                >
                  <a className={router.pathname == `/categories/${fields.category}` ? "nav-link active" : "nav-link"}>{fields.category}</a>
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="card-deck flex-wrap">
          {post2?.map(({ fields }, index) => {
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
            )
          })}
        </div>
        <style jsx>{`
            .card-deck .card {
              display: flex;
              flex: 1 0 auto;
            }
          `}</style>
      </div>
      {/* </Layout> */}
    </Layout >
  );
}