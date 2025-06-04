1. What's a closure? Where in the code is there a closure?

A **closure** is a function that "remembers" the environment in which it was created, even after that environment has gone out of scope. In JavaScript/TypeScript, closures are commonly created when an inner function accesses variables from an outer function.

**In the code:**  
The Pinia store defined in `jokesStore.ts` uses closures. For example:

```typescript
export const useJokesStore = defineStore('jokes', () => {
  const jokes = ref<Joke[]>([])
  // ...other refs and functions...

  function setSortKey(key: keyof Joke | ''): void {
    sortKey.value = key
    currentPage.value = 1
  }

  // ...return object...
})
```

Here, `setSortKey` is a closure because it accesses `sortKey` and `currentPage` from the outer scope of the store setup function. All the functions returned from the store (like `setSortKey`, `setPage`, `loadJokes`, and the computed properties) are closures over the store's state.

---

2. Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

A **side-effect** is any operation in a function that affects something outside its local environment or relies on something outside its local environment. Examples: modifying external variables, performing I/O, making HTTP requests, or updating the DOM.

**Potential side-effects in the code:**

- **`loadJokes` function in `jokesStore.ts`:**

  ```typescript
  async function loadJokes(): Promise<void> {
    jokes.value = await getJokes()
  }
  ```

  - **Side-effect:** Fetches data from an external service and updates the store's state (`jokes.value`).
  - **Expected?** Yes, this is expected for a data-loading function in a store.
  - **Can it be avoided?** Not really, unless you move the side-effect elsewhere (e.g., to a component), but the store is the right place for this in a typical Vue app.

- **`setSortKey` and `setPage` functions:**
  ```typescript
  function setSortKey(key: keyof Joke | ''): void {
    sortKey.value = key
    currentPage.value = 1
  }
  function setPage(page: number): void {
    currentPage.value = page
  }
  ```
  - **Side-effect:** Mutate the store's state.
  - **Expected?** Yes, these are store mutation functions, so mutating state is their purpose.
  - **Can it be avoided?** Not in this context; it's the intended design.

**Summary:**

- All store mutation functions and data-fetching functions have side-effects (state mutation, network requests).
- These side-effects are expected and appropriate for their context in a Pinia store.
- They cannot and should not be avoided in this architectural pattern. If you want to avoid side-effects, you would only use pure functions, but that is not practical for state management or data fetching in an application.
