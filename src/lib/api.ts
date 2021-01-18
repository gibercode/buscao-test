import { fetchService } from '../utils/fetchService'; 

export const getAllPosts = async() => {
  const data = await fetchService(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
        edges {
          node {
            id
            date
            title
            slug
            tags {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
    }
    `
  );

  return data?.posts;
}

export const getPost = async(slug) => {
  const data = await fetchService(
    `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG'
      }
    }
  );

  return data;
}
