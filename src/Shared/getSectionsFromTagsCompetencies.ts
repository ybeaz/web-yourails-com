import { CompetencyTagType } from '../@types/GraphqlTypes'

interface GetSectionsFromTagsCompetenciesType {
  (competencyTags: CompetencyTagType[]): string[]
}

/**
 * @description Function to
 * @import import { getSectionsFromTagsCompetencies } from '../../../Shared/getSectionsFromTagsCompetencies'
 */

export const getSectionsFromTagsCompetencies: GetSectionsFromTagsCompetenciesType =
  competencyTags => {
    const output = competencyTags.reduce(
      (accumulator: string[], tag: CompetencyTagType) => {
        let output: string[] = []
        const sectionFound = accumulator.find(
          (section: string) => section === tag.section
        )

        if (!sectionFound) {
          output = [tag.section]
        }

        return [...accumulator, ...output]
      },
      []
    )

    return output
  }
