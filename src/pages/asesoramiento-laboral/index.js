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
            Asesoramiento Laboral{' '}
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
            ofrezco el asesoramiento
            <RoughNotation color="orange" type="underline" show={true}>
              {' '}
              a temas de planillas
            </RoughNotation>
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>( Planilla mensual - PLAME)</p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            <RoughNotation style={{ color: 'white' }} color="orangered" type="circle" show={true}>
              sueldos remuneraciones
            </RoughNotation>{' '}
            <RoughNotation style={{ color: 'white' }} color="yellow" type="circle" show={true}>
              de trabajadores,
            </RoughNotation>
          </p>
          <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
            <RoughNotation style={{ color: 'white' }} color="yellow" type="underline" show={true}>
              liquidación de beneficios sociales
            </RoughNotation>
          </p>
        </div>
      </div>
    </Layout>
  );
};

index.propTypes = {};

export default index;
