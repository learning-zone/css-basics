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
* [CSS Units](#-18-css-units)
* [CSS Functions](#-19-css-functions)
* [Floats & Block Formatting Context](#-20-floats--block-formatting-context)
* [Filters & Blend Modes](#-21-filters--blend-modes)
* [Performance & Rendering](#-22-performance--rendering)
* [CSS Architecture & Naming Conventions](#-23-css-architecture--naming-conventions)
* [Accessibility & CSS](#-24-accessibility--css)
* [Advanced Layout Scenarios](#-25-advanced-layout-scenarios)
* [Modern CSS Features](#-26-modern-css-features)
* [Bootstrap CSS](#-27-bootstrap-css)

<br/>

## # 1. Introduction

<br>

## Q. While working on a webpage for yous scheduler app, you want to print a list. However, you want to avoid the hassle of writing so many properties separately, so you decide to use the shorthand property, Choose the correct option in this regard. 

- A) 
```css
ul
{
    list-style: list-style-type list-style-position list-style-image;
}
```
Where list-style-type will be displayed. If for some reason the image cannot be displayed, list-style-position displays whether the list marker should be displayed inside or outside the content flow, and list-style-image specifies the image that should be displayed as a list marker.
- B) 
```css
ul
{
    list-style: list-style-type list-style-image list-style-position;
}
```
Where list-style-type will be displayed. If for some reason the image cannot be displayed, list-style-position displays whether the list marker should be displayed inside or outside the content flow, and list-style-image specifies the image that should be displayed as a list marker.  
- C) 
```css
ul
{
    list-style: list-style-type list-style-image list-style-position;
}
```
Where list-style-type will be displayed. If for some reason the image cannot be displayed, list-style-position displays if the list marker should be displayed on top, bottom, left or right of the webpage, and list-style-image specifies the image that should be displayed as a list marker.
- D) None of the options


**Answer: A)**

> The CSS `list-style` shorthand order is **`list-style-type list-style-position list-style-image`**. Option A uses the correct order and correctly describes `list-style-position` as controlling whether the marker appears **inside or outside** the content flow. Option B has the wrong order (image before position). Option C also has the wrong order and incorrectly describes `list-style-position` as placing the marker at top/bottom/left/right — those are not valid `list-style-position` values (`inside` and `outside` are).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Alex has defined a CSS rule in an external stylesheet but wants to override it with a more specific rule defined directly in the HTML file. Which option should he use to ensure the rule takes precedence?

- A) Inline style  
- B) External stylesheet  
- C) Internal stylesheet
- D) !important declaration

**Answer: A) Inline style**

> An **inline style** (`style="..."` attribute on the HTML element) is written directly in the HTML file and carries a specificity of `1-0-0-0`, which overrides any rule from an external or internal stylesheet targeting the same property. An internal stylesheet (`<style>` in `<head>`) can also override an external one if the selector is more specific, but an inline style is the most direct way to guarantee precedence from within the HTML file itself.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. On a webpage, you want to use borders and explore various border styles. Which option is not a border style you can use?

- A) None  
- B) Double  
- C) Hidden
- D) Single  

**Answer: D) Single**

> `single` is not a valid CSS `border-style` value. Valid border styles include `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, and `outset`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer writes the following rule. Which CSS version introduced the `border-radius` property?

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

## Q. A stylesheet contains both inline styles and an external stylesheet. The inline style sets `color: red` and the external stylesheet sets `color: blue`. What color will the text be?

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

<br>

## Q. While working on a web page, you want to add a similar set of margins to an element and all the elements within that element. What will you use for the margin properties?

- A) Auto  
- B) Inherit  
- C) Default 
- D) It is not possible to use a similar set of margins for the mentioned elements

**Answer: B) Inherit**

> The `inherit` CSS value causes an element to take the computed value of the same property from its parent. Setting `margin: inherit` on an element means it will use the same margin as its parent, and any child elements that also use `inherit` (or are set to inherit by default) will propagate the same margin value throughout the subtree. `auto` resolves to a browser-calculated value; `default` is not a valid CSS keyword for `margin`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. You are working on a website layout that requires precise control over the spacing and positioning of elements. You want to ensure that the width and height of an element include the content, padding, border, and margin. Which CSS property can be used to achieve this?

- A) box-sizing: content-box;  
- B) box-sizing: padding-box;  
- C) box-sizing: border-box; 
- D) box-sizing: margin-box;  

**Answer: C) `box-sizing: border-box`**

> `box-sizing: border-box` makes the declared `width` and `height` include the **content, padding, and border** — so the element never grows beyond its set size when padding or border is added. Note: `margin` is never included in any `box-sizing` value; it always adds space outside the box. `content-box` (the default) includes only the content area. `padding-box` was never widely implemented, and `margin-box` does not exist in CSS.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Consider the following code. What will be the size of the margin after it collapses?

```css
Code: h1 {
  margin: 0 0 50px 0;
}
h2 {
    margin: 20px 0 0 0;
}
```

- A) 70px  
- B) 20px  
- C) 50px  
- D) 35px  

**Answer: C) 50px**

> When two adjacent block-level elements vertical margins meet, they collapse into a single margin equal to the **larger** of the two values. Here `max(50px, 20px) = 50px`. Margins do not add together (that would be 70px) when collapsing.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer sets `width: 200px` and `padding: 20px` on a `div` with the default box model. What is the rendered width?

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

## Q. After adding `box-sizing: border-box`, what is the rendered width of the same `div`?

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

## Q. A developer wants 10px vertical spacing between paragraphs but margin collapsing is causing issues. Which scenario triggers margin collapsing?

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

<br>

## Q. As an experienced CSS developer, you must style a website for a client. What is the difference in CSS between an element selector, a class selector and and ID selector?

- A) An element selector targets a specific HTML element, a class selector targets elements with a specific class attribute, and ID selector targets a specific element with a unique ID attribute.
- B) An element selector targets all elements in a document, a class selector targets the first element with a specific class attribute, and an ID selector targets elements with a specific ID attribute.
- C) An element selector targets elements with a specific ID attribute, a class selector targets all elements in a document, and an ID selector targets the first element with a specific class attribute.  
- D) An element selector targets elements with a specific class attribute, a class selector targets a specific HTML element, and an ID selector targets elements with a specific ID attribute.   

**Answer: A) Element selector → HTML tag; class selector → class attribute; ID selector → unique ID**

> An **element selector** (e.g., `p`, `div`) targets all HTML elements of that tag type. A **class selector** (e.g., `.highlight`) targets every element sharing a specific `class` attribute value. An **ID selector** (e.g., `#header`) targets the single element with that unique `id` attribute. IDs must be unique per page, giving ID selectors higher specificity (`0-1-0-0`) than class selectors (`0-0-1-0`) and element selectors (`0-0-0-1`).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Alex must style all paragraph that are direct children of the `<div>` element with the class "content" in a large web application. Which CSS selector should he use to achieve this? 

- A) .container p
- B) .container > p
- C) .container + p   
- D) .container ~ p   

**Answer: B) `.container > p`**

> The **child combinator** (`>`) selects only elements that are **direct children** of the specified parent. `.container > p` targets `<p>` elements immediately inside `.container`, skipping any nested descendants. `.container p` (descendant combinator) would match `<p>` at any depth; `.container + p` selects a `<p>` immediately after `.container`; `.container ~ p` selects all subsequent `<p>` siblings.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Alex has to style a paragraph element with the class "highlighted". Which CSS selector should he use to target the element?

