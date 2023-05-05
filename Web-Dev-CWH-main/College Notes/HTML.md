# HTML Notes for College

# Introduction and Histoy

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
- HTML was created by Berners-Lee in late 1991 but "HTML 2.0" was the first standard HTML specification, published in 1995. HTML 4.01 was a major version of HTML and it was published in late 1999. XHTML 1.0 was the first XML application from the W3C and it was published in late 2000.
- The current HTML specification is HTML5, which was published in 2014. HTML5 is not a single specification, but instead is a large set of related specifications. HTML5 is still a work in progress and the WHATWG (Web Hypertext Application Technology Working Group) publishes new drafts of the specification as they are ready. The WHATWG is also responsible for the Canvas and the DOM specifications.
- HTML5 is designed to be backward compatible with HTML 4.01. It means that all HTML 4.01 documents should be valid HTML5 documents. However, HTML5 is not compatible with XHTML 1.0.
- HTML5 is a markup language used for structuring and presenting content for the World Wide Web. It is the fifth and current major version of the HTML standard, and subsumes XHTML.
- HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML, while introducing features for creating more diverse and powerful Web sites and applications.

# Basic structure of HTML

- HTML documents are text documents.
- HTML documents contain HTML tags (markup).
- HTML tags describe HTML elements.
- HTML elements are the building blocks of HTML pages.
- HTML elements are represented by tags.
- HTML tags label pieces of content such as "heading", "paragraph", "table", and so on.
- Browsers do not display the HTML tags, but use them to render the content of the page.
- HTML documents are saved with a .html or .htm extension.

### Syntax of HTML

- HTML documents are text documents.
- HTML tags are surrounded by angle brackets: < and >.
- HTML tags are not case sensitive: <P> means the same as <p>.
- HTML documents must have a root element: the <html> element.
- The <html> element is the container for all other HTML elements.
- The <html> element contains the <head> element and the <body> element.
- The <head> element contains meta information about the HTML document.
- The <body> element contains the visible page content.
- Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

# HTML Head elements

- The HTML `<head>` element provides general information (metadata) about the document, including its title and links to its scripts and style sheets.
- The `<head>` element is a container for all the head elements. The `<head>` element can include a title for the document, scripts, styles, meta information, and more.

## HTML Title element

- The HTML `<title>` element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text and any contained tags are not interpreted.
- The `<title>` element must be placed within the `<head>` element.

## HTML Meta element

- The HTML `<meta>` element represents metadata that cannot be represented by other HTML meta-related elements, like `<base>`, `<link>`, `<script>`, `<style>` or `<title>`.
- The `<meta>` element has an attribute called `charset` that can be used to specify the character encoding of the document. The value of the attribute should be a character encoding name.
- The `<meta>` element has an attribute called `name` that can be used to specify a name for the metadata. The value of the attribute should be a name.
- The `<meta>` element has an attribute called `http-equiv` that can be used to specify an HTTP header for the information/value of the content attribute. The value of the attribute should be an HTTP header name.
- The `<meta>` element has an attribute called `content` that can be used to specify the value associated with the http-equiv or name attribute. The value of the attribute should be a value.
- The `<meta>` element has an attribute called `scheme` that can be used to specify the scheme of the value of the content attribute. The value of the attribute should be a scheme.

## HTML Style element

- The HTML `<style>` element contains style information for a document, or part of a document. By default, the style instructions written inside that element are expected to be CSS.
- The `<style>` element can be used in three different ways:
  - To style a document from a separate file, use the `type` attribute to specify the style language, and use the `href` attribute to indicate the location of the external file. The content of the `<style>` element will be ignored.
  - To embed style information directly into a document, place the style information inside the `<style>` element. The `type` attribute is not required in this case.
  - To insert a style sheet through a scripting language, such as JavaScript, use the `type` attribute to specify the style language, and use the `href` attribute to indicate the location of the external file. The content of the `<style>` element will be ignored.

## HTML Base element

