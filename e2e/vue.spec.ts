import { test, expect } from '@playwright/test'

test.describe('JokesApp HomeView', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows sort control, joke cards, and pagination', async ({ page }) => {
    // SortControl exists
    await expect(page.locator('[data-testid="button-sort-by-type"]')).toBeVisible()
    await expect(page.locator('[data-testid="button-sort-by-setup"]')).toBeVisible()

    // Pagination exists
    await expect(page.getByRole('button', { name: /next/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /prev/i })).toBeVisible()

    const jokeCards = page.locator('[data-testid="joke-card"]')
    await expect(jokeCards.first()).toBeVisible()
  })

  test('pagination works', async ({ page }) => {
    // Click next page
    const nextBtn = page.getByRole('button', { name: /next/i })
    await nextBtn.click()
    // Page number should update
    await expect(page.locator('span', { hasText: /Page 2/ })).toBeVisible()
  })
})
