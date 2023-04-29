/**
 * @import import {
    SectionMapType,
    SectionsMappingType,
    SectionsMappingProfilesType,
  } from '../@types/SectionsMappingType'
 */

export type SectionMapType = {
  title: string
  pathname: string
  iconLibrary: string
  iconName: string
  iconTitleText: string
  childName: string
}

export type SectionsMappingType = Record<string, SectionMapType>

export type SectionsMappingProfilesType = Record<string, SectionsMappingType>
