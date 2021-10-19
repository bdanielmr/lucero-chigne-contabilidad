/* eslint-disable no-unused-vars */
import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';

import { getPageByUri } from 'lib/pages';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from 'styles/pages/Home.module.scss';
import FeaturedImage from 'components/FeaturedImage';

export default function Home({ posts, pagination, pageHome }) {
  const { metaTitle, slug, content, featuredImage, children } = pageHome;
  console.log('featuredImage', featuredImage.sourceUrl);
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <div className={styles.containerHeader}>
        {featuredImage && <img src={featuredImage.sourceUrl} />}
        <p>
          <a style={{ width: '50%' }}>Estrategias </a>
          <a>contables con autoridad</a>
          <a style={{ width: '60%' }}>e inteligentes</a>
        </p>
        <span>REALIZAREMOS UN SEGUIMIENTO DE TODO</span>
        <button>▼</button>
      </div>

      <Section>
        <Container>
          <h2 className="sr-only">Posts</h2>
          <ul className={styles.posts}>
            <div
              className={styles.contentHomeWp}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </ul>
          {pagination && (
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