- The HTML `<base>` element specifies the base URL to use for all relative URLs contained within a document. There can be only one `<base>` element in a document.
- The `<base>` element has an attribute called `href` that can be used to specify the base URL. The value of the attribute should be a valid URL.
- The `<base>` element has an attribute called `target` that can be used to specify the default browsing context for hyperlink navigation or form submission. The value of the attribute should be a browsing context name.

## HTML Link element

- The HTML `<link>` element specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This element is most used to link to style sheets.
- The `<link>` element has an attribute called `href` that can be used to specify the location of the resource. The value of the attribute should be a valid URL.
- The `<link>` element has an attribute called `crossorigin` that can be used to specify how the element handles crossorigin requests. The value of the attribute should be a CORS setting.
- The `<link>` element has an attribute called `rel` that can be used to specify the relationship of the target object to the link object. The value of the attribute should be a link type.
- The `<link>` element has an attribute called `media` that can be used to specify the intended destination medium for style information. The value of the attribute should be a media query.
- The `<link>` element has an attribute called `hreflang` that can be used to specify the language of the text in the resource being linked to. The value of the attribute should be a language tag.
- The `<link>` element has an attribute called `type` that can be used to specify the media type of the resource being linked to. The value of the attribute should be a MIME type.
- The `<link>` element has an attribute called `sizes` that can be used to specify the sizes of the icons (for rel="icon"). The value of the attribute should be a list of sizes.
- The `<link>` element has an attribute called `referrerpolicy` that can be used to specify the referrer policy to use when fetching the resource. The value of the attribute should be a referrer policy.

## HTML Script element

- The HTML `<script>` element is used to embed or reference an executable script within an HTML or XHTML document. The `<script>` element either contains scripting statements, or it points to an external script file through the `src` attribute.
- The `<script>` element has an attribute called `src` that can be used to specify the location of the external script. The value of the attribute should be a valid URL.
- The `<script>` element has an attribute called `type` that can be used to specify the scripting language of the embedded code. The value of the attribute should be a scripting language.
- The `<script>` element has an attribute called `async` that can be used to specify that the script is executed asynchronously as soon as it is available. The value of the attribute should be a boolean.
- The `<script>` element has an attribute called `defer` that can be used to specify that the script is executed when the page has finished parsing. The value of the attribute should be a boolean.
- The `<script>` element has an attribute called `crossorigin` that can be used to specify how the element handles crossorigin requests. The value of the attribute should be a CORS setting.
- The `<script>` element has an attribute called `integrity` that can be used to specify the Subresource Integrity value of the linked resource. The value of the attribute should be a cryptographic hash.
- The `<script>` element has an attribute called `nomodule` that can be used to specify that the script should not be executed in browsers that support ES modules. The value of the attribute should be a boolean.
- The `<script>` element has an attribute called `nonce` that can be used to specify a cryptographic nonce ("number used once") which can be used in Content Security Policy checks. The value of the attribute should be a cryptographic nonce.
- The `<script>` element has an attribute called `referrerpolicy` that can be used to specify the referrer policy to use when fetching the resource. The value of the attribute should be a referrer policy.

# Body elements

- **HTML Body element - ** The HTML `<body>` element represents the content of an HTML document. There can be only one `<body>` element in a document.

## HTML body element properties

1. Background
2. Bgcolor
3. text
4. link
5. vlink
6. bgproperties
7. margin

#### Background

- The `background` property of the HTML `<body>` element sets the background image of the document. The value of the property should be a URL.

#### Bgcolor

- The `background-color` property of the HTML `<body>` element sets the background color of the document. The value of the property should be a color.

#### Text

- The `text` property of the HTML `<body>` element sets the color of the text in the document. The value of the property should be a color.

#### Link

- The `link` property of the HTML `<body>` element sets the color of the links in the document. The value of the property should be a color.

#### Vlink

- The `vlink` property of the HTML `<body>` element sets the color of the visited links in the document. The value of the property should be a color.

#### Bgproperties