- A) #highlighted
- B) .highlighted
- C) `<highlighted>`   
- D) highlighted   

**Answer: B) `.highlighted`**

> A **class selector** uses a dot (`.`) prefix followed by the class name. `.highlighted` targets every element that has `class="highlighted"`. `#highlighted` is an ID selector; `<highlighted>` is not valid CSS syntax; `highlighted` (no prefix) is an element-type selector.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which CSS selector combination can Alex use to apply a specific style to all anchor (link) elements within a div with the class "container"? 

- A) .container > a
- B) .container a
- C) .container + a   
- D) .container ~ a   

**Answer: B) `.container a`**

> The **descendant combinator** (space) selects all `<a>` elements at any nesting depth inside `.container`. `.container > a` selects only direct children; `.container + a` selects an `<a>` immediately after `.container`; `.container ~ a` selects all `<a>` siblings after `.container`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Alex must style a specific paragraph element on a webpage. Which type of CSS selector should he use?

- A) Element selector  
- B) Class selector   
- C) ID selector   
- D) Pseudo-class selector   

**Answer: C) ID selector**

> An **ID selector** (`#id`) uniquely identifies a single element on the page, making it the right choice when targeting one specific element. An element selector targets all elements of that type, a class selector targets all elements sharing a class, and a pseudo-class selector targets elements in a particular state.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which selector has the highest specificity?

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

## Q. A developer uses the `:not()` pseudo-class. What does the following selector target?

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

## Q. What does the `~` combinator do?

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

<br>

## Q. Alex wants to position an element relative to its normal position in the document flow without affecting the layout of other elements. Which CSS position value should he use?

- A) static
- B) relative  
- C) absolute  
- D) fixed  

**Answer: B) `relative`**

> `position: relative` moves an element visually from its normal flow position using `top`, `right`, `bottom`, or `left` offsets. Crucially, the element still **occupies its original space** in the layout — other elements are not repositioned around it. `static` (default) ignores offset properties; `absolute` removes the element from flow; `fixed` positions relative to the viewport.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer sets `position: absolute` on a child element. Where is it positioned relative to?

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

## Q. `position: sticky` stops sticking when:

- A) The user scrolls past its designated threshold  
- B) The element reaches the edge of its scrolling container  
- C) Another sticky element enters the viewport  
- D) The parent container fully scrolls out of view  

**Answer: D) The parent container fully scrolls out of view**

> A sticky element is sticky within its parent container. Once the parent scrolls out of the viewport, the sticky element scrolls away with it.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which positioning value removes an element from the normal document flow entirely?

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

<br>

## Q. You have a CSS scripting task that you need to write with respect to CSS Flexbox to handle layouts, align elements within them, and distribute spaces among the items in dynamic/responsive conditions. What are the necessary properties of CSS Flexbox?

- A) flex-direction, flex-wrap, flex-flow 
- B) height-flex, wrap-flex, css-flex 
- C) flex-geomaps, flex-div, flex-css 
- D) padding-flex, direction-flex, geomaps-flex   

**Answer: A) `flex-direction`, `flex-wrap`, `flex-flow`**

> The core CSS Flexbox properties for controlling layout direction and wrapping are: **`flex-direction`** (sets the main axis — `row`, `column`, `row-reverse`, `column-reverse`), **`flex-wrap`** (controls whether items wrap onto multiple lines — `nowrap`, `wrap`, `wrap-reverse`), and **`flex-flow`** (shorthand combining both `flex-direction` and `flex-wrap`). Options B, C, and D are entirely fictitious property names not found in CSS.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. While using Flexbox, you need to define a container for it. What is the CSS to fulfil the given requirement?

- A) Container: flex; 
- B) Display: flex;  
- C) Display: ".flex"; 
- D) Container: '.flex';  

**Answer: B) `display: flex`**

> To create a **flex container**, set `display: flex` on the parent element. All direct children automatically become flex items. CSS property names are case-insensitive but must be valid — `container` is not a valid property for activating Flexbox, and values wrapped in quotes like `".flex"` are strings, not keywords. The correct declaration is simply `display: flex;`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Alex wants to create a responsive web page design project layout that adjusts based on the available screen width. Which CSS property should he use to divide the available space evenly among multiple elements?

- A) flex-grow 
- B) flex-wrap  
- C) Flex-shrink  
- D) flex-basis  

**Answer: A) `flex-grow`**

> `flex-grow` determines how much a flex item grows relative to its siblings when there is extra space in the container. Setting `flex-grow: 1` on all items divides the remaining space evenly. `flex-wrap` controls line-wrapping; `flex-shrink` controls shrinking; `flex-basis` sets the initial size before space distribution.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. You are defining the grid-template-columns and grid-template-rows in a css grid script. This enables the naming of lines on the grid and allows you to target the grid\'s end line with -1.

What kind of grid pattern does the scenario illustrate?

- A) Implicit Grid 
- B) Box CSS Grid  
- C) Flex Grid  
- D) Explicit Grid  

**Answer: D) Explicit Grid**

> When you define `grid-template-columns` and `grid-template-rows`, you create an **explicit grid**. This allows line naming and the use of negative indices like `-1` to target the last grid line. An **implicit grid** is auto-generated when grid items are placed outside the explicitly defined tracks.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer wants to center a child both horizontally and vertically inside a flex container. Which is correct?

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

## Q. What does `flex: 1` shorthand expand to?

- A) `flex-grow: 1; flex-shrink: 0; flex-basis: 0`  
- B) `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`  
- C) `flex-grow: 0; flex-shrink: 1; flex-basis: auto`  
- D) `flex-grow: 1; flex-shrink: 1; flex-basis: auto`  

**Answer: B) `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`**

> The `flex: 1` shorthand sets `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0%`, allowing the item to grow and shrink equally.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A flex container has `flex-wrap: wrap`. Child items each have `flex-basis: 45%`. What happens?

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

<br>

## Q. What does the following grid create?

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

## Q. A developer writes `grid-column: 1 / -1`. What does this mean?

- A) The item starts at column 1 and ends at the second-to-last column  
- B) The item spans from the first to the last grid line (full width)  
- C) The item is placed in a negative column  
- D) The item is removed from grid flow  

**Answer: B) The item spans from the first to the last grid line**

> `-1` refers to the last grid line. `1 / -1` spans the element across all columns in an explicit grid.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between `grid-gap` and `gap`?

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

<br>

## Q. Which pseudo-class selector styles the input field currently focused on by the user in a form?

- A) :active 
- B) :focus  
- C) :hover
- D) :visited

**Answer: B) `:focus`**

> The `:focus` pseudo-class matches an element that currently has keyboard or pointer focus — for example, an `<input>` the user has clicked into or tabbed to. `:active` fires only while the element is being pressed/clicked; `:hover` fires when the pointer is over the element; `:visited` applies to already-visited `<a>` links only.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Alex wants to apply a style to the first letter of each paragraph with an `<div>` element with the class "intro". How can he do this?

- A) .intro p:first-child 
- B) .intro p:first-line  
- C) .intro p:first-letter 
- D) .intro p:first-of-type  

**Answer: C) `.intro p:first-letter`**

> `::first-letter` (`:first-letter`) is a CSS pseudo-element that styles the first letter of the first line of a block-level element. `.intro p:first-letter` targets the first letter of every `<p>` inside `.intro`. `:first-child` selects the first child element; `:first-line` targets the first rendered line of text; `:first-of-type` selects the first element of a particular type.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between `:nth-child(2)` and `:nth-of-type(2)`?

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

## Q. A developer uses `::before`. Which statement is correct?

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

