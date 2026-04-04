# Introduction
A  mix of things I copy + pasted and wrote down from freeCodeCamp 
to use as reference in the future.

# HTML

## Accessibility

### ARIAs
ARIA stands for Accessible Rich Internet Applications. You can use ARIAs 
to give semantic meaning to div tags, i.e. scrollbar, searchbox etc.

Six main categories of ARIAs
1. Document structure roles
2. Widget roles
3. Landmark roles
4. Live region roles
5. Window roles
6. And Abstract roles

* `aria-hidden`: Used to hide elements from accessibility trees for tools like screen readers.
* The `accesskey` attribute in a button element, can assign a key to activate a button. 


# Computers
## File Organisation

Example folder structure for a HTML and CSS project.
```
.
├── /assets
│   ├── /images
│   │   ├── logo.png
│   │   ├── banner.jpg
│   │   └── icons.svg
│   ├── /fonts
│   │   ├── custom-font.woff
│   │   └── custom-font.woff2
├── /css
│   ├── main.css
│   ├── about.css
│   └── contact.css
├── index.html
├── about.html
├── contact.html
└── README.md
```

# CSS

## Basics
A CSS rule is made of a **selector** and a **declaration** block.

```css
selector {
  property: value;
}
```
Selector: Specify which HTML element you are styling

Declaration Block: The block within the curly braces.

Property: CSS identify that specidies which feature is being styled. (i.e. background-color)

Example:

```
p {
  color: blue;
}
```

=> All text within paragraph tags become blue.

Appling styles to multiple selectors: Create a selector list, with each selector separated by a comma. 

`id` selectors start with a hash `#` symbol, class selectors start with a dot `.`. (see example below)

Example:
```
#title,
.subheading {
  color: navy;
}
```

**Meta Viewport**
A special HTML meta element that instructs a browser on how to control the page's dimensions on different devices.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

width=device-width: Set the width of the page to your device's width

initial-scale=1.0: Set the initial zoom level to 100% once loaded. 

If the auto scaling is not set then the mobile device will load the desktop verison. 

**Types of CSS**
* Inline
Written directly within the HTML.

Example
```html
<p style="color: green;">This is an inline-styled paragraph.</p>
```
Useful quick one offs.

* Internal
Written inside html, at the top of the HTML page, contained within the HTML. Inside the `<style>` tag, inside the `head` section of a page.

Example

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

Good for styling an individual page, and is not repeated in other pages. 

* External
Written in a `.css` file and imported to the HTML; good for reusability.

```css
# styles.css
p {
  color: red;
}
```

```html
# HTML file
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```
Inside `link` there's

- `rel`: Specify relationship between current doc and linked resource
- `href`: Link to the resource (i.e. stylesheet location)

External CSS should be go-to; Seperation of concerns and reusability.

**width/height**

You can define width and height with the following units
- `px`
- `%`
- `vw` 
- `vh`

vw, wh -> viewport units

Width and height's default is set to auto.; i.e. For a div element, `wdith: auto` makes the element expand to fit the full width/height of its parent container.

You can add min-height and min-width to add more constraints; For instance, if you want the box to be at least some size, but you allow it to get bigger.

Example
```html
<head>
  <style>
    .box {
      width: 50px;
      min-width: 100px;
      height: 50px;
      min-height: 100px;
      background-color: lightcoral;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
```

Remember, that your style is in your `head` tag and then you actually have to create the element in the body to see the effects of your style. 

You also have `max-height` and `max-width`, which does the converse - overrides the element's size if the limit is reached. Max acts a a cap, Min acts as a booster.

**CSS Combinators**
Allows for precise styling by helping to select elements based on relationship to other elements.

- Descendant Combinator (` `)
To target an element that is nested in another element.

i.e. If we want to make the image border red, but the `img` tag is inside figure, we do

```css
# styles.css
figure img {
  border: 4px solid red;
}
```

The syntax is to put a space between the parent and child selectors.

- Child Combintor (`>`)
Select elements that are a direct child of the specified parent element

i.e. 
```css
.container > p {
  color: blue;
}
```

^means that you only want to turn the text of the `p` tag within the `container` class blue. If the container contains more stuff, no styles are applied there.

- Next-sibiling Combinator (+)
Selects an element that immediately follows a specified sibling element.

```css
img + figcaption {
  border: 4px solid black;
}
```
^ Changes the `figcaption` border black; img is like the pointer. Compared to parent-child relationship, you are specifying elements laterally. 

- Subsequent-sibling Combinator (`~`)

```css
h2 ~ p {
  color: green;
}
```
Selects all siblings of a specified element that come after it. In the example above, all the `p` text nested inside your `h2` tag turn green.


**Inline vs Block-Level Elements**
* Block Level
   * Always start on a new line, and push other content to the next line => creating a block. Takes up the full width available to them by default. So if they're in a container like a `<body>` then it will take the width of the `<body>`.
   * Have the CSS property `display: block;` applied by default. 
   * Examples: `div`, `p`, `ol` etc.
* Inline Elements
  * Take up as much width as they need, do not start on a new line; Inline elements flow within content
  * Have the CSS property `display: inline;` 
  * Examples: `span`, `anchor`, `img`

* Inline-Block
  * Hybrid of inline and block behaviours. 
  * Does not start on a new line; But you can adjust the width and height of an inline-block. Pure inline blocks cannot have their size controlled.
  * Have the CSS property `display: inline-block`
  * Example
  ```html
  <link href="styles.css" rel="stylesheet">

  <div class="container">
    <span class="inline-block-element element1">Inline-Block</span>
    <span class="inline-block-element element2">Inline-Block</span>
  </div>
  ```

