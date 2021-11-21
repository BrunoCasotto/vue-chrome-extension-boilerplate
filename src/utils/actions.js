export const getGoogleSearchTerm = () => {
  return document.querySelector('[name="q"]').value
}

export const setGoogleBackground = (color) => {
  const html = document.querySelector('html')
  html.classList = []
  html.style = `background: ${color}!important`
}
