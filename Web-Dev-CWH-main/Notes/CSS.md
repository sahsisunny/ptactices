# CSS Notes

#### What is CSS?
- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files
- CSS is a language for describing the presentation of Web pages, including colors, layout, and fonts 
- CSS is independent of HTML and can be used with any XML-based markup language
- CSS is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents
- CSS is a rule-based language — you define rules specifying groups of styles that should be applied to particular elements or groups of elements on your web pages
- it was created and maintained by the World Wide Web Consortium (W3C).
- it has three versions: CSS1, CSS2.1, and CSS3. CSS3 is the latest version, but browser support is still limited.

#### Advantages of CSS
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files
- Separation of HTML and CSS makes it easy to maintain sites, share style sheets across pages, and tailor pages to different environments
- CSS is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents
- CSS is a rule-based language — you define rules specifying groups of styles that should be applied to particular elements or groups of elements on your web pages

#### CSS Syntax
 - the css code comprises of a selector and a style/property declaration block

 - **selector** - it determines which HTML element the style will be applied to. It can be an element, class, id or any other selector.

 - **style/property declaration block** - it contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. it is enclosed in curly braces. within the block a pair of declaration for property and value is coded as follows:
 ```css
  selector {
      property: value;
  }
  ```
  - there can be more then one such pair. the property value pair is separated by a semicolon. each property value must be terminated one semicolon. 

# CSS Implementations
- Inline CSS
- Internal CSS
- External CSS

#### Inline CSS
- Inline CSS is used to apply CSS to a single HTML element. The syntax is as follows:
```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
</body>
</html>
```
- Here, style is the attribute and color:blue; and color:red; are the values of the attribute.
#### Internal CSS
- Internal CSS is used to apply CSS to a single HTML file. The syntax is as follows:
```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
h1 { color : blue ;}
p { color : red ;}
</style>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```
- Here, h1 and p are the selectors.
#### External CSS
- External CSS is used to apply CSS to multiple HTML files. The syntax is as follows:
```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```
- Here, style.css is the CSS file.
- The syntax of style.css is as follows:
```css
h1 { color : blue ;}
p { color : red ;}
```
- Here, h1 and p are the selectors.

# CSS Selectors

##### There are many types of CSS selectors. Some of them are as follows:
- Universal selector
- Type selector
- Class selector
- ID selector
- Attribute selector
- Pseudo-class selector
- Pseudo-element selector
- Descendant selector
- Child selector
- Adjacent sibling selector
- General sibling selector
##### Universal selector
- The universal selector selects all the HTML elements. The syntax is as follows:
```css
* { property : value ;}
```
- Here, property is the property. The value of the property is value.
##### Type selector
- The type selector selects all the HTML elements of a specific type. The syntax is as follows:
```css
selector { property : value ;}
```
- Here, selector is the selector and property is the property. The value of the property is value.
##### Class selector
- The class selector selects all the HTML elements with a specific class. The syntax is as follows:
```css
.selector { property : value ;}
```
- Here, .selector is the selector and property is the property. The value of the property is value.
##### ID selector
- The ID selector selects all the HTML elements with a specific ID. The syntax is as follows:
```css
#selector { property : value ;}
```
- Here, #selector is the selector and property is the property. The value of the property is value.
##### Attribute selector
- The attribute selector selects all the HTML elements with a specific attribute. The syntax is as follows:
```css
[attribute] { property : value ;}
```
- Here, [attribute] is the selector and property is the property. The value of the property is value.
##### Pseudo-class selector
- The pseudo-class selector selects all the HTML elements with a specific pseudo-class. The syntax is as follows:
```css
selector:pseudo-class { property : value ;}
```
- Here, selector is the selector and pseudo-class is the pseudo-class. The value of the property is value.
##### Pseudo-element selector
- The pseudo-element selector selects all the HTML elements with a specific pseudo-element. The syntax is as follows:
```css
selector::pseudo-element { property : value ;}
```
- Here, selector is the selector and pseudo-element is the pseudo-element. The value of the property is value.
##### Descendant selector
- The descendant selector selects all the HTML elements that are descendants of a specific element. The syntax is as follows:
```css
ancestor descendant { property : value ;}
```
- Here, ancestor is the ancestor and descendant is the descendant. The value of the property is value.
##### Child selector
- The child selector selects all the HTML elements that are children of a specific element. The syntax is as follows:
```css
parent > child { property : value ;}
```
- Here, parent is the parent and child is the child. The value of the property is value.
##### Adjacent sibling selector
- The adjacent sibling selector selects all the HTML elements that are adjacent siblings of a specific element. The syntax is as follows:
```css
selector1 + selector2 { property : value ;}
```
- Here, selector1 is the first selector and selector2 is the second selector. The value of the property is value.
##### General sibling selector
- The general sibling selector selects all the HTML elements that are general siblings of a specific element. The syntax is as follows:
```css
selector1 ~ selector2 { property : value ;}
```
- Here, selector1 is the first selector and selector2 is the second selector. The value of the property is value.


# CSS Fonts

1. **font-family** - Specifies the font family for text
2. **font-size** - Specifies the font size of text
3. **font-style** - Specifies the font style for text
4. **font-variant** - Specifies whether or not a text should be displayed in a small-caps font
5. **font-weight** - Specifies the weight of a font
6. **font** - A shorthand property for the font-size, font-style, and font-weight properties

#### Font-family
- The font-family property specifies the font family for text. The syntax is as follows:
```css
p { font-family : value ;}
```
- Here, p is the selector and value is the font family.
- The font-family property can have multiple values. The browser will display the text in the first font that is installed on the computer. If the first font is not installed, the browser will display the text in the next font. The syntax is as follows:
```css
p { font-family : value1 , value2 , value3 ;}
```

#### Font families values
- Serif
- Sans-serif
- Monospace
- Cursive
- Fantasy


#### Font-size
- The font-size property specifies the font size of text. The syntax is as follows:
```css
p { font-size : value ;}
```
- The font-size property can have multiple values. The browser will display the text in the first font size that is installed on the computer. If the first font size is not installed, the browser will display the text in the next font size. The syntax is as follows:
```css
p { font-size : 100% , 1.5em , 10vw ;}
```
#### Font Size values
- px - Specifies the font size in pixels
- % - Specifies the font size in percentage of the parent element
- em - Specifies the font size in ems
- rem - Specifies the font size in root ems
- vw - Specifies the font size in viewport width
- vh - Specifies the font size in viewport height
- vmin - Specifies the font size in viewport minimum
- vmax - Specifies the font size in viewport maximum


#### font-style
- The font-style property specifies the font style for text. The syntax is as follows:
```css
p { font-style : value ;}
```
- Here, p is the selector and value is the font style.
- The font-style property can have multiple values. The browser will display the text in the first font style that is installed on the computer. If the first font style is not installed, the browser will display the text in the next font style. The syntax is as follows:
```css
p { font-style : normal , bold , italic, oblique ;}
```
#### Font style values
- normal - Specifies normal text
- italic - Specifies italic text
- oblique - Specifies oblique text


#### font-variant
- The font-variant property specifies whether or not a text should be displayed in a small-caps font. The syntax is as follows:
```css
p { font-variant : value ;}
```
- Here, p is the selector and value is the font variant.
- The font-variant property can have multiple values. The browser will display the text in the first font variant that is installed on the computer. If the first font variant is not installed, the browser will display the text in the next font variant. The syntax is as follows:
```css
p { font-variant : normal, small-caps, initial, inherit ;}
```
- Here, p is the selector and value1 , value2 , and value3 are the font variants.

#### Font variant values
- normal - Specifies normal text
- small-caps - Specifies small-caps text
- inherit - Specifies that the property should be inherited from the parent element


#### font-weight
- The font-weight property specifies the weight of a font. The syntax is as follows:
```css
p { font-weight : value ;}
```
- Here, p is the selector and value is the font weight.
- The font-weight property can have multiple values. The browser will display the text in the first font weight that is installed on the computer. If the first font weight is not installed, the browser will display the text in the next font weight. The syntax is as follows:
```css
p { font-weight : value1 , value2 , value3 ;}
```
- Here, p is the selector and value1 , value2 , and value3 are the font weights.

#### Font weight values
- normal - Specifies normal text
- bold - Specifies bold text
- bolder - Specifies bolder text
- lighter - Specifies lighter text
- 100 - Specifies 100 text


# Colors in CSS

1. **RGB values** - Values for red, green, and blue are expressed as numbers between 0 and 255.
2. **Hex codes** - Hex values represent values for red, green, and blue in hexadecimal code.
3. **Color names** - Colors are represented by predefined names. However, they are very limited in number.

#### RGB values
- RGB values are an additive color model, which means that they mix light of different wavelengths to create a specific color. The syntax is as follows:
```css
p { color : rgb ( red , green , blue );}
p { color : rgb(124, 58, 127);}
```
- Here, p is the selector, red is the amount of red, green is the amount of green, and blue is the amount of blue.


