import { motion } from "framer-motion";
import Post from "../components/Post";
import Layout from "../components/Layouts";
import Carousel from "../components/Carousel";

import { getAllPosts, getAllSlider } from "../lib/index";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export async function getStaticProps({ params }) {
  const posts = await getAllPosts();
  const slide = await getAllSlider();
  return { revalidate: 1, props: { posts, slide } };
}

export default function Index({ posts, slide }) {
  return (
    <Layout title="Blog with Next.js and Contentful">
      <motion.section
        exit={{ opacity: 0 }}
        className="contact-wrapper pt-4"
      >
        <motion.div
          variants={content}
          animate="animate"
          initial="initial"
          className="container-lg py-4"
        >
          <Carousel
            data={slide}
          />
          <motion.div
            variants={title}
            className="flex flex-col w-full mb-12 text-center"
          >
            <h3 className="mt-5 mb-5">Lasted Content</h3>
          </motion.div>
          <motion.div
            variants={title}
            className="card-deck flex-wrap"
          >
            {posts?.slice(0, 5).map(({ fields }, index) => {
              return (
                <Post
                  key={index.toString()}
                  title={fields.title}
                  author={fields.author}
                  date={fields.publishDate}
                  description={fields.description}
                  slug={fields.slug}
                  coverImage={fields.heroImage.fields}
                />
              )
            })}
            {
              posts.length > 6 ? <></> : <></>
            }
          </motion.div>
        </motion.div>
      </motion.section>
      <style jsx>{`
        .card-deck .card {
          display: flex;
          flex: 1 0 auto;
        }
      `}</style>
    </Layout>
  );
}