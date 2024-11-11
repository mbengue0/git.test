# Exercise 1: Basic Form Validation

Create a form with the following fields:

- **Name** (text field)
- **Email** (text field)
- A submit button

When the user clicks the submit button, validate the form:

The "Name" field should not be empty.
The "Email" field should contain a "@" symbol.

If validation fails, display an error message under the form.

```html
<form id="userForm">
  <label for="name">Name:</label>
  <input type="text" id="name">
  <br>
  <label for="email">Email:</label>
  <input type="text" id="email">
  <br>
  <button type="button" onclick="validateForm()">Submit</button>
  <p id="errorMessage"></p>
</form>
```

# Exercis 2: Interactive Color Changer

Create a button that changes the background color of a <div> element to a random color every time it is clicked.

```html
<div id="colorBox" style="width: 200px; height: 200px; background-color: lightgray;"></div>
<button onclick="changeColor()">Change Color</button>
```


# Exercise 3: Show and Hide Content

Create a button that toggles the visibility of a paragraph. The paragraph should initially be visible. When the button is clicked, the paragraph should hide or show alternately.
- `hint` you can use the css display property

HTML Structure:

```html
<p id="text">This is some content that can be shown or hidden.</p>
<button onclick="toggleText()">Toggle Text</button>
```
# Exercise 4: Simple Image Gallery

Create a simple image gallery where the user can click on one of the three thumbnails and display the larger version of the image.

HTML Structure:

```html
<div>
    <button onclick="showImage('js.png')" type="button">Display JS</button>
    <button onclick="showImage('python.png')" type="button">Display Python</button>
    <button onclick="showImage('c-logo.png')" type="button">Display C++</button>
</div>
<img id="displayImage" src="" alt="Large Image" style="display:none;">
```

# Exercise 5 : Simple Calculator
Create a simple calculator that takes two input numbers and performs addition, subtraction, multiplication, or division based on the user’s choice from a dropdown menu. Display the result below the form when the user clicks the "Calculate" button.

- `hint` you can use parsefloat function to parse correctly the inputs

HTML Structure:

```html
<form id="calculator">
  <label for="num1">Number 1:</label>
  <input type="number" id="num1">
  <br>
  <label for="num2">Number 2:</label>
  <input type="number" id="num2">
  <br>
  <select id="operation">
    <option value="add">Add</option>
    <option value="subtract">Subtract</option>
    <option value="multiply">Multiply</option>
    <option value="divide">Divide</option>
  </select>
  <br>
  <button type="button" onclick="calculate()">Calculate</button>
  <p id="result"></p>
</form>
```