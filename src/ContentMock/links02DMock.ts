import { ContentType, LinkType } from '../@types/LinkType'

export const links02D: LinkType[] = [
  {
    idUser: '2',
    iconLibrary: 'Ionicons',
    iconName: 'ios-logo-linkedin',
    contentType: ContentType['linkHref'],
    contentSrc: 'https://www.linkedin.com/in/dmitry-che/',
    content: 'Profile in Linkedin.com',
    label: 'Link',
    isActive: true,
  },
  {
    idUser: '2',
    iconLibrary: undefined,
    iconName: undefined,
    contentType: ContentType['imageSrc'],
    contentSrc: 'https://r1.userto.com/img/dmitriiSmidQrCodeQuietZone00.png',
    content: '',
    label: 'QR code with contacts',
    isActive: true,
  },
]
