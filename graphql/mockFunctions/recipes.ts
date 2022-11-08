interface Recipes {
  (_: unknown, limit: number): {
    id: string
    title: string
    description: string
    ingredients: string[]
  }[]
}

export const recipes: Recipes = (_, limit) => {
  return [
    {
      id: 'String!',
      title: 'String!',
      description: 'String',
      ingredients: ['a', 'b', 'c'],
    },
  ]
}