#### Hex codes
- Hex values represent values for red, green, and blue in hexadecimal code. The syntax is as follows:
```css
p { color : # hex ;}
p { color : #ff0047 ;}
```
- Here, p is the selector and hex is the hexadecimal value of the color.

#### Color names
- Colors are represented by predefined names. However, they are very limited in number. The syntax is as follows:
```css
p { color : color-name ;}
p { color : red ;}
```

- Here, p is the selector and color-name is the name of the color.

# CSS Backgrounds Properties
1. **background-color** - Specifies the background color of an element
2. **background-image** - Specifies one or more background images for an element
3. **background-repeat** - Specifies how a background image will be repeated
4. **background-attachment** - Specifies whether a background image should scroll or be fixed
5. **background-position** - Specifies the starting position of a background image
6. **background** - A shorthand property for all the background properties

#### background-color
- The background-color property specifies the background color of an element. The syntax is as follows:
```css
p { background-color : value ;}
```
- Here, p is the selector and value is the background color.

#### Background-color values
- color - Specifies the background color in color name, hex, or rgb value
- transparent - Specifies a transparent background
- inherit - Specifies that the property should be inherited from the parent element


#### background-image
- The background-image property specifies one or more background images for an element. The syntax is as follows:
```css
p { background-image : url ( " value " );}
```
- Here, p is the selector and value is the background image.

#### Background-image values
- url ( " value " ) - Specifies the background image from an image file
- none - Specifies that no background image should be displayed
- inherit - Specifies that the property should be inherited from the parent element


#### background-repeat
- The background-repeat property specifies how a background image will be repeated. The syntax is as follows:
```css
p { background-repeat : value ;}
```
- Here, p is the selector and value is the background repeat.

#### Background-repeat values
- repeat - The background image will be repeated both horizontally and vertically
- repeat-x - The background image will be repeated horizontally
- repeat-y - The background image will be repeated vertically
- no-repeat - The background image will not be repeated
- inherit - Specifies that the property should be inherited from the parent element


#### background-attachment
- The background-attachment property specifies whether a background image should scroll or be fixed. The syntax is as follows:
```css
p { background-attachment : value ;}
```
- Here, p is the selector and value is the background attachment.

#### Background-attachment values
- scroll - The background image will scroll with the rest of the page
- fixed - The background image will stay in the same position on the page
- inherit - Specifies that the property should be inherited from the parent element


#### background-position
- The background-position property specifies the starting position of a background image. The syntax is as follows:
```css
p { background-position : value ;}
```
- Here, p is the selector and value is the background position.

#### Background-position values
- x% y% - Specifies the position in percentages
- xpos ypos - Specifies the position in pixels, points, centimeters, or inches
- left top - Specifies the position in pre-defined values
- right bottom - Specifies the position in pre-defined values
- center - Specifies the position in pre-defined values
- inherit - Specifies that the property should be inherited from the parent element


#### background
- The background property is a shorthand property for all the background properties. The syntax is as follows:
```css
p { background : value ;}
```
- Here, p is the selector and value is the background.


# CSS Borders properties

1. **border-style** - Specifies the style of the border
2. **border-width** - Specifies the width of the border
3. **border-color** - Specifies the color of the border
4. **border** - A shorthand property for all the border properties
5. **border-top** - A shorthand property for the top border properties
6. **border-right** - A shorthand property for the right border properties
7. **border-bottom** - A shorthand property for the bottom border properties
8. **border-left** - A shorthand property for the left border properties
9. **border-radius** - Specifies the radius of the border of an element


#### border-style
- The border-style property specifies the style of the border. The syntax is as follows:
```css
p { border-style : value ;}
```
- Here, p is the selector and value is the border style.

#### Border-style values
- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color value
- inset - Defines a 3D inset border. The effect depends on the border-color value
- outset - Defines a 3D outset border. The effect depends on the border-color value
- none - Defines no border
- hidden - Defines a hidden border
- inherit - Specifies that the property should be inherited from the parent element


#### border-width
- The border-width property specifies the width of the border. The syntax is as follows:
```css
p { border-width : value ;}
```
- Here, p is the selector and value is the border width.

#### Border-width values
- thin - Defines a thin border
- medium - Defines a medium border
- thick - Defines a thick border
- length - Defines the border width in pixels, points, centimeters, or inches
- inherit - Specifies that the property should be inherited from the parent element


#### border-color
- The border-color property specifies the color of the border. The syntax is as follows:
```css
p { border-color : value ;}
```
- Here, p is the selector and value is the border color.

#### Border-color values
- color - Defines the color of the border
- inherit - Specifies that the property should be inherited from the parent element


#### border
- The border property is a shorthand property for all the border properties. The syntax is as follows:
```css
p { border : value ;}
```
- Here, p is the selector and value is the border.



#### border-top
- The border-top property is a shorthand property for the top border properties. The syntax is as follows:
```css
p { border-top : value ;}
```
- Here, p is the selector and value is the border top.



#### border-right
- The border-right property is a shorthand property for the right border properties. The syntax is as follows:
```css
p { border-right : value ;}
```
- Here, p is the selector and value is the border right.

#### border-bottom
- The border-bottom property is a shorthand property for the bottom border properties. The syntax is as follows:
```css
p { border-bottom : value ;}
```
- Here, p is the selector and value is the border bottom.

#### border-left
- The border-left property is a shorthand property for the left border properties. The syntax is as follows:
```css
p { border-left : value ;}
```

- Here, p is the selector and value is the border left.

#### border-radius
- The border-radius property specifies the radius of the border of an element. The syntax is as follows:
```css
p { border-radius : value ;}
```
- Here, p is the selector and value is the border radius.

#### Border-radius values
- length - Defines the radius of the border in pixels, points, centimeters, or inches
- % - Defines the radius of the border in percentages
- inherit - Specifies that the property should be inherited from the parent element


# CSS Margins properties

1. **margin-top** - Sets the top margin of an element
2. **margin-right** - Sets the right margin of an element
3. **margin-bottom** - Sets the bottom margin of an element
4. **margin-left** - Sets the left margin of an element
5. **margin** - A shorthand property for all the margin properties

#### margin-top
- The margin-top property sets the top margin of an element. The syntax is as follows:
```css
p { margin-top : value ;}
```
- Here, p is the selector and value is the margin top.


#### margin-right
- The margin-right property sets the right margin of an element. The syntax is as follows:
```css
p { margin-right : value ;}
```
- Here, p is the selector and value is the margin right.

#### margin-bottom
- The margin-bottom property sets the bottom margin of an element. The syntax is as follows:
```css
p { margin-bottom : value ;}
```
- Here, p is the selector and value is the margin bottom.

#### margin-left
- The margin-left property sets the left margin of an element. The syntax is as follows:
```css
p { margin-left : value ;}
```
- Here, p is the selector and value is the margin left.

#### margin
- The margin property is a shorthand property for all the margin properties. The syntax is as follows:
```css
p { margin : value ;}
```
- Here, p is the selector and value is the margin.


# CSS Padding properties

1. **padding-top** - Sets the top padding of an element
2. **padding-right** - Sets the right padding of an element
3. **padding-bottom** - Sets the bottom padding of an element
4. **padding-left** - Sets the left padding of an element
5. **padding** - A shorthand property for all the padding properties

#### padding-top
- The padding-top property sets the top padding of an element. The syntax is as follows:
```css
p { padding-top : value ;}
```
- Here, p is the selector and value is the padding top.

#### padding-right
- The padding-right property sets the right padding of an element. The syntax is as follows:
```css
p { padding-right : value ;}
```
- Here, p is the selector and value is the padding right.

#### padding-bottom
- The padding-bottom property sets the bottom padding of an element. The syntax is as follows:
```css
p { padding-bottom : value ;}
```
- Here, p is the selector and value is the padding bottom.

#### padding-left
- The padding-left property sets the left padding of an element. The syntax is as follows:
```css
p { padding-left : value ;}
```
- Here, p is the selector and value is the padding left.

#### padding
- The padding property is a shorthand property for all the padding properties. The syntax is as follows:
```css
p { padding : value ;}
```
- Here, p is the selector and value is the padding.

# CSS height & width properties

1. **height** - Sets the height of an element
2. **width** - Sets the width of an element
3. **min-height** - Sets the minimum height of an element
4. **max-height** - Sets the maximum height of an element
5. **min-width** - Sets the minimum width of an element
6. **max-width** - Sets the maximum width of an element

#### height
- The height property sets the height of an element. The syntax is as follows:
```css
p { height : value ;}
```
- Here, p is the selector and value is the height.

#### width
- The width property sets the width of an element. The syntax is as follows:
```css
p { width : value ;}
```
- Here, p is the selector and value is the width.

#### min-height
- The min-height property sets the minimum height of an element. The syntax is as follows:
```css
p { min-height : value ;}
```
- Here, p is the selector and value is the minimum height.

#### max-height
- The max-height property sets the maximum height of an element. The syntax is as follows:
```css
p { max-height : value ;}
```
- Here, p is the selector and value is the maximum height.

