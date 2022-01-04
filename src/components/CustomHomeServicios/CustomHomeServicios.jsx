/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomHomeServicios.module.scss';
const CustomHomeServicios = (props) => {
  const cardOption = [
    {
      img: 'https://i.imgur.com/CwszE7r.png',
      tittle: 'Constitución de Empresas',
      info: ` 
       Ofrezco la opción de asesorar la
creación de personas jurídicas
(empresas, sociedades....
       `,
      button: 'ver mas',
    },
    {
      img: 'https://i.imgur.com/4PpanS8.png',
      tittle: 'Outsourcing Contable',
      info: ` 
      Inducción de temas contables y
      tributarios para tí. Registro de
      operaciones (compras, gastos y
      ventas) Archivo de documentación física....`,
      button: 'ver mas',
    },
    {
      img: 'https://i.imgur.com/dnVoT8r.png',
      tittle: 'Planeación Tributaria',
      info: ` 
      Realizo un diagnóstico de tu
situación actual y elaboro la planificación de los impuestos a
pagar...`,
      button: 'ver mas',
    },
    {
      img: 'https://i.imgur.com/BgL90Ds.png',
      tittle: 'Asesoramiento Tributario',
      info: `Ante cualquier duda en temas de
      SUNAT...`,
      button: 'ver mas',
    },
    {
      img: 'https://i.imgur.com/f8Pah0Y.png',
      tittle: 'Asesoramiento Laboral',
      info: ` 
      En este rubro ofrezco el asesoramiento relacionado a temas de planillas...`,
      button: 'ver mas',
    },
    {
      img: 'https://i.imgur.com/6vy6JGh.png',
      tittle: 'Asesoramiento Aduanero',
      info: ` 
      Si estás interesado en importar o
      exportar mercancía...`,
      button: 'ver mas',
    },
  ];
  return (
    <div className={styles['main-flex-sheet']}>
      <div className={styles['container-img-info']}>
        <div className={styles['container-img-info-label']}>
          <img src="https://i.imgur.com/4K4Ubdo.png"></img>
        </div>
        <div className={styles['container-img-text']}>
          <h3>¿Como te puedo ayudar?</h3>
          <p>Ofrezco los siguientes servicios:</p>
        </div>
      </div>
      <div className={styles['flex-sheet']}>
        {cardOption.map((card, index) => {
          return (
            <div key={index} className={styles['into-sheet-card']}>
              <img src={card.img} />
              <p>{card.tittle}</p>
              <span>{card.info}</span>
              <button>ver mas</button>
            </div>
          );
        })}
      </div>
      <div>
        <div className={styles['into-sheet-card']}>
          <img src="https://i.imgur.com/K9sgSbR.png" />
          <p style={{ 'text-align': 'center' }}>Otros</p>
          <button>ver mas</button>
        </div>
      </div>
    </div>
  );
};

CustomHomeServicios.propTypes = {};

export default CustomHomeServicios;
