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
            Planeacion Tributaria{' '}
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
            Realizo un
            <RoughNotation color="orange" type="circle" show={true}>
              {' '}
              diagnóstico{' '}
            </RoughNotation>{' '}
            de tu situación actual
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            y elaboro la planificación de los{' '}
            <RoughNotation color="black" type="crossed-off" show={true}>
              impuestos{' '}
            </RoughNotation>
            a pagar
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>la documentación a presentar</p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            y{' '}
            <RoughNotation style={{ color: 'white' }} color="orangered" type="underline" show={true}>
              los probables escenarios a incurrir
            </RoughNotation>
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            Todo ello hecho de manera{' '}
            <RoughNotation style={{ color: 'white' }} color="yellow" type="underline" show={true}>
              personalizada y detallada
            </RoughNotation>
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            <RoughNotation style={{ color: 'white' }} color="orangered" type="underline" show={true}>
              Acerca del servicio:
            </RoughNotation>
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            Estudio previo, diagnóstico, confección y presentación del plan.
          </p>
        </div>
      </div>
    </Layout>
  );
};

index.propTypes = {};

export default index;
