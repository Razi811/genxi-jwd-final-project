# Task 4: Create a function to validate the task form

## Description

Create a JavaScript function called `validateTaskForm` that verifies that the inputs inserted by the user in the task form are correct, according to the rules (see Step 2 below).

## Walkthrough

### Step 1: The Setup

In this step, we'll re-organise our folder structure in preparation for the next few steps.

1. Create a `js` folder in your project if one does not already exist
2. Copy the existing js file into this `js` folder, and rename it to `index.js`
3. Update the `<script>` tag in your `html` file so that the `src` attribute points to the new location of `js/index.js`.

### Step 2:

1. Create a function called `validateTaskForm` which will take form inputs as parameters. Create the code that checks that each value follows these rules:

- `Name` **is not empty** and **is longer than 8 characters**
- `Description` **is not empty** and **is longer than 15 characters**
- `AssignedTo` **is not empty** and **is longer than 8 characters**
- `DueDate` **is not empty** and **is not in the past**

  Return `false` if **any value** does not validate. If **all values** validate, then return `true`.

2. Create an event handler function for the form's `onSubmit` event. This will function will store variables for each of the form inputs. It will then pass these inputs to the `validateTaskForm` function for validation of the values the user entered. Refer to the final project rubric for task 4 to see what validation checks you need to make. And **don't forget** you need to prevent the default behaviour of the form also.

> #### Useful Resources for this step

> - Study the example code in `genxi-jwd-final-project/task-4/example/js/index.js`
> - [MDN web docs: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
> - [Bootstrap 4 Form Validation Documentation](https://getbootstrap.com/docs/4.0/components/forms/#custom-styles)

#### Test Your Code!

Use live-server or browsersync to load your page into the browser. Test your form out with a number of test cases to make sure it satisfies the requirements of the rubric.