- The `bgproperties` property of the HTML `<body>` element sets the background properties of the document. The value of the property should be a background property.

#### Margin

- The `margin` property of the HTML `<body>` element sets the margin of the document. The value of the property should be a length.

## Font elements

- **HTML Font element - ** The HTML `<font>` element is a phrase element that represents a span of text with a specified font size, font face, and color. It is a deprecated element that has been removed from the HTML5 specification.

1. Size
2. Color
3. Face

#### Size

- The `size` attribute of the HTML `<font>` element specifies the size of the font. The value of the attribute should be a number.

#### Color

- The `color` attribute of the HTML `<font>` element specifies the color of the font. The value of the attribute should be a color.

#### Face

- The `face` attribute of the HTML `<font>` element specifies the font family of the font. The value of the attribute should be a font family.

## HTML text basics

1. Heading
2. Paragraph
3. line break
4. Horizontal rule
5. span
6. center

#### Heading

- The HTML `<h1>` to `<h6>` elements represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest.

#### Paragraph

- The HTML `<p>` element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.

#### Line break

- The HTML `<br>` element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

#### Horizontal rule

- The HTML `<hr>` element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.

#### Span

- The HTML `<span>` element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as `<a>` or `<em>`) is appropriate. `<span>` is very much like a `<div>` element, but `<div>` is a block-level element whereas a `<span>` is an inline element.

#### Center

- The HTML `<center>` element is a phrase element that represents its children as being centered. It is a deprecated element that has been removed from the HTML5 specification.

## Marquee element

- The HTML `<marquee>` element is used to insert a scrolling area of text. It is a deprecated element that has been removed from the HTML5 specification.

1. Behavior
2. Direction
3. Height
4. Width
5. Hspace
6. Vspace
7. Loop
8. Scrollamount
9. Scrolldelay
10. Bgcolor
11. Align

#### Behavior

- The `behavior` attribute of the HTML `<marquee>` element specifies the behavior of the marquee. The value of the attribute should be a marquee behavior.

#### Direction

- The `direction` attribute of the HTML `<marquee>` element specifies the direction of the marquee. The value of the attribute should be a marquee direction.

#### Height

- The `height` attribute of the HTML `<marquee>` element specifies the height of the marquee. The value of the attribute should be a length.

#### Width

- The `width` attribute of the HTML `<marquee>` element specifies the width of the marquee. The value of the attribute should be a length.

#### Hspace

- The `hspace` attribute of the HTML `<marquee>` element specifies the horizontal space of the marquee. The value of the attribute should be a length.

#### Vspace

- The `vspace` attribute of the HTML `<marquee>` element specifies the vertical space of the marquee. The value of the attribute should be a length.

#### Loop

- The `loop` attribute of the HTML `<marquee>` element specifies the number of times the marquee should loop. The value of the attribute should be a number.

#### Scrollamount

- The `scrollamount` attribute of the HTML `<marquee>` element specifies the scroll amount of the marquee. The value of the attribute should be a number.

#### Scrolldelay

- The `scrolldelay` attribute of the HTML `<marquee>` element specifies the scroll delay of the marquee. The value of the attribute should be a number.

#### Bgcolor

- The `bgcolor` attribute of the HTML `<marquee>` element specifies the background color of the marquee. The value of the attribute should be a color.

#### Align

- The `align` attribute of the HTML `<marquee>` element specifies the alignment of the marquee. The value of the attribute should be a marquee alignment.

## Anchor element

- The HTML `<a>` element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

1. Href
2. Target
3. Download
4. href
5. rel
6. name
7. target
8. type

#### Href

- The `href` attribute of the HTML `<a>` element specifies the destination of a link. The value of the attribute should be a valid URL.

#### Target

- The `target` attribute of the HTML `<a>` element specifies where to display the linked resource. The value of the attribute should be a browsing context.

#### Download

- The `download` attribute of the HTML `<a>` element specifies that the target will be downloaded when a user clicks on the hyperlink. The value of the attribute should be a valid non-empty file name.

