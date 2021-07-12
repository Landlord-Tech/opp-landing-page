import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BlogCard from './BlogCard';
import Layout from '../layout';

const BlogPostList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {regex: "/blog/"}}}) {
        edges {
        node {
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
          }
          }
        }
      }
    }
  `);
  let newData = data.allMarkdownRemark.edges.map(item => item.node.frontmatter);

  console.log(newData);

  return (
      <section className='blog-wrapper'>
        <div className='container mb-5 mt-5'>
          <ul className='blog-categories'>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Category 1</button>
            </li>
            <li>
              <button>Category 2</button>
            </li>
          </ul>
          <ul className='blog-list'>
            {newData.map(page => (
              <li key={page.path} className='blog-list-item'>
                <BlogCard data={page} />
              </li>
            ))}
          </ul>

        </div>
      </section>
  );
};

export default BlogPostList;
