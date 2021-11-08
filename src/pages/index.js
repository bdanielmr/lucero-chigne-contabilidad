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
import { VscGraph } from 'react-icons/vsc';

import { AiFillReconciliation, AiFillMail, AiOutlineFileSearch, AiOutlineGlobal } from 'react-icons/ai';

import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import { MdAccountBalance, MdSmartphone } from 'react-icons/md';
import { FaUsers, FaMapPin } from 'react-icons/fa';
import styles from 'styles/pages/Home.module.scss';
import FeaturedImage from 'components/FeaturedImage';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { Backpack } from 'react-kawaii';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Home({ posts, pagination, pageHome }) {
  const { metaTitle, slug, content, featuredImage, children } = pageHome;
  console.log('featuredImage', featuredImage?.sourceUrl);
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <>
      <Layout>
        <Section style={{ position: 'relative', left: '10%', width: '80%' }}>
          <Carousel swipeable={false} emulateTouch={true} showStatus={false}>
            <div className={styles.containerPostOnlyMobile}>
              <p>
                <RoughNotation color="orangered" type="highlight" show={true}>
                  Profesional{' '}
                </RoughNotation>
              </p>

              <p>
                E<span style={{ color: 'white' }}>{'n '}</span>
                contabilidad
                {' con asesoramiento'}
              </p>
              <p style={{ fontStyle: 'italic' }}>(a medida)</p>
              <p>
                Orientacion &{' '}
                <RoughNotation color="orange" type="circle" show={true}>
                  recomendaciones
                </RoughNotation>
              </p>
              <p>
                <RoughNotation strokeWidth={3} color="orangered" customElement="span" type="underline" show={true}>
                  personalizadas
                </RoughNotation>
              </p>
            </div>
            <div className={styles.containerPostOnlyMobile}>
              <p style={{ margin: '0', fontSize: '2rem', color: 'white' }}>
                <RoughNotation color="orangered" type="highlight" show={true}>
                  Sobre Mi{' '}
                </RoughNotation>
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  top: '50px',
                  left: '47%',
                  height: '60vh',
                  position: 'absolute',
                  justifyContent: 'space-between',
                  fontSize: '22px',
                  color: 'white',
                }}
              >
                <GoArrowUp />
                <GoArrowDown />
              </div>

              <Carousel
                swipeable
                swipeScrollTolerance={2}
                transitionTime={500}
                emulateTouch={true}
                showArrows={false}
                showIndicators={false}
                axis="vertical"
                useKeyboardArrows={true}
                style={{ cursor: 'pointer' }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    width: '100%',
                    cursor: 'n-resize;',
                  }}
                >
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>Contadora pública colegiada,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>empresaria y diseñadora gráfica</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>con experiencia en temas</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    <RoughNotation color="orangered" type="circle" show={true}>
                      {' '}
                      tributarios{' '}
                    </RoughNotation>
                    <RoughNotation color="orange" type="circle" show={true}>
                      ,logísticos,
                    </RoughNotation>
                    <RoughNotation color="orangered" type="circle" show={true}>
                      {' '}
                      financieros y{' '}
                    </RoughNotation>
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>en rubros comerciales, publicidad,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>marketing, transportes,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>asociaciones sin fines de lucro,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>servicios freelancer,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    <RoughNotation color="orange" type="box" show={true}>
                      inversiones digitales, entre otros
                    </RoughNotation>
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    width: '100%',
                    cursor: 'n-resize;',
                  }}
                >
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>En este espacio busco asesorarte </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>diseñar un plan estratégico </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>para que puedas</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    gestionar tus ,
                    <RoughNotation color="orangered" type="circle" show={true}>
                      {' '}
                      finanzas,
                    </RoughNotation>
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>mantener un historial crediticio,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>evitar inconvenientes</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>con las instituciones del Estado</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    y prevenir sanciones, multas o embargos.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    width: '100%',
                    cursor: 'n-resize;',
                  }}
                >
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>Entiendo que el mundo es amplio</p>

                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>y la tecnología no para, </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>ni las inversiones ni el internet.</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>Mientras estás leyendo esto,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>todos siguen operando;</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>evitar inconvenientes con</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>las instituciones del Estado</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    width: '100%',
                    cursor: 'n-resize;',
                  }}
                >
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>así que mi intención es que</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>puedas construir tu futuro sin temor</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}> construir tu futuro sin temor</p>{' '}
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>Te ofrezco brindarte</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>un asesoramiento a medida,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>orientación y recomendaciones</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>personalizadas</p>
                </div>
              </Carousel>
            </div>
            <div className={styles.containerPostOnlyMobile}>
              <p style={{ margin: '0', fontSize: '2rem', color: 'white' }}>
                <RoughNotation color="orangered" type="highlight" show={true}>
                  Servicios{' '}
                </RoughNotation>
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '60vh',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    margin: '5%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ flex: '0 40%', height: '80px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <MdAccountBalance style={{ fontSize: '30px' }} color="orange" />
                      Constitución de Empresass
                    </p>
                  </div>

                  <div style={{ flex: '0 40%', height: '80px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <VscGraph style={{ fontSize: '30px' }} color="orange" />
                      Outsourcing Contable
                    </p>
                  </div>
                  <div style={{ flex: '0 40%', height: '80px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <AiFillReconciliation style={{ fontSize: '30px' }} color="orange" />
                      Planeación Tributaria
                    </p>
                  </div>
                  <div style={{ flex: '0 40%', height: '80px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <AiOutlineFileSearch style={{ fontSize: '30px' }} color="orange" />
                      Asesoramiento Tributario
                    </p>
                  </div>
                  <div style={{ flex: '0 40%', height: '80px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <FaUsers style={{ fontSize: '30px' }} color="orange" />
                      Asesoramiento Laboral
                    </p>
                  </div>
                  <div style={{ flex: '0 40%', height: '80px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <AiOutlineGlobal style={{ fontSize: '30px' }} color="orange" />
                      Asesoramiento Aduanero
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerPostOnlyMobile}>
              <p>
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
            </div>
          </Carousel>
        </Section>
        <Section className={styles.sectionPostOnlyDesk}>
          <Carousel swipeable={false} emulateTouch={true} showStatus={false}>
            <div style={{ marginRight: '1%' }} className={styles.containerPost}>
              <div className={styles.containerPostOnlyDesk}>
                <p style={{ margin: '0', fontSize: '2rem', color: 'white' }}>
                  <RoughNotation color="orangered" type="highlight" show={true}>
                    Profesional{' '}
                  </RoughNotation>
                </p>

                <p>
                  E<span style={{ color: 'white' }}>{'n '}</span>
                  contabilidad
                  {' con asesoramiento'}
                </p>
                <p style={{ fontSize: '2rem', fontStyle: 'italic' }}>(a medida)</p>
                <p>
                  Orientacion &{' '}
                  <RoughNotation color="orange" type="circle" show={true}>
                    recomendaciones
                  </RoughNotation>
                </p>
                <p>
                  <RoughNotation strokeWidth={3} color="orangered" customElement="span" type="underline" show={true}>
                    personalizadas
                  </RoughNotation>
                </p>
              </div>

              {false && (
                <div
                  className={styles.contentHomeWp}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              )}
            </div>

            <div style={{ marginRight: '0%' }}>
              <p style={{ margin: '0', fontSize: '2rem', color: 'white' }}>
                <RoughNotation color="orangered" type="highlight" show={true}>
                  Sobre Mi{' '}
                </RoughNotation>
              </p>
              <a className={styles.swipeIconUPdOW}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '67px',
                    position: 'absolute',
                    bottom: '-20px',
                    left: '-5px',
                    justifyContent: 'space-between',
                    fontSize: '22px',
                    color: 'white',
                  }}
                >
                  <GoArrowUp />
                  <GoArrowDown />
                </div>
              </a>
              <Carousel
                swipeable
                swipeScrollTolerance={2}
                transitionTime={500}
                emulateTouch={true}
                showArrows={false}
                showIndicators={false}
                axis="vertical"
                useKeyboardArrows={true}
                style={{ cursor: 'pointer' }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    width: '100%',
                    cursor: 'n-resize;',
                  }}
                >
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    Contadora pública colegiada, empresaria y diseñadora gráfica
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    con experiencia en temas
                    <RoughNotation color="orangered" type="circle" show={true}>
                      {' '}
                      tributarios{' '}
                    </RoughNotation>
                    <RoughNotation color="orange" type="circle" show={true}>
                      ,logísticos,
                    </RoughNotation>
                    <RoughNotation color="orangered" type="circle" show={true}>
                      {' '}
                      financieros y{' '}
                    </RoughNotation>
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    laborales del país en rubros comerciales, publicidad, marketing,
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    transportes, asociaciones sin fines de lucro, servicios freelancer,
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    <RoughNotation color="orange" type="box" show={true}>
                      inversiones digitales, entre otros
                    </RoughNotation>
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    width: '100%',
                    cursor: 'n-resize;',
                  }}
                >
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    En este espacio busco asesorarte y diseñar un plan estratégico{' '}
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    para que puedas gestionar tus ,
                    <RoughNotation color="orangered" type="circle" show={true}>
                      {' '}
                      finanzas,
                    </RoughNotation>
                    {' mantener un '}
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>historial crediticio favorable,</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    evitar inconvenientes con las instituciones del Estado
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    y prevenir sanciones, multas o embargos.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    width: '100%',
                    cursor: 'n-resize;',
                  }}
                >
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    Entiendo que el mundo es amplio, la tecnología no para,{' '}
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>ni las inversiones ni el internet.</p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    Mientras estás leyendo esto, todos siguen operando;
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    evitar inconvenientes con las instituciones del Estado
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    así que mi intención es que puedas construir tu futuro sin temor
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    Te ofrezco brindarte un asesoramiento a medida,
                  </p>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
                    orientación y recomendaciones personalizadas
                  </p>
                </div>
              </Carousel>
            </div>
            <div style={{ marginRight: '0%' }}>
              <p style={{ margin: '0', fontSize: '2rem', color: 'white' }}>
                <RoughNotation color="orangered" type="highlight" show={true}>
                  Servicios{' '}
                </RoughNotation>
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '60vh',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    margin: '5%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ flex: '0 32%', height: '150px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <MdAccountBalance style={{ fontSize: '50px' }} color="orange" />
                      Constitución de Empresass
                    </p>
                  </div>

                  <div style={{ flex: '0 32%', height: '100px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <VscGraph style={{ fontSize: '50px' }} color="orange" />
                      Outsourcing Contable
                    </p>
                  </div>
                  <div style={{ flex: '0 32%', height: '100px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <AiFillReconciliation style={{ fontSize: '50px' }} color="orange" />
                      Planeación Tributaria
                    </p>
                  </div>
                  <div style={{ flex: '0 32%', height: '100px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <AiOutlineFileSearch style={{ fontSize: '50px' }} color="orange" />
                      Asesoramiento Tributario
                    </p>
                  </div>
                  <div style={{ flex: '0 32%', height: '100px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <FaUsers style={{ fontSize: '50px' }} color="orange" />
                      Asesoramiento Laboral
                    </p>
                  </div>
                  <div style={{ flex: '0 32%', height: '100px', marginBottom0: '2%' }}>
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0',
                        alignItems: 'center',
                      }}
                    >
                      <AiOutlineGlobal style={{ fontSize: '50px' }} color="orange" />
                      Asesoramiento Aduanero
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.containerPost}>
                <p style={{ margin: '1% 0px 0px 0px', fontSize: '2rem', color: 'white' }}>
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
            </div>
          </Carousel>
          {false && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
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
