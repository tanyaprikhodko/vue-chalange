import type * as posterTypes from '../../types/posters'
import type * as flyerTypes from '../../types/flyers'
import type * as businessCardTypes from '../../types/business-cards'

// This function normalizes the options array, so that each option has a name and a slug
// because the JSON file with some options doesn't have a name property

// this function can be extended to normalize other properties as well if needed
// Also I added a few types, because it is only 3 types, but if there are more types, I would add generic types, or separate functions for each type. It depends on the project requirements and data structure

export const normalizeOptions = (
  options: Array<posterTypes.Option | flyerTypes.Option | businessCardTypes.Option>
) => {
  return options.map(
    (option: posterTypes.Option | flyerTypes.Option | businessCardTypes.Option) => {
      return {
        ...option,
        name: option.name ?? option.slug,
        slug: option.slug
      }
    }
  )
}
