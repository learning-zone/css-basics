# CSS3 Scenario-Based MCQ

> Scenario-based multiple choice questions covering core CSS3 topics.  

<br/>

## Table of Contents

* [Introduction](#-1-introduction)
* [Box Model](#-2-box-model) 
* [Selectors & Specificity](#-3-selectors--specificity) 
* [Positioning](#4-positioning) 
* [Flexbox](#5-flexbox) 
* [CSS Grid](#6-css-grid) 
* [Pseudo-classes & Pseudo-elements](#7-pseudo-classes--pseudo-elements) 
* [Transitions & Animations](#8-transitions--animations) 
* [Transforms](#-9-transforms) 
* [Media Queries & Responsive Design](#-10-media-queries--responsive-design) 
* [CSS Variables (Custom Properties)](#-11-css-variables-custom-properties) 
* [Typography & Text](#-12-typography--text) 
* [Colors & Gradients](#-13-colors--gradients) 
* [Z-index & Stacking Context](#-14-z-index--stacking-context) 
* [Overflow & Clipping](#-15-overflow--clipping) 
* [Display & Visibility](#-16-display--visibility)
* [SCSS / Sass](#-17-scss--sass)

<br/>

## # 1. Introduction

### Q1. A developer writes the following rule. Which CSS version introduced the `border-radius` property?

```css
div {
  border-radius: 8px;
}
```

- A) CSS1  
- B) CSS2  
- C) CSS3  
- D) CSS4  

**Answer: C) CSS3**

> `border-radius` is a CSS3 property. CSS3 introduced many visual enhancements such as rounded corners, shadows, gradients, and transitions.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q2. A stylesheet contains both inline styles and an external stylesheet. The inline style sets `color: red` and the external stylesheet sets `color: blue`. What color will the text be?

- A) Blue — external stylesheets always win  
- B) Red — inline styles have the highest specificity  
- C) Red — last-declared rule always wins  
- D) It depends on browser defaults  

**Answer: B) Red — inline styles have the highest specificity**

> Inline styles have a specificity of `1-0-0-0`, which overrides any external or embedded stylesheet rule unless `!important` is used in the stylesheet.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 2. Box Model

### Q3. A developer sets `width: 200px` and `padding: 20px` on a `div` with the default box model. What is the rendered width?

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

- A) 200px  
- B) 240px  
- C) 250px  
- D) 245px  

**Answer: C) 250px**

> By default (`box-sizing: content-box`), `width` refers to the content area only. Total width = 200 + 20 + 20 (padding) + 5 + 5 (border) = **250px**.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q4. After adding `box-sizing: border-box`, what is the rendered width of the same `div`?

```css
div {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

- A) 250px  
- B) 200px  
- C) 150px  
- D) 170px  

**Answer: B) 200px**

> With `border-box`, padding and border are included inside the declared `width`, so the total rendered width stays at **200px**.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q5. A developer wants 10px vertical spacing between paragraphs but margin collapsing is causing issues. Which scenario triggers margin collapsing?

- A) Two `inline` elements adjacent to each other  
- B) Two block-level siblings whose margins touch  
- C) A flex child and its parent  
- D) An absolute-positioned element and a float  

**Answer: B) Two block-level siblings whose margins touch**

> Margin collapsing occurs between the bottom margin of one block element and the top margin of the next sibling block element. The larger margin wins.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 3. Selectors & Specificity

### Q6. Which selector has the highest specificity?

```css
/* A */ p { color: red; }
/* B */ .text { color: blue; }
/* C */ #header .text { color: green; }
/* D */ #header p.text { color: orange; }
```

- A) A  
- B) B  
- C) C  
- D) D  

**Answer: D) `#header p.text`**

> Specificity values: A = `0-0-1`, B = `0-1-0`, C = `1-1-0`, D = `1-1-1`. Selector D has the highest specificity score.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q7. A developer uses the `:not()` pseudo-class. What does the following selector target?

```css
input:not([type="submit"]) {
  border: 1px solid gray;
}
```

- A) All submit inputs  
- B) All inputs except submit buttons  
- C) Only text inputs  
- D) All form elements except inputs  

**Answer: B) All inputs except submit buttons**

> `:not(selector)` matches elements that do NOT match the given selector. Here it targets every `<input>` whose `type` attribute is not `"submit"`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q8. What does the `~` combinator do?

```css
h2 ~ p { color: teal; }
```

