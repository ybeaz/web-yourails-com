export const getBuiltColor =
  (themeFor: string, alphaIn: number, lightnessIn: number) =>
  (
    props2: any,
    color2: string,
    alpha2: number = alphaIn,
    lightness2: number = lightnessIn,
    themeFrom2: string = themeFor
  ): string => {
    let colorNext = color2

    if (color2 === 'colorFirst') {
      colorNext = 'colorFirst'
    } else if (color2 === 'colorSecond') {
      colorNext = 'colorSecond'
    } else if (color2 === 'colorActive') {
      colorNext = 'colorActive'
    }

    const [colorFormat, redOrHue, greenOrSaturation, blueOrLightness, alpha] =
      props2.theme.colors[colorNext][themeFrom2]

    const blueOrLightnessNext = blueOrLightness + lightness2
    const alphaNext = alpha + alpha2

    const percent = colorFormat === 'hsla' ? '%' : ''
    const color = `${colorFormat}(${redOrHue}, ${greenOrSaturation}${percent}, ${blueOrLightnessNext}${percent}, ${alphaNext})`

    return color
  }
