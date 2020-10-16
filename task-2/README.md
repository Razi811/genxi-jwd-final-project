# Task 2: Implement your Wireframes using Bootstrap

## Description

For this task, we'll be implementing the basic HTML structure of your Wireframes design

## Walkthrough

### Step 1: Get familiar with Bootstrap
Get familiar with using the Bootstrap documentation by going through the website
> #### Useful Resources for this step
> - [Bootstrap Website](https://getbootstrap.com)
> - [Bootstrap Documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
> - [Bootstrap Starter Template](https://getbootstrap.com/docs/4.4/getting-started/introduction/#starter-template)


### Step 2: Create a basic template using the Bootstrap starter template.
1. On your computer, create your project folder with an appropriate name eg: mytaskplanner
2. Create an index.html file and use the following code to create a starter template
> - [Bootstrap Starter Template](https://getbootstrap.com/docs/4.4/getting-started/introduction/#starter-template)


### Step 3: Create a form for Adding a new task.
1. In your index.html, create an "Add Task" button using Bootstrap buttons
> - [Bootstrap Buttons](https://getbootstrap.com/docs/4.4/components/buttons/)
2. The "Add Task" button should link to open up an "Add Task form." Use Bootstrap Modals and Bootstrap Forms to achieve this.
> - [Bootstrap Modals](https://getbootstrap.com/docs/4.4/components/modal/)
> - [Bootstrap Forms](https://getbootstrap.com/docs/4.4/components/forms/#horizontal-form)
3. Create a layout similar to your mock designs using HTML and Bootstrap components
4. Verify that your "Add form" has the following elements
    > - 'Add Task' heading
    > - Name -> textbox
    > - Description -> textarea
    > - AssignedTo -> textbox
    > - DueDate -> textbox or datepicker [dd/mm/yyyy]
    > - Status -> Dropdown select box [TODO, IN PROGRESS, REVIEW, DONE]
    > - Submit button 
    > - Reset button 
5. Use appropriate names/ids for labels and input boxes
>- for example: 
    > - <label for="taskName">Task Name:</label>
    > - <input type="text" class="form-control" placeholder="Enter task name" id="taskName">

## Results

Your HTML design should display as expected, all form elements should be displayed correctly. 

## Example

Stuck? Check out the provided example in the [example/](example/) folder!