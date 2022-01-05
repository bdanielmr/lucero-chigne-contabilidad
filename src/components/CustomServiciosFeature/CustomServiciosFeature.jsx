/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomServiciosFeature.module.scss';
import CustomSection from 'components/CustomSection/CustomSection';
function CustomServiciosFeature(props) {
  return (
    <div className={styles['custom-feature-servicios']}>
      <div className={styles['custom-feature-left-servicios']}></div>
      <div className={styles['custom-feature-servicios-container']}>
        <h3>Servicios</h3>
        <p>Ofrezco los siguientes servicios:</p>

        <div className={styles['custom-servicios-constitucion']}>
          <div className={styles['custom-servicios-constitucion-left']}>
            <CustomSection id="/constitucion-empresas/">
              <h4>Constitución de Empresas</h4>
              <p>
                Ofrezco la opción de asesorar la creación de personas jurídicas (empresas, sociedades, asociaciones,
                entre otras, las más conocidas como empresas con RUC 20) y la obtención de RUC con 10 (personas
                naturales). Así también analizo cuáles son las mejores opciones para tí.
              </p>
            </CustomSection>
            <div className={styles['custom-servicios-waves-line']}>
              <div className={styles['custom-servicios-waves-line-left']}>
                <img src="https://i.imgur.com/4K4Ubdo.png" />
              </div>
              <div className={styles['custom-servicios-waves-line-rogth']}>
                <img src="https://i.imgur.com/4K4Ubdo.png" />
              </div>
            </div>
          </div>
          <div className={styles['custom-servicios-constitucion-rigth']}>
            <img src="https://i.imgur.com/sj4xMDR.png" />
            <CustomSection id="/outsourcing-contable/">
              <div className={styles['custom-servicios-constitucion-rohtg-container-rigth']}>
                <a>
                  <h4>Outsourcing Contable</h4>
                </a>

                <p>Inducción de temas contables y tributarios para tí.</p>
                <p>Registro de operaciones (compras, gastos y ventas)</p>
                <p> Archivo de documentación física (permanencia un año)</p>
                <p> Presentación de libros contables (Libros electrónicos - PLE)</p>
                <p>Declaración de impuestos mensuales y anuales (PDT 621)</p>
                <p>Declaraciones anuales impuesto a la renta,</p>
                <p>Declaración anual de operaciones con terceros - DAOT)</p>
                <p> Gestión de detracciones</p>
                <p>Elaboración de reportes financieros de gestión trimestrales y a</p>
                <p>solicitud.</p>
                <p> Emisión de Estados Financieros anuales firmados. ( Balances,</p>
                <p>estado de resultados)</p>
                <p> Envío mensual de score en el sistema financiero</p>
              </div>
            </CustomSection>
          </div>
        </div>
      </div>
    </div>
  );
}

CustomServiciosFeature.propTypes = {};

export default CustomServiciosFeature;
