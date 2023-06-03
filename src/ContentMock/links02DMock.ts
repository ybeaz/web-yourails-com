import { ContentType, LinkType } from '../@types/LinkType'

export const links02D: LinkType[] = [
  {
    idProfile: '2',
    iconLibrary: 'Ionicons',
    iconName: 'logo-linkedin',
    contentType: ContentType['linkHref'],
    contentSrc: 'https://www.linkedin.com/in/dmitry-che/',
    content: 'Profile in Linkedin.com',
    label: 'Link',
    isActive: true,
  },
  {
    idProfile: '2',
    iconLibrary: undefined,
    iconName: undefined,
    contentType: ContentType['imageSrc'],
    contentSrc: 'https://yourails.com/images/users/qrcode-romeQuietZone00.png',
    content: '',
    label: 'QR code with contacts',
    isActive: true,
  },
]
