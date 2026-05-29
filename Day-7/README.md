# Day 7: Fetch API + Async JS

Understanding how JavaScript handles asynchronous operations — delegating
work to the browser, staying unblocked, and picking up results via the event loop.

## What does this project cover?
A GitHub Profile Card - search any username, fetch live data from the GitHub API, render a card.
- `async/await` for clean, linear async code
- `fetch()` to hit a live public API
- `response.ok` to handle HTTP errors (404, 500)
- `try/catch` for network failure handling
- Fallback values with `||` for missing API fields
- DOM reset before each search to prevent stale state
- DRY pattern, shared `handleSubmission()` for click and Enter key

## How it works
- input value → fetchData(username) → fetch("https://api.github.com/users/{username}") → response.ok? → populate card
- no → show error

## Bugs I hit
- **Stale state** : showing card from search 1 when search 2 fails.
  Fixed by resetting both card and error to `hidden` at the start of every fetch.
- **Empty fetch** : clicking Search with no input still called `fetchData("")`.
  Fixed with an early `return` before the fetch call.
- **null bio/name** : some users have no bio or display name set.
  GitHub returns `null` — fixed with `data.bio || "No bio available"`.

## Key insight
- `await` pauses the surrounding function only, not the whole program.
- JS "delegates" the network request to the browser, keeps the call stack free, and the event loop wakes the function back up when data arrives.
- One thread. Non-blocking. The browser does the waiting.

## Improvements / what's next
- No loading state while fetching, a spinner would improve UX
- Could add Enter key search refinement with `.trim()` to catch whitespace-only input
- Day 8: CSS Animations - card reveal could be orchestrated with JS