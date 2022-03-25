import { useSelector } from 'react-redux'

import { createGlobalStyle } from 'styled-components'

import { ILightness, IAlphas } from '../../Constants/globalTheme.const'
import { IRootStore } from '../../Interfaces/IRootStore'
import { getBuiltColor } from './getBuiltColor'

interface IGetCreatedGlobalStyle {
  (lightness: ILightness, alphas: IAlphas): any
}

export const getCreatedGlobalStyle: IGetCreatedGlobalStyle = (
  lightness,
  alphas
) => {
  const {
    darker4,
    darker3,
    darker2,
    darker,
    middle,
    lighter,
    lighter2,
    lighter3,
    lighter4,
  } = lightness

  const {
    clearer4,
    clearer3,
    clearer2,
    clearer,
    medial,
    opaciter,
    opaciter2,
    opaciter3,
    opaciter4,
  } = alphas

  const {
    globalVars: { theme },
  } = useSelector((store2: IRootStore) => store2)

  if (!theme) return null

  const getColor = getBuiltColor(theme, 1, middle)

  return createGlobalStyle`

    .TemplateScreen ._div,
    .TemplateScreen ._div2 {
      background-color: ${props2 =>
        getColor(props2, 'colorSecond', medial, middle)};
    }
  `
}
