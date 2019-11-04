## CSS Interview Questions and Answers

*Click <img src="https://github.com/learning-zone/css-interview-questions/blob/master/assets/star.png" width="18" height="18" align="absmiddle" title="Star" /> if you like the project. Pull Request are highly appreciated.*

### Table of Contents

* [CSS3 Properties](css3-properties.md) 
* [SCSS Interview Questions and Answers](scss-questions.md)  


#### Q. How to draw a circle inside Square using single DIV in css?
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Circle inside Square</title>
  </head>
  <style>
    .rectangle {    
        border-radius: 10px;
        display: inline-block;
        width: 205px;
        height: 205px;
        border: 1px solid #000;
        background-color: white;
    }
    .rectangle:before {
        display: block;
        position: absolute;
        left: 10px;
        top: 10px;
        content: '';
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #eee;
    }
    </style>
    <body>
        <div class="rectangle"></div>
    </body>
</html>
```

#### Q. What are the css selectors? 
A CSS selector is the part of a CSS rule set that actually selects the content you want to style.

**Universal Selector**: The universal selector works like a wild card character, selecting all elements on a page. Every HTML page is built on content placed within HTML tags. Each set of tags represents an element on the page.
```css
* {
   color: green;
   font-size: 20px;
   line-height: 25px;
}
```
**Element Type Selector**: This selector match one or more HTML elements of the same name. 
```css
ul {
   list-style: none;
   border: solid 1px #ccc;
}
```
```html
<ul>
  <li>Fish</li>
  <li>Apples</li>
  <li>Cheese</li>
</ul>

<div class="example">
  <p>Example paragraph text.</p>
</div>

<ul>
  <li>Water</li>
  <li>Juice</li>
  <li>Maple Syrup</li>
</ul>
```
**ID Selector**: This selector matches any HTML element that has an ID attribute with the same value as that of the selector.
```css
#container {
   width: 960px;
   margin: 0 auto;
}
```
```html
<div id="container"></div>
```
**Class Selector**: The class selector also matches all elements on the page that have their class attribute set to the same value as the class.
```css
.box {
   padding: 20px;
   margin: 10px;
   width: 240px;
}
```
```html
<div class="box"></div>
```
**Descendant Combinator**: The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method.
```css
#container .box {
   float: left;
   padding-bottom: 15px;
}
```
This declaration block will apply to all elements that have a class of box that are inside an element with an ID of `container`. It’s worth noting that the `.box` element doesn’t have to be an immediate child: there could be another element wrapping `.box`, and the styles would still apply.
```html
<div id="container">
  <div class="box"></div>

  <div class="box-2"></div>
</div>

<div class="box"></div>
```
**Child Combinator**: A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it only targets immediate child elements.
```css
#container > .box {
   float: left;
   padding-bottom: 15px;
}
```
The selector will match all elements that have a class of `box` and that are immediate children of the `#container` element. That means, unlike the descendant combinator, there can’t be another element wrapping `.box`—it has to be a direct child element.
```html
<div id="container">
  <div class="box"></div>

  <div>
    <div class="box"></div>
  </div>
</div>
```
**General Sibling Combinator**: A selector that uses a general sibling combinator matches elements based on sibling relationships. The selected elements are beside each other in the HTML.
```css
h2 ~ p {
   margin-bottom: 20px;
}
```
In this example, all paragraph elements (`<p>`) will be styled with the specified rules, but only if they are siblings of `<h2>` elements. There could be other elements in between the `<h2>` and `<p>`, and the styles would still apply.
```html
<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<div class="box">
  <p>Paragraph example.</p>
</div>
```
**Adjacent Sibling Combinator**: A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling.
```css
p + p {
   text-indent: 1.5em;
   margin-bottom: 0;
}
```
In this example will apply the specified styles only to paragraph elements that immediately follow other paragraph elements. This means the first paragraph element on a page would not receive these styles. Also, if another element appeared between two paragraphs, the second paragraph of the two wouldn’t have the styles applied.
```html
<h2>Title</h2>
<p>Paragraph example.</p>
<p>Paragraph example.</p>
<p>Paragraph example.</p>

<div class="box">
  <p>Paragraph example.</p>
  <p>Paragraph example.</p>
</div>
```
**Attribute Selector**: The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets
```css
input[type="text"] {
   background-color: #444;
   width: 200px;
}
```
```html
<input type="text">
```
The attribute selector can also be declared using just the attribute itself, with no value, like this:
```css
input[type] {
   background-color: #444;
   width: 200px;
}
```
**Pseudo-class**: A pseudo-class uses a colon character to identify a pseudo-state that an element might be in—for example, the state of being hovered, or the state of being activated.
```css
a:hover {
   color: red;
}
```
**Pseudo-element**: A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to:

* Style the first letter, or line, of an element
* Insert content before, or after, the content of an element 
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p::first-line {
        color: #ff0000;
        font-variant: small-caps;
      }

      p::first-letter {
        color: #ff0000;
        font-size: xx-large;
      }

      h1::before {
        content: url(smiley.gif);
      }

      h1::after {
        content: url(smiley.gif);
      }

      ::selection {
        color: red;
        background: yellow;
      }
    </style>
  </head>
<body>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, <h1>when an unknown printer took a galley of type and scrambled it to 
make a type specimen book.<h1></p>
</body>
</html>
```
[Live Example](https://learning-zone.github.io/css-interview-questions/selector.html) 
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is Combinator selector?
A combinator is the character in a selector that connects two selectors together. There are four types of combinators. These four combinators help create descendant selectors (with a space character), child selectors (with the ```>``` character), adjacent sibling selectors (with the ```+``` character), and general sibling selectors (with the ```~``` character). To dispel any confusion, here are those four combinators in use:

* **Descendant Combinator**
    * This is the most common usage, e.g. #lovelyweather h1.
* **Child Combinator**
    * Select an element if it is a direct child of another element (and not a grandchild of that element).
* **Adjacent Sibling Combinator**
    * The element that is immediately adjacent to another element.
* **General Sibling Combinator**
    * The element that is adjacent, but not immediately to another element.

```css
div p {
  color: #222;
}

div > p {
  color: #333;
}

div + p {
  color: #444;
}

div ~ p {
  color: #555;
}
```

#### Q. What is the difference between class selectors and id selectors?
In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.
```css
#top {
    background-color: #ccc;
    padding: 20px
}

.intro {
    color: red;
    font-weight: bold;
}
```
```html
<div id="top">

<h1>Chocolate curry</h1>
<p class="intro">This is my recipe for making curry purely with chocolate</p>
<p class="intro">Mmm mm mmmmm</p>