**Margins and Padding**
* Margin
  * `margin-top`
  * `margin-right`
  * `margin-bottom`
  * `margin-left`
  * `margin` <- apply value to all four sides of the target element
  * Example:
  ```css
  p {
      margin: 10px;
    }
  ```  
  * If two values are provided like 10px 20px, 10px: `top` and 20px:`bottom`, second value is apply left and right. 
  * If three values are provided: 10px 20px 30px, then 10px: `top`, 20px: `left` and `right` and 30px: `bottom`
  * Four values 10px 20px 30px 40px then 10px:`top`, 20px: `right`, 30px: `bottom`, 40px: `left` (clockwise assignment)

An aside: `<span>` is inline, `<p>` is block-level.

* Padding
  * Used to add space <em>inside</em> the element, between the content and its border.
  * `padding-top`
  * `padding-right`
  * `padding-bottom`
  * `padding-left`
  * Example
    ```css
    p {
      padding-top: 10px;
      padding-right: 20px;
      padding-bottom: 30px;
      padding-left: 40px;
      border: 2px solid black;
    }
    ```
  * Follows the same shorthand rules as margin.


**CSS Specificity**

Determins which styles are applied, even when multiple rules could apply. A similar concept would be scope in Python.

Highest specificity (higher priority): `style` attribute

`style` > ID selectors > class/attribute/pseudo-classes > type selectors > universal selector

Class selectors: `.container`
Attribute selectors: `[type="text"]`
Pseudo-classes: `:hover`
Types: `div`, `h1`
Universal: `*`

When two rules share equal specificity, the one that appears later in the document wins. i.e. If the external stylesheet is linked after an internal `<style>` then the external stylesheet takes precedence.

You can use the universal seelctor `*` to remove any default/built in styles.

Nuclear option: `!important` next to the value in the CSS file; Overrides any other declaration.

Usage example:
```html
<link rel="stylesheet" href="styles.css">

<p class="para" style="background-color: lightblue; color: black;">
  This is a paragraph.
</p>
```

```css
.para {
  background-color: black !important;
  color: white !important;
}
```


**Inheritance**
Example - if you have a `div` style with text set to blue, then the `p` child element will also be blue. But not all properties are inherited by default. 

Inherited properities include `color`, `font-family`, `line-height`.

Uninherited properties include `margin`, `padding`, `border`, `background`; Unless explicity stated, i.e. using the `inherit` keyword.

Example: Inheritting the padding style of the parent element
```html
<div style="padding: 20px;">
  This is the parent element with padding.
  <p style="padding: inherit;">This is the child element inheriting the padding.</p>
</div>
```
You can use `line-height` to adjust the spacing between lines of a single list item; without affecting the spacing <em>between</em> list items.

To control spacing between list items, you would use `margin` or `padding` instead applied to the class/element selectors instead.

**list-style properties**
* `list-style-type`
  Adjust the type of bullet point or number style.
  i.e. change to bullets to squares or change numbers to roman numerals
* `list-style-position`
  Controls position of bullet or number in relation to the list item's content
  * `inside`: Bullet or number appears inside content
  * `outside`: Bullet or number appears outside content
  * Can be used to align content for multiple bullet points
* `list-style-image`
  * Allows you to use an image as the bullet point for your list item.
* `list-style`
  * Combine all three into 1 shorthand. 
  * Example
  ```html
  <ul style="list-style: square inside url('https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg');">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

**Link States**
- `link`
- `visited`
- `hover`
- `focus` (adds a border when you click and hold or when your keyboard focuses on it, like when you press tab)
- `active`

You can style link states using `pseudo-classes` in CSS. 

`pseudo-class` syntax
```css
A:B {
  property: value;
}
```

A: Selector
B: Pseudo-class

Instantiated example
```css
/* Visited link */
a:visited {
  color: green;
}
```

No text declarations for `<a>` tag:
```css
a {
    text-decoration: none;
}
```

**Background Images**

Properties

* `background-size`
* `background-repeat`
* `background-position`
* `background-attachment`

`background-image` example:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
  }
</style>
```

`contain` will scale the image as large as possible without cropping or stretching.;
See documentation for other values of each property (key).
```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    min-height: 100px;
  }
</style>
```

Accessibility concerns for background:

- Sufficient contrast ratio of 4.5:1 for normal text and 3:1 for large text.

**Design**

Def Layout

How visual elements are arranged on a screen/page.

Def Alignment

How elements are placed in relation to one another.

Def Composition

Arranging elements to create a harmonious design.

Def Balance

How visual weight is distributed within a composition. i.e. You can 
create an balance through symmetrical or asymmetrical arrangements.
A balanced design feels harmonious.

Def Hierarchy

Order of importance in a design. You can implement visual hierarchy with
size, color, contrast, alignment, white space, and even typography.

**User Research**

Net Promoter Score - Measures how likely your users are to recommend
your product to a friend.

Breadcrumbs - If you have a complex site, then you can have a a nav bar or footer to show the user where they are.

Cards - Populat in e-commerce, social media and news sites; Good for displaying information in a structured way. Each card should have a minimal design, not too cluttered.

Progress indicators - Let users know how far they are into the process, and what's left t odo; i.e. In your grad apps, there's a nav bar with the steps. It gets filled with color when you're done and greyed out if not.

CTA - A Call-to-Action: Usually a button that's highlighted (high contrast) for the user to proceed with the next step, i.e. "Proceed to Checkout" if it's a e-commerce site.

Progressive Disclosure - Allow users to select what they want to see, usually information that is most relevant for them at that moment. An example would be like a "more details" button. It is desirable to provide a single, clear access point to additional informtiaon, so don't have too many "More Details" buttons.

Design Briefs - A document that outlines the objectives, goals and requirements of a project. 