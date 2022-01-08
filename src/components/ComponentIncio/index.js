/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { getPaginatedPosts } from 'lib/posts';

import { getPageByUri } from 'lib/pages';
import Home from '../../pages/index';
function index({ pageHome }) {
  return <Home pageHome={pageHome} />;
}

index.propTypes = {};

export default index;
export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  const { page: pageHome } = await getPageByUri('/home/');
  console.log('page, home', pageHome);
  return {
    props: {
      pageHome,
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
