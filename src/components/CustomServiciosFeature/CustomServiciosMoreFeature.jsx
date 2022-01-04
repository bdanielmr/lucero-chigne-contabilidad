/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomServiciosFeature.module.scss';
function CustomServiciosMoreFeature(props) {
  return (
    <div className={styles['custom-feature-more-servicios']}>
      <div className={styles['custom-feature-more-center-servicios']}></div>
      <div className={styles['custom-feature-more-center-servicios-left']}>
        <div className={styles['custom-feature-more-center-servicios-div-first']}>
          <h4>Planeación Tributaria</h4>
          <p>
            Ofrezco la opción de asesorar la creación de personas jurídicas (empresas, sociedades, asociaciones, entre
            otras, las más conocidas como empresas con RUC 20) y la obtención de RUC con 10 (personas naturales). Así
            también analizo cuáles son las mejores opciones para tí.
          </p>
        </div>
      </div>
      <div className={styles['custom-feature-more-center-servicios-div-second']}>
        <img src="https://i.imgur.com/i3Rit1Q.png" />
      </div>
      <div className={styles['custom-feature-more-center-servicios-div-container-ref']}>
        <div className={styles['custom-feature-more-center-servicios-div-third']}>
          <div>
            <h4>Asesoramiento Laboral</h4>
            <p>
              Ofrezco la opción de asesorar la creación de personas jurídicas (empresas, sociedades, asociaciones, entre
              otras, las más conocidas como empresas con RUC 20) y la obtención de RUC con 10 (personas naturales). Así
              también analizo cuáles son las mejores opciones para tí.
            </p>
          </div>
          <div style={{ display: 'flex', marginTop: '5%', marginLeft: '5%' }}>
            <img src="https://i.imgur.com/4K4Ubdo.png" />
          </div>
        </div>

        <div className={styles['custom-feature-more-center-servicios-div-four']}>
          <div>
            <h4>Asesoramiento Tributario</h4>
            <p>
              Ante cualquier duda en temas de SUNAT, impuestos y tributos brindo soluciones eficientes. (Cartas,
              esquelas, órdenes de pago, resoluciones de cobranza, entre otros)
            </p>
          </div>
        </div>
        <div className={styles['custom-feature-more-center-servicios-div-five']}>
          <div>
            <h4>Asesoramiento Aduanero</h4>
            <p>
              Si estás interesado en importar o exportar mercancía, también te guiaré sobre los trámites aduaneros
              tienes que llevar a cabo, te explicaremos y orientaremos acerca de los documentos que necesitas presentar
              y qué gestiones debes realizar
            </p>
          </div>
        </div>
        <div className={styles['custom-feature-more-center-servicios-div-six']}>
          <h4>Otros</h4>
        </div>
      </div>
    </div>
  );
}

CustomServiciosMoreFeature.propTypes = {};

export default CustomServiciosMoreFeature;