</div>
```
#### Q. When to use css grid and flexbox?

* CSS Grid Layout is a **two-dimensional** system, meaning it can handle both columns and rows, unlike flexbox which is largely a **one-dimensional** system (either in a column or a row).
* A core difference between CSS Grid and Flexbox is that — CSS Grid’s approach is **layout-first** while Flexbox’ approach is **content-first**. If you are well aware of your content before making layout, then blindly opt for Flexbox and if not, opt for CSS Grid.
* Flexbox layout is most appropriate to the components of an application (as most of them are fundamentally linear), and **small-scale** layouts, while the Grid layout is intended for **larger-scale** layouts which aren’t linear in their design.
* If you only need to define a layout as a row or a column, then you probably need flexbox. If you want to define a grid and fit content into it in two dimensions — you need the grid.

![alt text](https://github.com/learning-zone/css-interview-questions/blob/master/assets/flex.png "One-Dimensional")

![alt text](https://github.com/learning-zone/css-interview-questions/blob/master/assets/grid.png "Two-Dimensional")


[Live Example](https://learning-zone.github.io/css-interview-questions/grid-flexbox-layout.html) 

#### Q. What is CSS BEM?
The BEM (**Block Element Modifier**) methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

```css
/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
```
Example
```css
.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}
```
```html
<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>
```
**Benefits**  
* **Modularity**: Block styles are never dependent on other elements on a page, so you will never experience problems from cascading.
* **Reusability**: Composing independent blocks in different ways, and reusing them intelligently, reduces the amount of CSS code that you will have to maintain.
* **Structure**: BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the benefits of using CSS sprites? 
    
CSS sprites combine multiple images into one single larger image. It is a commonly-used technique for icons. 

**Advantages:**

* Reduce the number of ```HTTP``` requests for multiple images (only one single request is required per spritesheet). But with ```HTTP2```, loading multiple images is no longer much of an issue.
* Advance downloading of assets that won't be downloaded until needed, such as images that only appear upon `:hover` pseudo-states. Blinking wouldn't be seen.


* When you have multiple images/ icons, browser makes separate call to the server for each one of them. sprite is a technique to combine all/ some of them (usually similar one in terms of type of image. For example, you will put jpg in one sprite) in one image. To display the icon you set height, width and background position.

**Alternatives:**

* Data URIs - allow you to embed the image data directly into a stylesheet. This avoids additional HTTP requests for images, making it essentially the same thing as a sprite, without the fancy positioning.
* Icon Fonts
* SVGs
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the float property and what float do?
The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. 

**Syntax**  
```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: unset;
```
**Property Values**  

|Sl.No| Value  | Description| 
|-----|--------|------------|
| 01. |none	   |The element does not float, (will be displayed just where it occurs in the text).|	
| 02. |left	   |The element floats to the left of its container	|
| 03. |right	 |The element floats the right of its container	|
| 04. |initial |Sets this property to its default value.    	|
| 05. |inherit |Inherits this property from its parent element. |

Example:
```css
section {
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```
```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Morbi tristique sapien ac erat tincidunt, sit amet dignissim
     lectus vulputate. Donec id iaculis velit. Aliquam vel
     malesuada erat. Praesent non magna ac massa aliquet tincidunt
     vel in massa. Phasellus feugiat est vel leo finibus congue.</p>
</section>
```


<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is tweening in css?
The pose-to-pose option is to create a few keyframes throughout the sequence, and then fill in the gaps later. Filling in these gaps is known as **tweening**. It is the process of generating intermediate frames between two images It gives the impression that the first image has smoothly evolved into the second one. In CSS3, Transforms (matrix, translate, rotate, scale etc.) module can be used to achieve tweening.

Example:
```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

#### Q. Explain the difference between ```visibility: hidden;``` and ```display: none;```? What are the pros and cons of using ```display:none```?

**visibility: hidden** simply hides the element but it will occupy space and affect the layout of the document.  
**display: none** removes the element from the normal layout flow (causes DOM reflow). It will not affect the layout of the document nor occupy space.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is DOM reflow?
Reflow is the name of the web browser process for re-calculating the positions and geometries of elements in the document, for the purpose of re-rendering part or all of the document.

Reflow occurs when you:

  * insert, remove or update an element in the DOM
  * modify content on the page, e.g. the text in an input box
  * move a DOM element
  * animate a DOM element
  * take measurements of an element such as offsetHeight or getComputedStyle
  * change a CSS style
  * change the className of an element
  * add or remove a stylesheet
  * resize the window
  * scroll

**Minimizing browser reflow**  

* Reduce unnecessary DOM depth. Changes at one level in the DOM tree can cause changes at every level of the tree - all the way up to the root, and all the way down into the children of the modified node. This leads to more time being spent performing reflow.
* Minimize CSS rules, and remove unused CSS rules.
* If you make complex rendering changes such as animations, do so out of the flow. Use position-absolute or position-fixed to accomplish this.
* Avoid unnecessary complex CSS selectors - descendant selectors in particular - which require more CPU power to do selector matching.
    
#### Q. What is the purpose of the ```z-index``` and how is it used?
The ```z-index``` helps specify the stack order of positioned elements that may overlap one another. The ```z-index``` default value is zero, and can take on either a positive or negative number. An element with a higher ```z-index``` is always stacked above than a lower index.

```z-index``` can take the following values:

  * **Auto**: Sets the stack order equal to its parents.
  * **Number**: Orders the stack order.
  * **Initial**: Sets this property to its default value (0).
  * **Inherit**: Inherits this property from its parent element.

[Live Example](https://learning-zone.github.io/css-interview-questions/z-index.html) 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Exaplain CSS position Property? 

* **absolute**, place an element exactly where you want to place it. absolute position is actually set relative to the element's parent. if no parent available then relatively place to the page itself (it will default all the way back up to the <html> element).

* **relative**, means "relative to itself". Setting position: relative; on an element and no other positioning attributes, it will no effect on it's positioning. It allows the use of ```z-index``` on the element and it limits the scope of absolutely positioned child elements. Any child element will be absolutely positioned within that block.

* **fixed**, element is positioned relative to viewport or the browser window itself. viewport doesn't changed if u scroll and hence fixed element will stay right in the same position.

* **static** default for every single page element. The only reason you would ever set an element to position: static is to forcefully-remove some positioning that got applied to an element outside of your control.

* **sticky** - Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as `relative` positioned until it crosses a specified threshold, at which point it is treated as `fixed` positioned.

[Live Example](https://learning-zone.github.io/css-interview-questions/position-index.html) 

#### Q. The difference between block, inline and inline-block element?

**Block Elements**  
The block elements always start on a new line. They will also take space of an entire row or width. List of block elements are `<p>`, `<h1>`, `<div>`, `<header>`.

Example:
```html
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem,
  consequatur deleniti nobis beatae quo dolore nemo corporis. Ad delectus
  dignissimos pariatur illum eveniet dolor rem eius laborum sed iure!
</p>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde autem,
  consequatur deleniti nobis beatae quo dolore nemo corporis. Ad delectus
  dignissimos pariatur illum eveniet dolor rem eius laborum sed iure!
</p>
```

**Inline Elements**  
Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are `<a>`, `<span>` , `<strong>`, and `<img>` tags.

When it comes to margins and padding, browsers treat inline elements differently. You can add space to the left and right on an inline element, but you cannot add height to the top or bottom padding or margin of an inline element.

Example:
```html
<a href="#">Link</a>
<img src="https://picsum.photos/30" />
<span>Span</span>
<strong>Strong Player</strong>
```

**Inline-Block Elements**  
Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.
One common use for using inline-block is for creating navigation links horizontally. Some examples of inline-block elements are `<input>`, `<button>`, `<select>`, `<textarea>` etc.
```css
input {
  width: 300px;
  height: 50px;
}

button {
  width: 100px;
  height: 50px;
  margin-top: 20px;
}
```
```html
<input type="text" /> <button>Submit</button>
```
[Live Example](https://learning-zone.github.io/css-interview-questions/display-properties.html) 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are counters in CSS3?
CSS counters let you adjust the appearance of content based on its location in a document. To use a CSS counter, it must first be initialized to a value with the `counter-reset` property (0 by default). The same property can also be used to change its value to any specific number. Once initialized, a counter's value can be increased or decreased with counter-increment. The counter's name must not be "none", "inherit", or "initial"; otherwise the declaration is ignored.

```css
body {
  counter-reset: section;   /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section;   /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": ";  /* Display the word 'Section ', the value of 
                                                 section counter, and a colon before the content
                                                 of each h3 */
}
```
```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

**CSS Counter Properties**  

|Property	        |Description  |
|-----------------|-------------------------------------------------------------------------------|
|content	        |Used with the ::before and ::after pseudo-elements, to insert generated content|
|counter-increment|Increments one or more counter values|
|counter-reset	  |Creates or resets one or more counters|

[Live Example](https://learning-zone.github.io/css-interview-questions/counters.html) 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Are CSS rule names case sensitive?
* No
#### Q. Does margin-top or margin-bottom has effect on inline element?
* No
#### Q. Does padding-top or padding-bottom has effect on inline element?
* No
#### Q. Which one would you prefer among px, em % or pt and why?
* ```px``` gives fine grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp. px is not cascade, this means if parent font-size is 20px and child 16px. child would be 16px.

* ```em``` maintains relative size. you can have responsive fonts. em is the width of the letter 'm' in the selected typeface. However, this concept is tricky. 1em is equal to the current font-size of the element or the browser default. if u sent font-size to 16px then 1em = 16px. The common practice is to set default body font-size to 62.5% (equal to 10px). em is cascade

* ```%``` sets font-size relative to the font size of the body. Hence, you have to set font-size of the body to a reasonable size. this is easy to use and does cascade. for example, if parent font-size is 20px and child font-size is 50%. child would be 10px.

* ```pt```(points) are traditionally used in print. 1pt = 1/72 inch and it is fixed-size unit.


#### Q. Does padding-left or padding-right or margin-left or margin-right has effect on inline element?
* Yes

#### Q. In a HTML document the pseudo class :root always refers to the html element?
* True

#### Q. What is pseudo element? What is pseudo class?
**Pseudo Element**: A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

* Style the first letter, or line, of an element
* Insert content before, or after, the content of an element

**CSS Pseudo Elements**  

|Sl.No|Selector	      |Example	        |description|
|-----|---------------|-----------------|-------------|
| 01. |::after	      |p::after	        |Insert something after the content of each <p> element|
| 02. |::before	      |p::before	      |Insert something before the content of each <p> element|
| 03. |::first-letter	|p::first-letter	|Selects the first letter of each <p> element|
| 04. |::first-line	  |p::first-line	  |Selects the first line of each <p> element|
| 05. |::selection	  |p::selection	    |Selects the portion of an element that is selected by a user|


**Pseudo-classes**: A pseudo-class is used to define a special state of an element.

For example, it can be used to:

* Style an element when a user mouses over it
* Style visited and unvisited links differently
* Style an element when it gets focus

**CSS Pseudo Classes**  

| Sl.No |Selector	         | Example	              |description|
|-------|------------------|------------------------|-----------|
| 01.  |:active	           |a:active	              |Selects the active link|
| 02.  |:checked	         |input:checked	          |Selects every checked `<input>` element|
| 03.  |:disabled	         |input:disabled	        |Selects every disabled `<input>` element|
| 04.  |:empty	           |p:empty	                |Selects every `<p>` element that has no children|
| 05.  |:enabled	         |input:enabled	          |Selects every enabled `<input>` element|
| 06.  |:first-child	     |p:first-child	          |Selects every `<p>` elements that is the first child of its parent|
| 07.  |:first-of-type	   |p:first-of-type	        |Selects every `<p>` element that is the first `<p>` element of its parent|
| 08.  |:focus	           |input:focus	            |Selects the `<input>` element that has focus|
| 09.  |:hover	           |a:hover	                |Selects links on mouse over|
| 10.  |:in-range	         |input:in-range	        |Selects `<input>` elements with a value within a specified range|
| 11.  |:invalid	         |input:invalid	          |Selects all `<input>` elements with an invalid value|
| 12.  |:lang(language)	   |p:lang(it)	            |Selects every `<p>` element with a lang attribute value starting with "it"|
| 13.  |:last-child	       |p:last-child	          |Selects every `<p>` elements that is the last child of its parent|
| 14.  |:last-of-type	     |p:last-of-type	        |Selects every `<p>` element that is the last `<p>` element of its parent|
| 15.  |:link	             |a:link	                |Selects all unvisited links|
| 16.  |:not(selector)	   |:not(p)	                |Selects every element that is not a `<p>` element|
| 17.  |:nth-child(n)	     |p:nth-child(2)	        |Selects every `<p>` element that is the second child of its parent|
| 18.  |:nth-last-child(n) |p:nth-last-child(2)	    |Selects every `<p>` element that is the second child of its parent, |counting from the last child|
| 19.  |:nth-last-of-type(n) |p:nth-last-of-type(2)	|Selects every `<p>` element that is the second `<p>` element of its parent, counting from the last child|
| 20.  |:nth-of-type(n)	    |p:nth-of-type(2)	      |Selects every `<p>` element that is the second `<p>` element of its parent|
| 21.  |:only-of-type	      |p:only-of-type	        |Selects every `<p>` element that is the only `<p>` element of its parent|
| 22.  |:only-child	        |p:only-child	          |Selects every `<p>` element that is the only child of its parent|
| 23.  |:optional	          |input:optional	        |Selects `<input>` elements with no "required" attribute|
| 24.  |:out-of-range	      |input:out-of-range	    |Selects `<input>` elements with a value outside a specified range|
| 25.  |:read-only	        |input:read-only	      |Selects `<input>` elements with a "readonly" attribute specified|
| 26.  |:read-write	        |input:read-write	      |Selects `<input>` elements with no "readonly" attribute|
| 27.  |:required	          |input:required	        |Selects `<input>` elements with a "required" attribute specified|
| 28.  |:root	root	        |                       |Selects the document's root element|
| 29.  |:target	            |#news:target	          |Selects the current active #news element (clicked on a URL containing that anchor name)|
| 30.  |:valid	            |input:valid	          |Selects all `<input>` elements with a valid value|
| 31.  |:visited	          |a:visited	            |Selects all visited links|



#### Q. The pseudo class `:checked` will select inputs with type radio or checkbox, but not `<option>` elements.
* False

#### Q. How to center align a div inside another div?
```css
.container{
	width: 500px;
	height: 500px;
	background-color: red;
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
```
[Live Example](https://learning-zone.github.io/css-interview-questions/center-div.html) 
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Explain the CSS “box model” and the layout components that it consists of. Provide some usage examples.
The CSS box model is a rectangular layout paradigm for HTML elements that consists of the following:

* **Content**: The content of the box, where text and images appear
* **Padding**: A transparent area surrounding the content (i.e., the amount of space between the border and the content)
* **Border**: A border surrounding the padding (if any) and content
* **Margin**: A transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)

    ```css
    /* top   right  bottom left  */
    padding: 25px  50px   75px   100px;
    
    /* same padding on all 4 sides: */
    padding: 25px;
    
    /* top/bottom padding 25px; right/left padding 50px */
    padding: 25px 50px;
    
    /* top padding 25px; right/left padding 50px; bottom padding 75px */
    padding: 25px 50px 75px;
    ```
[Live Example](https://learning-zone.github.io/css-interview-questions/boxmodel-index.html)

#### Q. Explain what elements will match each of the following CSS selectors:
* div, ```p``` Selects all ```<div>``` elements and all <p> elements
* div ```p``` Selects all ```<p>``` elements that are anywhere inside a <div> element
* div > ```p``` Selects all ```<p>``` elements where the immediate parent is a <div> element
* div + ```p``` Selects all ```<p>``` elements that are placed immediately after a <div> element
* div ~ ```p``` Selects all ```<p>``` elements that are anywhere preceded by a <div> element


#### Q. Explain the meaning of each of these CSS units for expressing length:
```cm``` centimeters
```em``` elements (i.e., relative to the font-size of the element; e.g., 2 em means 2 times the current font size)
```in``` inches
```mm``` millimeters
```pc``` picas (1 pc = 12 pt = 1/6th of an inch)
```pt``` points (1 pt = 1/72nd of an inch)
```px``` pixels (1 px = 1/96th of an inch)
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In CSS3, how would you select:
* Every ```<a>``` element whose href attribute value begins with “https”.
    * a[href^="https"]
    
* Every ```<a>``` element whose href attribute value ends with “.pdf”.
    * a[href$=".pdf"]
    
* Every ```<a>``` element whose href attribute value contains the substring “css”.
    * a[href*="css"]


#### Q. What is the purpose of the box-sizing property?
The box-sizing CSS property sets how the total width and height of an element is calculated.

1. **content-box**: the default width and height values apply to the element's content only. The padding and border are added to the outside of the box.
1. **padding-box**: Width and height values apply to the element's content and its padding. The border is added to the outside of the box. Currently, only Firefox supports the padding-box value.
1. **border-box**: Width and height values apply to the content, padding, and border.
1. **inherit**: inherits the box sizing of the parent element.

Example:
```css
box-sizing: content-box;
width: 100%;
border: solid rgb(90,107,204) 10px;
padding: 5px;
```

#### Q. How to create a zebra striped table with CSS?
To create a zebra-striped table, use the nth-child() selector and add a background-color to all even (or odd) table rows:

```css
tr:nth-child(even) {
    background-color: #f2f2f2
}
```

#### Q. What is the difference between RGBa, HEX and HSLa?

* **RGB** (Red/Green/Blue) is a color model.

```css
p {
  color: rgba(37, 84, 127, 1);
}
```
* **HEX (Hexadecimal color values)**

```css
p {
  color: #25547f;
}
```

* **HSLa (Hue Saturation Lightness alpha)**

```css
p {
  color: hsla(209, 55%, 32%, 1);
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is CSS preprocessor?
Pre-processors extend CSS with variables, operators, interpolations, functions, mixins and many more other usable assets. After development, these specific files are compiled into regular CSS that any browser can understand. Pre-processor help writing reusable, easily maintainable and extensible codes in CSS. 

**CSS preprocessors**

  * SASS (SCSS)
  * LESS
  * Stylus
  * PostCSS

**Advantages:**

* CSS is made more maintainable.
* Easy to write nested selectors.
* Variables for consistent theming. Can share theme files across different projects.
* Mixins to generate repeated CSS.
* Splitting your code into multiple files. CSS files can be split up too but doing so will require an HTTP request to download each CSS file.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
**Resetting**: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.

Example
```css
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, 
acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, 
sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, 
footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {  
   margin: 0;  
   padding: 0;  
   border: 0;  
   font-size: 100%;  
   font: inherit;  
   vertical-align: baseline; 
}
```

**Normalizing**: Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies.

Example
```css
/* 
  Correct the font size and margin on `h1` elements within `section`  
  and `article` contexts in Chrome, Firefox, and Safari.
*/
 h1 {  font-size: 2em;  margin: 0.67em 0;}
 ```

#### Q. Describe floats and clear?
**The float Property**  
The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it.

|Sl.No| Properties     | Description  |
|-----|----------------|--------------|
| 01. | float: left    |The element floats to the left of its container|
| 02. | float: right   |The element floats to the right of its container|
| 03. | float: none    |The element does not float (will be displayed just where it occurs in the text).|
| 04. | float: inline-start |The element must float on the start side of its containing block. That is the left side with ltr scripts, and the right side with rtl scripts.|
| 05. | float: inline-end |The element must float on the end side of its containing block. That is the right side with ltr scripts, and the left side with rtl scripts.|

Example
```css
img {
  float: left;
}
```

**The clear Property**  
The clear property specifies what elements can float beside the cleared element and on which side.

|Sl.No| Properties     | Description  |
|-----|----------------|--------------|
| 01. |clear: none     |Allows floating elements on both sides. This is default|
| 02. |clear: left     |No floating elements allowed on the left side|
| 03. |clear: right    |No floating elements allowed on the right side|
| 04. |clear: both     |No floating elements allowed on either the left or the right side|
| 05. |clear: inherit  |The element inherits the clear value of its parent|

Example
```css
div {
  clear: left;
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Explain CSS Block Formatting Context?
Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch)

A BFC is an HTML box that satisfies at least one of the following conditions:

* The value of `float` is not `none`.
* The value of `position` is neither `static` nor `relative`.
* The value of `display` is `table-cell`, `table-caption`, `inline-block`, `flex`, or `inline-flex`.
* The value of `overflow` is not `visible`.

In a BFC, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). Vertical margins between adjacent block-level boxes in a BFC collapse. 

[Live Example](https://learning-zone.github.io/css-interview-questions/block-formatting-context.html)

#### Q. Does ```overflow: hidden``` create a new block formatting context?
* Yes. overflow property deals with the content if content size exceeds the allocated size for the content. You can make extra content visible, hidden, scroll or auto (viewport default behavior).

#### Q. How would you approach fixing browser-specific styling issues?
* After identifying the issue and the offending browser, use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though.
* Use `autoprefixer` to automatically add vendor prefixes to your code.
* Use Reset CSS or Normalize.css.

```css
/*Example: 01*/
.box-shadow {
  background-color: red;
  background-image: url(gradient-slice.png);
  background-image: -webkit-linear-gradient(top right, #A60000, #FFFFFF); /*Chrome and Safari*/
  background-image: -moz-linear-gradient(top right, #A60000, #FFFFFF); 	  /*Firefox*/
  background-image: -ms-linear-gradient(top right, #A60000, #FFFFFF);     /*Internet Explorer*/
  background-image: -o-linear-gradient(top right, #A60000, #FFFFFF);      /*Opera*/
  background-image: linear-gradient(top right, #A60000, #FFFFFF);
}

/*Example: 02*/
.box {
	-moz-border-radius: 15px;    /* Firefox */
	-webkit-border-radius: 15px; /* Safari and Chrome */
	border-radius: 15px; /* Opera 10.5+, future browsers, and now also Internet Explorer 6+ using IE-CSS3 */
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are your favorite image replacement techniques and which do you use when?
* lazy loading.
* progressive image loading placeholders.

#### Q. How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?
* Graceful degradation - The practice of building an application for modern browsers while ensuring it remains functional in older browsers.
* Progressive enhancement - The practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
* Use [caniuse.com](https://caniuse.com/) to check for feature support.
* Autoprefixer for automatic vendor prefix insertion.
* Feature detection using [Modernizr](https://modernizr.com/).
* Use CSS Feature queries [@support](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)


#### Q. What are the different ways to visually hide content (and make it available only for screen readers)?
These techniques are related to accessibility (a11y).

* `visibility: hidden`. However, the element is still in the flow of the page, and still takes up space.
* `width: 0; height: 0`. Make the element not take up any space on the screen at all, resulting in not showing it.
* `position: absolute; left: -99999px`. Position it outside of the screen.
* `text-indent: -9999px`. This only works on text within the `block` elements.
* Metadata. For example by using Schema.org, RDF, and JSON-LD.
* WAI-ARIA. A W3C technical specification that specifies how to increase the accessibility of web pages.

Even if WAI-ARIA is the ideal solution, I would go with the `absolute` positioning approach, as it has the least caveats, works for most elements and it's an easy technique.

#### Q. How could you apply css rules specific to a media?
* ```@media (max-width: 700px){...}``` means you want to apply rules to those media whose max-width is 700 px. this means every smaller device will have this rule.

```@media (max-width: 700px) and (orientation: landscape){...}``` will apply rules for media smaller than 700px and in landscape orientation.


#### Q. What is the use of ```@media only screen```?
* hide style sheets from older user agents.

#### Q. Does the ```screen``` keyword apply to the device's physical screen or the browser's viewport?
* Browser's Viewport

#### Q. Are you familiar with styling SVG?
Yes, there are several ways to color shapes (including specifying attributes on the object) using inline CSS, an embedded CSS section, or an external CSS file. Most SVG you'll find around the web use inline CSS, but there are advantages and disadvantages associated with each type.

Basic coloring can be done by setting two attributes on the node: `fill` and `stroke`. `fill` sets the color inside the object and `stroke` sets the color of the line drawn around the object. You can use the same CSS color naming schemes that you use in HTML, whether that's color names (that is `red`), RGB values (that is `rgb(255,0,0)`), Hex values, RGBA values, etc.

```html
<rect x="10" y="10" width="100" height="100" stroke="blue" 
  fill="purple" fill-opacity="0.5" stroke-opacity="0.8"/>
```
#### Q. Can you give an example of an @media property other than screen?
Yes, there are four types of @media properties (including _screen_):

* `all` - for all media type devices
* `print` - for printers
* `speech` - for screenreaders that "reads" the page out loud
* `screen` - for computer screens, tablets, smart-phones etc.

Here is an example of `print` media type's usage:

```css
@media print {
  body {
    color: black;
  }
}
```

#### Q. How would you implement a web design comp that uses non-standard fonts?
Use `@font-face` and define `font-family` for different `font-weight`s.

#### Q. Explain how a browser determines what elements match a CSS selector?
Browsers match selectors from rightmost (key selector) to left. Browsers filter out elements in the DOM according to the key selector and traverse up its parent elements to determine matches. The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector.

For example with this selector `p span`, browsers firstly find all the `<span>` elements and traverse up its parent all the way up to the root to find the `<p>` element. For a particular `<span>`, as soon as it finds a `<p>`, it knows that the `<span>` matches and can stop its matching.


#### Q. What are the some pseudo classed u have used?
* pseudo class tells you specific state of an element. allow to style element dynamically. The most popular one is ```:hover```. Besides i have used :visited, ```:focus```, ```:nth-child```, ```nth-of-type```, ```:link```, etc.

* pseudo classes is better if you don't want to mess up with javaScript however, pseudo-classes is slow to process and apply rules.

#### Q. How do you optimize css selectors?
* This is very open and depend on what you are trying to achieve. If i order selectors in terms of render speed it would be like id, class, tag, siblings, child, descendant, universal, attribute, pseudo. Speed of ID and class is very close. However your code should be readable, maintainable and DRY along with highly performant.

* The best practices in general are: avoid universal selectors, don't repeat yourself, remove redundant selectors, be as specific as possible, and keep learning.

#### Q. How can you load css resources conditionally?
```@import``` allows you to load/import stylesheet by using a path (uri) representing the location of the file. You can define one or more media by comma separation for which you want to load the stylesheet. If browser dont support the media stylesheet will not be loaded.

#### Q. Describe pseudo-elements and discuss what they are used for.
A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). They can be used for decoration (`:first-line`, `:first-letter`) or adding elements to the markup (combined with `content: ...`) without having to modify the markup (`:before`, `:after`).

* `:first-line` and `:first-letter` can be used to decorate text.
* Used in the `.clearfix` hack as shown above to add a zero-space element with `clear: both`.
* Triangular arrows in tooltips use `:before` and `:after`. Encourages separation of concerns because the triangle is considered part of styling and not really the DOM. It's not really possible to draw a triangle with just CSS styles without using an additional HTML element.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the properties related to box model?
* Technically, height, width, padding and border are part of box model and margin is related to it.
* Everything in a web page is a box where you can control size, position, background, etc. Each box/ content area is optionally surrounded by padding, border and margin. When you set height and width of an element, you set content height and width.

#### Q. What does  ```* { box-sizing: border-box; }``` do? What are its advantages?
* Make every element in the document include the padding and border in the element's inner dimensions; 
making it easier to reason about the layout of elements on the page.
* By default, elements have `box-sizing: content-box` applied, and only the content size is being accounted for.
* `box-sizing: border-box` changes how the `width` and `height` of elements are being calculated, `border` and `padding` are also being included in the calculation.
* The `height` of an element is now calculated by the content's `height` + vertical `padding` + vertical `border` width.
* The `width` of an element is now calculated by the content's `width` + horizontal `padding` + horizontal `border` width.
* Taking into account `padding`s and `border`s as part of our box model resonates better with how designers actually imagine content in grids.

#### Q. List as many values for the display property that you can remember.
* `none`, `block`, `inline`, `inline-block`, `table`, `table-row`, `table-cell`, `list-item`.

#### Q. How is responsive design different from adaptive design? 
Both responsive and adaptive design attempt to optimize the user experience across different devices, adjusting for different viewport sizes, resolutions, usage contexts, control mechanisms, and so on.

Responsive design works on the principle of flexibility - a single fluid website that can look good on any device. Responsive websites use media queries, flexible grids, and responsive images to create a user experience that flexes and changes based on a multitude of factors. Like a single ball growing or shrinking to fit through several different hoops.

Adaptive design is more like the modern definition of progressive enhancement. Instead of one flexible design, adaptive design detects the device and other features and then provides the appropriate feature and layout based on a predefined set of viewport sizes and other characteristics. The site detects the type of device used and delivers the pre-set layout for that device. Instead of a single ball going through several different-sized hoops, you'd have several different balls to use depending on the hoop size.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Have you ever worked with retina graphics? If so, when and what techniques did you use? What kind of techniques do you use to handle images for retina screens?
_Retina_ is just a marketing term to refer to high resolution screens with a pixel ratio bigger than 1. The key thing to know is that using a pixel ratio means these displays are emulating a lower resolution screen in order to show elements with the same size. Nowadays we consider all mobile devices _retina_ defacto displays.

Browsers by default render DOM elements according to the device resolution, except for images.

In order to have crisp, good-looking graphics that make the best of retina displays we need to use high resolution images whenever possible. However using always the highest resolution images will have an impact on performance as more bytes will need to be sent over the wire.

To overcome this problem, we can use responsive images, as specified in HTML5. It requires making available different resolution files of the same image to the browser and let it decide which image is best, using the html attribute `srcset` and optionally `sizes`, for instance:

```html
<div responsive-background-image>  
  <img src="/images/test-1600.jpg"
    sizes="
      (min-width: 768px) 50vw,
      (min-width: 1024px) 66vw,
      100vw"
    srcset="
      /images/test-400.jpg 400w,
      /images/test-800.jpg 800w,
      /images/test-1200.jpg 1200w">
</div>
```

It is important to note that browsers which don't support HTML5's `srcset` (i.e. IE11) will ignore it and use `src` instead. If we really need to support IE11 and we want to provide this feature for performance reasons, we can use a JavaScript polyfill, e.g. Picturefill (link in the references).

For icons, I would also opt to use SVGs and icon fonts where possible, as they render very crisply regardless of resolution.

#### Q. Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?
`translate()` is a value of CSS `transform`. Changing `transform` or `opacity` does not trigger browser reflow or repaint but does trigger compositions; whereas changing the absolute positioning triggers `reflow`. `transform` causes the browser to create a GPU layer for the element but changing absolute positioning properties uses the CPU. Hence `translate()` is more efficient and will result in shorter paint times for smoother animations.

When using `translate()`, the element still occupies its original space (sort of like `position: relative`), unlike in changing the absolute positioning.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. The translate() function can move the position of an element on the z-axis.
* False

#### Q. Tell what each of these tags do, if there are alternatives, which are preferable, why?
```html
<em>
<b>
<abbr>
<nav>
<i>
<j>
<link>
<strong>
<article>
```    

#### Q. What is At-Rule?
* An at-rule is an instruction given in a CSS document using the ```@``` character. An at-rule could have a declaration block or a simple string of text. The example below has two different at-rules:
```css
@import url(secondary.css);

@media print {
  #container {
    width: 500px;
  }
}
```
The at-rule is not just the ```@media``` or ```@import``` part at the beginning; the entire instruction comprises the complete at-rule.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is RuleSet?
* A rule set is a single section of CSS including the selector, the curly braces, and the different lines with properties and values. The code in the example below comprises one rule set:

```css
/*  the rule set starts with the line below */
body {
  font-family: Arial, sans-serif;
  color: #555;
  font-size: 14px;
}
/*  ends with the closing curly brace above */
```

#### Q. Provide CSS so that three lines are displayed red, then green, then blue (2):
```html
<div class="rgb">
    <span>Red</span>
    <span>Green<b>Blue</b></span>
</div>
```

#### Q. Provided following HTML and CSS, what will be displayed (1)?
```css
<div class="red">Hi, I'm Blue</div>

div.red { color: green; }
div { font-weight: bold; }
.red { color: yellow; font-weight: normal; }
```

#### Q. What is Universal Selector?

* The universal selector matches any element within the context in which it’s placed in a selector. 
    In the example below, the ```*``` character is the universal selector:
```css
/*  the asterisk character is the universal selector */
.navigation *ul {
  width: 100px;
  float: left;
}
```

* So, any element that appears as a child descendant of the unordered list element inside an element that has a class of “navigation” will receive the declared styles.

* Universal selectors are generally discouraged for performance reasons.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How can the gap under the image be removed?
* As images being inline elements are treated same as texts, so there is a gap left, which can be   removed by:
```css
img { display: block ; }
```

#### Q. What is graceful degradation?
* In case the component fails, it will continue to work properly in the presence of a graceful degradation.
     The latest browser application is used when a webpage is designed. As it is not available to everyone,
      there is a basic functionality, which enables its use to a wider audience. 
    In case the image is unavailable for viewing, text is shown with the alt tag.


#### Q. What is progressive enhancement?
* It’s an alternative to graceful degradation, which concentrates on the matter of the web. 
    The functionality is same, but it provides an extra edge to users having the latest bandwidth. 
    It has been into prominent use recently with mobile internet connections expanding their base.


#### Q. What is progressive rendering?

* Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.
* It used to be much more prevalent in the days before broadband internet but it is still used in modern development as mobile data connections are becoming increasingly popular (and unreliable)!
* Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.
* It used to be much more prevalent in the days before broadband internet but it is still used in modern development as mobile data connections are becoming increasingly popular (and unreliable)!

* Examples of such techniques:

    * Lazy loading of images - Images on the page are not loaded all at once. JavaScript will be used to load an image when the user scrolls into the part of the page that displays the image.
    * Prioritizing visible content (or above-the-fold rendering) - Include only the minimum CSS/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred scripts or listen for the DOMContentLoaded/load event to load in other resources and content.
    * Async HTML fragments - Flushing parts of the HTML to the browser as the page is constructed on the back end.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>   

#### Q. What is an ```iframe``` and how it works?

* An ```iframe``` is an HTML document which can be embedded inside another HTML page.

* The IFrame HTML element is often used to insert content from another source, such as an advertisement, into a Web page.

```css
<iframe src="https://github.com" height="300px" width="300px"></iframe>
```

#### Q. What is mobile-first? Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?

Making a website responsive means the some elements will respond by adapting its size or other functionality according to the device's screen size, typically the viewport width, through CSS media queries, for example, making the font size smaller on smaller devices.

```css
@media (min-width: 601px) {
  .my-class {
    font-size: 24px;
  }
}
@media (max-width: 600px) {
  .my-class {
    font-size: 12px;
  }
}
```

A mobile-first strategy is also responsive, however it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later. Following the previous example:

```css
.my-class {
  font-size: 12px;
}

@media (min-width: 600px) {
  .my-class {
    font-size: 24px;
  }
}
```

A mobile-first strategy has 2 main advantages:

* It's more performant on mobile devices, since all the rules applied for them don't have to be validated against any media queries.
* It forces to write cleaner code in respect to responsive CSS rules.

[Live Example](https://learning-zone.github.io/css-interview-questions/media-query.html) 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does Accessibility (a11y) mean?
Accessibility (a11y) is a measure of a computer system's accessibility is to all people, including those with disabilities or impairments. It concerns both software and hardware and how they are configured in order to enable a disabled or impaired person to use that computer system successfully.

Accessibility is also known as assistive technology.


#### Q. What is accessibility & ARIA role means in a web application?
Accessibility means letting the user navigate and interact with a website by any means. Let it be a keyboard, a mouse or people with disabilities or impairments.


* ARIA stands for Accessible Rich Internet Application.
* ARIA is a spec from W3C.
* ARIA is created to improve accessibility in web applications.
* ARIA provides a extra information to screen readers via HTML attributes.
* ARIA doesn't affect how an element is rendered in a browser.


#### Q. What is UI/UX?
**UI or User Interface**:  is how a product or website is laid out and how you interact with it: Where the buttons are, how big the fonts are, and how menus are organized are all elements of UI.

**UX or User Experience**: is how you feel about using a product or a website. So, your love for the way the new Apple Watch looks or your excitement that there’s finally a tablet-sized iPhone to watch those Corgi videos you’re obsessed with are reflections of UX.
So the new look of the Facebook news feed involves a change to UI, and the way you navigate that new page is the UX. 

#### Q. What is semantic?
Semantic HTML, or "semantically-correct HTML", is HTML where the tags used to structure content are selected and applied appropriately to the meaning of the content.

For example, <b></b> (for bold), and <i></i> (for italic) should never be used, because they’re to do with formatting, not with the meaning or structure of the content. Instead, use the replacements <strong></strong> and <em></em> (meaning emphasis), which by default will turn text bold and italic (but don’t have to do so in all browsers), while adding meaning to the structure of the content

#### Q. Why you would like to use semantic tag. Why Semantic HTML is Important?
* Search Engine Optimization, accessibility, repurposing, light code. 

* Many visually impaired person rely on browser speech and semantic tag helps to interpret page content clearly.

* Search engine needs to understand page content to rank and semantic tag helps.

* semantic code aids accessibility. Specially, many people whose eyes are not good rely on speech browsers to read pages to them. These programs cannot interpret pages very well unless they are clearly explained.

* Help Search engines to better understand pages. Search engine need to understand what your content is about when rank you properly on search engines. Semantic code tends to improve your placement on search engines, as it is easier for the "search engine spiders" to understand.

* It’s easier to read and edit, which saves time and money during maintenance.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of listed CSS properties are inherited?
* position
* font-size
* color
* background-color


#### Q. Which property is used to change the face of a font?
* The font-family property is used to change the face of a font.


#### Q. Which property is used to make a font italic or oblique?
* The font-style property is used to make a font italic or oblique.


#### Q. Which property is used to create a small-caps effect?
* The font-variant property is used to create a small-caps effect.


#### Q. Which property is used to increase or decrease how bold or light a font appears?
* The font-weight property is used to increase or decrease how bold or light a font appears.


#### Q. Which property is used to add or subtract space between the letters that make up a word?
* The letter-spacing property is used to add or subtract space between the letters that make up a word.


#### Q. Which property is used to add or subtract space between the words of a sentence?
* The word-spacing property is used to add or subtract space between the words of a sentence.


#### Q. Which property is used to indent the text of a paragraph?
* The text-indent property is used to indent the text of a paragraph.


#### Q. Which property is used to align the text of a document?
* The text-align property is used to align the text of a document.

* ```text-align: center``` will do the horizontal alignment but vertical-align: middle will not work here. there are couple of different ways to solve this problem and one of them are positioning. You make the parent as relative position and child as absolute positioning. And then define all position parameter as sero and width 50% and height 30% (sounds messy look at the example and read ref) 
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which property is used to underline, overline, and strikethrough text?
* The text-decoration property is used to underline, overline, and strikethrough text.


#### Q. Which property is used to capitalize text or convert text to uppercase or lowercase letters?
* The text-transform property is used to capitalize text or convert text to uppercase or lowercase letters.


#### Q. Which property allows you to control the shape or appearance of the marker of a list?
* The list-style-type allows you to control the shape or appearance of the marker.


#### Q. How do I restore the default value of a property?
* Initially CSS didn't provide a "default" keyword and the only way to restore the default value of a property is to explicitly re-declare that property
    This has changed with CSS 2; the keyword 'initial' is now a valid value for a CSS property. 
    It resets it to its default value, which is defined in the CSS specification of the given property.


#### Q. How do I assign multiple classes to an element?
* HTML elements can be assigned multiple classes by listing the classes in the class attribute, with a blank space to separate them.
```html
<style type="text/css">
.news { background: black; color: white; }
.today { font-weight: bold; }
</style>

<div class="news today">
... content of today's news ...
</div>
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is specificity? How to calculate specificity?
A process of determining which css rule will be applied to an element. it actually determines which rules will take precedence. Inline style usually wins then ID then class value (or pseudo-class or attribute selector), universal selector (*) has no specificity. ID selectors have a higher specificity than attribute selectors.

```css
/*wins*/
a#a-02 { background-image : url(n.gif); }
a[id="a-02"] { background-image : url(n.png); }
```

Contextual selectors are more specific than a single element selector.
The embedded style sheet is closer to the element to be styled.
The last rule defined overrides any previous, conflicting rules.

```css
p { color: red; background: yellow }
p { color: green } // wins
```

A class selector beats any number of element selectors.

```css
.introduction {} //wins
html body div div h2 p {}
```
The universal selector has a specificity of 0, 0, 0, 0.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What do you know about transition?
**transition** allows to add an effect while changing from one style to another. You can set the which property you want to transition, duration, how you want to transit (linear, ease, ease-in, ease-out, cubic-bezier) and delay when transition will start. you can transition more than one property by comma separation

#### Q. What are the different css filter you can use?
css filter allows to render DOM element, image, or video. We can choose from: grayscale, blur, opacity, brightness, contrast.

#### Q. Enlist the various fonts properties?
* font-style
* font-variant
* font-weight
* font-size/line-height
* font-family
* caption
* icon

#### Q. Describe Floats and Flexbox and how each works. Why Flexbox is a better solution for web layouts?
* ```Floats``` specifies that an element should be taken from the normal flow and placed along the left or right side of its container, 
    where text and inline elements will wrap around it.
* ```Flexbox``` consists of flex containers and flex items. Flex containers wrap a set of flex items and define how they are laid out. 
Flex items has properites that define how they interact with sibling flex elements and can also be flex containers themselves.

#### Q. What is the difference between ```em``` and ```rem``` units?
Both em and rem units are based on the font-size CSS property. The only difference is where they inherit their values from.
* ```em``` units inherit their value from the font-size of the parent element
* ```rem``` units inherit their value from the font-size of the root element (html)

In most browsers, the font-size of the root element is set to 16px by default.

#### Q. What is the difference between ```span``` and ```div```?
```div``` is a block element and ```span``` is inline element.

It is illegal to put block element inside inline element. div can have a p tag and a p tag can have a span. However, span can't have a div or p tag inside.

#### Q. What does !important mean in CSS?
* It overrides the cascade and gives the style rule the highest precedence.

#### Q. What are optional closing tag? and why would u use it?
```p, li, td, tr, th, html, body```, etc. you don't have to provide end tag. Whenever browser hits a new tag it automatically ends the previous tag. However, you have to be careful to escape it.

#### Q. What is a self closing tag?
In HTML5 it is not strictly necessary to close certain HTML tags. The tags that aren’t required to have specific closing tags are called “self closing” tags.

An example of a self closing tag is something like a line break (```<br />```) or the meta tag (```<meta>```). This means that the following are both acceptable:

```html
<meta charset="UTF-8">
...
<meta charset="UTF-8" />
```

#### Q. How can u highlight text in html?
use mark element.

```html
<p>Some part of this paragraph is <mark>highlighted</mark> by using mark element.</p>
```

#### Q. Does the following trigger http request at the time of page load?
```html
<img src="mypic.jpg" style="visibility: hidden" alt="My photo">

<div style="display: none;">
    <img src="mypic.jpg" alt="My photo">
</div>
```
* Yes
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Does style2.css have to be downloaded and parsed before Paragraph 1 is rendered on the page?
```html
<head>
    <link href="style1.css" rel="stylesheet">
</head>
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <link href="style2.css" rel="stylesheet">
</body>
```
* Yes

#### Q. Does style1.css have to be downloaded and parsed before style2.css can be fetched?
```html
<head>
    <link href="style1.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
</head>
```
* No

#### Q. Is it possible to apply css rule to a part of html document?
yes. by using "scopped" in the style tag.

#### Q. What are some rules for writing efficient CSS?      
Firstly, understand that browsers match selectors from rightmost (key selector) to left. Browsers filter out elements in the DOM according to the key selector and traverse up its parent elements to determine matches. The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector. Hence avoid key selectors that are tag and universal selectors. They match a large number of elements and browsers will have to do more work in determining if the parents do match.

[BEM (Block Element Modifier)](https://bem.info/) methodology recommends that everything has a single class, and, where you need hierarchy, that gets baked into the name of the class as well, this naturally makes the selector efficient and easy to override.

Be aware of which CSS properties trigger reflow, repaint, and compositing. Avoid writing styles that change the layout (trigger reflow) where possible.

#### Q. What are the CSS positioning?

|Keyword    | Value                 |Description                                                                           |
|:----------|:----------------------|:-------------------------------------------------------------------------------------|
|position 	|static 				|The default mode, block element is positioned in the flow. Top, left etc. are ignored.|
|position 	|relative 				|The block element is positioned relative to its position in the flow.                 |
|position 	|absolute 				|Block element is positioned relative to its container.                                |
|position 	|fixed 					|Block element is positioned relative to the window and won’t scroll.                  |
|top 		|Number [px, cm, in…] 	|Positions the block down from the reference point at the specified distance.          |
|bottom 	|Number [px, cm, in…] 	|Positions the block up from the reference point at the specified distance.            |
|left 		|Number [px, cm, in…] 	|Positions the block right from the reference point at the specified distance.         |
|right 		|Number [px, cm, in…] 	|Positions the block left from the reference point at the specified distance.          |

#### Q. What is the difference between padding and margin?
**Margin** is applied to the outside of you element hence effecting how far your element is away from other elements.  
**Padding** is applied to the inside of your element hence effecting how far your element's content is away from the border.

Also, using margin will not affect your element's dimensions whereas padding will make your elements dimensions (set height + padding) so for example if you have a 100x100px div with a 5 px padding, your div will actually be 105x105px

![alt text](https://github.com/learning-zone/css-interview-questions/blob/master/assets/box-model.gif "Box Model")

*Note:* **Top/Bottom margins are collapsible:** if you have a 20px margin at the bottom of an element and a 30px margin at the top of the next element, the margin between the two elements will be 30px rather than 50px. This does not apply to left/right margin or padding.
#### Q. Explain new features in CSS3?
**1. CSS3 Selectors**
 * Matches any element E whose attribute attr starts with the value val. In other words, the val matches the beginning of the attribute value.
```css
E[attr^=val]
/* Example */
a[href^='http://sales.']{color: teal;}
```
 * Matches any element E whose attribute attr ends in val. In other words, the val matches the end of the attribute value.
```css
E[attr$=val]
/* Example */
a[href$='.jsp']{color: purple;}
```
 * Matches any element E whose attribute attr matches val anywhere within the attribute. It is similar to E[attr~=val], except the val can be part of a word.
```css
E[attr*=val]  
/* Example */
img[src*='artwork']{
        border-color: #C3B087 #FFF #FFF #C3B087;
}
```
**2. Pseudo-classes**  
CSS2 supports user interaction pseudo-classes, namely `:link`, `:visited`, `:hover`, `:active`, and `:focus`.  
A few more pseudo-class selectors were added in CSS3. One is the `:root` selector, which allows designers to point to the root element of a document.
```css
:root{overflow:auto;}
```
As a complement to the `:first-child` selector, the `:last-child` was added. With it one can select the last element named of a parent element.
```css
div.article > p:last-child{font-style: italic;}
```
A new user interaction pseudo-class selector was added, the `:target` selector.
```html
span.notice:target{font-size: 2em; font-style: bold;}
<a href='#section2'>Section 2</a>
<p id='section2'>...</p>
```
The negation pseudo-class selector, `:not` can be coupled with almost any other selector that has been implemented.
```css
img:not([border]){border: 1;}
```
**3. CSS3 Colors**  
The color keyword list has been extended in the CSS3 color module to include 147 additional keyword colors (that are generally well supported), CSS3 also provides us with a number of other options: **HSL**, **HSLA**, **RGBA** and **Opacity**.
```css
div.halfopaque {
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
  color: #000000;
}
div.halfalpha {
  background-color: rgba(0, 0, 0, 0.5);
  color: #000000;
}
``` 
**4. Rounded Corners: border-radius**
```css
border-radius: 25px;
```
**5 Drop Shadows**
```css
box-shadow: 2px 5px 0 0 rgba(72,72,72,1);
```
**6. Text Shadow**  
```css
text-shadow: topOffset leftOffset blurRadius color;
```
**7. Linear Gradients**
```css
Syntax: background: linear-gradient(direction, color-stop1, color-stop2, ...);
/* Example */   
#grad {
  background: linear-gradient(to right, red , yellow);
}
```
**8. Radial Gradients**    
```css
Syntax : background: radial-gradient(shape size at position, start-color, ..., last-color);
/* Example */      
#grad {
  background: radial-gradient(red, yellow, green);
}//Default       
#grad {
  background: radial-gradient(circle, red, yellow, green);
}//Circle
```
**9. Multiple Background Images**   
In CSS3, there’s no need to include an element for every background image; it provides us with the ability to add more than one background image to any element, even to pseudo-elements.
```css
background-image:
url(firstImage.jpg),
url(secondImage.gif),
url(thirdImage.png);
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are gradients in CSS?
CSS gradients are represented by the `<gradient>` data type, a special type of `<image>` made of a progressive transition between two or more colors. There are three types of gradients: 
* linear (created with the `linear-gradient()` function), 
* radial (created with `radial-gradient()`), and 
* conic (created with the `conic-gradient()` function).  

We can also create repeating gradients with the `repeating-linear-gradient()`, `repeating-radial-gradient()`, and `repeating-conic-gradient()` functions.
```css
/* Example - 01: A basic linear gradient */
.simple-linear {
  background: linear-gradient(blue, pink);
}

/* Example - 02: Changing the direction */
.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}

/* Example - 03: Diagonal gradients */
.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}

/* Example - 04: Using angles */
.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}

/* Example - 05: Creating hard lines */
.striped { 
   background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%); 
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is CSS opacity?
The `opacity` CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
```css
div { background-color: yellow; }
.light {
  opacity: 0.2; /* Barely see the text over the background */
}
.medium {
  opacity: 0.5; /* See the text more clearly over the background */
}
.heavy {
  opacity: 0.9; /* See the text very clearly over the background */
}
```
```html
<div class="light">You can barely see this.</div>
<div class="medium">This is easier to see.</div>
<div class="heavy">This is very easy to see.</div>
```
#### Q. What is contextual selector?
Contextual selector addresses specific occurrence of an element. It is a string of individual selectors separated by white space (search pattern), where only the last element in the pattern is addressed providing it matches the specified contex.

It also check the context of the class in the html tree, assigning the style to the element through a specific route, taking into account the order of depth in the tree.

Example
```css
table p { property: value; } 
```

#### Q. How is the concept of inheritance applied in CSS?
Inheritance is a concept in which the child class will inherit the properties of its parent class. It is used in CSS to define the hierarchy from the top level to the bottom level. Inherited properties can be overridden by the children class if the child uses the same name.

Example
```css
span {
  color: blue;
  border: 1px solid black;
}
.extra span {
  color: inherit;
}
```

#### Q. How do you handle browser differences in your user base?
The `@supports` query in CSS can be very useful to scan if the user’s current browser has a certain feature. The `@supports` CSS at-rule lets you specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query. The rule may be placed at the top level of your code or nested inside any other conditional group at-rule.
```css
@supports (display: grid) {
  div {
    display: grid;
  }
}

@supports not (display: grid) {
  div {
    float: right;
  }
}
```

#### Q. What is Cascade?
Cascade is a method of defining the weight (importance) of individual styling rules thus allowing conflicting rules to be sorted out should such rules apply to the same selector.
```css
P {color: white ! important} /* increased weight */
P (color: black} /* normal weight */
```

#### Q. How Do I Have A Fixed (non-scrolling) Background Image?
In CSS, we can use the background-attachment property. The background attachment can be included in the shorthand background property, as in this example:
```css
body {
  background: white url(example.gif) fixed ;
  color: black ;
}
```

#### Q. Describe the following common CSS units of length: cm, em, in, mm, pc, pt, and px.
There are many ways to express units of length within CSS, but these are just some of the more common ones.
* **cm**: centimeters
* **em**: a relative unit of measurement based on the size of a font
* **in**: inches
* **mm**: millimeters
* **pc**: pica, a unit of length equivalent to 12 points, or 1/6 of an inch
* **pt**: 1/72 of an inch
* **px**: a device-specific relative measurement equivalent to a certain number of pixels on a display

#### Q. What are CSS vendor prefixes?
Vendor prefixes are extensions to CSS standards that can be added to these features to prevent incompatibilities from arising when the standard is extended. CSS vendor prefixes for some common platforms are listed below.

* **-webkit-**: Android, Chrome, iOS, and Safari
* **-moz-**: Mozilla Firefox
* **-ms-**: Internet Explorer
* **-o-**: Opera

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
