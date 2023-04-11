import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { withStoreState } from '../../Hooks/withStoreState'
import {
  CompetencyTagType,
  CompetencyTagsObjType,
} from '../../../@types/CompetencyTagType'
import { getSectionsFromTagsCompetencies } from '../../../Shared/getSectionsFromTagsCompetencies'
import { COMPETENCY_TAGS_SUBHEADING_R1_DICT } from '../../../Constants/competencyTagsSubheading.cont'
import { Header } from '../Header/Header'
import { Text } from '../../Components/Text/Text'
import { TagProperty } from '../TagProperty/TagProperty'
import { CompetencyTagsType } from './CompetencyTagsType'
import { style } from './CompetencyTagsStyle'

import { competencyTags2 } from '../../../ContentMock/competencyTagsMock2'
import { competencyTags } from '../../../ContentMock/competencyTagsMock'

/**
 * @import import { CompetencyTags } from '../Components/CompetencyTags/CompetencyTags'
 */
const CompetencyTagsComponent: CompetencyTagsType = props => {
  const { styleProps = { CompetencyTags: {} }, store } = props

  // const store = useSelector((store2: RootStoreType) => store2)
  const {
    globalVars: { idUserHost },
  } = store

  const competencyTags2Keys: Array<keyof CompetencyTagsObjType> = Object.keys(
    competencyTags2
  ) as Array<keyof CompetencyTagsObjType>

  const competencyTagsKeys = getSectionsFromTagsCompetencies(competencyTags)
  console.info('CompetencyTags [30]', { competencyTagsKeys })
  // TODO: Stopped here getSectionsFromTagsCompetencies

  const getTagList = (competencies: any[]): ReactElement[] => {
    return competencies.map((competency, index: number) => {
      const { id, title, linkHref, tooltips } = competency
      const tagPropertyProps = {
        key: `tagProperty-${index}`,
        title,
        linkHref,
        tooltips,
        testID: 'CompetencyTags_item',
      }
      return <TagProperty {...tagPropertyProps} />
    })
  }

  // TODO
  // const competencyTagsJsx = competencyTagsKeys.map(
  //   (tagSubheading: string, index: number) => {

  //     return (
  //       <View
  //         key={`competencyTags-${index}`}
  //         style={[style.tagListWrapper]}
  //         testID='tagListWrapper'
  //       >
  //         <Text style={[style.tagSubheading]} testID='tagSubheadingText'>
  //           {`${tagSubheading}:`}
  //         </Text>
  //         {getTagList(competencyTagsGroup)}
  //       </View>
  //     )
  //   }
  // )

  const competencyTags2Jsx = competencyTags2Keys.map(
    (key: keyof CompetencyTagsObjType, index: number) => {
      const competencyTagsGroup: CompetencyTagType[] = competencyTags2[
        key
      ] as CompetencyTagType[]

      const tagSubheading = COMPETENCY_TAGS_SUBHEADING_R1_DICT[key]

      return (
        <View
          key={`competencyTags-${index}`}
          style={[style.tagListWrapper]}
          testID='tagListWrapper'
        >
          <Text style={[style.tagSubheading]} testID='tagSubheadingText'>
            {tagSubheading + ':'}
          </Text>
          {getTagList(competencyTagsGroup)}
        </View>
      )
    }
  )

  const propsOut: Record<string, any> = {
    tagPropertyProps: {},
    headerProps: {
      styleProps: {
        Header: { paddingBottom: '1rem' },
        headerText: {},
      },
      mediaParams: { deviceType: '' },
      headerText: 'Competency Tags',
    },
  }

  return (
    <View
      style={[style.CompetencyTags, styleProps.CompetencyTags]}
      testID='CompetencyTags'
    >
      <Header {...propsOut.headerProps} />
      {competencyTags2Jsx}
    </View>
  )
}

export const CompetencyTags = React.memo(
  withStoreState(CompetencyTagsComponent)
)