<br>

## Q. You must make a really attractive webpage, so you decide to add lot of animations to it. Which components are must for an animation to work?

- A) Initial and final keyframes, animation duration, and an element to bind the animation with. 
- B) Initial and final keyframes and an element to bind the animation with.   
- C) An element to bind the animation with.   
- D) Initial and final keyframes, animation duration, animation delay, and an element to bind the animation with.   

**Answer: A) Initial and final keyframes, animation duration, and an element to bind the animation with.**

> For a CSS animation to work, you need: **keyframes** (at minimum a `from`/`0%` and `to`/`100%` defined via `@keyframes`), an **`animation-duration`** (without it, the default is `0s` and nothing plays), and an **element** to apply the animation to via `animation-name`. `animation-delay` (option D) is optional — it defaults to `0s` and is not required for the animation to function.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between CSS transitions and CSS animations?

- A) Transitions can loop; animations cannot  
- B) Animations require JavaScript; transitions do not  
- C) Transitions animate between two states triggered by events; animations can run automatically and have multiple keyframes  
- D) They are identical features with different syntax  

**Answer: C) Transitions animate between two states; animations can run automatically with multiple keyframes**

> Transitions require a trigger (like `:hover`) and interpolate between start and end states. Animations (using `@keyframes`) can run on load, loop, reverse, and define multiple intermediate steps.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer applies the following. When does the animation start?

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

## Q. A `transition` is set on an element but it doesn\'t animate. What is the MOST likely cause?

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

<br>

## Q. Your school\'s web page contains a lot of text; while typing, you did not pay much attention to whether Caps Lock was on or off. Which option is available for text-transform to convert your text into a proper text case (uppercase,lowercase, etc)?

- A) Justify  
- B) Capitalize
- C) Upper  
- D) Lower  

**Answer: B) `capitalize`**

> The valid `text-transform` values in CSS are `none`, `capitalize`, `uppercase`, `lowercase`, and `full-width`. `capitalize` makes the first letter of each word uppercase. `uppercase` converts all text to capitals and `lowercase` converts all to lower — but neither `upper` nor `lower` (options C and D) are valid values. `justify` is a `text-align` value, not `text-transform`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What does the following transform do?

```css
.card {
  transform: translateX(50%) rotate(15deg) scale(1.2);
}
```

- A) Rotates, then translates, then scales — order doesn\'t matter  
- B) Translates 50% right, rotates 15 degrees, and scales 1.2× — applied left-to-right  
- C) Scales first, then rotates, then translates  
- D) Only the last transform function applies  

**Answer: B) Applied left-to-right — translate, rotate, scale**

> CSS transforms are applied in the order they are declared (left to right), which affects the final result. `translateX` happens first, then rotation, then scaling.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the default `transform-origin`?

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

<br>

## Q. While working on a responsive web design project, Alex wants to adjust the layout based on the user\'s device width. Which CSS feature should she use to achieve this?

- A) Flexbox
- B) Media queries
- C) Pseudo-classes
- D) Transitions

**Answer: B) Media queries**

> **Media queries** (`@media`) conditionally apply CSS rules based on device characteristics such as viewport width, height, or orientation. They are the standard CSS tool for responsive design — e.g., `@media (max-width: 768px) { ... }`. Flexbox handles layout direction and alignment, pseudo-classes target element states, and transitions animate property changes — none of these adjust layout based on device width.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Given below is a code snippet:

```html
<body>
    <p> Resize the browser window. When the width of this document is 650px.</p>
</body>
```
Which CSS3 code segment should you use to make the above code compatible with the screen 650px?

- A)
```css
@media only screen and (width: < 700px) {
    body {
        background-color: lightblue;
    }
}
```  
- B) 
```css
@media only screen and (max-width:  650px) {
    body {
        background-color: lightblue;
    }
}
```  
- C)  
```css
@media only screen and (min-width: 650px) {
    body {
        background-color: lightblue;
    }
}
```  
- D) All the options 

**Answer: B) `@media only screen and (max-width: 650px)`**

> Option A uses invalid syntax — `(width: < 700px)` is not valid CSS; comparison operators are not used inside media feature expressions. Option B correctly uses `max-width: 650px`, which applies the styles when the viewport width is **650px or less**, matching the scenario described. Option C uses `min-width: 650px`, which applies the styles when the width is **650px or greater** — the opposite of the described intent. Option D is incorrect because A uses invalid syntax.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. In a particular web design, you must ensure that all the website pages look, work, and feel perfect on any device. Which is the most suitable option to fulfill this requirement?

- A) Cascading Styling Design  
- B) Adaptive Web Design
- C) Adaptive Response Design 
- D) Responsive Web Design   

**Answer: D) Responsive Web Design**

> **Responsive Web Design (RWD)** ensures that a website looks, works, and feels good on any device by using fluid grids, flexible images, and CSS media queries to adapt the layout to the viewport size. "Cascading Styling Design" and "Adaptive Response Design" are not real terms. Adaptive Web Design (AWD) serves different fixed layouts per device type — it does not fluidly adapt, making RWD the correct answer for universal device compatibility.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. While working on a responsive web design project, Alex wants to adjust the layout based on the user\'s device width. Which CSS feature should she use to achieve this?

- A) Flexbox  
- B) Media queries
- C) Pseudo-classes
- D) Transitions  

**Answer: B) Media queries**

> **Media queries** (`@media`) conditionally apply CSS rules based on device characteristics such as viewport width, height, or orientation. They are the standard CSS tool for responsive design — e.g., `@media (max-width: 768px) { ... }`. Flexbox handles layout direction, pseudo-classes target element states, and transitions animate property changes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which keyword value(s) is/are used to define @media.display-mode?

1. fullscreen
2. standalone
3. browser

- A) 1  
- B) 2 and 3  
- C) 1 and 3 
- D) All the options  

**Answer: D) All the options**

> The CSS `display-mode` media feature accepts `fullscreen` (covers entire screen with no browser UI), `standalone` (looks like a native app, used in PWAs), `minimal-ui` (minimal browser UI), and `browser` (conventional browser tab). All three listed values — `fullscreen`, `standalone`, and `browser` — are valid.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer wants a layout for screens smaller than 768px. Which media query is correct?

- A) `@media (min-width: 768px) { ... }`  
- B) `@media (max-width: 768px) { ... }`  
- C) `@media screen < 768px { ... }`  
- D) `@media (width: 768px) { ... }`  

**Answer: B) `@media (max-width: 768px)`**

> `max-width: 768px` targets viewports with a width of 768px or less. `min-width` would target 768px and larger.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What does `@media print` do?

- A) Styles apply when the page is printed or in print preview  
- B) Styles apply to printers connected to the PC  
- C) Styles apply to images only  
- D) `@media print` is not a valid media type  

**Answer: A) Styles apply when the page is printed or in print preview**

> The `print` media type targets the styles used when the document is sent to a printer or displayed in a browser\'s print preview.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which unit is most appropriate for media query breakpoints?

- A) `px` — fixed pixel values  
- B) `em` — scales with the browser\'s base font size, respecting user preferences  
- C) `vw` — viewport-based units  
- D) `%` — percentage of the parent element  

**Answer: B) `em`**

> `em`-based breakpoints respect the user\'s browser font-size settings, making responsive layouts more accessible. `px`-based queries do not scale when users change their default font size.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 11. CSS Variables (Custom Properties)

<br>

## Q. A developer defines a CSS variable and uses it. Which is the correct syntax?