#### Href

- The `href` attribute of the HTML `<area>` element specifies the URL of the linked resource. The value of the attribute should be a valid URL.

#### Rel

- The `rel` attribute of the HTML `<area>` element specifies the relationship of the target object to the link object. The value of the attribute should be a link type.

#### Name

- The `name` attribute of the HTML `<area>` element specifies the name of an image map. The value of the attribute should be a valid non-empty name.

#### Target

- The `target` attribute of the HTML `<area>` element specifies where to display the linked resource. The value of the attribute should be a browsing context.

#### Type

- The `type` attribute of the HTML `<area>` element specifies the media type of the linked resource. The value of the attribute should be a valid MIME type.

## List elements

1. Unordered list
2. Ordered list
3. Description list
4. Menu list

#### Unordered list

- The HTML `<ul>` element represents an unordered list of items, typically rendered as a bulleted list.

#### Ordered list

- The HTML `<ol>` element represents an ordered list of items — typically rendered as a numbered list.

#### Description list

- The HTML `<dl>` element represents an association list consisting of zero or more name-value groups (a description list). Each group is represented as a list item (`<li>` element) of terms (`<dt>` element) and descriptions (`<dd>` element).

#### Menu list

- The HTML `<menu>` element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.

## Table elements

1. Table
2. Table caption
3. Table column
4. Table column group
5. Table body
6. Table header
7. Table footer
8. Table row
9. Table cell

#### Table

- The HTML `<table>` element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

#### Table caption

- The HTML `<caption>` element represents the title of the table that is its parent, if it has a parent and that is a table.

#### Table column

- The HTML `<col>` element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a `<colgroup>` element.

#### Table column group

- The HTML `<colgroup>` element defines a group of columns within a table.

#### Table body

- The HTML `<tbody>` element defines a set of rows defining the body of the table (all but the column and row groups, and their associated headers and footers).

#### Table header

- The HTML `<thead>` element defines a set of rows summarizing the columns of the table.

#### Table footer

- The HTML `<tfoot>` element defines a set of rows summarizing the columns of the table.

#### Table row

- The HTML `<tr>` element defines a row of cells in a table. The row's cells can then be established using a mix of `<td>` (data cell) and `<th>` (header cell2. Ordered list

3. Description list
4. Menu list

#### Unordered list

- The HTML `<ul>` element represents an unordered list of items, typically rendered as a bulleted list.

#### Ordered list

- The HTML `<ol>` element represents an ordered list of items — typically rendered as a numbered list.

#### Description list

- The HTML `<dl>` element represents an association list consisting of zero or more name-value groups (a description list). The element encloses a list of groups of terms (specified using the `<dt>` element) and descriptions (provided by `<dd>` elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).

#### Menu list

- The HTML `<menu>` element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.

## List elements properties

1. li
2. ul
3. ol
4. menu
5. dir

#### li

- The HTML `<li>` element is used to represent an item in a list. It must be contained in a parent element: an ordered list (`<ol>`), an unordered list (`<ul>`), or a menu (`<menu>`). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.

#### ul

- The HTML `<ul>` element represents an unordered list of items, typically rendered as a bulleted list.

#### ol

- The HTML `<ol>` element represents an ordered list of items — typically rendered as a numbered list.

#### menu

- The HTML `<menu>` element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.

#### dir

- The HTML `<dir>` element is a container for directory information — a listing of files and folders, possibly with icons, hierarchical listings, etc. It was part of HTML 2.0, but has been deprecated in HTML 4.01, and is not supported in HTML5.

## Table elements

1. Table
2. th
3. tr
4. td
5. caption

#### Table

- The HTML `<table>` element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

#### th

- The HTML `<th>` element represents a header cell in a table. If its `scope` attribute is not set, it is automatically set to `col` for header cells that are a child of a `<colgroup>` element, and `row` for all other header cells.

#### tr

- The HTML `<tr>` element defines a row of cells in a table. It's a container for `<th>` and `<td>` elements.

#### td