#### min-width
- The min-width property sets the minimum width of an element. The syntax is as follows:
```css
p { min-width : value ;}
```
- Here, p is the selector and value is the minimum width.

#### max-width
- The max-width property sets the maximum width of an element. The syntax is as follows:
```css
p { max-width : value ;}
```
- Here, p is the selector and value is the maximum width.

# CSS outline properties

1. **outline-color** - Sets the color of an outline
2. **outline-style** - Sets the style of an outline
3. **outline-width** - Sets the width of an outline
4. **outline** - A shorthand property for the outline-color, outline-style, and the outline-width properties

#### outline-color
- The outline-color property sets the color of an outline. The syntax is as follows:
```css
p { outline-color : value ;}
```
- Here, p is the selector and value is the outline color.

#### outline-style
- The outline-style property sets the style of an outline. The syntax is as follows:
```css
p { outline-style : value ;}
```
- Here, p is the selector and value is the outline style.

#### outline-width
- The outline-width property sets the width of an outline. The syntax is as follows:
```css
p { outline-width : value ;}
```
- Here, p is the selector and value is the outline width.

#### outline
- The outline property is a shorthand property for the outline-color, outline-style, and the outline-width properties. The syntax is as follows:
```css
p { outline : value ;}
```
- Here, p is the selector and value is the outline.

# CSS overflow properties
1. **overflow** - Specifies what happens if content overflows an element's box
2. **overflow-x** - Specifies what to do with the left/right edges of the content if it overflows the element's content area
3. **overflow-y** - Specifies what to do with the top/bottom edges of the content if it overflows the element's content area

#### overflow
- The overflow property specifies what happens if content overflows an element's box. The syntax is as follows:
```css
p { overflow : value ;}
```
- Here, p is the selector and value is the overflow.

#### overflow-x
- The overflow-x property specifies what to do with the left/right edges of the content if it overflows the element's content area. The syntax is as follows:
```css
p { overflow-x : value ;}
```
- Here, p is the selector and value is the overflow x.

#### overflow-y
- The overflow-y property specifies what to do with the top/bottom edges of the content if it overflows the element's content area. The syntax is as follows:
```css
p { overflow-y : value ;}
```
- Here, p is the selector and value is the overflow y.

# CSS position properties
## Tyes of position
1. **static** - Default. Elements render in order, as they appear in the document flow
2. **relative** - Relative to its normal position
3. **absolute** - Relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed)
4. **fixed** - Relative to the viewport, which means it always stays in the same place even if the page is scrolled
5. **sticky** - Relative to the user's scroll position

##### static
- The static position is the default position. An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page. The top, right, bottom, and left properties will have no effect.

##### relative
- An element with position: relative; is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

##### absolute
- An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

##### fixed
- An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.

##### sticky
- An element with position: sticky; is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).



# CSS Visibility properties
1. **visibility** - Specifies whether or not an element is visible

#### visibility
- The visibility property specifies whether or not an element is visible. The syntax is as follows:
```css
p { visibility : value ;}
```
- Here, p is the selector and value is the visibility.

#### visibility values
- **visible** - Default. The element is visible
- **hidden** - The element is hidden (but still takes up space)


# CSS Display properties
1. **display** - Specifies how a certain HTML element should be displayed

#### display
- The display property specifies how a certain HTML element should be displayed. The syntax is as follows:
```css
p { display : value ;}
```
- Here, p is the selector and value is the display.

#### display values
- The display property can take the following values:

1. **block** - This displays an element as a block element. It starts on a new line, and takes up the whole width.
2. **inline** - This displays an element as an inline element. Any height and width properties will have no effect.
3. **inline-block** - This displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values.
4. **none** - This lets you hide an element from the page.

# CSS z-index properties
1. **z-index** - Specifies the stack order of an element

#### z-index
- The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order. The syntax is as follows:
```css
p { z-index : value ;}
```
- Here, p is the selector and value is the z-index.

# CSS z-index values
- **auto** - Default. The element is not positioned in any special way; it is always positioned according to the normal flow of the page.
- **number** - The element is positioned according to the z-index value. An element with greater stack order is always in front of an element with a lower stack order.


# CSS Float properties
1. **float** - Specifies whether or not a box should float

#### float
- The float property specifies whether or not a box should float. The syntax is as follows:
```css
p { float : value ;}
```
- Here, p is the selector and value is the float.

#### float values
- left - The element floats to the left of its container
- right - The element floats to the right of its container
- none - The element does not float (will be displayed just where it occurs in the text). This is default
- inherit - Inherits the float value of its parent element



# CSS Clear properties
1. **clear** - Specifies on which sides of an element floating elements are not allowed to float


#### clear
- The clear property specifies on which sides of an element floating elements are not allowed to float. The syntax is as follows:
```css
p { clear : value ;}
```
- Here, p is the selector and value is the clear.

#### clear values
- left - No floating elements are allowed to the left of the element
- right - No floating elements are allowed to the right of the element
- both - No floating elements are allowed on either the left or the right sides of the element
- none - Floating elements are allowed on both sides of the element. This is default
- inherit - Inherits the clear value of its parent element

# CSS Flexbox properties for containers
1. **flex-direction** - Specifies the direction of the flexible items
2. **flex-wrap** - Specifies whether the flexible items should wrap or not
3. **flex-flow** - A shorthand property for the flex-direction and the flex-wrap properties
4. **justify-content** - Specifies the alignment along the main axis
5. **align-items** - Specifies the alignment along the cross axis
6. **align-content** - Specifies the alignment along the cross axis when there is extra space in the cross-axis

#### flex-direction
- The flex-direction property specifies the direction of the flexible items. The syntax is as follows:
```css
p { flex-direction : value ;}
```
- Here, p is the selector and value is the flex-direction.

#### flex-direction values
- **row** - Default. The flexible items are displayed horizontally as a row
- **row-reverse** - The flexible items are displayed horizontally as a row, but in reverse order
- **column** - The flexible items are displayed vertically as a column
- **column-reverse** - The flexible items are displayed vertically as a column, but in reverse order

#### flex-wrap
- The flex-wrap property specifies whether the flexible items should wrap or not. The syntax is as follows:
```css
p { flex-wrap : value ;}
```
- Here, p is the selector and value is the flex-wrap.

#### flex-wrap values
- **nowrap** - Default. The flexible items will all be on one line
- **wrap** - The flexible items will wrap onto multiple lines, from top to bottom.
- **wrap-reverse** - The flexible items will wrap onto multiple lines from bottom to top.

#### flex-flow
- The flex-flow property is a shorthand property for the flex-direction and the flex-wrap properties. The syntax is as follows:
```css
p { flex-flow : value ;}
```
- Here, p is the selector and value is the flex-flow.

#### flex-flow values
- **row nowrap** - Default. The flexible items are displayed horizontally as a row
- **row wrap** - The flexible items are displayed horizontally as a row, but in reverse order
- **column nowrap** - The flexible items are displayed vertically as a column


#### justify-content
- The justify-content property specifies the alignment along the main axis. The syntax is as follows:
```css
p { justify-content : value ;}
```
- Here, p is the selector and value is the justify-content.

#### justify-content values
- **flex-start** - Default. The flexible items are packed toward the start of the flex-direction
- **flex-end** - The flexible items are packed toward the end of the flex-direction
- **center** - The flexible items are centered along the flex-direction
- **space-between** - The flexible items are evenly distributed in the flex-direction; first item is on the start line, last item on the end line
- **space-around** - The flexible items are evenly distributed in the flex-direction with equal space around them

#### align-items
- The align-items property specifies the alignment along the cross axis. The syntax is as follows:
```css
p { align-items : value ;}
```
- Here, p is the selector and value is the align-items.

#### align-items values
- **flex-start** - Default. The flexible items are packed toward the start of the cross axis
- **flex-end** - The flexible items are packed toward the end of the cross axis
- **center** - The flexible items are centered in the cross axis
- **baseline** - The flexible items are aligned such as their baselines align
- **stretch** - The flexible items are stretched to fit the container

#### align-content
- The align-content property specifies the alignment along the cross axis when there is extra space in the cross-axis. The syntax is as follows:
```css
p { align-content : value ;}
```
- Here, p is the selector and value is the align-content.

#### align-content values
- **flex-start** - Default. The lines are packed toward the start of the cross axis
- **flex-end** - The lines are packed toward the end of the cross axis
- **center** - The lines are centered in the cross axis
- **space-between** - The lines are evenly distributed in the cross-axis; first line is at the start of the cross-axis, last line at the end
- **space-around** - The lines are evenly distributed with equal space around each line
- **stretch** - The lines stretch to take up the remaining space

# CSS Flexbox properties for items
1. **order** - Specifies the order of the flexible item
2. **flex-grow** - Specifies how much the item will grow relative to the rest
3. **flex-shrink** - Specifies how the item will shrink relative to the rest
4. **flex-basis** - Specifies the initial length of a flexible item
5. **flex** - A shorthand property for the flex-grow, flex-shrink and the flex-basis properties
6. **align-self** - Specifies the alignment for the selected item inside the flexible container

