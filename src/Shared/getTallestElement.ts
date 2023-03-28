export const getTallestElement = () => {
  let tallestElement = document.documentElement
  let maxHeight = document.documentElement.offsetHeight

  // Loop through all the elements on the page
  document.querySelectorAll('*').forEach(function (element: any) {
    // If this element is taller than the current tallest, update the variables
    if (element.offsetHeight > maxHeight) {
      tallestElement = element
      maxHeight = element.offsetHeight
    }
  })

  console.log('The tallest element on the page is:', tallestElement)
}
