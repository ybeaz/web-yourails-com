import { ScreenCaseType } from '../YrlNativeViewLibrary/Hooks/useMediaQueryResYrl'

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
      imageWidth: widthIn * 0.7,
      imageHeight: (widthIn * 0.7 * 9) / 16,
    }
  }

  return output
}