- A) `var-color: red;` → `color: use(color);`  
- B) `$color: red;` → `color: $color;`  
- C) `--primary-color: red;` → `color: var(--primary-color);`  
- D) `@color: red;` → `color: @color;`  

**Answer: C) `--primary-color: red;` → `color: var(--primary-color);`**

> CSS custom properties use a `--` prefix for declaration and `var()` for usage. Option B is SCSS syntax; option D is LESS syntax.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Where should a globally available CSS variable be declared?

- A) Inside `body {}`  
- B) Inside `:root {}`  
- C) At the top of the file outside any selector  
- D) Inside `html body {}`  

**Answer: B) Inside `:root {}`**

> `:root` targets the top-level element (same as `html` but with higher specificity), making variables declared there available throughout the entire document.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What happens when a fallback is provided to `var()`?

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

<br>

## Q. A developer uses `line-height: 1.5` without a unit. What does this mean?

- A) 1.5 pixels  
- B) 1.5 times the element\'s font size  
- C) 1.5em relative to the root font size  
- D) 150% of the parent element\'s height  

**Answer: B) 1.5 times the element\'s font size**

> A unitless `line-height` is a multiplier of the element\'s own `font-size`, which is the recommended approach as it scales correctly with inherited font sizes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which `text-overflow` value shows an ellipsis (`...`) when text overflows?

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

<br>

## Q. What is the result of the following gradient?

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

## Q. What does `rgba(0, 0, 0, 0.5)` produce?

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

<br>

## Q. A developer sets `z-index: 999` on an element but it still appears behind another. What is the most likely reason?

- A) `z-index` only works with `display: flex`  
- B) The element does not have a `position` value other than `static`  
- C) `z-index: 999` is not a valid value  
- D) `z-index` requires a parent with `overflow: hidden`  

**Answer: B) The element does not have a `position` value other than `static`**

> `z-index` has no effect on statically positioned elements. The element must have `position: relative`, `absolute`, `fixed`, or `sticky`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which property creates a new stacking context?

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

<br>

## Q. You are working on a webpage and want to disable text wrapping inside an element. Which property will help you accomplish the task?

- A) Line-height  
- B) Wrap  
- C) White-space 
- D) Text-indent  

**Answer: C) `white-space`**

> `white-space: nowrap` disables text wrapping, forcing all text to remain on a single line. `line-height` controls the vertical spacing between lines; `wrap` is not a valid CSS property; `text-indent` indents only the first line of a block.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between `overflow: hidden` and `overflow: clip`?

- A) They are identical  
- B) `clip` is the older alias for `hidden`  
- C) `overflow: hidden` establishes a BFC; `overflow: clip` clips without creating a BFC  
- D) `overflow: clip` only works on images  

**Answer: C) `overflow: hidden` creates a BFC; `overflow: clip` clips without creating a BFC**

> `overflow: clip` (CSS Overflow Level 3) clips content at the padding box like `hidden` but does not create a new block formatting context, avoiding unintended side effects.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer applies `overflow: auto`. When does a scrollbar appear?

- A) Always, regardless of content size  
- B) Never — `auto` disables scrollbars  
- C) Only when content overflows the element\'s boundaries  
- D) Only on touch devices  

**Answer: C) Only when content overflows the element\'s boundaries**

> `overflow: auto` adds scrollbars only when the content is larger than the container, unlike `overflow: scroll` which always shows scrollbars.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 16. Display & Visibility

<br>

## Q. Alex is designing a responsive website. He needs to hide an element on small screens, Which CSS property can he use?

- A) display  
- B) visibility  
- C) opacity  
- D) position  

**Answer: A) `display`**

> `display: none` completely removes the element from the layout and hides it from screen readers, making it the standard way to hide elements on small screens inside a `@media` query. `visibility: hidden` hides the element visually but still occupies space. `opacity: 0` makes it invisible but it remains interactive and takes up space. `position` does not hide elements.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between `display: none` and `visibility: hidden`?

- A) They are the same  
- B) `display: none` removes the element from the layout flow; `visibility: hidden` hides it but keeps its space  
- C) `visibility: hidden` removes the element from the layout; `display: none` keeps the space  
- D) `visibility: hidden` only works on block elements  

**Answer: B) `display: none` removes the element from flow; `visibility: hidden` keeps its space**

> `display: none` removes the element entirely from the document layout. `visibility: hidden` makes it invisible but the element still occupies space in the layout.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What does `display: inline-block` allow that `display: inline` does not?

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

<br>

## Q. A developer refactors CSS into SCSS using nesting. What CSS does the following SCSS produce?

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

## Q. A developer uses an SCSS `@mixin`. What is the primary benefit?

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

> Mixins define a reusable set of declarations. Using `@include` injects the mixin\'s styles into the selector, reducing duplication.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What does the SCSS `%placeholder` (silent class / extend) do differently from a `@mixin`?

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

## Q. A developer uses `@use` instead of `@import` in SCSS. What is the main advantage?

- A) `@use` works in plain CSS; `@import` does not  
- B) `@use` loads modules with their own namespace, preventing variable/mixin name collisions  
- C) `@use` compiles faster than `@import`  
- D) `@import` is the recommended modern syntax  

**Answer: B) `@use` loads with its own namespace, preventing collisions**

> `@use` (part of the Dart Sass module system) scopes variables and mixins to a namespace (e.g., `colors.$primary`). `@import` dumps everything into the global scope, risking name conflicts and is now deprecated.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What does the SCSS `@each` directive do?

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

## Q. A developer has a SCSS `@function`. What distinguishes it from a `@mixin`?

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

## Q. What does SCSS `darken()` do?

```scss
$primary: #3498db;

button:hover {
  background: darken($primary, 10%);
}
```

- A) Reduces the element\'s opacity by 10%  
- B) Decreases the lightness of the color by 10% in HSL space  
- C) Subtracts 10 from each RGB channel  
- D) Converts the color to grayscale  

**Answer: B) Decreases the HSL lightness by 10%**

> `darken($color, $amount)` operates in HSL color space, reducing the lightness value by the given percentage. It does not affect opacity or individual RGB channels.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 18. CSS Units

<br>

## Q. Which CSS property should Alex use to adjust the font size of a paragraph on his webpage?

- A) font-weight  
- B) text-decoration 
- C) font-style
- D) font-size 

**Answer: D) font-size**

> The `font-size` property sets the size of the font for an element. `font-weight` controls boldness, `text-decoration` adds underline/strikethrough effects, and `font-style` controls italic/oblique styling — none of these affect font size.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer sets `font-size: 1.5em` on a child element whose parent has `font-size: 16px`. What is the child\'s computed font size?

- A) 16px  
- B) 24px  
- C) 1.5px  
- D) 32px  

**Answer: D) font-size**

> The `font-size` property sets the size of the font for an element. `font-weight` controls boldness, `text-decoration` adds underline/strikethrough effects, and `font-style` controls italic/oblique styling — none of these affect font size.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between `em` and `rem` units?

- A) `em` is relative to the root font size; `rem` is relative to the parent font size  
- B) `rem` is relative to the root (`<html>`) font size; `em` is relative to the current element\'s font size  
- C) They are identical and interchangeable  
- D) `rem` only works for font sizes; `em` works for all properties  

**Answer: B) `rem` is relative to the root font size; `em` is relative to the current element\'s font size**

> `rem` (root em) always references the `<html>` element\'s font size (typically 16px by default), making it predictable. `em` compounds with nesting, which can cause unintended size escalation.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer uses `height: 100vh`. What does `1vh` represent?

