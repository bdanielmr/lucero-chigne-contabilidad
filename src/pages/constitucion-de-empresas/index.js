/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import Layout from 'components/Layout';
const index = (props) => {
  return (
    <Layout>
      {' '}
      <div style={{ marginRight: '0%', textAlign: 'center' }}>
        <p style={{ margin: '0', fontSize: '2rem', color: 'white' }}>
          <RoughNotation color="orangered" type="highlight" show={true}>
            Constitucion de empresas{' '}
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
              Ofrezco la opción de{' '}
              <RoughNotation color="orange" type="circle" show={true}>
                asesorar
              </RoughNotation>{' '}
              la creación de personas jurídicas
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              (empresas, sociedades, asociaciones, entre otras,{' '}
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              las más conocidas como empresas con{' '}
              <RoughNotation color="yellow" type="highlight" show={true} style={{ color: 'black' }}>
                RUC 20)
              </RoughNotation>
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              y la obtención de{' '}
              <RoughNotation style={{ color: 'black' }} color="yellow" type="highlight" show={true}>
                RUC con 10
              </RoughNotation>
              <RoughNotation color="orangered" type="underline" show={true}>
                {' '}
                (personas naturales).{' '}
              </RoughNotation>
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              Así también analizo cuáles son las mejores opciones para tí
            </p>
          </div>
        </p>
      </div>
    </Layout>
  );
};

index.propTypes = {};

export default index;
