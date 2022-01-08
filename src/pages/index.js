/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable no-unused-vars */
import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import Image from 'next/image';

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
  const [changeHeig, setchangeHeig] = useState('25vh');
  const [titleHeader, settitleHeader] = useState('');
  const [showHambr, setshowHambr] = useState(false);
  const changeStyles = () => {
    return {
      '--mood-index-custom': changeIndex,
      '--mood-backgro-fondo': changeBackgr,
      '--mood-display-custom': changeDisplay,
      '--mood-display-custom-h6': changeDisplayh6,
      '--mood-heigth-custom': changeHeig,
    };
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
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
      setchangeHeig('13vh');
    } else {
      setChangeBackgr('#4348ca');
      setchangeDisplay('inline');
      setchangeDisplayh6('none');
      setchangeHeig('25vh');
    }

    if (window.scrollY >= 700) {
      settitleHeader('Sobre mi');
    }
    if (window.scrollY >= 1100) {
      settitleHeader('Servicios');
    }
    if (window.scrollY >= 5000) {
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
  useEffect(() => {
    const aux = [1, 4, 45, 10, 6, -8];
    const auxTwo = [];
    let sumAux = 0;
    console.log('aux[i]', aux.length);
    for (let i = 0; i < aux.length; i++) {
      console.log('aux[i]', aux[i]);

      if (aux[i] % 2 === 0) {
        sumAux = sumAux + aux[i];
        auxTwo.push(aux[i]);
      }
    }
    console.log(auxTwo, 'suma', sumAux);
  }, []);
  const src = 'https://i.imgur.com/CwszE7r.png';
  const src1 = 'https://i.imgur.com/4PpanS8.png';
  const src2 = 'https://i.imgur.com/dnVoT8r.png';
  const src3 = 'https://i.imgur.com/BgL90Ds.png';
  const src4 = 'https://i.imgur.com/f8Pah0Y.png';
  const src5 = 'https://i.imgur.com/6vy6JGh.png';
  const src6 = 'https://i.imgur.com/PzAc9ya.png';
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
                onClick={() => {
                  setshowHambr(false);
                  scrollToTop();
                }}
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
                offset={10}
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
                offset={0}
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
              <div className={styles.sectionMobileTextP}>
                <h3>Hola, Mi nombre es Lucero chigne</h3>
                <p>Contadora pública colegiada, empresaria y diseñadora gráfica</p>
                <span>
                  Con experiencia en temas tributarios, logísticos, financieros y laborales del país en rubros
                  comerciales, publicidad, marketing, transportes, asociaciones sin fines de lucro, servicios
                  freelancer, inversiones digitales, entre otros.
                </span>
              </div>
              <div className={styles.sectionMobileBckgrong}></div>
            </section>
          </CustomSection>
          <CustomSection id="/servicios-mi-mobile/">
            <section id="section-two" className={styles.sectionMobile + ' ' + styles.sectionMobiletwo}>
              <div
                style={{
                  'text-align': 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={styles.sectionMobileTextP}
              >
                <Link
                  activeClass="active"
                  to="/constitucion-empresa-mi-mobile/"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                >
                  <p style={{ width: '190px', margin: '5px' }}>Constitución de Empresas</p>
                </Link>
                <Link
                  activeClass="active"
                  to="/Outsourcing-empresa-mi-mobile/"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <p style={{ width: '180px', margin: '2px' }}>Outsourcing Contable</p>
                </Link>
                <Link
                  activeClass="active"
                  to="/planeacion-tributaria-mi-mobile/"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                >
                  <p style={{ width: '175px', margin: '3px' }}>Planeación Tributaria</p>
                </Link>
                <Link
                  activeClass="active"
                  to="/asesoramient-laboral-mi-mobile/"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                >
                  <p style={{ width: '185px', margin: '5px' }}>Asesoramiento Laboral</p>
                </Link>
                <Link
                  activeClass="active"
                  to="/asesoramiento-tributario-mi-mobile/"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                >
                  <p style={{ width: '195px', margin: '2px' }}>Asesoramiento Tributario</p>
                </Link>
                <Link
                  activeClass="active"
                  to="/asesoramiento-aduanero-mi-mobile/"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                >
                  <p style={{ width: '190px', margin: '5px' }}>Asesoramiento Aduanero</p>
                </Link>
                <p style={{ width: '70px', margin: '0' }}>Otros</p>
              </div>
              <div className={styles.sectionMobileBckgrong}></div>
            </section>
          </CustomSection>
          <CustomSection id="/constitucion-empresa-mi-mobile/">
            <section id="section-four" className={styles.sectionMobile + ' ' + styles.sectionMobilefour}>
              <div
                style={{
                  'text-align': 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={styles.sectionMobileTextP}
              >
                <p>Constitución de Empresas</p>
                <span style={{ marginBottom: '10px' }}>
                  Ofrezco la opción de asesorar la creación de personas jurídicas (empresas, sociedades, asociaciones,
                  entre otras, las más conocidas como empresas con RUC 20) y la obtención de RUC con 10 (personas
                  naturales). Así también analizo cuáles son las mejores opciones para tí
                </span>
                <Image loader={() => src} src={src} alt="Picture of the author" width={150} height={260} />
              </div>
            </section>
          </CustomSection>
          <CustomSection id="/Outsourcing-empresa-mi-mobile/">
            <section id="section-five" className={styles.sectionMobile + ' ' + styles.sectionMobilefive}>
              <div
                style={{
                  'text-align': 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={styles.sectionMobileTextP}
              >
                <p>Outsourcing Contable</p>
                <span style={{ marginBottom: '10px' }}>
                  Inducción de temas contables y tributarios para tí. Registro de operaciones (compras, gastos y ventas)
                  Archivo de documentación física (permanencia un año) Presentación de libros contables (Libros
                  electrónicos - PLE) Declaración de impuestos mensuales y anuales (PDT 621) Declaraciones anuales
                  impuesto a la renta, Declaración anual de operaciones con terceros - DAOT) Gestión de detracciones
                  Elaboración de reportes financieros de gestión trimestrales y a solicitud. Emisión de Estados
                  Financieros anuales firmados. ( Balances, estado de resultados) Envío mensual de score en el sistema
                  financiero
                </span>
                <Image loader={() => src1} src={src1} alt="Picture of the author" width={150} height={260} />
              </div>
            </section>
          </CustomSection>
          <CustomSection id="/planeacion-tributaria-mi-mobile/">
            <section id="section-six" className={styles.sectionMobile + ' ' + styles.sectionMobilesix}>
              <div
                style={{
                  'text-align': 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={styles.sectionMobileTextP}
              >
                <p>Planeación Tributaria</p>
                <span style={{ marginBottom: '10px' }}>
                  Ofrezco la opción de asesorar la creación de personas jurídicas (empresas, sociedades, asociaciones,
                  entre otras, las más conocidas como empresas con RUC 20) y la obtención de RUC con 10 (personas
                  naturales). Así también analizo cuáles son las mejores opciones para tí.
                </span>
                <Image loader={() => src2} src={src2} alt="Picture of the author" width={150} height={260} />
              </div>
            </section>
          </CustomSection>

          <CustomSection id="/asesoramient-laboral-mi-mobile/">
            <section id="section-eight" className={styles.sectionMobile + ' ' + styles.sectionMobileeight}>
              <div
                style={{
                  'text-align': 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={styles.sectionMobileTextP}
              >
                <p>Asesoramiento Laboral</p>
                <span style={{ marginBottom: '10px' }}>
                  Ofrezco la opción de asesorar la creación de personas jurídicas (empresas, sociedades, asociaciones,
                  entre otras, las más conocidas como empresas con RUC 20) y la obtención de RUC con 10 (personas
                  naturales). Así también analizo cuáles son las mejores opciones para tí.
                </span>
                <Image loader={() => src4} src={src4} alt="Picture of the author" width={150} height={260} />
              </div>
            </section>
          </CustomSection>
          <CustomSection id="/asesoramiento-tributario-mi-mobile/">
            <section id="section-seven" className={styles.sectionMobile + ' ' + styles.sectionMobileseven}>
              <div
                style={{
                  'text-align': 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={styles.sectionMobileTextP}
              >
                <p>Asesoramiento Tributario</p>
                <span style={{ marginBottom: '10px' }}>
                  Ante cualquier duda en temas de SUNAT, impuestos y tributos brindo soluciones eficientes. (Cartas,
                  esquelas, órdenes de pago, resoluciones de cobranza, entre otros)
                </span>
                <Image loader={() => src3} src={src3} alt="Picture of the author" width={150} height={260} />
              </div>
            </section>
          </CustomSection>
          <CustomSection id="/asesoramiento-aduanero-mi-mobile/">
            <section id="section-nine" className={styles.sectionMobile + ' ' + styles.sectionMobilenine}>
              <div
                style={{
                  'text-align': 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={styles.sectionMobileTextP}
              >
                <p>Asesoramiento Aduanero</p>
                <span style={{ marginBottom: '10px' }}>
                  Si estás interesado en importar o exportar mercancía, también te guiaré sobre los trámites aduaneros
                  tienes que llevar a cabo, te explicaremos y orientaremos acerca de los documentos que necesitas
                  presentar y qué gestiones debes realizar
                </span>
                <Image loader={() => src5} src={src5} alt="Picture of the author" width={150} height={260} />
              </div>
            </section>
          </CustomSection>
          <CustomSection id="/contacto-mi-mobile/">
            <section id="section-ten" className={styles.sectionMobile + ' ' + styles.sectionMobileten}>
              <div
                style={{
                  'text-align': 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={styles.sectionMobileTextP}
              >
                <Image loader={() => src6} src={src6} alt="Picture of the author" width={250} height={190} />
                <p>Contabilidad para todos</p>
                <span style={{ marginBottom: '10px', color: 'white' }}>
                  Para trabajar juntos me puedes contactar por estos medios:
                </span>
                <div
                  style={{
                    width: '100%',

                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'right',
                  }}
                >
                  <p style={{ margin: '0' }}>
                    <span className={styles.wsspIcon}></span>979979835
                  </p>
                  <p style={{ margin: '0 0 100px 0' }}>
                    <span className={styles.letterIcon}></span>l.chigne.m@gmail.com
                  </p>
                </div>
              </div>
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