- A) 1% of the element\'s own height  
- B) 1% of the viewport height  
- C) 1px on any screen  
- D) 1% of the parent element\'s height  

**Answer: B) 1% of the viewport height**

> `vh` (viewport height) units are relative to the browser viewport. `100vh` equals the full visible height of the browser window, regardless of document length.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which CSS unit is best suited for typography to respect user browser font-size preferences?

- A) `px` — fixed and predictable  
- B) `pt` — points, used in print  
- C) `rem` — scales with the root font size set by the user  
- D) `vw` — viewport-relative  

**Answer: C) `rem`**

> `rem` scales with the user\'s browser default font size. If a user sets their base font to 20px for accessibility, `rem`-sized text adjusts automatically. `px` ignores this setting in most browsers.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 19. CSS Functions

<br>

## Q. What does `clamp(1rem, 2.5vw, 2rem)` do?

- A) Clamps all text inside the element to a fixed size  
- B) Sets a value that scales with the viewport but never goes below `1rem` or above `2rem`  
- C) Sets a minimum width of `1rem` and a maximum of `2rem` only on mobile  
- D) Throws a syntax error because `clamp` requires pixel values  

**Answer: B) Scales with the viewport, bounded between `1rem` and `2rem`**

> `clamp(MIN, PREFERRED, MAX)` returns the preferred value (`2.5vw`) as long as it stays within the min/max bounds. It enables fluid typography without media queries.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What does the following rule compute to on a `300px`-wide container?

```css
.box {
  width: calc(100% - 2rem);
}
```

*(Assume root font-size is 16px)*

- A) `300px`  
- B) `268px`  
- C) `284px`  
- D) `232px`  

**Answer: B) 268px**

> `2rem = 32px` (2 × 16px). `calc(100% - 2rem)` = `300px - 32px = 268px`. `calc()` mixes units, evaluating at render time.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which function selects the **smallest** value from a list?

```css
width: min(50%, 400px);
```

- A) `max()`  
- B) `clamp()`  
- C) `min()`  
- D) `calc()`  

**Answer: C) `min()`**

> `min()` returns the smallest of its comma-separated arguments. Here, the width will be whichever is smaller — 50% of the container or 400px — preventing overflow on narrow viewports.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 20. Floats & Block Formatting Context

<br>

## Q. A parent `<div>` contains only floated children and collapses to zero height. What is the standard fix?

- A) Add `overflow: visible` to the parent  
- B) Apply `clear: both` to the parent  
- C) Use a clearfix — add `::after { content:''; display:block; clear:both; }` to the parent, or set `overflow: hidden`/`auto` on it  
- D) Set `height: auto` on the parent  

**Answer: C) Use a clearfix or `overflow: hidden`/`auto` on the parent**

> Floated elements are removed from the normal flow, so the parent has nothing to wrap. A clearfix pseudo-element forces the parent to expand around its floated children. Setting `overflow: hidden` or `auto` also establishes a BFC that contains floats.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Which of the following does **NOT** create a new Block Formatting Context (BFC)?

- A) `overflow: hidden`  
- B) `display: flow-root`  
- C) `float: left`  
- D) `display: block` (default)  

**Answer: D) `display: block` (default)**

> A plain `display: block` with no other special properties does not create a BFC. BFCs are created by `overflow` values other than `visible`, `float`, `position: absolute/fixed`, `display: inline-block`, `display: flow-root`, flex/grid containers, and more.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer applies `float: left` to an image inside a paragraph. What is the expected layout behavior?

- A) The image overlaps the paragraph text  
- B) The paragraph text wraps around the right side of the image  
- C) The image is removed from the page entirely  
- D) The paragraph becomes a flex container  

**Answer: B) The paragraph text wraps around the right side of the image**

> `float: left` shifts the element to the left of its container and allows inline content (like text) to flow alongside it on the right — the classic text-wrapping pattern.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 21. Filters & Blend Modes

<br>

## Q. What does the following CSS do?

```css
.card {
  filter: drop-shadow(4px 4px 6px rgba(0,0,0,0.4));
}
```

- A) Adds a shadow to the element\'s bounding box (like `box-shadow`)  
- B) Adds a shadow that follows the element\'s actual rendered shape, including transparent areas  
- C) Applies the shadow only inside the element  
- D) `drop-shadow` is not a valid CSS filter  

**Answer: B) Shadow follows the element\'s actual rendered shape**

> `filter: drop-shadow()` uses the element\'s alpha channel, so it traces non-rectangular shapes (like PNGs) precisely. `box-shadow` always shadows the rectangular bounding box.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What does `backdrop-filter: blur(8px)` do?

- A) Blurs the element\'s own content  
- B) Blurs the area **behind** the element (content rendered beneath it)  
- C) Blurs sibling elements  
- D) This property is not valid CSS  

**Answer: B) Blurs the area behind the element**

> `backdrop-filter` applies filter effects to the content rendered **beneath** an element, enabling frosted-glass effects. The element itself must have some transparency (`background` with alpha < 1) for the effect to be visible.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer applies `mix-blend-mode: multiply` to an image. What does this do?

- A) Multiplies the image\'s dimensions  
- B) Blends the image with the background by multiplying color values, producing a darker result  
- C) Creates a CSS animation that loops the image  
- D) Forces the image to use CSS color variables  

**Answer: B) Blends by multiplying color values, producing a darker result**

> `mix-blend-mode: multiply` combines the image\'s colors with those of the background by multiplying their values (0–1 scale). White areas become transparent; black areas remain black, creating an effect similar to physical ink overlays.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 22. Performance & Rendering

<br>

## Q. Which CSS property promotes an element to its own compositor layer, enabling GPU-accelerated animation?

- A) `z-index: 9999`  
- B) `transform: translateZ(0)` or `will-change: transform`  
- C) `display: absolute`  
- D) `opacity: 1`  

**Answer: B) `transform: translateZ(0)` or `will-change: transform`**

> Adding `transform: translateZ(0)` (or the modern `will-change: transform`) hints to the browser to promote the element to a separate compositor layer. Animating `transform` and `opacity` on composited layers bypasses layout and paint, resulting in smoother 60fps animations.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Why should `will-change` be used sparingly?

- A) It prevents transitions from running  
- B) Each composited layer consumes GPU memory; overuse can exhaust memory and degrade performance  
- C) It is not supported in any major browser  
- D) `will-change` only works with JavaScript  

**Answer: B) Each composited layer consumes GPU memory; overuse degrades performance**

> `will-change` signals the browser to prepare for an upcoming change, but every promoted layer occupies VRAM. Applying it to many elements at once can cause more harm than good and should be added only where an animation is actually happening.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. When animating an element, which two CSS properties can be changed without triggering layout or paint (composite-only)?

- A) `width` and `height`  
- B) `margin` and `padding`  
- C) `transform` and `opacity`  
- D) `color` and `background-color`  

**Answer: C) `transform` and `opacity`**

> The browser rendering pipeline has three stages: layout → paint → composite. Changes to `transform` and `opacity` skip the first two stages and are handled entirely on the compositor thread, making them the most performant properties to animate.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer wants styles for the parent selector using `&` in SCSS. What does the following produce?

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

## Q. Which SCSS feature allows you to conditionally apply styles?

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

## Q. A developer gets a deprecation warning: `@import is deprecated`. What should they migrate to?

- A) `@require`  
- B) `@load`  
- C) `@use` and `@forward`  
- D) `@include`  

**Answer: C) `@use` and `@forward`**