#### order
- The order property specifies the order of the flexible item. The syntax is as follows:
```css
p { order : value ;}
```
- Here, p is the selector and value is the order.

#### order values
- **number** - Default is 0. The flexible items are displayed in ascending order. Negative numbers are allowed.

#### flex-grow
- The flex-grow property specifies how much the item will grow relative to the rest. The syntax is as follows:
```css
p { flex-grow : value ;}
```
- Here, p is the selector and value is the flex-grow.

#### flex-grow values
- **number** - Default is 0. The flexible items will grow if necessary

#### flex-shrink
- The flex-shrink property specifies how the item will shrink relative to the rest. The syntax is as follows:
```css
p { flex-shrink : value ;}
```
- Here, p is the selector and value is the flex-shrink.

#### flex-shrink values
- **number** - Default is 1. The flexible items will shrink if necessary

#### flex-basis
- The flex-basis property specifies the initial length of a flexible item. The syntax is as follows:
```css
p { flex-basis : value ;}
```
- Here, p is the selector and value is the flex-basis.

#### flex-basis values
- **length** - Default is auto. The flexible items will have the specified length

#### flex
- The flex property is a shorthand property for the flex-grow, flex-shrink and the flex-basis properties. The syntax is as follows:
```css
p { flex : value ;}
```
- Here, p is the selector and value is the flex.

#### flex values
- **number** - Default is 0 1 auto. The flexible items will grow if necessary

#### align-self
- The align-self property specifies the alignment for the selected item inside the flexible container. The syntax is as follows:
```css
p { align-self : value ;}
```
- Here, p is the selector and value is the align-self.

#### align-self values
- **auto** - Default. The flexible item inherits its alignment from the parent
- **flex-start** - The flexible item is packed toward the start of the cross axis
- **flex-end** - The flexible item is packed toward the end of the cross axis
- **center** - The flexible item is centered in the cross axis
- **baseline** - The flexible item is aligned such as its baseline aligns with the baseline of the other items in the container
- **stretch** - The flexible item is stretched to fit the container

# Setting up the viewport
- The viewport is the user's visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen.
- The viewport is specified by the width and the height of the screen, and the scale of the screen.
- The viewport is set with the viewport meta tag in the head section of an HTML page:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
- The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

# Use max-width and max-height
- The max-width and max-height properties are used to set the maximum width and height of an element.
- The max-width and max-height properties override the width and height properties.
- The max-width and max-height properties are very useful when you want to scale images proportionally.
- The max-width and max-height properties are also useful when you want to make sure that an image does not exceed the width and height of its container.
- The max-width and max-height properties are used like this:
```css
img {
  max-width: 100%;
  max-height: 100%;
}
```
- The max-width: 100% property sets the maximum width of an image to 100% of the width of its container.

# Use min-width and min-height
- The min-width and min-height properties are used to set the minimum width and height of an element.
- The min-width and min-height properties override the width and height properties.
- The min-width and min-height properties are very useful when you want to scale images proportionally.
- The min-width and min-height properties are also useful when you want to make sure that an image does not exceed the width and height of its container.
- The min-width and min-height properties are used like this:
```css
img {
  min-width: 100%;
  min-height: 100%;
}
```
- The min-width: 100% property sets the minimum width of an image to 100% of the width of its container.

# CSS Media Queries
- Media queries allow you to specify different styles for individual browser and device circumstances.
- Media queries are very useful for responsive web design.
- Media queries are used with the @media rule.
- The @media rule is included in the CSS and can contain one or more media queries and one or more sets of CSS properties.
- The @media rule is used like this:
```css
@media media_type and (media_feature) {
  CSS-Code;
}
```
- Here, media_type is the type of media device, and media_feature is a feature of the media device.
- The @media rule can contain more than one media query, separated with commas:
```css
@media media_type and (media_feature), media_type and (media_feature) {
  CSS-Code;
}
```
- The @media rule can contain more than one set of CSS properties, separated with commas:
```css
@media media_type and (media_feature) {
  CSS-Code;
  CSS-Code;
}
```

# Media Types
- Media types are used to target different media devices.
- The most common media types are:
1. **all** - All media devices
2. **print** - Used for printers
3. **screen** - Used for computer screens, tablets, smart-phones etc.
4. **speech** - Used for screenreaders that "reads" the page out loud
5. **braille** - Used for braille tactile feedback devices
6. **embossed** - Used for paged braille printers
7. **handheld** - Used for handheld devices (typically small screen, limited bandwidth)
8. **projection** - Used for projectors
9. **tty** - Used for media using a fixed-pitch character grid (such as teletypes, terminals, or portable devices with limited display capabilities)
10. **tv** - Used for television-type devices

#### all
- The all media type targets all media devices.
- The all media type is used like this:
```css
@media all {
  CSS-Code;
}
```

#### print
- The print media type targets printers.
- The print media type is used like this:
```css
@media print {
  CSS-Code;
}
```

#### screen
- The screen media type targets computer screens, tablets, smart-phones etc.
- The screen media type is used like this:
```css
@media screen {
  CSS-Code;
}
```

#### speech
- The speech media type targets screenreaders that "reads" the page out loud.
- The speech media type is used like this:
```css
@media speech {
  CSS-Code;
}
```

#### braille
- The braille media type targets braille tactile feedback devices.
- The braille media type is used like this:
```css
@media braille {
  CSS-Code;
}
```

#### embossed
- The embossed media type targets paged braille printers.
- The embossed media type is used like this:
```css
@media embossed {
  CSS-Code;
}
```

#### handheld
- The handheld media type targets handheld devices (typically small screen, limited bandwidth).
- The handheld media type is used like this:
```css
@media handheld {
  CSS-Code;
}
```

#### projection
- The projection media type targets projectors.
- The projection media type is used like this:
```css
@media projection {
  CSS-Code;
}
```

#### tty
- The tty media type targets media using a fixed-pitch character grid (such as teletypes, terminals, or portable devices with limited display capabilities).
- The tty media type is used like this:
```css
@media tty {
  CSS-Code;
}
```

#### tv
- The tv media type targets television-type devices.
- The tv media type is used like this:
```css
@media tv {
  CSS-Code;
}
```

# Media Features
- Media features are used to target different media devices.
- The most common media features are:
1. **width** - The width of the viewport
2. **height** - The height of the viewport
3. **orientation** - The orientation of the viewport (portrait or landscape)
4. **aspect-ratio** - The aspect ratio of the viewport
5. **device-width** - The width of the device
6. **device-height** - The height of the device
7. **device-aspect-ratio** - The aspect ratio of the device
8. **color** - The number of bits per color component
9. **color-index** - The number of entries in a color lookup table
10. **monochrome** - The number of bits per pixel
11. **resolution** - The resolution in dpi of the output device
12. **scan** - The scan method used by the output device
13. **grid** - The type of grid used by the output device

#### width
- The width media feature targets the width of the viewport.
- The width media feature is used like this:
```css
@media screen and (width: 800px) {
  CSS-Code;
}
```

#### height
- The height media feature targets the height of the viewport.
- The height media feature is used like this:
```css
@media screen and (height: 600px) {
  CSS-Code;
}
```

#### orientation
- The orientation media feature targets the orientation of the viewport (portrait or landscape).
- The orientation media feature is used like this:
```css
@media screen and (orientation: landscape) {
  CSS-Code;
}
```

#### aspect-ratio
- The aspect-ratio media feature targets the aspect ratio of the viewport.
- The aspect-ratio media feature is used like this:
```css
@media screen and (aspect-ratio: 16/9) {
  CSS-Code;
}
```

#### device-width
- The device-width media feature targets the width of the device.
- The device-width media feature is used like this:
```css
@media screen and (device-width: 800px) {
  CSS-Code;
}
```

#### device-height
- The device-height media feature targets the height of the device.
- The device-height media feature is used like this:
```css
@media screen and (device-height: 600px) {
  CSS-Code;
}
```

#### device-aspect-ratio
- The device-aspect-ratio media feature targets the aspect ratio of the device.
- The device-aspect-ratio media feature is used like this:
```css
@media screen and (device-aspect-ratio: 16/9) {
  CSS-Code;
}
```

#### color
- The color media feature targets the number of bits per color component.
- The color media feature is used like this:
```css
@media screen and (color: 24) {
  CSS-Code;
}
```

#### color-index
- The color-index media feature targets the number of entries in a color lookup table.
- The color-index media feature is used like this:
```css
@media screen and (color-index: 256) {
  CSS-Code;
}
```

#### monochrome
- The monochrome media feature targets the number of bits per pixel.
- The monochrome media feature is used like this:
```css
@media screen and (monochrome: 1) {
  CSS-Code;
}
```

#### resolution
- The resolution media feature targets the resolution in dpi of the output device.
- The resolution media feature is used like this:
```css
@media screen and (resolution: 96dpi) {
  CSS-Code;
}
```

#### scan
- The scan media feature targets the scan method used by the output device.
- The scan media feature is used like this:
```css
@media screen and (scan: progressive) {
  CSS-Code;
}
```

