/* eslint-disable @next/next/no-html-link-for-pages */
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

import { AiFillReconciliation, AiFillPhone, AiOutlineFileSearch, AiOutlineGlobal } from 'react-icons/ai';

import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import { MdAccountBalance, MdSmartphone, MdTimer } from 'react-icons/md';
import { FaUsers, FaMapPin } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { FiMail, FiSmartphone } from 'react-icons/fi';
import { Link, animateScroll as scroll } from 'react-scroll';
import { BiHeart } from 'react-icons/bi';
import { ImEarth } from 'react-icons/im';
import styles from 'styles/pages/Home.module.scss';
import FeaturedImage from 'components/FeaturedImage';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { Backpack } from 'react-kawaii';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeaderMain from 'components/header_main/HeaderMain';
import Nav from 'components/Nav';
import CustomHomeFront from 'components/CustomHomeFront/CustomHomeFront';
import CustomInfoPersonalHome from 'components/CustomInfoPersonalHome/CustomInfoPersonalHome';
import CustomHomeServicios from 'components/CustomHomeServicios/CustomHomeServicios';
import CustomExperienceComponent from 'components/CustomExperienceComponent/CustomExperienceComponent';
import CustomAtencionWork from 'components/CustomAtencionWork/CustomAtencionWork';
import CustomContactFeature from 'CustomContactFeature/CustomContactFeature';
import CustomServiciosFeature from 'components/CustomServiciosFeature/CustomServiciosFeature';
import CustomServiciosMoreFeature from 'components/CustomServiciosFeature/CustomServiciosMoreFeature';
import CustomSection from 'components/CustomSection/CustomSection';