- A) Selects the first `<p>` immediately after `<h2>`  
- B) Selects all `<p>` elements that are siblings of `<h2>` and come after it  
- C) Selects all `<p>` elements inside `<h2>`  
- D) Selects `<p>` elements that are children of `<h2>`  

**Answer: B) Selects all `<p>` elements that are siblings of `<h2>` and come after it**

> The general sibling combinator (`~`) matches all subsequent sibling elements of the specified type, not just adjacent ones.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 4. Positioning

### Q9. A developer sets `position: absolute` on a child element. Where is it positioned relative to?

```html
<div style="position: relative;">
  <span style="position: absolute; top: 10px; left: 10px;">Icon</span>
</div>
```

- A) The viewport  
- B) The nearest positioned ancestor (`position` not `static`)  
- C) The document body  
- D) Its immediate parent regardless of positioning  

**Answer: B) The nearest positioned ancestor**

> An absolutely positioned element is placed relative to its closest ancestor that has any `position` value other than `static`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q10. `position: sticky` stops sticking when:

- A) The user scrolls past its designated threshold  
- B) The element reaches the edge of its scrolling container  
- C) Another sticky element enters the viewport  
- D) The parent container fully scrolls out of view  

**Answer: D) The parent container fully scrolls out of view**

> A sticky element is sticky within its parent container. Once the parent scrolls out of the viewport, the sticky element scrolls away with it.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q11. Which positioning value removes an element from the normal document flow entirely?

- A) `relative`  
- B) `sticky`  
- C) `fixed`  
- D) `static`  

**Answer: C) `fixed`**

> Both `fixed` and `absolute` remove elements from the document flow. `fixed` additionally positions the element relative to the viewport and it stays there during scrolling.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 5. Flexbox

### Q12. A developer wants to center a child both horizontally and vertically inside a flex container. Which is correct?

```css
.container {
  display: flex;
  /* ??? */
}
```

- A) `align-items: center` only  
- B) `justify-content: center` only  
- C) `justify-content: center; align-items: center`  
- D) `text-align: center; vertical-align: middle`  

**Answer: C) `justify-content: center; align-items: center`**

> `justify-content` aligns along the main axis; `align-items` aligns along the cross axis. Both are needed for full centering.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q13. What does `flex: 1` shorthand expand to?

- A) `flex-grow: 1; flex-shrink: 0; flex-basis: 0`  
- B) `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`  
- C) `flex-grow: 0; flex-shrink: 1; flex-basis: auto`  
- D) `flex-grow: 1; flex-shrink: 1; flex-basis: auto`  

**Answer: B) `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`**

> The `flex: 1` shorthand sets `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0%`, allowing the item to grow and shrink equally.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q14. A flex container has `flex-wrap: wrap`. Child items each have `flex-basis: 45%`. What happens?

- A) Items overflow the container  
- B) Items shrink to fit one row  
- C) Items wrap — two per row with the remaining wrapping to the next line  
- D) Items are removed if they do not fit  

**Answer: C) Items wrap — two per row with the remaining wrapping to the next line**

> With `flex-wrap: wrap`, flex items that cannot fit on a single line wrap onto a new line. At 45% each, two items fit per row.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 6. CSS Grid

### Q15. What does the following grid create?

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
}
```

- A) 3 rows × 2 columns  
- B) 2 rows × 3 columns of equal width  
- C) 6 equal cells  
- D) 3 auto-sized rows  

**Answer: B) 2 rows × 3 columns of equal width**

> `repeat(3, 1fr)` creates 3 equal-width columns; two explicit row heights (100px and 200px) are defined.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q16. A developer writes `grid-column: 1 / -1`. What does this mean?

- A) The item starts at column 1 and ends at the second-to-last column  
- B) The item spans from the first to the last grid line (full width)  
- C) The item is placed in a negative column  
- D) The item is removed from grid flow  

**Answer: B) The item spans from the first to the last grid line**

> `-1` refers to the last grid line. `1 / -1` spans the element across all columns in an explicit grid.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q17. What is the difference between `grid-gap` and `gap`?

- A) They are completely different properties  
- B) `gap` is the modern alias for `grid-gap`; both work the same way  
- C) `gap` only works in Flexbox, not Grid  
- D) `grid-gap` supports percentage values; `gap` does not  

**Answer: B) `gap` is the modern alias for `grid-gap`**

> `grid-gap` was renamed to `gap` and now works in both Grid and Flexbox layouts. `grid-gap` still works for backwards compatibility.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 7. Pseudo-classes & Pseudo-elements

### Q18. What is the difference between `:nth-child(2)` and `:nth-of-type(2)`?

```html
<div>
  <p>First</p>
  <span>Middle</span>
  <p>Second</p>