> The Dart Sass team deprecated `@import` in favor of `@use` (for consuming a module) and `@forward` (for re-exporting a module\'s members). These provide better encapsulation and namespacing.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 23. CSS Architecture & Naming Conventions

<br>

## Q. A  front-end team is adopting BEM (Block Element Modifier) methodology. A developer is styling a navigation component with an active link. Which class name follows BEM convention correctly?

- A) `.nav-link-active`
- B) `.nav__link--active`
- C) `.nav .link .active`
- D) `.navLinkActive`

**Answer: B) `.nav__link--active`**

> BEM uses `Block__Element--Modifier` syntax. Here `.nav` is the block, `__link` is the element inside it, and `--active` is the modifier state. This keeps styles flat and avoids specificity conflicts — a pattern favored by large teams to scale CSS predictably.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A  engineer reviews a stylesheet and notices heavy use of `!important`. What is the primary problem with overusing `!important`?

- A) It slows down CSS parsing
- B) It breaks CSS animations permanently
- C) It overrides the cascade and makes debugging and maintaining specificity extremely difficult
- D) `!important` is not a valid CSS keyword

**Answer: C) It overrides the cascade and makes debugging specificity extremely difficult**

> `!important` breaks the natural cascade, forcing every future developer who needs to override the rule to also add `!important`, creating specificity wars. The correct fix is to refactor selectors to have appropriate specificity.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A  team is building a design system and must choose between a CSS Reset and CSS Normalize. What is the key difference?

- A) A CSS Reset adds default browser styles; Normalize removes all styles
- B) A CSS Reset removes all default browser styles to a baseline; Normalize preserves useful defaults while ironing out cross-browser inconsistencies
- C) They are identical — just different naming conventions
- D) Normalize is only for IE11; Reset is for modern browsers

**Answer: B) Reset removes all defaults; Normalize preserves useful defaults and fixes cross-browser inconsistencies**

> A CSS Reset (e.g., Eric Meyer\'s Reset) zeroes out margins, padding, and font sizes on all elements. CSS Normalize (by Nicolas Gallagher) instead keeps practical defaults and only targets the inconsistencies across browsers. Most modern design systems (like Microsoft Fluent) prefer Normalize or a minimal custom baseline.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. An  performance team discusses "critical CSS." What does inlining critical CSS achieve?

- A) It prevents the CSS file from being cached
- B) It eliminates render-blocking requests by embedding above-the-fold styles directly in the `<head>`, allowing the browser to render visible content sooner
- C) It compresses all CSS into a single minified file
- D) It loads CSS after JavaScript to improve TTI

**Answer: B) Eliminates render-blocking requests so above-the-fold content renders sooner**

> CSS is render-blocking by default — the browser must download and parse it before painting. Inlining only the styles needed for the initial viewport (critical CSS) removes the blocking request for that content, improving First Contentful Paint (FCP) and Largest Contentful Paint (LCP).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer encounters a CSS architecture pattern called SMACSS (Scalable and Modular Architecture for CSS). The pattern categorizes rules into which five groups?

- A) Global, Local, Component, State, Theme
- B) Base, Layout, Module, State, Theme
- C) Reset, Base, Utility, Theme, Override
- D) Typography, Color, Spacing, Grid, Animation

**Answer: B) Base, Layout, Module, State, Theme**

> SMACSS (by Jonathan Snook) categorizes CSS into: **Base** (default element styles), **Layout** (major structural containers), **Module** (reusable components), **State** (JS-driven states like `.is-active`), and **Theme** (visual variations). This separation helps large financial-sector teams maintain predictable, conflict-free stylesheets.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer at a large organization wants to scope CSS to individual components to prevent style leakage. Which modern CSS feature provides native style encapsulation at the browser level?

- A) CSS Modules
- B) Shadow DOM with `:host` selector
- C) `@scope` at-rule
- D) Both B and C provide native browser-level scoping

**Answer: D) Both Shadow DOM with `:host` and `@scope` provide native browser-level scoping**

> Shadow DOM creates an encapsulated DOM/CSS boundary where external styles cannot penetrate (used by Web Components). The `@scope` CSS at-rule (CSS Cascading and Inheritance Level 6) natively scopes selectors to a subtree without JavaScript. CSS Modules is a build-tool solution, not a native browser feature.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 24. Accessibility & CSS

<br>

## Q. A  accessibility engineer reviews a site where users have set "Reduce Motion" in their OS settings, but CSS animations still play. Which media query should have been used to respect this preference?

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
.loader {
  animation: spin 1s linear infinite;
}
```

- A) `@media (no-animation: true)`
- B) `@media (prefers-reduced-motion: reduce)`
- C) `@media (motion: none)`
- D) `@media (animation: disabled)`

**Answer: B) `@media (prefers-reduced-motion: reduce)`**

> The `prefers-reduced-motion` media feature detects whether the user has requested that the system minimize the amount of non-essential motion. Wrapping or disabling animations inside `@media (prefers-reduced-motion: reduce) { ... }` is a WCAG 2.1 (2.3.3 AAA) best practice.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer builds a site that supports dark mode. Which CSS media query and property combination correctly implements it?

```css
:root {
  --bg: white;
  --text: black;
}
/* ??? */
:root {
  --bg: #121212;
  --text: #e0e0e0;
}
```

- A) `@media (color-scheme: dark)`
- B) `@media (prefers-color-scheme: dark)`
- C) `@media (theme: dark)`
- D) `@media (dark-mode: enabled)`

**Answer: B) `@media (prefers-color-scheme: dark)`**

> `prefers-color-scheme` detects the user\'s OS or browser dark/light mode preference. `color-scheme` is a CSS property (not a media query) that tells the browser which color schemes an element supports. Combining CSS variables with `prefers-color-scheme` is the standard pattern for implementing dark mode without JavaScript.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer needs to hide an element visually but keep it accessible to screen readers. Which CSS technique is correct?

- A) `display: none`
- B) `visibility: hidden`
- C) `opacity: 0`
- D) `.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }`

**Answer: D) The `.sr-only` / visually-hidden CSS class**

> `display: none` and `visibility: hidden` both hide elements from screen readers. `opacity: 0` hides visually but the element is still focusable and clickable. The `.sr-only` pattern (used by Bootstrap, Tailwind, and ARIA best practices) positions the element off-screen in a 1×1 clipped box — visible to screen readers but not to sighted users.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A front-end developer uses `:focus` to style keyboard-focused buttons. A UX complaint arises: focus outlines appear when mouse users click buttons, creating visual clutter. What is the best CSS-only solution?

- A) Remove all `:focus` styles with `outline: none`
- B) Use `:focus-visible` instead of `:focus` — it shows the focus ring only for keyboard navigation
- C) Use `pointer-events: none` to disable mouse clicks
- D) Use JavaScript to add/remove a `.keyboard-focused` class

**Answer: B) Use `:focus-visible`**

> `:focus-visible` is applied by the browser only when focus was set via keyboard or non-pointer navigation. Mouse clicks do not trigger `:focus-visible` in most browsers. Removing `:focus` entirely (option A) is an accessibility violation — WCAG 2.4.7 requires a visible focus indicator for keyboard users.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. An Amazon engineer is auditing color contrast for WCAG 2.1 AA compliance. A button has `color: #767676` on a `background: white` background. What is the issue?

- A) WCAG 2.1 AA requires a minimum contrast ratio of 4.5:1 for normal text; `#767676` on white is exactly 4.5:1 and just passes
- B) WCAG 2.1 AA requires 3:1 contrast ratio; `#767676` passes
- C) Color contrast only applies to body text, not buttons
- D) CSS cannot enforce color contrast — this is an HTML concern