- The HTML `<td>` element defines a cell of a table that contains data. It participates in the table model.

#### caption

- The HTML `<caption>` element represents the title of the table that is its parent, if it has a parent and that is a table element.

## Table elements properties

1. Rowspan
2. Colspan
3. caption
4. border
5. width
6. align
7. bgcolor
8. Valign
9. bordercolor
10. cellspacing

#### Rowspan

- The `rowspan` attribute of the HTML `<td>` and `<th>` elements defines the number of rows a cell should span. The value of the attribute should be a number greater than or equal to 1.

#### Colspan

- The `colspan` attribute of the HTML `<td>` and `<th>` elements defines the number of columns a cell should span. The value of the attribute should be a number greater than or equal to 1.

#### Caption

- The `caption` attribute of the HTML `<table>` element specifies the table caption. The value of the attribute should be a valid non-empty caption.

#### Border

- The `border` attribute of the HTML `<table>` element specifies the width of the border around the table. The value of the attribute should be a non-negative integer.

#### Width

- The `width` attribute of the HTML `<table>` element specifies the width of the table. The value of the attribute should be a valid length.

#### Align

- The `align` attribute of the HTML `<table>` element specifies the horizontal alignment of the table. The value of the attribute should be a valid horizontal alignment.

#### Bgcolor

- The `bgcolor` attribute of the HTML `<table>` element specifies the background color of the table. The value of the attribute should be a valid color.

#### Valign

- The `valign` attribute of the HTML `<table>` element specifies the vertical alignment of the table. The value of the attribute should be a valid vertical alignment.

#### Bordercolor

- The `bordercolor` attribute of the HTML `<table>` element specifies the color of the border around the table. The value of the attribute should be a valid color.

#### Cellspacing

- The `cellspacing` attribute of the HTML `<table>` element specifies the horizontal and vertical space between cells. The value of the attribute should be a non-negative integer.

## Form elements

1. Form
2. Input
3. Select
4. Option
5. Textarea
6. Button
7. Label
8. Fieldset
9. Legend

#### Form

- The HTML `<form>` element represents a document section that contains interactive controls to submit information to a web server.

#### Input

- The HTML `<input>` element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.

#### Select

- The HTML `<select>` element represents a control that provides a menu of options.

#### Option

- The HTML `<option>` element is used to define an item contained in a `<select>`, an `<optgroup>`, or a `<datalist>` element. As such, `<option>` can represent menu items in popups and other lists of items in an HTML document.

#### Textarea

- The HTML `<textarea>` element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

#### Button

- The HTML `<button>` element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.

#### Label

- The HTML `<label>` element represents a caption for an item in a user interface.

#### Fieldset

- The HTML `<fieldset>` element is used to group several controls as well as labels (`<label>`) within a web form.

#### Legend

- The HTML `<legend>` element represents a caption for the content of its parent `<fieldset>`.

## Form elements properties

1. type
2. name
3. value
4. checked
5. disabled
6. readonly
7. size
8. maxlength
9. src
10. alt
11. selected
12. multiple
13. id
14. for
15. action
16. method
17. enctype
18. target
19. placeholder
20. required
21. autofocus
22. autocomplete
23. novalidate

#### Type

- The `type` attribute of the HTML `<input>` element defines the type of control to display. The value of the attribute should be a valid MIME type.

#### Name

- The `name` attribute of the HTML `<input>` element defines a name for the element. The value of the attribute should be a valid non-empty name.

#### Value

- The `value` attribute of the HTML `<input>` element defines a default value which will be displayed in the control on page load. The value of the attribute should be a valid non-empty value.

#### Checked

- The `checked` attribute of the HTML `<input>` element indicates that the control is selected by default, i.e. that it is checked on page load. The value of the attribute should be a valid boolean.

#### Disabled

- The `disabled` attribute of the HTML `<input>` element indicates that the user cannot interact with the control. The value of the attribute should be a valid boolean.

#### Readonly

