export type MenuContentItemsType = {
  iconLibrary: string
  iconName: string
  iconTitleText: string
  childName: string
}

/**
 * @import import { MENU_CONTENT_ITEMS, MenuContentItemsType } from '../Constants/menuContentItems.const'
 */

export const MENU_CONTENT_ITEMS: MenuContentItemsType[] = [
  {
    iconLibrary: 'Ionicons',
    iconName: 'briefcase-outline',
    iconTitleText: 'Portfolio',
    childName: 'Portfolio',
  },
  {
    iconLibrary: 'Ionicons',
    iconName: 'cog-outline',
    iconTitleText: 'Skills',
    childName: 'TagsProperties',
  },
  {
    iconLibrary: 'Ionicons',
    iconName: 'person-outline',
    iconTitleText: 'Profile',
    childName: 'Profile',
  },
]
