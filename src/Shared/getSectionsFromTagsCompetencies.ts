import { CompetencyType } from '../@types/CompetencyType'

interface GetSectionsFromTagsCompetenciesType {
  (competencyTags: CompetencyType[]): string[]
}

/**
 * @description Function to
 * @import import { getSectionsFromTagsCompetencies } from '../../../Shared/getSectionsFromTagsCompetencies'
 */

export const getSectionsFromTagsCompetencies: GetSectionsFromTagsCompetenciesType =
  competencyTags => {
    const output = competencyTags.reduce(
      (accumulator: string[], tag: CompetencyType) => {
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