- The `readonly` attribute of the HTML `<input>` element indicates that the user cannot modify the value of the control. The value of the attribute should be a valid boolean.

#### Size

- The `size` attribute of the HTML `<input>` element defines the width of the control, in characters. The value of the attribute should be a valid non-negative integer.

#### Maxlength

- The `maxlength` attribute of the HTML `<input>` element defines the maximum number of characters (as UTF-16 code units) the user can enter. The value of the attribute should be a valid non-negative integer.

#### Src

- The `src` attribute of the HTML `<input>` element defines the URL of the image to use as the graphical submit button. The value of the attribute should be a valid non-empty URL potentially surrounded by spaces.

#### Alt

- The `alt` attribute of the HTML `<input>` element defines an alternate text for the image defined by the `src` attribute. The value of the attribute should be a valid non-empty string.

#### Selected

- The `selected` attribute of the HTML `<option>` element indicates that the option is selected by default. The value of the attribute should be a valid boolean.

#### Multiple

- The `multiple` attribute of the HTML `<select>` element indicates that multiple options can be selected at once. The value of the attribute should be a valid boolean.

#### Id

- The `id` attribute of the HTML `<label>` element defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).

#### For

- The `for` attribute of the HTML `<label>` element represents the relationship between the label, and the labeled form control.

#### Action

- The `action` attribute of the HTML `<form>` element defines the location to which the form's collected data will be sent when the form is submitted. The value of the attribute should be a valid non-empty URL potentially surrounded by spaces.

#### Method

- The `method` attribute of the HTML `<form>` element defines the HTTP method that the browser uses to submit the form. The value of the attribute should be a valid HTTP method.

#### Enctype

- The `enctype` attribute of the HTML `<form>` element defines how the form data should be encoded when submitting it to the server. The value of the attribute should be a valid MIME type.

#### Target

- The `target` attribute of the HTML `<form>` element defines the browsing context in which to open the response that is received after submitting the form. The value of the attribute should be a valid browsing context name.

#### Placeholder

- The `placeholder` attribute of the HTML `<input>` element defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. The value of the attribute should be a valid non-empty string.

#### Required

- The `required` attribute of the HTML `<input>` element indicates that the user must fill in a value before submitting a form. The value of the attribute should be a valid boolean.

#### Autofocus

- The `autofocus` attribute of the HTML `<input>` element indicates that the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. The value of the attribute should be a valid boolean.

#### Autocomplete

- The `autocomplete` attribute of the HTML `<input>` element indicates whether the value of the control can be automatically completed by the browser. The value of the attribute should be a valid boolean.

#### Novalidate

- The `novalidate` attribute of the HTML `<form>` element indicates that the form shouldn't be validated when submitted. The value of the attribute should be a valid boolean.

## Form methods

1. GET
2. POST
3. Action

#### GET

- The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

#### POST

- The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

#### Action

- The action attribute defines the action to be performed when the form is submitted. Typically, the action is a server page that handles the form input.

## HTML Media

1. Audio
2. Video
3. Source
4. Track
5. Embed
6. Object
7. Iframe

#### Audio

- The HTML `<audio>` element is used to embed sound content in documents. It may contain one or more audio sources, represented using the `src` attribute or the `<source>` element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a `MediaStream`.

#### Video

- The HTML `<video>` element is used to show video streams or videos stored on an Android device (or connected to a computer). It may contain one or more video sources, represented using the `src` attribute or the `<source>` element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a `MediaStream`.

#### Source

- The HTML `<source>` element allows authors to specify multiple alternative media resources for media elements (`<picture>`, `<audio>`, and `<video>`). It does not represent anything on its own.

#### Track

- The HTML `<track>` element is used as a child of the media elements `<audio>` and `<video>`. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files).

#### Embed

- The HTML `<embed>` element represents a integration point for an external application or interactive content (in other words, a plug-in).

#### Object

- The HTML `<object>` element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.

#### Iframe

- The HTML Inline Frame element (`<iframe>`) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frameset, but not both a body and a frameset.
