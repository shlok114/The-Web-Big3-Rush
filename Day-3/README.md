# Day 3: Bento Grid Layout

The Purpose is to build a structured bento-style layout using CSS Grid and improve responsiveness across devices.

## What does this Project Cover?
A coffee-themed bento grid layout with multiple content sections
- CSS Grid with grid-template-areas
- Flexbox for internal card alignment
- Responsive design using media queries
- Overflow handling

## Constraints
- no Javascript
- layout handled using Grid + Flexbox only
- manual control of grid areas for composition

## Learnings
- Grid controls macro layout, Flexbox controls internal alignment
- Absolute positioning can break flow if not handled carefully
- Fixed widths reduce responsiveness
- Media queries should adjust whole structure, not just sizes

## Structure of Project
inside the body tag:
```
div.container (grid container)
  div#cup (hero card)
    img
    p (text)
  div#coffee-beans
    div (text content)
    img
  div#center
    div#center-text
    div#bottom-text
  div#rating
    div#rating-text
    div#stars
      img
  div#order
    button
    img
  div#logo
      img
```

## What next?
- Refine UI and visual consistency
- add subtle transitions
