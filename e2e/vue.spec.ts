/* eslint-disable playwright/no-standalone-expect */
import { test, expect } from '@playwright/test'
import { Expect, Goto, Steps } from 'playwright-maestro'
import HomeViewPage from './HomeViewPage.js'

test(
  'shows sort control, joke cards, and pagination',
  Steps(() => {
    Goto('/')

    Expect(HomeViewPage.sortByTypeButton).IsVisible()
    Expect(HomeViewPage.sortBySetupButton).IsVisible()
    Expect(HomeViewPage.nextPageButton).IsVisible()
    Expect(HomeViewPage.prevPageButton).IsVisible()
    Expect(HomeViewPage.pageNumber).ToHaveText('Page 1')
  }),
)

test(
  'pagination works',
  Steps(() => {
    Goto('/')
    HomeViewPage.goToNextPage()
    Expect(HomeViewPage.pageNumber).ToHaveText('Page 2')
  }),
)