#### grid
- The grid media feature targets the type of grid used by the output device.
- The grid media feature is used like this:
```css
@media screen and (grid: 0) {
  CSS-Code;
}
```

# Media Queries
- Media queries are used to apply different CSS styles for different media types/devices.
- Media queries are used like this:
```css
@media media-type and (media-feature: value) {
  CSS-Code;
}
```

# Media Query Examples
#### Example 1
- This example targets screens with a width of 800px:
```css
@media screen and (width: 800px) {
  CSS-Code;
}
```

#### Example 2
- This example targets screens with a width of 800px and a height of 600px:
```css
@media screen and (width: 800px) and (height: 600px) {
  CSS-Code;
}
```

# Responsive Web Design values
1. **em** - Relative to the font-size of the element (2em means 2 times the size of the current font)
2. **rem** - Relative to font-size of the root element
3. **vw** - Relative to 1% of the width of the viewport
4. **vh** - Relative to 1% of the height of the viewport
5. **vmin** - Relative to 1% of viewport's smaller dimension
6. **vmax** - Relative to 1% of viewport's larger dimension

#### em
- The em unit is relative to the font-size of the element (2em means 2 times the size of the current font).
##### Example
```css
p { font-size : 2em ;}
```
- Here, p is the selector and 2em is the font-size.

#### rem
- The rem unit is relative to font-size of the root element.
##### Example
```css
p { font-size : 2rem ;}
```
- Here, p is the selector and 2rem is the font-size.

#### vw
- The vw unit is relative to 1% of the width of the viewport.
##### Example
```css
p { width : 50vw ;}
```
- Here, p is the selector and 50vw is the width.

#### vh
- The vh unit is relative to 1% of the height of the viewport.
##### Example
```css
p { height : 50vh ;}
```
- Here, p is the selector and 50vh is the height.

#### vmin
- The vmin unit is relative to 1% of viewport's smaller dimension.
##### Example
```css
p { width : 50vmin ;}
```
- Here, p is the selector and 50vmin is the width.

#### vmax
- The vmax unit is relative to 1% of viewport's larger dimension.
##### Example
```css
p { height : 50vmax ;}
```
- Here, p is the selector and 50vmax is the height.

  


# CSS Table properties
1. **border-collapse** - Specifies whether the table border should be collapsed into a single border or not
2. **border-spacing** - Specifies the distance between the borders of adjacent cells
3. **caption-side** - Specifies the placement of a table caption
4. **empty-cells** - Specifies whether or not to display borders and background on empty cells in a table
5. **table-layout** - Specifies the algorithm used to lay out table cells, rows, and columns

#### border-collapse
- The border-collapse property specifies whether the table border should be collapsed into a single border or not. The syntax is as follows:
```css
p { border-collapse : value ;}
```
- Here, p is the selector and value is the border collapse.

#### border-spacing
- The border-spacing property specifies the distance between the borders of adjacent cells. The syntax is as follows:
```css
p { border-spacing : value ;}
```
- Here, p is the selector and value is the border spacing.

#### caption-side
- The caption-side property specifies the placement of a table caption. The syntax is as follows:
```css
p { caption-side : value ;}
```
- Here, p is the selector and value is the caption side.

#### empty-cells
- The empty-cells property specifies whether or not to display borders and background on empty cells in a table. The syntax is as follows:
```css
p { empty-cells : value ;}
```
- Here, p is the selector and value is the empty cells.

#### table-layout
- The table-layout property specifies the algorithm used to lay out table cells, rows, and columns. The syntax is as follows:
```css
p { table-layout : value ;}
```
- Here, p is the selector and value is the table layout.

# CSS list properties
1. **list-style** - A shorthand property for setting all the list style properties at once
2. **list-style-image** - Specifies an image as the list-item marker
3. **list-style-position** - Specifies the position of the list-item markers (inside or outside the content flow)
4. **list-style-type** - Specifies the type of list-item marker

#### list-style
- The list-style property is a shorthand property for setting all the list style properties at once. The syntax is as follows:
```css
p { list-style : value ;}
```
- Here, p is the selector and value is the list style.

#### list-style-image
- The list-style-image property specifies an image as the list-item marker. The syntax is as follows:
```css  
p { list-style-image : value ;}
```
- Here, p is the selector and value is the list style image.

#### list-style-position
- The list-style-position property specifies the position of the list-item markers (inside or outside the content flow). The syntax is as follows:
```css
p { list-style-position : value ;}
```
- Here, p is the selector and value is the list style position.

#### list-style-type
- The list-style-type property specifies the type of list-item marker. The syntax is as follows:
```css
p { list-style-type : value ;}
```
- Here, p is the selector and value is the list style type.

# CSS Text properties
1. **color** - Specifies the color of text
2. **direction** - Specifies the text direction/writing direction
3. **letter-spacing** - Increases or decreases the space between characters in a text
4. **line-height** - Specifies the line height
5. **text-align** - Specifies the horizontal alignment of text
6. **text-decoration** - Specifies the decoration added to text
7. **text-indent** - Specifies the indentation of the first line in a text-block
8. **text-transform** - Specifies how to capitalize text
9. **unicode-bidi** - Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document
10. **vertical-align** - Specifies the vertical alignment of an element
11. **white-space** - Specifies how white-space inside an element is handled
12. **word-spacing** - Increases or decreases the space between words in a text

#### color
- The color property specifies the color of text. The syntax is as follows:
```css
p { color : value ;}
```
- Here, p is the selector and value is the color.



#### direction
- The direction property specifies the text direction/writing direction. The syntax is as follows:
```css
p { direction : value ;}
```
- Here, p is the selector and value is the direction.

#### direction value
- ltr - Left to right
- rtl - Right to left


#### letter-spacing
- The letter-spacing property increases or decreases the space between characters in a text. The syntax is as follows:
```css
p { letter-spacing : value ;}
```
- Here, p is the selector and value is the letter spacing.

#### letter-spacing value
- normal - Default. The browser calculates the letter-spacing
- length - Specifies the spacing. Negative values are allowed. The default unit is px, but you can use em, ex, %, etc. If the value is 0, no space is added between the characters


#### line-height
- The line-height property specifies the line height. The syntax is as follows:
```css
p { line-height : value ;}
```
- Here, p is the selector and value is the line height.

#### line-height value
- normal - Default. The browser calculates the line-height
- number - Specifies the line height as a multiple of the element's font size. Negative values are not allowed
- length - Specifies the line height in px, pt, cm, etc. Negative values are not allowed
- % - Specifies the line height as a percentage of the element's font size. Negative values are not allowed

#### text-align
- The text-align property specifies the horizontal alignment of text. The syntax is as follows:
```css
p { text-align : value ;}
```
- Here, p is the selector and value is the text align.

#### text-align value
- left - Default. The text is aligned to the left
- right - The text is aligned to the right
- center - The text is centered
- justify - The text is justified. Each line except the last line is set to take up the full width of the containing element


#### text-decoration
- The text-decoration property specifies the decoration added to text. The syntax is as follows:
```css
p { text-decoration : value ;}
```
- Here, p is the selector and value is the text decoration.

#### text-decoration value
- none - Default. No decoration
- underline - Adds a line underneath the text
- overline - Adds a line over the text
- line-through - Adds a line through the text
- blink - Animates the text to make it flash on and off


#### text-indent
- The text-indent property specifies the indentation of the first line in a text-block. The syntax is as follows:
```css
p { text-indent : value ;}
```
- Here, p is the selector and value is the text indent.

#### text-transform
- The text-transform property specifies how to capitalize text. The syntax is as follows:
```css
p { text-transform : value ;}
```
- Here, p is the selector and value is the text transform.

#### unicode-bidi
- The unicode-bidi property is used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document. The syntax is as follows:
```css
p { unicode-bidi : value ;}
```
- Here, p is the selector and value is the unicode bidi.

#### vertical-align
- The vertical-align property specifies the vertical alignment of an element. The syntax is as follows:
```css
p { vertical-align : value ;}
```
- Here, p is the selector and value is the vertical align.

#### white-space
- The white-space property specifies how white-space inside an element is handled. The syntax is as follows:
```css
p { white-space : value ;}
```
- Here, p is the selector and value is the white space.

#### word-spacing
- The word-spacing property increases or decreases the space between words in a text. The syntax is as follows:
```css
p { word-spacing : value ;}
```
- Here, p is the selector and value is the word spacing.


# CSS Cursor properties
1. **cursor** - Specifies the mouse cursor to be displayed when pointing over an element

#### cursor
- The cursor property specifies the mouse cursor to be displayed when pointing over an element. The syntax is as follows:
```css
p { cursor : value ;}
```
- Here, p is the selector and value is the cursor.