</div>
```

- A) They behave identically  
- B) `:nth-child` counts all siblings; `:nth-of-type` counts only siblings of the same element type  
- C) `:nth-of-type` counts all siblings; `:nth-child` counts only the same type  
- D) `:nth-child` is CSS2; `:nth-of-type` is CSS3  

**Answer: B) `:nth-child` counts all siblings; `:nth-of-type` counts only same-type siblings**

> `p:nth-child(2)` would match a `<p>` that is the 2nd child of its parent — but here the 2nd child is a `<span>`, so it fails. `p:nth-of-type(2)` matches the 2nd `<p>` element regardless of other element types.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q19. A developer uses `::before`. Which statement is correct?

```css
.btn::before {
  content: "→ ";
  color: red;
}
```

- A) `::before` inserts an actual DOM element before `.btn`  
- B) `::before` inserts a CSS-generated pseudo-element before the content of `.btn`  
- C) `::before` requires JavaScript to function  
- D) `::before` is equivalent to `:before` in CSS3 only  

**Answer: B) Inserts a CSS-generated pseudo-element before the content of `.btn`**

> `::before` creates a pseudo-element that is the first child of the selected element. It exists in the render tree but not in the DOM. Both `:before` and `::before` are valid; the double-colon syntax distinguishes pseudo-elements from pseudo-classes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 8. Transitions & Animations

### Q20. What is the difference between CSS transitions and CSS animations?

- A) Transitions can loop; animations cannot  
- B) Animations require JavaScript; transitions do not  
- C) Transitions animate between two states triggered by events; animations can run automatically and have multiple keyframes  
- D) They are identical features with different syntax  

**Answer: C) Transitions animate between two states; animations can run automatically with multiple keyframes**

> Transitions require a trigger (like `:hover`) and interpolate between start and end states. Animations (using `@keyframes`) can run on load, loop, reverse, and define multiple intermediate steps.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q21. A developer applies the following. When does the animation start?

```css
.box {
  animation: slide 1s ease 0.5s 1 normal forwards;
}
```

- A) Immediately  
- B) After 1 second  
- C) After 0.5 seconds (the delay)  
- D) After the element is hovered  

**Answer: C) After 0.5 seconds**

> In the `animation` shorthand, the fourth time value is the `animation-delay`. The order is: `name duration timing-function delay iteration-count direction fill-mode`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q22. A `transition` is set on an element but it doesn't animate. What is the MOST likely cause?

```css
.box {
  transition: background-color 0.3s ease;
}
.box:hover {
  background: blue;
}
```

- A) `transition` only works with `animation`  
- B) The shorthand should use `all` instead of `background-color`  
- C) The property name is wrong — it should be `background-color` instead of `background`  
- D) `ease` is not a valid timing function  

**Answer: C) The property name is wrong — `background` and `background-color` are distinct**

> The `transition` watches the `background-color` property, but the hover rule changes the `background` shorthand. Both actually trigger the transition in modern browsers (as `background` maps to `background-color`). However, explicit matching of the watched property is best practice to avoid unexpected behavior.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 9. Transforms

### Q23. What does the following transform do?

```css
.card {
  transform: translateX(50%) rotate(15deg) scale(1.2);
}
```

- A) Rotates, then translates, then scales — order doesn't matter  
- B) Translates 50% right, rotates 15 degrees, and scales 1.2× — applied left-to-right  
- C) Scales first, then rotates, then translates  
- D) Only the last transform function applies  

**Answer: B) Applied left-to-right — translate, rotate, scale**

> CSS transforms are applied in the order they are declared (left to right), which affects the final result. `translateX` happens first, then rotation, then scaling.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q24. What is the default `transform-origin`?

- A) `0 0` (top-left corner)  
- B) `100% 100%` (bottom-right corner)  
- C) `50% 50%` (center)  
- D) `0 50%` (left-center)  

**Answer: C) `50% 50%` (center)**

> By default, transforms originate from the center of the element. You can change this with `transform-origin`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 10. Media Queries & Responsive Design

### Q25. A developer wants a layout for screens smaller than 768px. Which media query is correct?

- A) `@media (min-width: 768px) { ... }`  
- B) `@media (max-width: 768px) { ... }`  
- C) `@media screen < 768px { ... }`  
- D) `@media (width: 768px) { ... }`  

**Answer: B) `@media (max-width: 768px)`**

> `max-width: 768px` targets viewports with a width of 768px or less. `min-width` would target 768px and larger.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q26. What does `@media print` do?

- A) Styles apply when the page is printed or in print preview  
- B) Styles apply to printers connected to the PC  
- C) Styles apply to images only  
- D) `@media print` is not a valid media type  

**Answer: A) Styles apply when the page is printed or in print preview**

> The `print` media type targets the styles used when the document is sent to a printer or displayed in a browser's print preview.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q27. Which unit is most appropriate for media query breakpoints?

- A) `px` — fixed pixel values  
- B) `em` — scales with the browser's base font size, respecting user preferences  
- C) `vw` — viewport-based units  
- D) `%` — percentage of the parent element  

**Answer: B) `em`**

> `em`-based breakpoints respect the user's browser font-size settings, making responsive layouts more accessible. `px`-based queries do not scale when users change their default font size.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 11. CSS Variables (Custom Properties)

### Q28. A developer defines a CSS variable and uses it. Which is the correct syntax?

- A) `var-color: red;` → `color: use(color);`  
- B) `$color: red;` → `color: $color;`  
- C) `--primary-color: red;` → `color: var(--primary-color);`  
- D) `@color: red;` → `color: @color;`  

**Answer: C) `--primary-color: red;` → `color: var(--primary-color);`**

> CSS custom properties use a `--` prefix for declaration and `var()` for usage. Option B is SCSS syntax; option D is LESS syntax.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q29. Where should a globally available CSS variable be declared?

- A) Inside `body {}`  
- B) Inside `:root {}`  
- C) At the top of the file outside any selector  
- D) Inside `html body {}`  

**Answer: B) Inside `:root {}`**

> `:root` targets the top-level element (same as `html` but with higher specificity), making variables declared there available throughout the entire document.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q30. What happens when a fallback is provided to `var()`?

```css
color: var(--missing-color, navy);
```

- A) Browser throws an error  
- B) `navy` is used only if `--missing-color` is not defined or is invalid  
- C) `navy` overrides `--missing-color`  
- D) The fallback is ignored  

**Answer: B) `navy` is used only if `--missing-color` is not defined or is invalid**

> The second argument to `var()` is a fallback value used when the custom property is undefined or its value is invalid at computed-value time.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 12. Typography & Text

### Q31. A developer uses `line-height: 1.5` without a unit. What does this mean?

- A) 1.5 pixels  
- B) 1.5 times the element's font size  
- C) 1.5em relative to the root font size  
- D) 150% of the parent element's height  

**Answer: B) 1.5 times the element's font size**

> A unitless `line-height` is a multiplier of the element's own `font-size`, which is the recommended approach as it scales correctly with inherited font sizes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q32. Which `text-overflow` value shows an ellipsis (`...`) when text overflows?

```css
.label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ???;
}
```

- A) `clip`  
- B) `hidden`  
- C) `ellipsis`  
- D) `scroll`  

**Answer: C) `ellipsis`**

> `text-overflow: ellipsis` replaces clipped text with `...`. It requires `overflow: hidden` and `white-space: nowrap` to function properly.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 13. Colors & Gradients

### Q33. What is the result of the following gradient?

```css
background: linear-gradient(to right, #ff0000, #0000ff);
```

- A) Vertical red-to-blue gradient  
- B) Horizontal red-to-blue gradient (left to right)  
- C) Diagonal gradient  
- D) Radial gradient from red to blue  

**Answer: B) Horizontal red-to-blue gradient (left to right)**

> `to right` sets the direction, creating a left-to-right horizontal gradient from red to blue.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q34. What does `rgba(0, 0, 0, 0.5)` produce?

- A) Black at 50% transparency  
- B) Gray (50% between black and white)  
- C) Fully transparent (invisible)  
- D) White at 50% transparency  

**Answer: A) Black at 50% transparency**

> `rgba()` takes red, green, blue (0–255) and alpha (0–1). `rgba(0,0,0,0.5)` is black with 50% opacity.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 14. Z-index & Stacking Context

### Q35. A developer sets `z-index: 999` on an element but it still appears behind another. What is the most likely reason?

- A) `z-index` only works with `display: flex`  
- B) The element does not have a `position` value other than `static`  
- C) `z-index: 999` is not a valid value  
- D) `z-index` requires a parent with `overflow: hidden`  

**Answer: B) The element does not have a `position` value other than `static`**

> `z-index` has no effect on statically positioned elements. The element must have `position: relative`, `absolute`, `fixed`, or `sticky`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q36. Which property creates a new stacking context?

- A) `color: red`  
- B) `opacity: 0.9`  
- C) `display: block`  
- D) `margin: auto`  

**Answer: B) `opacity: 0.9`**

> Any `opacity` value less than 1 creates a new stacking context, as do `transform`, `filter`, `will-change`, and positioned elements with a `z-index` other than `auto`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 15. Overflow & Clipping

### Q37. What is the difference between `overflow: hidden` and `overflow: clip`?

- A) They are identical  
- B) `clip` is the older alias for `hidden`  
- C) `overflow: hidden` establishes a BFC; `overflow: clip` clips without creating a BFC  
- D) `overflow: clip` only works on images  

**Answer: C) `overflow: hidden` creates a BFC; `overflow: clip` clips without creating a BFC**

> `overflow: clip` (CSS Overflow Level 3) clips content at the padding box like `hidden` but does not create a new block formatting context, avoiding unintended side effects.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q38. A developer applies `overflow: auto`. When does a scrollbar appear?

- A) Always, regardless of content size  
- B) Never — `auto` disables scrollbars  
- C) Only when content overflows the element's boundaries  
- D) Only on touch devices  

**Answer: C) Only when content overflows the element's boundaries**

> `overflow: auto` adds scrollbars only when the content is larger than the container, unlike `overflow: scroll` which always shows scrollbars.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 16. Display & Visibility

### Q39. What is the difference between `display: none` and `visibility: hidden`?

- A) They are the same  
- B) `display: none` removes the element from the layout flow; `visibility: hidden` hides it but keeps its space  
- C) `visibility: hidden` removes the element from the layout; `display: none` keeps the space  
- D) `visibility: hidden` only works on block elements  

**Answer: B) `display: none` removes the element from flow; `visibility: hidden` keeps its space**

> `display: none` removes the element entirely from the document layout. `visibility: hidden` makes it invisible but the element still occupies space in the layout.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q40. What does `display: inline-block` allow that `display: inline` does not?

- A) Multiple elements per line  
- B) Setting `width`, `height`, `margin`, and `padding` on all sides  
- C) Float support  
- D) Z-index stacking  

**Answer: B) Setting `width`, `height`, `margin`, and `padding` on all sides**

> `inline-block` elements flow inline like text but accept all box model properties. Pure `inline` elements ignore `width`, `height`, and vertical `margin`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 17. SCSS / Sass

### Q41. A developer refactors CSS into SCSS using nesting. What CSS does the following SCSS produce?

```scss
nav {
  background: #333;
  ul {
    margin: 0;
  }
  a {
    color: white;
    &:hover {
      color: gold;
    }
  }
}
```

- A) Compilation error — nesting is not allowed  
- B) `nav {}`, `ul {}`, `a {}`, `a:hover {}`  
- C) `nav {}`, `nav ul {}`, `nav a {}`, `nav a:hover {}`  
- D) `nav {}`, `nav > ul {}`, `nav > a {}`, `nav a:hover {}`  

**Answer: C) `nav {}`, `nav ul {}`, `nav a {}`, `nav a:hover {}`**

> SCSS nesting prepends the parent selector. The `&` refers to the immediate parent (`nav a`), so `&:hover` becomes `nav a:hover`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q42. A developer uses an SCSS `@mixin`. What is the primary benefit?

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  @include flex-center;
}
```

- A) Mixins compile to CSS variables  
- B) Mixins allow reusable blocks of CSS declarations that can be included in multiple selectors  
- C) Mixins eliminate the need for selectors  
- D) Mixins only work with vendor prefixes  

