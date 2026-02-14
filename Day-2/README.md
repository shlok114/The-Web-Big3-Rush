# Day 2: CSS Layout

The Purpose is to learn how Layout works using the flexbox

## What does this Project Cover?
A card based website displaying programming languages
- Flexbox
- Responsive CSS units, like vw
- Gradient background and shadows

## Constraints
- no Grid
- no Javascript
- layout handled purely using flexbox

## Learnings
- Flexbox is set default to nowrap
- Sometimes, px and rem work better than vw, vh
- Using gap property is cleaner than justify-content
- min-height: 100vh; is safer than height: 100vh;

## Structure of Project
inside the body tag:
```
header
div.container (flex container)
  div.lang (card)
    img
    p (language name)
    p (tagline)
```

## What next?
- Day 3 of advanced responsiveness in CSS using media query and possibility of CSS grids