# CSS Cursor values
1. **auto** - Default. The browser sets a cursor
2. **crosshair** - Displays a crosshair cursor
3. **default** - Default cursor
4. **e-resize** - Displays a horizontal double arrow cursor
5. **help** - Displays a help cursor
6. **move** - Displays a move cursor
7. **n-resize** - Displays a vertical double arrow cursor
8. **ne-resize** - Displays a diagonal double arrow cursor
9. **nw-resize** - Displays a diagonal double arrow cursor
10. **pointer** - Displays a pointer cursor
11. **progress** - Displays a progress cursor
12. **s-resize** - Displays a vertical double arrow cursor
13. **se-resize** - Displays a diagonal double arrow cursor
14. **sw-resize** - Displays a diagonal double arrow cursor
15. **text** - Displays a text cursor
16. **w-resize** - Displays a horizontal double arrow cursor
17. **wait** - Displays a wait cursor
18. **url** - Specifies a URL to an image to use as the cursor
19. **zoom-in** - Displays a zoom-in cursor
20. **zoom-out** - Displays a zoom-out cursor
21. **grab** - Displays a grab cursor
22. **grabbing** - Displays a grabbing cursor
23. **cell** - Displays a cell cursor
24. **vertical-text** - Displays a vertical-text cursor
25. **no-drop** - Displays a no-drop cursor
26. **not-allowed** - Displays a not-allowed cursor
27. **all-scroll** - Displays a all-scroll cursor
28. **col-resize** - Displays a col-resize cursor
29. **row-resize** - Displays a row-resize cursor


# CSS User Interface properties
1. **box-sizing** - Specifies how the width and height of an element are calculated: should they include padding and borders, or not
2. **caption-side** - Specifies the placement of a table caption
3. **caret-color** - Specifies the color of the cursor (caret) in inputs, textareas, or any element that is editable
4. **color** - Specifies the color of text
5. **icon** - Specifies an image as a favicon
6. **outline** - Outlines an element
7. **outline-color** - Specifies the color of an outline
8. **outline-offset** - Specifies the space between an outline and the edge or border of an element
9. **outline-style** - Specifies the style of an outline
10. **outline-width** - Specifies the width of an outline
11. **resize** - Specifies whether or not an element is resizable by the user
12. **text-overflow** - Specifies how overflowed content that is not displayed should be signaled to the user
13. **text-shadow** - Adds shadow to text
14. **user-select** - Specifies whether the text of an element can be selected

#### box-sizing
- The box-sizing property specifies how the width and height of an element are calculated: should they include padding and borders, or not. The syntax is as follows:
```css
p { box-sizing : value ;}
```
- Here, p is the selector and value is the box sizing.

#### caption-side
- The caption-side property specifies the placement of a table caption. The syntax is as follows:
```css
p { caption-side : value ;}
```
- Here, p is the selector and value is the caption side.

#### caret-color
- The caret-color property specifies the color of the cursor (caret) in inputs, textareas, or any element that is editable. The syntax is as follows:
```css
p { caret-color : value ;}
```
- Here, p is the selector and value is the caret color.

#### color
- The color property specifies the color of text. The syntax is as follows:
```css
p { color : value ;}
```
- Here, p is the selector and value is the color.

#### icon
- The icon property specifies an image as a favicon. The syntax is as follows:
```css
p { icon : value ;}
```
- Here, p is the selector and value is the icon.

#### outline
- The outline property is a shorthand property for the outline-width, outline-style, and the outline-color properties. The syntax is as follows:
```css
p { outline : value ;}
```
- Here, p is the selector and value is the outline.

#### outline-color
- The outline-color property specifies the color of an outline. The syntax is as follows:
```css
p { outline-color : value ;}
```
- Here, p is the selector and value is the outline color.

#### outline-offset
- The outline-offset property specifies the space between an outline and the edge or border of an element. The syntax is as follows:
```css
p { outline-offset : value ;}
```
- Here, p is the selector and value is the outline offset.

#### outline-style
- The outline-style property specifies the style of an outline. The syntax is as follows:
```css
p { outline-style : value ;}
```
- Here, p is the selector and value is the outline style.

#### outline-width
- The outline-width property specifies the width of an outline. The syntax is as follows:
```css
p { outline-width : value ;}
```
- Here, p is the selector and value is the outline width.

#### resize
- The resize property specifies whether or not an element is resizable by the user. The syntax is as follows:
```css
p { resize : value ;}
```
- Here, p is the selector and value is the resize.

#### text-overflow
- The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user. The syntax is as follows:
```css
p { text-overflow : value ;}
```
- Here, p is the selector and value is the text overflow.

#### text-shadow
- The text-shadow property adds shadow to text. The syntax is as follows:
```css
p { text-shadow : value ;}
```
- Here, p is the selector and value is the text shadow.

#### user-select
- The user-select property specifies whether the text of an element can be selected. The syntax is as follows:
```css
p { user-select : value ;}
```
- Here, p is the selector and value is the user select.




# CSS Box and Text  shadow properties
1. **box-shadow** - Attaches one or more shadows to an element
2. **text-shadow** - Adds shadow to text

#### box-shadow
- The box-shadow property attaches one or more shadows to an element. The syntax is as follows:
```css
p { box-shadow : value ;}
```

#### text-shadow
- The text-shadow property adds shadow to text. The syntax is as follows:
```css
p { text-shadow : value ;}
```

#### box-shadow and text-shadow values
1. **none** - No shadow is displayed
2. **offset-x** - Required. The horizontal offset of the shadow. Negative values are allowed
3. **offset-y** - Required. The vertical offset of the shadow. Negative values are allowed
4. **blur-radius** - Optional. The blur radius. Negative values are not allowed
5. **spread-radius** - Optional. The spread radius. Negative values are not allowed
6. **color** - Optional. The color of the shadow

##### box-shadow example
```css
p { box-shadow : 10px 15px 5px 8px #888888 ;}
p { text-shadow : 10px 15px 5px 8px #888888 ;}
```
- 10px is the offset-x
- 15px is the offset-y
- 5px is the blur-radius
- 8px is the spread-radius
- #888888 is the color

# CSS Variables and custom properties
#### Types of CSS Variables
1. **Global Variables** - Global variables are defined outside of any selector. They can be used in any selector
2. **Local Variables** - Local variables are defined inside a selector. They can only be used in that selector

#### CSS Global Variables
- Global variables are defined outside of any selector. They can be used in any selector. The syntax is as follows:
```css
:root { --variable-name : value ;}
```
- Here, :root is the selector and variable-name is the name of the variable. The variable name must start with two dashes (--). The value can be any valid CSS value.

#### CSS Local Variables
- Local variables are defined inside a selector. They can only be used in that selector. The syntax is as follows:
```css
selector { --variable-name : value ;}
```
- Here, selector is the selector and variable-name is the name of the variable. The variable name must start with two dashes (--). The value can be any valid CSS value.

#### CSS Variable Usage
- CSS variables are used by using the var() function. The syntax is as follows:
```css
selector { property : var ( --variable-name ) ;}
```
- Here, selector is the selector, property is the CSS property and variable-name is the name of the variable. The variable name must start with two dashes (--).

#### CSS Variable Example
```css
:root { --main-color : red ;}
p { color : var ( --main-color ) ;}
```
- Here, :root is the selector and main-color is the name of the variable. The variable name must start with two dashes (--). The value can be any valid CSS value.



# CSS Animations and Keyframes
#### CSS Animation
- CSS animation allows you to animate transitions from one CSS style configuration to another. By animating between CSS styles, you can control the speed of the transition, the number of times it repeats, and the direction of the animation. The syntax is as follows:
```css
selector { animation : name duration timing-function delay iteration-count direction fill-mode play-state ;}
```
- Here, selector is the selector, name is the name of the @keyframes animation, duration is the length of time that an animation takes to complete one cycle, timing-function is the speed curve of the animation, delay is the amount of time to wait before starting the animation, iteration-count is the number of times an animation should be played, direction is whether or not the animation should play in reverse on alternate cycles, fill-mode specifies a style for the target element when the animation is not playing (when it is finished, or when it has a delay), play-state specifies whether the animation is running or paused.

#### CSS Keyframes
- The @keyframes rule specifies the animation code. The syntax is as follows:
```css
@keyframes name { keyframes-selector { CSS-styles ;}}
```
- Here, name is the name of the @keyframes animation, keyframes-selector is the selector for the animation at a certain point and CSS-styles are the CSS styles for the animation at a certain point.

#### CSS Animation Example
```css
p { animation : mymove 5s infinite ;}
@keyframes mymove { from { top : 0px ;} to { top : 200px ;}}
```
- Here, p is the selector, mymove is the name of the @keyframes animation, 5s is the duration, infinite is the iteration-count. The animation will move the paragraph from the top of the page to the bottom of the page in 5 seconds and will repeat infinitely.

# Animations Properties
1. **animation** - A shorthand property for all the animation-* properties below, except the animation-play-state property
2. **animation-delay** - Specifies a delay for the start of an animation
3. **animation-direction** - Specifies whether or not the animation should play in reverse on alternate cycles
4. **animation-duration** - Specifies how long an animation should take to complete one cycle
5. **animation-fill-mode** - Specifies a style for the target element when the animation is not playing (when it is finished, or when it has a delay)
6. **animation-iteration-count** - Specifies the number of times an animation should be played
7. **animation-name** - Specifies the name of the @keyframes animation
8. **animation-play-state** - Specifies whether the animation is running or paused
9. **animation-timing-function** - Specifies the speed curve of the animation

