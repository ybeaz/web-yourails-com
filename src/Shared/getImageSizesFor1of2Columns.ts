import { ScreenCaseType } from '../ViewLayer/Hooks/useMediaQueryRes'

interface GetImageSizesFor1of2ColumnsType {
  (screenCaseIn: ScreenCaseType, widthIn: number): {
    imageWidth: number
    imageHeight: number
  }
}

/**
 * @description Function to
 */
export const getImageSizesFor1of2Columns: GetImageSizesFor1of2ColumnsType = (
  screenCaseIn,
  widthIn
) => {
  let output = {
    imageWidth: widthIn * 0.33,
    imageHeight: (widthIn * 0.33 * 9) / 16,
  }

  if (screenCaseIn === 'xsSmMd') {
    output = {
      imageWidth: widthIn * 0.45,
      imageHeight: (widthIn * 0.45 * 9) / 16,
    }
  }

  return output
}
