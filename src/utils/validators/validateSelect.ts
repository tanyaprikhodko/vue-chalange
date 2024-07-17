import type * as posterTypes from '../../types/posters'
import type * as flyerTypes from '../../types/flyers'
import type * as businessCardTypes from '../../types/business-cards'

// This function validates the selected options
// It compares the selected options with the excluded options
// If the selected options are not compatible with the excluded options, it returns an error message
// Otherwise, it returns true

// Complexity of this function is O(n³), which is not good, but it is acceptable for this small project
// and it can be optimized if needed by using a different data structure or algorithm

export const validateSelect = (
  excludedOptions: posterTypes.Exclude[][] | flyerTypes.Exclude[][] | businessCardTypes.Exclude[][],
  selectedOptions:
    | posterTypes.SelectedOptions
    | flyerTypes.SelectedOptions
    | businessCardTypes.SelectedOptions
): string | boolean => {
  for (let i = 0; i < excludedOptions.length; i++) {
    let matchCount = 0
    for (let j = 0; j < excludedOptions[i].length; j++) {
      const excludedProperty = excludedOptions[i][j].property
      if (!selectedOptions[excludedProperty]) {
        continue
      }

      const selectedOptionSlug = selectedOptions[excludedProperty].slug

      // I can simplify this code by modifying excluded options string[] to Set<string> and using has() method
      if (excludedOptions[i][j].options.includes(selectedOptionSlug)) {
        matchCount++
      }
    }

    if (matchCount == excludedOptions[i].length) {
      return 'Selected options is not compatible with other selected options'
    }
  }

  return true
}
