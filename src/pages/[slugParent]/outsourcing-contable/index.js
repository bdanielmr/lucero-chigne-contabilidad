/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
const index = (props) => {
  return (
    <Layout>
      <div style={{ marginRight: '0%', textAlign: 'center' }}>
        <p style={{ margin: '0', fontSize: '2rem', color: 'white' }}>
          <RoughNotation color="orangered" type="highlight" show={true}>
            Outsourcing Contable{' '}
          </RoughNotation>
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
              Inducción de temas
              <RoughNotation color="orange" type="underline" show={true}>
                {' '}
                contables y tributarios
              </RoughNotation>{' '}
              para ti
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              Registro de operaciones (compras, gastos y ventas)
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              Archivo de documentación física
              <RoughNotation color="blue" type="highlight" show={true} style={{ color: 'white' }}>
                (permanencia un año)
              </RoughNotation>
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              <RoughNotation style={{ color: 'white' }} color="yellow" type="circle" show={true}>
                Presentación{' '}
              </RoughNotation>
              de libros contables (Libros electrónicos - PLE)
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              Declaración de{' '}
              <RoughNotation style={{ color: 'white' }} color="yellow" type="underline" show={true}>
                impuestos mensuales y anuales
              </RoughNotation>
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              (PDT 621;{''}
              <RoughNotation style={{ color: 'white' }} color="orangered" type="underline" show={true}>
                Declaraciones anuales impuesto a la renta,
              </RoughNotation>
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              <RoughNotation style={{ color: 'white' }} color="yellow" type="underline" show={true}>
                Declaración anual
              </RoughNotation>{' '}
              de operaciones con terceros - DAOT)
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>Gestión de detracciones</p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>Elaboración de reportes financieros</p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>de gestión trimestrales y a solicitud.</p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              Emisión de Estados Financieros anuales firmados
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>( Balances, estado de resultados)</p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              Envío mensual de score del sistema financiero
            </p>
          </div>
        </p>
      </div>
    </Layout>
  );
};

index.propTypes = {};

export default index;