**Answer: B) Reusable blocks of CSS that can be included in multiple selectors**

> Mixins define a reusable set of declarations. Using `@include` injects the mixin's styles into the selector, reducing duplication.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q43. What does the SCSS `%placeholder` (silent class / extend) do differently from a `@mixin`?

```scss
%card-style {
  border: 1px solid #eee;
  border-radius: 4px;
}

.product-card {
  @extend %card-style;
}

.user-card {
  @extend %card-style;
}
```

- A) `%placeholder` outputs CSS for every `@extend` separately  
- B) `%placeholder` groups selectors together in the output CSS, reducing duplication  
- C) `%placeholder` compiles to JavaScript  
- D) `%extend` is the correct directive, not `@extend`  

**Answer: B) Placeholders group selectors in the output, reducing duplication**

> With `@extend`, SCSS groups all selectors that share the extended placeholder: `.product-card, .user-card { border: 1px solid #eee; ... }`. Mixins copy the rules into each selector independently.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q44. A developer uses `@use` instead of `@import` in SCSS. What is the main advantage?

- A) `@use` works in plain CSS; `@import` does not  
- B) `@use` loads modules with their own namespace, preventing variable/mixin name collisions  
- C) `@use` compiles faster than `@import`  
- D) `@import` is the recommended modern syntax  

