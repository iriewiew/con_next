// set client
const client = require("contentful").createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// get all posts
export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.publishDate",
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get posts by category
export async function getPostsByCategory(slug) {
  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.category": slug,
    order: "-fields.publishDate",
  });
  // const host = slug.split("/")
  // const cate = host.pop().replace('#','')
  if (entries.items) {
    // return entries.items.filter(post => post.fields.category.fields.name(categoria => categoria.name === cate));
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get a post by slug
export async function getPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "blogPost",
    limit: 1,
    "fields.slug": slug,
  });
  if (entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

// get more 3 latest posts
export async function getMorePosts(slug) {
  const entries = await client.getEntries({
    content_type: "blogPost",
    limit: 3,
    order: "-fields.publishDate",
    "fields.slug[nin]": slug,
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

function parsePostSlug({ fields }) {
  return {
    slug: fields.slug,
  };
}

function parsePostSlugEntries(entries, cb = parsePostSlug) {
  return entries?.items?.map(cb);
}

// get all slugs of posts
export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    select: "fields.slug",
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
}