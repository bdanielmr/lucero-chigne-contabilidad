/* eslint-disable @next/next/link-passhref */
/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { Helmet } from 'react-helmet';

import { getPageByUri, getAllPages, getBreadcrumbsByUri } from 'lib/pages';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';
import styles from '../../styles/pages/Home.module.scss';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Content from 'components/Content';
import Section from 'components/Section';
import Container from 'components/Container';
import FeaturedImage from 'components/FeaturedImage';
import Breadcrumbs from 'components/Breadcrumbs';
import { VscGraph } from 'react-icons/vsc';

import { AiFillReconciliation, AiFillMail, AiOutlineFileSearch, AiOutlineGlobal } from 'react-icons/ai';
import ComponentInicio from 'components/ComponentIncio/index';
import ComponentSobreMi from 'components/ComponentSobreMi/index';
import ComponentServicios from 'components/ComponentServicios/index';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import { MdAccountBalance, MdSmartphone } from 'react-icons/md';
import { FaUsers, FaMapPin } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import stylesPage from 'styles/pages/Page.module.scss';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import CardBlog from 'components/CardBlog/CardBlog';
export default function Page({ page, breadcrumbs }) {
  const { title, metaTitle, description, slug, content, featuredImage, children } = page;

  const { metadata: siteMetadata = {} } = useSite();

  const { metadata } = usePageMetadata({
    metadata: {
      ...page,
      title: metaTitle,
      description: description || page.og?.description || `Read more about ${title}`,
    },
  });

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const hasChildren = Array.isArray(children) && children.length > 0;
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd
        title={metadata.title}
        description={metadata.description}
        siteTitle={siteMetadata.title}
        slug={slug}
      />

      {title === 'Sobre mi' && <ComponentSobreMi />}
      {title === 'Servicios' && <ComponentServicios />}
      {title === 'Blog' && (
        <div className={styles.containerPost}>
          <p style={{ margin: '1% 0px 0px 0px', fontSize: '2rem', color: 'white', textAlign: 'center' }}>
            <RoughNotation color="orangered" type="highlight" show={true}>
              Blog{' '}
            </RoughNotation>
          </p>

          <CardBlog />
        </div>
      )}
      {title === 'Contacto' && (
        <div className={styles.containerPost}>
          <p style={{ margin: '1% 0px 0px 0px', fontSize: '2rem', color: 'white', textAlign: 'center' }}>
            <RoughNotation color="orangered" type="highlight" show={true}>
              Contacto{' '}
            </RoughNotation>
          </p>

          <p>
            P<span style={{ color: 'white' }}>{'uedo '}</span>
            hacer mucho por tí
          </p>

          <p>
            si quieres trabajar{' '}
            <RoughNotation color="orange" type="circle" show={true}>
              conmigo
            </RoughNotation>
          </p>
          <p>puedes contactarme :</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '30vh',
              fontSize: '13px',
            }}
          >
            <p
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '0',
                alignItems: 'center',
              }}
            >
              <FaMapPin style={{ fontSize: '20px' }} color="orange" />
              Trujillo - Peru
            </p>
            <p
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '0',
                alignItems: 'center',
              }}
            >
              <MdSmartphone style={{ fontSize: '20px' }} color="orange" />
              999 999 999
            </p>{' '}
            <p
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '0',
                alignItems: 'center',
              }}
            >
              <MdSmartphone style={{ fontSize: '20px' }} color="orange" />
              044 995 454
            </p>
            <p
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '0',
                alignItems: 'center',
              }}
            >
              <AiFillMail style={{ fontSize: '20px' }} color="orange" />
              l.chigne.m@gmail.coms
            </p>
          </div>
        </div>
      )}

      {false && (
        <>
          <Header>
            {hasBreadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {featuredImage && (
              <FeaturedImage
                {...featuredImage}
                src={featuredImage.sourceUrl}
                dangerouslySetInnerHTML={featuredImage.caption}
              />
            )}
            <h1 className={stylesPage.title}>{title}</h1>
          </Header>

          <Content>
            <Section>
              <Container>
                <div
                  className={stylesPage.content}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              </Container>
            </Section>

            {hasChildren && (
              <Section className={stylesPage.sectionChildren}>
                <Container>
                  <aside>
                    <p className={stylesPage.childrenHeader}>
                      <strong>{title}</strong>
                    </p>
                    <ul>
                      {children.map((child) => {
                        return (
                          <li key={child.id}>
                            <Link href={child.uri}>
                              <a>{child.title}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </aside>
                </Container>
              </Section>
            )}
          </Content>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { slugParent, slugChild } = params;

  // We can use the URI to look up our page and subsequently its ID, so
  // we can first contruct our URI from the page params

  let pageUri = `/${slugParent}/`;

  // We only want to apply deeper paths to the URI if we actually have
  // existing children

  if (Array.isArray(slugChild) && slugChild.length > 0) {
    pageUri = `${pageUri}${slugChild.join('/')}/`;
  }

  const { page } = await getPageByUri(pageUri);

  // In order to show the proper breadcrumbs, we need to find the entire
  // tree of pages. Rather than querying every segment, the query should
  // be cached for all pages, so we can grab that and use it to create
  // our trail

  const { pages } = await getAllPages();

  const breadcrumbs = getBreadcrumbsByUri(pageUri, pages);

  return {
    props: {
      page,
      breadcrumbs,
    },
  };
}

export async function getStaticPaths() {
  const { pages } = await getAllPages();

  // Take all the pages and create path params. The slugParent will always be
  // the top level parent page, where the slugChild will be an array of the
  // remaining segments to make up the path or URI

  const paths = pages.map(({ uri }) => {
    const segments = uri.split('/').filter((seg) => seg !== '');

    return {
      params: {
        slugParent: segments.shift(),
        slugChild: segments,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