**Answer: B) `@use` loads with its own namespace, preventing collisions**

> `@use` (part of the Dart Sass module system) scopes variables and mixins to a namespace (e.g., `colors.$primary`). `@import` dumps everything into the global scope, risking name conflicts and is now deprecated.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q45. What does the SCSS `@each` directive do?

```scss
$sizes: 1, 2, 3, 4;

@each $size in $sizes {
  .mt-#{$size} {
    margin-top: #{$size * 4}px;
  }
}
```

- A) Loops through a list and generates rules for each item  
- B) Selects the first matching element  
- C) Merges $sizes into a single class  
- D) Generates a CSS animation for each size  

**Answer: A) Loops through a list and generates rules for each item**

> `@each` iterates over a list (or map), generating CSS rules for every value. The `#{}` syntax is SCSS interpolation used to embed expressions into selector names or property values.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q46. A developer has a SCSS `@function`. What distinguishes it from a `@mixin`?

```scss
@function rem($px) {
  @return $px / 16px * 1rem;
}

h1 {
  font-size: rem(32px);
}
```

- A) Functions output full CSS rules; mixins output values  
- B) Functions return a single computed value; mixins output blocks of CSS declarations  
- C) Functions use `@include`; mixins use `@return`  
- D) There is no difference  

**Answer: B) Functions return a single value; mixins output CSS declaration blocks**