**Answer: A) `#767676` on white achieves exactly 4.5:1 and meets the WCAG 2.1 AA minimum**

> WCAG 2.1 Success Criterion 1.4.3 requires a contrast ratio of at least **4.5:1** for normal text and **3:1** for large text (18pt / 14pt bold). `#767676` on white achieves exactly 4.5:1. Any lighter gray (e.g., `#777`) fails.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer wants interactive elements to remain usable in Windows High Contrast Mode. Which CSS approach ensures borders and backgrounds are preserved?

- A) Use `color: white` and `background: black` explicitly
- B) Use the CSS `forced-colors` media query and `@media (forced-colors: active)` to override affected styles
- C) High Contrast Mode is not supported in CSS
- D) Use `filter: invert(1)` on the body

**Answer: B) Use `@media (forced-colors: active)` to override affected styles**

> In Windows High Contrast Mode (and `forced-colors: active`), the browser replaces many colors with system colors. Transparent backgrounds, box shadows, and custom gradients may disappear. Targeting `@media (forced-colors: active)` lets developers restore critical borders or use `currentColor` fallbacks, ensuring the UI remains usable.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 25. Advanced Layout Scenarios

<br>

## Q. An Amazon product page needs a sticky footer that always sits at the bottom of the viewport when content is short, but is pushed down by content when the page is long. Which CSS approach achieves this with minimal markup?

```css
body {
  /* ??? */
}
main {
  /* ??? */
}
```

- A) `body { position: relative; } footer { position: absolute; bottom: 0; }`
- B) `body { display: flex; flex-direction: column; min-height: 100vh; } main { flex: 1; }`
- C) `body { height: 100vh; overflow: hidden; }`
- D) `footer { position: fixed; bottom: 0; }`

**Answer: B) `display: flex; flex-direction: column; min-height: 100vh;` on body and `flex: 1` on main**

> Setting `min-height: 100vh` on the body makes it at least full-viewport height. A column flex layout with `flex: 1` on `<main>` causes it to grow and fill the remaining space, pushing the footer to the bottom. `position: fixed` (option D) overlaps content; `position: absolute` (option A) only works if the body is exactly one viewport tall.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer needs to maintain a 16:9 aspect ratio for embedded video containers across all viewport sizes. Which modern CSS property achieves this in a single line?

```css
.video-wrapper {
  width: 100%;
  /* ??? */
}
```

- A) `height: 56.25%`
- B) `aspect-ratio: 16 / 9`
- C) `padding-top: 56.25%` with `position: relative` and absolute child
- D) `max-height: 9vw`

**Answer: B) `aspect-ratio: 16 / 9`**

> The `aspect-ratio` CSS property (widely supported since 2021) directly sets the intrinsic aspect ratio. Before its introduction, developers used the "padding-top hack" (option C) — `padding-top: 56.25%` equals 9/16 × 100%. The modern `aspect-ratio` property is cleaner, readable, and does not require positioning tricks.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A  engineer needs a component\'s layout to change based on the component\'s own width — not the viewport width. Which CSS feature enables this?

- A) Media queries with `@media (min-width: 600px)`
- B) CSS Container Queries with `@container` and `container-type`
- C) CSS Grid `auto-fill` with `minmax()`
- D) Flexbox `flex-wrap: wrap`

**Answer: B) CSS Container Queries with `@container` and `container-type`**

> Container Queries (CSS Containment Level 3) allow styles to respond to the size of the component\'s nearest container rather than the viewport. A parent is declared with `container-type: inline-size`, and children use `@container (min-width: 600px) { ... }`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A dashboard uses a CSS Grid layout. A developer needs the inner grid items to align to the outer grid\'s column tracks — not their own subgrid tracks. Which CSS feature allows this?

```css
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.child {
  grid-column: 1 / -1;
  display: grid;
  /* ??? */
}
```

- A) `grid-template-columns: inherit`
- B) `grid-template-columns: subgrid`
- C) `grid-template-columns: repeat(4, 1fr)` repeated manually
- D) `display: contents`

**Answer: B) `grid-template-columns: subgrid`**

> CSS Subgrid (CSS Grid Level 2) allows a nested grid element to participate in its parent\'s grid tracks rather than defining its own. `grid-template-columns: subgrid` makes the child align its columns to the parent\'s column lines — critical for consistent card layouts and data tables in dashboards.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer builds a card grid where all cards in the same row should have equal height (regardless of content). Which CSS property on the grid container achieves this automatically?

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* ??? */
}
```

- A) `align-items: stretch` (the default)
- B) `height: equal`
- C) `grid-auto-rows: 1fr`
- D) `align-content: space-evenly`

**Answer: A) `align-items: stretch` (the default grid behavior)**

> CSS Grid automatically makes all items in the same row the same height by stretching them to fill the row track — `align-items: stretch` is the default. Unlike Flexbox, Grid creates a true two-dimensional layout where all cells in the same row share the same height implicitly. No additional properties are needed.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer needs a responsive multi-column image gallery that automatically fills columns without specifying the exact number. Which CSS declaration achieves a fluid column count?

```css
.gallery {
  display: grid;
  grid-template-columns: ???;
}
```

- A) `repeat(auto-fill, 200px)`
- B) `repeat(auto-fill, minmax(200px, 1fr))`
- C) `1fr 1fr 1fr`
- D) `repeat(3, auto)`

**Answer: B) `repeat(auto-fill, minmax(200px, 1fr))`**

> `auto-fill` creates as many column tracks as will fit. `minmax(200px, 1fr)` ensures each track is at least 200px but expands to fill available space. This combination creates a fully responsive grid that adapts the column count to the container width without any media queries — a pattern widely used in product listing pages.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 26. Modern CSS Features

<br>

## Q. A developer is building a design system with multiple third-party CSS libraries. Specificity conflicts cause unexpected overrides. Which CSS feature allows the developer to explicitly control the order in which stylesheet layers are applied?

- A) `@namespace`
- B) `@layer`
- C) `@import` with `layer()` function
- D) Both B and C

**Answer: D) Both `@layer` and `@import` with the `layer()` function**

> CSS Cascade Layers (`@layer`) let developers define explicit cascade order. Styles in a later `@layer` override earlier ones, regardless of specificity. You can also assign an imported stylesheet to a layer: `@import url(\'reset.css\') layer(reset)`. This solves specificity conflicts without `!important` and is increasingly adopted in large-scale design systems.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. An  engineer applies `content-visibility: auto` to off-screen sections. What does this achieve?

```css
.page-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
```

- A) Hides the section until a user scrolls to it, like `display: none`
- B) Skips rendering (layout and paint) of off-screen sections until they are near the viewport, improving initial page load performance
- C) Lazy-loads images inside the section
- D) Prevents the section from being indexed by search engines

**Answer: B) Skips rendering of off-screen sections until they approach the viewport**

> `content-visibility: auto` instructs the browser to skip layout and paint for elements outside the viewport, dramatically reducing initial rendering work. `contain-intrinsic-size` provides a placeholder size to preserve scroll behavior. Google Chromium engineers have reported rendering time improvements of 7× on content-heavy pages using this property.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer is adopting native CSS Nesting (no preprocessor). What does the following produce?

```css
.card {
  background: white;

  & .title {
    font-size: 1.5rem;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
}
```

- A) Syntax error — CSS nesting requires a preprocessor
- B) `.card {}`, `.card .title {}`, `.card:hover {}`
- C) `.card {}`, `.title {}`, `:hover {}`
- D) The `&` is treated as a universal selector

