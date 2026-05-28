# Day 6: Events + LocalStorage

The purpose is to understand how the browser fires and bubbles events,
how to intercept them efficiently with delegation, and how to persist
data across page refreshes using localStorage.

## What does this project cover?
A Notes App - Memento - where you can create, save, and delete notes that survive page refresh.
- `addEventListener` on a parent element to catch child events (event delegation)
- `event.target` to identify exactly what was clicked
- `event.target.classList.contains()` to filter clicks by type
- `event.target.parentElement` to traverse from child to parent
- `dataset` to stamp custom index metadata onto HTML elements
- `localStorage.setItem()` and `getItem()` to persist data
- `JSON.stringify()` and `JSON.parse()` for the object ↔ string round trip

## Constraints
- No frameworks, no libraries
- One event listener on the container handles all delete clicks
- Notes array is the source of truth - DOM reflects it

## Bugs I hit
- **[object Object] trap** : passed a raw object to `localStorage.setItem()`
  without `JSON.stringify()`. Stored `[object Object]` instead of actual data.
  Always stringify before saving.
- **null crash on first load** : `JSON.parse(null)` returns `null`, not `[]`.
  Added `|| []` fallback so fresh installs don't crash on push.

## Key insight
Event delegation beats attaching listeners to each element.
A click bubbles up the DOM tree — let the parent catch it,
then use `event.target` to figure out what was actually clicked.
This works for dynamically added elements too, which direct listeners don't.

## LocalStorage is a string-only dictionary
Think of it like a Python dict that only accepts strings as values.
Objects must be translated in (stringify) and out (parse) manually.

## Improvements / what's next
- Deleting a note doesn't reindex remaining notes — stale indices could cause bugs
  with a larger app. A full re-render function would fix this cleanly.
- No edit functionality yet
- Day 7: Fetch API — notes could sync to a real backend instead of localStorage