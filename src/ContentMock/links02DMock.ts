import { SectionType, LinkType } from '../@types/LinkType'

export const links02D: LinkType[] = [
  {
    idProfile: '2',
    iconLibrary: 'Ionicons',
    iconName: 'logo-linkedin',
    contentType: SectionType['linkHref'],
    contentSrc: 'https://www.linkedin.com/in/dmitry-che/',
    content: 'Profile in Linkedin.com',
    label: 'Link',
    isActive: true,
  },
  {
    idProfile: '2',
    iconLibrary: undefined,
    iconName: undefined,
    contentType: SectionType['imageSrc'],
    contentSrc: 'https://yourails.com/images/users/qrcode-romeQuietZone00.png',
    content: '',
    label: 'QR code with contacts',
    isActive: true,
  },
]
