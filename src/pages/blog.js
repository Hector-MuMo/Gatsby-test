import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allMdx.nodes.map((node, index) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

//Para poder hacer una consulta en un Componente de página, debemos definirlo fuera de la función. Gatsby en automatico tomara a query y lo pasará como prop de la función del componente de página.
export const query = graphql`
  query BlogQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        id
        body
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default BlogPage;
