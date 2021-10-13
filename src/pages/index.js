// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage src='..\images\Roseville_city.jpg' alt='roseville-city' />
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