#### animation
- The animation property is a shorthand property for all the animation-* properties below, except the animation-play-state property. The syntax is as follows:
```css
selector { animation : name duration timing-function delay iteration-count direction fill-mode ;}
```

#### animation-delay
- The animation-delay property specifies a delay for the start of an animation. The syntax is as follows:
```css
selector { animation-delay : value ;}
```
#### animation-delay values
1. **time** - Required. The delay time. The default value is 0s
2. **initial** - Sets this property to its default value
3. **inherit** - Inherits this property from its parent element

##### time
- The animation will start after the specified time. The time can be specified in seconds (s) or milliseconds (ms). Negative values are not allowed. the syntax is as follows:
```css
selector { animation-delay : 5s ;}
```
##### initial
- The animation will start immediately. The syntax is as follows:
```css
selector { animation-delay : initial ;}
```
##### inherit
- The animation will start after the specified time. The time can be specified in seconds (s) or milliseconds (ms). Negative values are not allowed. the syntax is as follows:
```css
selector { animation-delay : inherit ;}
```

#### animation-direction
- The animation-direction property specifies whether or not the animation should play in reverse on alternate cycles. The syntax is as follows:
```css
selector { animation-direction : value ;}
```
#### animation-direction values
1. **normal** - The animation is not played backwards. This is default
2. **reverse** - The animation is played backwards
3. **alternate** - The animation is played forwards, then backwards, then forwards again
4. **alternate-reverse** - The animation is played backwards, then forwards, then backwards again
5. **initial** - Sets this property to its default value
6. **inherit** - Inherits this property from its parent element

#### animation-duration
- The animation-duration property specifies how long an animation should take to complete one cycle. The syntax is as follows:
```css
selector { animation-duration : value ;}
```
#### animation-duration values
1. **time** - Required. The duration time. The default value is 0s
2. **initial** - Sets this property to its default value
3. **inherit** - Inherits this property from its parent element

#### animation-fill-mode
- The animation-fill-mode property specifies a style for the target element when the animation is not playing (when it is finished, or when it has a delay). The syntax is as follows:
```css
selector { animation-fill-mode : value ;}
```
#### animation-fill-mode values
1. **none** - Default. The animation will not apply any styles to the element before or after it is executing
2. **forwards** - The element will retain the style values that are applied by the last keyframe
3. **backwards** - The element will retain the style values that are applied by the first keyframe
4. **both** - The element will retain the style values that are applied by both the first and last keyframes
5. **initial** - Sets this property to its default value
6. **inherit** - Inherits this property from its parent element

#### animation-iteration-count
- The animation-iteration-count property specifies the number of times an animation should be played. The syntax is as follows:
```css
selector { animation-iteration-count : value ;}
```
#### animation-iteration-count values
1. **number** - Required. The number of times the animation should be played. The default value is 1
2. **infinite** - The animation will repeat forever
3. **initial** - Sets this property to its default value
4. **inherit** - Inherits this property from its parent element

#### animation-name
- The animation-name property specifies the name of the @keyframes animation. The syntax is as follows:
```css
selector { animation-name : value ;}
```
#### animation-name values
1. **name** - Required. The name of the @keyframes animation. The default value is none
2. **none** - No animation is applied

#### animation-play-state
- The animation-play-state property specifies whether the animation is running or paused. The syntax is as follows:
```css
selector { animation-play-state : value ;}
```
#### animation-play-state values
1. **running** - Default. The animation is running. This is default
2. **paused** - The animation is paused

#### animation-timing-function
- The animation-timing-function property specifies the speed curve of the animation. The syntax is as follows:
```css
selector { animation-timing-function : value ;}
```
#### animation-timing-function values
1. **ease** - Specifies an animation with a slow start, then fast, then end slowly (this is default)
2. **linear** - Specifies an animation with the same speed from start to end
3. **ease-in** - Specifies an animation with a slow start
4. **ease-out** - Specifies an animation with a slow end
5. **ease-in-out** - Specifies an animation with a slow start and end
6. **cubic-bezier(n,n,n,n)** - Lets you define your own values in a cubic-bezier function

#### cubic-bezier
- The cubic-bezier function defines a speed curve. The speed curve is defined with two sets of coordinates. The first set of coordinates is for the start of the animation, and the second set of coordinates is for the end of the animation. The syntax is as follows:
```css
selector { animation-timing-function : cubic-bezier (x1,y1,x2,y2) ;}
```
#### cubic-bezier values
1. **x1** - Required. The x-axis coordinate of the start point. Must be a number between 0 and 1
2. **y1** - Required. The y-axis coordinate of the start point. Must be a number between 0 and 1
3. **x2** - Required. The x-axis coordinate of the end point. Must be a number between 0 and 1
4. **y2** - Required. The y-axis coordinate of the end point. Must be a number between 0 and 1

#### animation shorthand
- The animation shorthand property is a shorthand property for all the animation-* properties except the animation-play-state property. The syntax is as follows:
```css
selector { animation : name duration timing-function delay iteration-count direction fill-mode ;}
```
#### animation shorthand values
1. **name** - Required. The name of the @keyframes animation. The default value is none
2. **duration** - Required. The duration time. The default value is 0s
3. **timing-function** - Required. The speed curve of the animation. The default value is ease
4. **delay** - Required. The time to wait before starting the animation. The default value is 0s
5. **iteration-count** - Required. The number of times the animation should be played. The default value is 1
6. **direction** - Required. Whether or not the animation should play in reverse on alternate cycles. The default value is normal
7. **fill-mode** - Required. A style for the target element when the animation is not playing (when it is finished, or when it has a delay). The default value is none

#### animation shorthand example
```css
div { animation : mymove 5s infinite ;}
```

# Keyframes properties
- The @keyframes rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another. During the animation, you can change as many CSS properties you want, as many times you want. The syntax is as follows:
```css
@keyframes name { keyframes-selector { CSS-styles ;}}
```
#### keyframes-selector
- The keyframes-selector specifies the percentage of the animation. The percentage is the point in time when the animation should be at a specific style. The syntax is as follows:
```css
keyframes-selector { CSS-styles ;}
```
#### keyframes-selector values
1. **from** - Sets the starting style for the animation
2. **to** - Sets the ending style for the animation
3. **percentage** - Sets the style for the animation at a specific point in time

#### keyframes example
```css
@keyframes mymove { from { top : 0px ;} to { top : 200px ;}}
```
- The example above will move the element 200 pixels from the top of the page.

# Transition properties
1. transition-property
2. transition-duration
3. transition-timing-function
4. transition-delay
5. transition shorthand

#### transition-property
- The transition-property property specifies the name of the CSS property the transition effect is for. The syntax is as follows:
```css
selector { transition-property : value ;}
```
#### transition-property values
1. **property** - Required. The name of the CSS property the transition effect is for. The default value is all
2. **none** - No transition effect will be applied
3. **all** - All properties will get a transition effect

#### transition-duration
- The transition-duration property specifies how many seconds or milliseconds an animation should take to complete one cycle. The syntax is as follows:
```css
selector { transition-duration : value ;}
```
#### transition-duration values
1. **time** - Required. The duration time. The default value is 0s

#### transition-timing-function
- The transition-timing-function property specifies the speed curve of the transition effect. The syntax is as follows:
```css
selector { transition-timing-function : value ;}
```
#### transition-timing-function values
1. **ease** - Specifies a transition effect with a slow start, then fast, then end slowly (this is default)
2. **linear** - Specifies a transition effect with the same speed from start to end
3. **ease-in** - Specifies a transition effect with a slow start
4. **ease-out** - Specifies a transition effect with a slow end
5. **ease-in-out** - Specifies a transition effect with a slow start and end
6. **cubic-bezier(n,n,n,n)** - Lets you define your own values in a cubic-bezier function

#### transition-delay
- The transition-delay property specifies a delay for the start of a transition effect. The syntax is as follows:
```css
selector { transition-delay : value ;}
```
#### transition-delay values
1. **time** - Required. The time to wait before starting the transition effect. The default value is 0s

#### transition shorthand
- The transition shorthand property is a shorthand property for all the transition-* properties except the transition-property property. The syntax is as follows:
```css
selector { transition : property duration timing-function delay ;}
```
#### transition shorthand example
```css
div { transition : width 2s ;}
```
- The example above will change the width of the div element from 100px to 200px, over a period of 2 seconds.

# Transform properties
1. transform
2. transform-origin
3. transform-style
4. perspective
5. perspective-origin
6. backface-visibility

