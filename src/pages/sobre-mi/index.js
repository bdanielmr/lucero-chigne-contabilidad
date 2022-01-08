/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderMain from 'components/header_main/HeaderMain';
import styles from '../../styles/pages/Home.module.scss';
import Nav from 'components/Nav';
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';
import CustomContactFeature from 'CustomContactFeature/CustomContactFeature';
function index(props) {
  const [changeIndex, setChangeIndex] = useState(5);
  const [changeBackgr, setChangeBackgr] = useState('#4348ca');
  const [changeDisplay, setchangeDisplay] = useState('inline');
  const [changeDisplayh6, setchangeDisplayh6] = useState('none');
  const [changeHeig, setchangeHeig] = useState('22vh');
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
      setchangeHeig('22vh');
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
  const src = 'https://i.imgur.com/2tvIqhj.png';
  return (
    <>
      <div className={styles.mobileResponseSobreMi}>
        <HeaderMain />
        <Nav />
        <main>
          <div className={styles.sobreMicontainer}>
            <div className={styles.sobreMicontainerLabel}>
              <div className={styles.sobreMicontainerLabelDivImage}>
                <Image loader={() => src} src={src} alt="Picture of the author" width={300} height={400} />
              </div>
              <div className={styles.sobreMicontainerLabeText}>
                <h4>Sobre Mi</h4>
                <p>
                  Contadora pública colegiada, empresaria y diseñadora gráfica con experiencia en temas
                  tributarios,logísticos, financieros y laborales del país en rubros comerciales, publicidad, marketing,
                  transportes, asociaciones sin fines de lucro, servicios freelancer, inversiones digitales, entre
                  otros. Especialista en tributación por el colegio de contadores de La Libertad - sede Trujillo.
                </p>
                <p>
                  En este espacio busco asesorarte y diseñar un plan estratégico para que puedas gestionar tus finanzas,
                  mantener un historial crediticio favorable, evitar inconvenientes con las instituciones del Estado y
                  prevenir sanciones, multas o embargos.
                </p>
              </div>
              <div className={styles.sobreMicontainerLabeTextWroap}>
                <p>
                  Entiendo que el mundo es amplio, la tecnología no para, ni las inversiones ni el internet. Mientras
                  estás leyendo esto, todos siguen operando; así que mi intención es que puedas construir tu futuro sin
                  temor. Te ofrezco brindarte un asesoramiento a medida, orientación y recomendaciones personalizadas
                </p>
              </div>
            </div>
          </div>
        </main>
        <div className={styles.sobreMicontainerContacto}>
          <CustomContactFeature />
        </div>
      </div>
      <div>
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
            <div className={styles.sobreMicontainer}>
              <div className={styles.sobreMicontainerLabel}>
                <div className={styles.sobreMicontainerLabeText}>
                  <h4>Sobre Mi</h4>
                  <img src={src} width="100%" />
                  <p>
                    Contadora pública colegiada, empresaria y diseñadora gráfica con experiencia en temas
                    tributarios,logísticos, financieros y laborales del país en rubros comerciales, publicidad,
                    marketing, transportes, asociaciones sin fines de lucro, servicios freelancer, inversiones
                    digitales, entre otros. Especialista en tributación por el colegio de contadores de La Libertad -
                    sede Trujillo.
                  </p>
                  <p>
                    En este espacio busco asesorarte y diseñar un plan estratégico para que puedas gestionar tus
                    finanzas, mantener un historial crediticio favorable, evitar inconvenientes con las instituciones
                    del Estado y prevenir sanciones, multas o embargos.
                  </p>
                  <p>
                    Entiendo que el mundo es amplio, la tecnología no para, ni las inversiones ni el internet. Mientras
                    estás leyendo esto, todos siguen operando; así que mi intención es que puedas construir tu futuro
                    sin temor. Te ofrezco brindarte un asesoramiento a medida, orientación y recomendaciones
                    personalizadas
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

index.propTypes = {};

export default index;
