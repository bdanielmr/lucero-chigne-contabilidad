/* eslint-disable no-unused-vars */
import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import Link from 'next/link';
import { getPageByUri } from 'lib/pages';
import { WebsiteJsonLd } from 'lib/json-ld';
import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';
import { VscGraph } from 'react-icons/vsc';

import { AiFillReconciliation, AiFillPhone, AiOutlineFileSearch, AiOutlineGlobal } from 'react-icons/ai';

import { GoArrowUp, GoArrowDown } from 'react-icons/go';
import { MdAccountBalance, MdSmartphone, MdTimer } from 'react-icons/md';
import { FaUsers, FaMapPin } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { FiMail, FiSmartphone } from 'react-icons/fi';

import { BiHeart } from 'react-icons/bi';
import { ImEarth } from 'react-icons/im';
import styles from 'styles/pages/Home.module.scss';
import FeaturedImage from 'components/FeaturedImage';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { Backpack } from 'react-kawaii';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeaderMain from 'components/header_main/HeaderMain';
import Nav from 'components/Nav';
import CustomHomeFront from 'components/CustomHomeFront/CustomHomeFront';
import CustomInfoPersonalHome from 'components/CustomInfoPersonalHome/CustomInfoPersonalHome';
import CustomHomeServicios from 'components/CustomHomeServicios/CustomHomeServicios';
import CustomExperienceComponent from 'components/CustomExperienceComponent/CustomExperienceComponent';
import CustomAtencionWork from 'components/CustomAtencionWork/CustomAtencionWork';
import CustomContactFeature from 'CustomContactFeature/CustomContactFeature';
import CustomServiciosFeature from 'components/CustomServiciosFeature/CustomServiciosFeature';
import CustomServiciosMoreFeature from 'components/CustomServiciosFeature/CustomServiciosMoreFeature';
import CustomSection from 'components/CustomSection/CustomSection';

export default function Home({ posts, pagination, pageHome }) {
  const { metaTitle, slug, content, featuredImage, children } = pageHome;
  console.log('featuredImage', featuredImage?.sourceUrl);
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <>
      <HeaderMain />
      <Nav />{' '}
      <CustomSection id="/inicio/">
        <CustomHomeFront />
      </CustomSection>
      <CustomSection id="/sobre-mi/">
        <CustomInfoPersonalHome />
      </CustomSection>
      <CustomSection id="/servicios/">
        <CustomHomeServicios />
      </CustomSection>
      <CustomSection id="/experiencia/">
        <CustomExperienceComponent />
      </CustomSection>
      <CustomSection id="/contacto/">
        <CustomAtencionWork />

        <CustomContactFeature />
      </CustomSection>
      <CustomSection id="/servicios/">
        <CustomServiciosFeature />
      </CustomSection>
      <CustomSection id="/utilitarios/">
        <CustomServiciosMoreFeature />
      </CustomSection>
    </>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  const { page: pageHome } = await getPageByUri('/home/');
  console.log('page, home', pageHome);
  return {
    props: {
      pageHome,
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
