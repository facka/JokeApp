// ./pages/TodoMVCPage.ts
import { UIComponent, Enter, PressEnterOn, Step, ClickOn } from 'playwright-maestro'

// Define UIComponents
const sortByTypeButton = new UIComponent(
  'Sort By Type Button',
  '[data-testid="button-sort-by-type"]',
)
const sortBySetupButton = new UIComponent(
  'Sort By Setup Button',
  '[data-testid="button-sort-by-setup"]',
)
const nextPageButton = new UIComponent('Next Page Button', 'button:has-text("Next")')
const prevPageButton = new UIComponent('Previous Page Button', 'button:has-text("Prev")')
const jokeCards = new UIComponent('Joke Cards', '[data-testid="joke-card"]')
const pageNumber = new UIComponent('Page Number', 'span:has-text("Page")')

const goToNextPage = Step('Go Next Page', () => {
  ClickOn(nextPageButton)
})

const goToPrevPage = Step('Go Previous Page', () => {
  ClickOn(prevPageButton)
})

export default {
  sortByTypeButton,
  sortBySetupButton,
  nextPageButton,
  prevPageButton,
  jokeCards,
  pageNumber,
  goToNextPage,
  goToPrevPage,
}