**Answer: B) `.card {}`, `.card .title {}`, `.card:hover {}`**

> Native CSS Nesting (Baseline 2023) is now supported in all major browsers. The `&` refers to the parent selector. `& .title` compiles to `.card .title` and `&:hover` compiles to `.card:hover`. Unlike SCSS, native nesting requires `&` before any combinators or element selectors that are not pseudo-classes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer needs to style a `<form>` element differently when it contains at least one invalid `<input>`. Which CSS selector achieves this without JavaScript?

- A) `form ~ input:invalid { border-color: red; }`
- B) `form:has(input:invalid) { border: 2px solid red; }`
- C) `form + input:invalid { border-color: red; }`
- D) `form:contains(input:invalid) { border: 2px solid red; }`

**Answer: B) `form:has(input:invalid)`**

> The CSS `:has()` relational pseudo-class (Baseline 2023) selects a parent based on its children. `form:has(input:invalid)` targets the `<form>` if it contains any `<input>` matching `:invalid`. This eliminates the need for JavaScript to propagate child-state to a parent — a long-standing limitation of CSS.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer is internationalizing a web application to support both left-to-right (English) and right-to-left (Arabic) layouts. Which CSS approach avoids writing separate RTL overrides?

```css
/* Instead of: */
.sidebar {
  margin-left: 1rem;
}
/* Use: */
.sidebar {
  /* ??? */
}
```

- A) `margin-left: 1rem; direction: rtl;`
- B) `margin-inline-start: 1rem`
- C) `margin: 0 0 0 1rem; writing-mode: rtl;`
- D) `float: start`

**Answer: B) `margin-inline-start: 1rem`**

> CSS Logical Properties map physical directions (left/right/top/bottom) to logical ones relative to the writing mode. `margin-inline-start` means "the start of the inline axis" — left for LTR, right for RTL — so the layout adapts automatically without a `[dir="rtl"]` override. This is the recommended approach for internationalized applications.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. A developer wants to apply a CSS custom property that can be set from JavaScript at runtime to drive a dynamic theme. Which approach is correct?

```js
// JavaScript
document.documentElement.style.setProperty(\'--accent-color\', \'#e91e63\');
```

```css
/* CSS */
.button {
  background: var(--accent-color, #1976d2);
}
```

- A) This will not work — CSS variables cannot be changed by JavaScript
- B) This works correctly; `--accent-color` is set on `:root` and consumed by `.button`
- C) `setProperty` only works with standard CSS properties, not custom ones
- D) The `var()` fallback prevents the JavaScript value from applying

**Answer: B) This works correctly — CSS variables set via JavaScript are reflected immediately**

> CSS custom properties are live — changing them via `element.style.setProperty()` triggers a re-paint. `document.documentElement` targets the `<html>` element, making `--accent-color` available globally (same as `:root`). The fallback `#1976d2` only applies when `--accent-color` is undefined. This pattern powers runtime theming without page reload.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## # 27. BOOTSTRAP-CSS

<br>

## Q. You want to apply pagination to your web page using Bootstrap. Which option in Bootstrap is used to disable access to any page at a point in time?

- A) Use disable = true in a class.
- B) Use class="disabled"
- C) Use class "enabled=false"
- D) It is not possible to disable a page link

**Answer: B) Use `class="disabled"`**

> In Bootstrap, adding the `disabled` class to a pagination `<li>` element visually grays out the link and prevents interaction. For example: `<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>`. `disable = true` and `enabled=false` are not valid Bootstrap or CSS constructs, and disabling page links is very much possible.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. While working with Bootstrap, you want to allow the web debuggers to refer to the original context from where the code was generated, What is that map file called? 

- A) CSS file with .css extension
- B) Source map file with .map extension
- C) HTML stylesheet file with .htmlx extension
- D) Bootstrap file with .embeded extension


**Answer: A)**

> The CSS `list-style` shorthand order is **`list-style-type list-style-position list-style-image`**. Option A uses the correct order and correctly describes `list-style-position` as controlling whether the marker appears **inside or outside** the content flow. Option B has the wrong order (image before position). Option C also has the wrong order and incorrectly describes `list-style-position` as placing the marker at top/bottom/left/right — those are not valid `list-style-position` values (`inside` and `outside` are).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Alex wants to leverage a CSS framework to create a responsive layout quickly for a new web development project. Which CSS framework can she use to provide a responsive grid system and various UI components?

- A) Foundation  
- B) Bulma  
- C) Semantic UI
- D) Twitter Bootstrap  

**Answer: D) Twitter Bootstrap**

> **Twitter Bootstrap** is the most widely used CSS framework, offering a responsive 12-column grid system and an extensive library of UI components (buttons, navbars, modals, cards, forms, etc.). Foundation, Bulma, and Semantic UI also provide grids and components, but Bootstrap is the most prominent answer to this scenario.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. You have a collection of images you need to make responsive using Bootstrap 4. Which attribute is used to make the images responsive?

- A) img-fluid
- B) div-container-responsive
- C) class-set-responsive
- D) img-embed-true 

**Answer: A) `img-fluid`**

> In Bootstrap 4, applying the class `img-fluid` to an `<img>` element makes it responsive. It sets `max-width: 100%` and `height: auto` so the image scales with its parent container and never overflows. `div-container-responsive`, `class-set-responsive`, and `img-embed-true` are not valid Bootstrap classes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. While working with Bootstrap, you want to allow the web debuggers to refer to the original context from where the code was generated. What is that map file called?

- A) CSS file with .css extension
- B) Source map file with .map extension
- C) HTML stylesheet file with .htmlx extension
- D) Bootstrap file with .embeded extension

**Answer: B) Source map file with .map extension**

> A **source map** (`.map` file) is a JSON file that maps the minified/compiled output back to the original source code. When Bootstrap\'s minified CSS (e.g., `bootstrap.min.css`) is served alongside its `.map` file, browser DevTools can display the original, human-readable source lines instead of the minified output — making debugging significantly easier. `.htmlx` and `.embeded` are not real file extensions in this context.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Alex is working on a web development project for a client and must create a responsive layout using the Twitter Bootstrap Grid System. The client wants a three-column layout for larger screens, with the left and right columns having a fixed with of 200 pixels each and the center column taking up the remaining space. However, tha layout should stack the columns vertically for smaller screens.

- A) col-lg-4 col-md-6 col-sm-12  
- B) col-lg-6 col-md-4 col-sm-12 
- C) col-lg-3 col-md-6 col-sm-12 
- D) col-lg-8 col-md-2 col-sm-12   

**Answer: A) `col-lg-4 col-md-6 col-sm-12`**

> Bootstrap\'s 12-column grid divides large screens into three equal columns with `col-lg-4` (4 + 4 + 4 = 12). `col-md-6` shows two columns per row on medium screens (6 + 6 = 12, third wraps), and `col-sm-12` makes each column full-width on small screens, stacking them vertically. This is the standard Bootstrap three-column responsive pattern.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Taylor is developing a responsive website using the Bootstrap framework and needs to create a container that spans the entire width of the viewport, providing a full-width layout for the client\'s content, Which class should she use to achieve this?

- A) .container  
- B) .row
- C) .col 
- D) .container-fluid  

**Answer: D) `.container-fluid`**

> `.container-fluid` spans the full width of the viewport (`width: 100%`) at all breakpoints. `.container` uses responsive max-widths that vary per breakpoint. `.row` and `.col` are grid layout classes, not container wrappers.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
