/* eslint-disable no-unused-vars */
import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';

import { getPageByUri } from 'lib/pages';
import { WebsiteJsonLd } from 'lib/json-ld';
import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from 'styles/pages/Home.module.scss';
import FeaturedImage from 'components/FeaturedImage';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { Cat } from 'react-kawaii';
export default function Home({ posts, pagination, pageHome }) {
  const { metaTitle, slug, content, featuredImage, children } = pageHome;
  console.log('featuredImage', featuredImage.sourceUrl);
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <>
      <Layout>
        <WebsiteJsonLd siteTitle={title} />

        <Section style={{ margin: '0', padding: '0' }}>
          <Container>
            <h2 className="sr-only">Posts</h2>
            <ul className={styles.posts}>
              <div className={styles.containerPost}>
                <a>Hi!</a>
                <p>
                  {"I'm"}

                  <RoughNotation color="orangered" customElement="span" type="box" show={true}>
                    Lucero Chigne
                  </RoughNotation>
                </p>
                <p style={{ fontSize: '2rem', fontStyle: 'italic' }}>
                  (an expensive)
                  <span style={{ position: 'absolute', marginLeft: '5%', marginTop: '2%' }}>
                    <Cat size={130} mood="blissful" color="#FCCB7E" />
                  </span>
                </p>
                <RoughNotation color="orange" type="circle" show={true}>
                  Accountant
                </RoughNotation>{' '}
                & <p>Financial advises in</p>
                <p>
                  <RoughNotation strokeWidth={3} color="orangered" customElement="span" type="underline" show={true}>
                    Trujillo, PE
                  </RoughNotation>
                </p>
                <p className={styles.texExperience}>with experience in the creative industry</p>
              </div>
              {false && (
                <div
                  className={styles.contentHomeWp}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              )}
            </ul>
            {false && (
              <Pagination
                addCanonical={false}
                currentPage={pagination?.currentPage}
                pagesCount={pagination?.pagesCount}
                basePath={pagination?.basePath}
              />
            )}
          </Container>
        </Section>
      </Layout>
    </>
  );
}

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