#### transform
- The transform property lets you rotate, scale, skew, or translate an element. The syntax is as follows:
```css
selector { transform : value ;}
```
#### transform values
1. **none** - Defines no transformation. This is default
2. **matrix(n,n,n,n,n,n)** - Defines a 2D transformation. The matrix() function takes six parameters, which are a,b,c,d,e and f. The first two parameters (a and b) are used to scale the element. The third and fourth parameters (c and d) are used to skew the element. The fifth and sixth parameters (e and f) are used to move the element (translate it). The syntax is as follows:
```css
selector { transform : matrix(a,b,c,d,e,f) ;}
```
3. **matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)** - Defines a 3D transformation. The matrix3d() function takes sixteen parameters. The first four parameters (a, b, c, and d) are used to scale the element. The second four parameters (e, f, g, and h) are used to skew the element. The third four parameters (i, j, k, and l) are used to rotate the element. The last four parameters (m, n, o, and p) are used to move the element (translate it). The syntax is as follows:
```css
selector { transform : matrix3d(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) ;}
```
4. **translate(x,y)** - Defines a 2D translation. The x-axis is horizontal and the y-axis is vertical. The syntax is as follows:
```css
selector { transform : translate(x,y) ;}
```
5. **translate3d(x,y,z)** - Defines a 3D translation. The x-axis is horizontal, the y-axis is vertical, and the z-axis is into the screen. The syntax is as follows:
```css
selector { transform : translate3d(x,y,z) ;}
```
6. **translateX(x)** - Defines a translation on the x-axis. The syntax is as follows:
```css
selector { transform : translateX(x) ;}
```
7. **translateY(y)** - Defines a translation on the y-axis. The syntax is as follows:
```css
selector { transform : translateY(y) ;}
```
8. **translateZ(z)** - Defines a translation on the z-axis. The syntax is as follows:
```css
selector { transform : translateZ(z) ;}
```
9. **scale(x,y)** - Defines a 2D scale transformation. The x-axis is horizontal and the y-axis is vertical. The syntax is as follows:
```css
selector { transform : scale(x,y) ;}
```
10. **scale3d(x,y,z)** - Defines a 3D scale transformation. The x-axis is horizontal, the y-axis is vertical, and the z-axis is into the screen. The syntax is as follows:
```css
selector { transform : scale3d(x,y,z) ;}
```
11. **scaleX(x)** - Defines a scale transformation on the x-axis. The syntax is as follows:
```css
selector { transform : scaleX(x) ;}
```
12. **scaleY(y)** - Defines a scale transformation on the y-axis. The syntax is as follows:
```css
selector { transform : scaleY(y) ;}
```
13. **scaleZ(z)** - Defines a scale transformation on the z-axis. The syntax is as follows:
```css
selector { transform : scaleZ(z) ;}
```
14. **rotate(angle)** - Defines a 2D rotation. The syntax is as follows:
```css
selector { transform : rotate(angle) ;}
```

#### transform-origin
- The transform-origin property allows you to change the position on transformed elements. The syntax is as follows:
```css
selector { transform-origin : value ;}
```
#### transform-origin values
1. **x-axis y-axis** - Required. The x-axis is horizontal and the y-axis is vertical. The default value is 50% 50%

#### transform-style
- The transform-style property specifies how nested elements are rendered in 3D space. The syntax is as follows:
```css
selector { transform-style : value ;}
```
#### transform-style values
1. **flat** - Nested elements are not rendered in 3D space. This is default
2. **preserve-3d** - Nested elements are rendered in 3D space

#### perspective
- The perspective property defines how far an element is placed from the view on the z-axis, from the screen to the viewer. The syntax is as follows:
```css
selector { perspective : value ;}
```
#### perspective values
1. **none** - Defines no perspective. This is default
2. **length** - Defines the perspective. The length can be either a number or a length value

#### perspective-origin
- The perspective-origin property defines at which position the user is looking at the 3D-positioned element. The syntax is as follows:
```css
selector { perspective-origin : value ;}
```
#### perspective-origin values
1. **x-axis y-axis** - Required. The x-axis is horizontal and the y-axis is vertical. The default value is 50% 50%

#### backface-visibility
- The backface-visibility property defines whether or not the back face of an element should be visible when facing the user. The syntax is as follows:
```css
selector { backface-visibility : value ;}
```
#### backface-visibility values
1. **visible** - The back face is visible. This is default
2. **hidden** - The back face is not visible

# Transitions
- Transitions allow you to change property values smoothly, over a given duration. To create a transition effect, you must specify two things:
1. the CSS property you want to add an effect to
2. the duration of the effect
- You can change as many CSS properties you want, as many values as you want, and as many times you want.
- The transition-property property specifies the name of the CSS property the transition effect is for. The syntax is as follows:
```css
selector { transition-property : value ;}
```
#### transition-property values
1. **all** - All properties will transition. This is default
2. **none** - No properties will transition
3. **property** - The name of the property to transition

#### transition-duration
- The transition-duration property specifies how many seconds or milliseconds a transition effect takes to complete. The syntax is as follows:
```css
selector { transition-duration : value ;}
```
#### transition-duration values
1. **time** - Required. The duration of the effect. The time can be either a number or a time value

#### transition-timing-function
- The transition-timing-function property specifies the speed curve of the transition effect. The syntax is as follows:
```css
selector { transition-timing-function : value ;}
```
#### transition-timing-function values
1. **ease** - Specifies a transition effect with a slow start, then fast, then end slowly (this is default)
2. **linear** - Specifies a transition effect with the same speed from start to end
3. **ease-in** - Specifies a transition effect with a slow start
4. **ease-out** - Specifies a transition effect with a slow end
5. **ease-in-out** - Specifies a transition effect with a slow start and end
6. **cubic-bezier(n,n,n,n)** - Lets you define your own values in a cubic-bezier function

#### transition-delay
- The transition-delay property specifies a delay for the transition effect. The syntax is as follows:
```css
selector { transition-delay : value ;}
```
#### transition-delay values
1. **time** - Required. The delay of the effect. The time can be either a number or a time value

#### shorthand
- The transition property is a shorthand property for the four transition properties. The syntax is as follows:
```css
selector { transition : property duration timing-function delay ;}
```
#### shorthand values
1. **property** - Required. The name of the CSS property the transition effect is for
2. **duration** - Required. The duration of the effect. The time can be either a number or a time value
3. **timing-function** - Optional. The speed curve of the transition effect. The default value is ease
4. **delay** - Optional. A delay for the transition effect. The default value is 0

# CSS Grid
- CSS Grid Layout is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system.

# Grid Properties
- display
- grid-template-columns
- grid-template-rows
- grid-template-areas
- grid-template
- grid-column-gap
- grid-row-gap
- grid-gap
- justify-items
- align-items
- place-items
- justify-content
- align-content
- place-content
- grid-auto-columns
- grid-auto-rows
- grid-auto-flow
- grid
- justify-self
- align-self
- place-self

#### display
- The display property defines the element as a grid container and establishes a new grid formatting context for its contents. The syntax is as follows:
```css
selector { display : grid ;}
```
#### grid-template-columns
- The grid-template-columns property defines the line names and track sizing functions of the grid columns. The syntax is as follows:
```css
selector { grid-template-columns : value ;}
```
#### grid-template-columns values
1. **none** - No columns are defined. This is default
2. **track-size** - Defines a column with a specific width
3. **%** - Defines a column with a specific width in percent
4. **fr** - Defines a column with a flexible width
5. **auto** - Defines a column with an automatic width
6. **minmax(min, max)** - Defines a column with a minimum and maximum width
7. **repeat(n, track-size)** - Defines a number of columns with the same width
8. **[line-name] track-size** - Defines a column with a specific width and a name
9. **[line-name] %** - Defines a column with a specific width in percent and a name
10. **[line-name] fr** - Defines a column with a flexible width and a name
11. **[line-name] auto** - Defines a column with an automatic width and a name
12. **[line-name] minmax(min, max)** - Defines a column with a minimum and maximum width and a name
13. **[line-name] repeat(n, track-size)** - Defines a number of columns with the same width and a name

#### grid-template-rows
- The grid-template-rows property defines the line names and track sizing functions of the grid rows. The syntax is as follows:
```css
selector { grid-template-rows : value ;}
```
#### grid-template-rows values
1. Same as grid-template-columns values

#### grid-template-areas
- The grid-template-areas property defines a grid template by referencing the names of the grid areas which are specified with the grid-area property. The syntax is as follows:
```css
selector { grid-template-areas : value ;}
```
#### grid-template-areas values
1. **none** - No grid areas are defined. This is default
2. **.** - Defines an empty cell
3. **name** - Defines a cell with a grid area name
4. **name name** - Defines two cells with grid area names
5. **name .** - Defines a cell with a grid area name and an empty cell
6. **name name .** - Defines two cells with grid area names and an empty cell
7. **. name** - Defines an empty cell and a cell with a grid area name
8. **. name name** - Defines an empty cell, two cells with grid area names
9. **name name name** - Defines three cells with grid area names
10. **name name name .** - Defines three cells with grid area names and an empty cell
11. **name name . name** - Defines two cells with grid area names, an empty cell and a cell with a grid area name
12. **name . name name** - Defines a cell with a grid area name, an empty cell, two cells with grid area names
13. **. name name name** - Defines an empty cell, three cells with grid area names
14. **name name name name** - Defines four cells with grid area names