export default function Home({ posts, pagination, pageHome }) {
  const { metaTitle, slug, content, featuredImage, children } = pageHome;
  console.log('featuredImage', featuredImage?.sourceUrl);
  const { metadata = {} } = useSite();
  const { title, description } = metadata;
  const [changeIndex, setChangeIndex] = useState(5);
  const [changeBackgr, setChangeBackgr] = useState('#4348ca');
  const [changeDisplay, setchangeDisplay] = useState('inline');
  const [changeDisplayh6, setchangeDisplayh6] = useState('none');
  const [titleHeader, settitleHeader] = useState('');
  const [showHambr, setshowHambr] = useState(false);
  const changeStyles = () => {
    return {
      '--mood-index-custom': changeIndex,
      '--mood-backgro-fondo': changeBackgr,
      '--mood-display-custom': changeDisplay,
      '--mood-display-custom-h6': changeDisplayh6,
    };
  };
  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setChangeIndex(0);
    } else {
      setChangeIndex(5);
    }
    if (window.scrollY >= 510) {
      setChangeBackgr('black');
      setchangeDisplay('none');
      console.log('window.scrollY', window.scrollY);
      setchangeDisplayh6('inline');
    } else {
      setChangeBackgr('#4348ca');
      setchangeDisplay('inline');
      setchangeDisplayh6('none');
    }

    if (window.scrollY >= 696) {
      settitleHeader('Sobre mi');
    }
    if (window.scrollY >= 1508) {
      settitleHeader('Servicios');
    }
    if (window.scrollY >= 7100) {
      settitleHeader('Contacto');
    }
  };
  const handleShow = () => {
    setshowHambr(!showHambr);
  };
  const handleLink = (e, text) => {
    setshowHambr(false);
    if (text === '/sobre-mi-mobile/') {
      settitleHeader('Sobre mi');
    }
    if (text === '/servicios-mi-mobile/') {
      settitleHeader('Servicios');
    }
    if (text === '/contacto-mi-mobile/') {
      settitleHeader('Contacto');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <>
      <div className={styles.deskResponse}>
        <HeaderMain />
        <Nav />{' '}
        <CustomSection id="/inicio/">
          <CustomHomeFront />
        </CustomSection>
        <CustomSection id="/sobre-mi/">
          <CustomInfoPersonalHome />
        </CustomSection>
        <CustomSection id="/servicios/">
          <CustomHomeServicios />
        </CustomSection>
        <CustomSection id="/experiencia/">
          <CustomExperienceComponent />
        </CustomSection>
        <CustomSection id="/contacto/">
          <CustomAtencionWork />

          <CustomContactFeature />
        </CustomSection>
        <CustomSection id="/servicios/">
          <CustomServiciosFeature />
        </CustomSection>
        <CustomSection id="/utilitarios/">
          <CustomServiciosMoreFeature />
        </CustomSection>
      </div>
      <div style={changeStyles()} className={styles.mobileResponse}>
        <div className={styles.mobileResponseLogo}>
          <img src="https://i.imgur.com/PzAc9ya.png" />
          <h5>Contabilidad para todos</h5>
          <h6>{titleHeader}</h6>
        </div>
        <div className={styles.mobileResponseButtonHead}>
          <div onClick={handleShow} className={styles.mobileResponseButtonHeadHambur}>
            {!showHambr ? (
              <>
                <span>___</span>
                <span>___</span>
                <span>___</span>
              </>
            ) : (
              <span style={{ fontSize: '30px' }}>x</span>
            )}
          </div>
        </div>
        {showHambr && (
          <div className={styles.mobileResponseButtonHeadHeader}>
            <ul>
              <Link
                onClick={(e) => handleLink(e, '/inicio-mi-mobile/')}
                activeClass="active"
                to="/inicio-mi-mobile/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>Inicio</li>
              </Link>

              <Link
                onClick={(e) => handleLink(e, '/sobre-mi-mobile/')}
                activeClass="active"
                to="/sobre-mi-mobile/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li> Sobre mi </li>
              </Link>

              <Link
                onClick={(e) => handleLink(e, '/servicios-mi-mobile/')}
                activeClass="active"
                to="/servicios-mi-mobile/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>Servicios</li>
              </Link>
              <li>
                <a href="/posts"> Blog</a>
              </li>
              <Link
                onClick={(e) => handleLink(e, '/contacto-mi-mobile/')}
                activeClass="active"
                to="/contacto-mi-mobile/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>Contacto</li>
              </Link>
            </ul>
          </div>
        )}
        <main>
          <div className={styles.mobileResponseMainImg}>
            <img src="https://i.imgur.com/IcRGtUh.png" />
          </div>
          <div className={styles.buttonMobileChatContainer}>
            <div className={styles.buttonMobileChat}>Chat</div>
          </div>
          <CustomSection id="/sobre-mi-mobile/">
            <section id="section-one" className={styles.sectionMobile + ' ' + styles.sectionMobileone}>
              <p>Hola, Mi nombre es Lucerochigne</p>
              <p>Contadora pública colegiada, empresaria y diseñadora gráfica</p>
              <p>
                Con experiencia en temas tributarios, logísticos, financieros y laborales del país en rubros
                comerciales, publicidad, marketing, transportes, asociaciones sin fines de lucro, servicios freelancer,
                inversiones digitales, entre otros.
              </p>
              <div className={styles.sectionMobileBckgrong}></div>
            </section>
          </CustomSection>
          <CustomSection id="/servicios-mi-mobile/">
            <section id="section-two" className={styles.sectionMobile + ' ' + styles.sectionMobiletwo}>
              <p>Hola, Mi nombre es Lucerochigne</p>
              <p>Contadora pública colegiada, empresaria y diseñadora gráfica</p>
              <p>
                Con experiencia en temas tributarios, logísticos, financieros y laborales del país en rubros
                comerciales, publicidad, marketing, transportes, asociaciones sin fines de lucro, servicios freelancer,
                inversiones digitales, entre otros.
              </p>
              <div className={styles.sectionMobileBckgrong}></div>
            </section>
          </CustomSection>
          <section id="section-four" className={styles.sectionMobile + ' ' + styles.sectionMobilefour}>
            constitycu
          </section>
          <section id="section-five" className={styles.sectionMobile + ' ' + styles.sectionMobilefive}>
            <p>outsicrc</p>
          </section>
          <section id="section-six" className={styles.sectionMobile + ' ' + styles.sectionMobilesix}>
            <p>tributaria</p>
          </section>
          <section id="section-seven" className={styles.sectionMobile + ' ' + styles.sectionMobileseven}>
            <p>laboral</p>
          </section>
          <section id="section-eight" className={styles.sectionMobile + ' ' + styles.sectionMobileeight}>
            <p>sasesor trs</p>
          </section>
          <section id="section-nine" className={styles.sectionMobile + ' ' + styles.sectionMobilenine}>
            <p>sasesor aduanero</p>
          </section>
          <CustomSection id="/contacto-mi-mobile/">
            <section id="section-ten" className={styles.sectionMobile + ' ' + styles.sectionMobileten}>
              <p>sasesor aduanero</p>
            </section>
          </CustomSection>
        </main>
      </div>
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
