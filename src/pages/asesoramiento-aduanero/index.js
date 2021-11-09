/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
const index = (props) => {
  return (
    <Layout>
      <div style={{ marginRight: '0%' }}>
        <p style={{ margin: '0', fontSize: '2rem', color: 'white' }}>
          <RoughNotation color="orangered" type="highlight" show={true}>
            Asesoramiento Aduanero{' '}
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
              Si estás interesado en
              <RoughNotation color="orange" type="underline" show={true}>
                {' '}
                importar o exportar mercancía
              </RoughNotation>
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>
              también te guiaré sobre los trámites aduaneros
            </p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>tienes que llevar a cabo</p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>te explicaremos y orientaremos acerca</p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>de los documentos que necesitas presentar</p>
            <p style={{ margin: '0', fontSize: '1rem', color: 'white' }}>y qué gestiones debes realizar.</p>
          </div>
        </p>
      </div>
    </Layout>
  );
};

index.propTypes = {};

export default index;