> SCSS `@function` computes and `@return`s a single value (like a number, string, or color) usable in property values. Mixins output one or more CSS declarations via `@include`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q47. What does SCSS `darken()` do?

```scss
$primary: #3498db;

button:hover {
  background: darken($primary, 10%);
}
```

- A) Reduces the element's opacity by 10%  
- B) Decreases the lightness of the color by 10% in HSL space  
- C) Subtracts 10 from each RGB channel  
- D) Converts the color to grayscale  

**Answer: B) Decreases the HSL lightness by 10%**

> `darken($color, $amount)` operates in HSL color space, reducing the lightness value by the given percentage. It does not affect opacity or individual RGB channels.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q48. A developer wants styles for the parent selector using `&` in SCSS. What does the following produce?

```scss
.button {
  color: white;

  .theme-dark & {
    color: black;
  }
}
```

- A) `.button .theme-dark { color: black; }`  
- B) `.theme-dark .button { color: black; }`  
- C) `.theme-dark { color: black; }`  
- D) Compilation error  

**Answer: B) `.theme-dark .button { color: black; }`**

> When `&` appears after a selector (not at the beginning), it refers to the parent (`.button`) but placed inside the ancestor context (`.theme-dark`). This pattern is commonly used for theme overrides.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q49. Which SCSS feature allows you to conditionally apply styles?

```scss
$theme: dark;

body {
  @if $theme == dark {
    background: #111;
    color: white;
  } @else {
    background: white;
    color: #111;
  }
}
```

- A) `@switch`  
- B) `@when` / `@otherwise`  
- C) `@if` / `@else`  
- D) `@condition`  

**Answer: C) `@if` / `@else`**

> SCSS supports `@if`, `@else if`, and `@else` for conditional logic at compile time, allowing different CSS output based on variable values.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

### Q50. A developer gets a deprecation warning: `@import is deprecated`. What should they migrate to?

- A) `@require`  
- B) `@load`  
- C) `@use` and `@forward`  
- D) `@include`  

**Answer: C) `@use` and `@forward`**

> The Dart Sass team deprecated `@import` in favor of `@use` (for consuming a module) and `@forward` (for re-exporting a module's members). These provide better encapsulation and namespacing.
