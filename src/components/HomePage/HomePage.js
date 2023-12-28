import React from 'react';
import { Carrousel } from '../Carrousel/Carrousel';

import { BannerBodySoporte } from '../BannerBodySoporte/BannerBodySoporte';
import FlexFeatures from '../FlexFeatures/FlexFeatures';
import { InfoHome } from '../InfoHome/InfoHome';
import { BannerBody } from '../BannerBody/BannerBody';
import { ServiciosCard } from '../ServiciosCard/ServiciosCard';
import { Bienvenida } from '../Bienvenida/Bienvenida';
import { PreguntasFrecuentes } from '../PreguntasFrecuentes/PreguntasFrecuentes';
import { PreguntasFrecBoton } from '../PreguntasFrecuentes/PreguntasFrecBoton';
import { Porcentajes } from '../Porcentajes/Porcentajes';
import Trimage from '../../Trimage/Trimage';

export const HomePage = () => {
  return (
    <>
        <Carrousel/>
        <Bienvenida/>
        <Porcentajes/>
        <Trimage/>

        {/* <FlexFeatures/> */}
        <InfoHome/>
        {/* <BannerBody/> */}
        {/* <ServiciosCard/> */}
        <BannerBodySoporte/>
        <PreguntasFrecBoton/>
        {/* <PreguntasFrecuentes/> */}
        {/* <FlexMarcas/> */}
    </>
  )
}
