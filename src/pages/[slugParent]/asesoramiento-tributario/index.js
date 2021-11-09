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
            Asesoramiento Tributario{' '}
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
            cursor: 'n-resize;',
          }}
        >
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            Ante cualquier duda en
            <RoughNotation color="orange" type="underline" show={true}>
              {' '}
              temas de SUNAT,
            </RoughNotation>
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            <RoughNotation color="red" type="crossed-off" show={true}>
              impuestos y tributos{' '}
            </RoughNotation>
            brindo soluciones eficientes.{' '}
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            <RoughNotation style={{ color: 'white' }} color="orangered" type="underline" show={true}>
              ( Cartas, esquelas, órdenes de pago,
            </RoughNotation>
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            <RoughNotation style={{ color: 'white' }} color="yellow" type="underline" show={true}>
              resoluciones de cobranza, entre otros)
            </RoughNotation>
          </p>
        </div>
      </div>
    </Layout>
  );
};

index.propTypes = {};

export default index;
