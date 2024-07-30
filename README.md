# iTask To-Do App
## You can see the Deployed project over here : https://itask-my-todo-buddy.vercel.app/

### Home Page
![Screenshot 2024-07-30 200152](https://github.com/user-attachments/assets/7be9596b-0cc2-466d-b5ee-c5cc3dc2317b)

### TODO Page
![Screenshot 2024-07-30 200457](https://github.com/user-attachments/assets/18a410f3-bc6d-45fb-a53f-91328e03c145)

## Overview
iTask is a Todo List application built using React, designed to help users manage their tasks efficiently. The app provides functionalities for adding, editing, completing, and searching tasks. It uses a dummy JSON file as a data repository and displays tasks in an expandable list format, showcasing details such as descriptions and timestamps of the last updates.



## Features
### Core Features
Create Task: Allows users to add new tasks to the list.
Update Task: Enables users to edit the details of existing tasks.
Mark as Done: Users can mark tasks as completed, distinguishing them from active tasks.
Search Tasks: Users can search for specific tasks using keywords.
Expandable List: Tasks are displayed in an expandable list format, revealing a description and the timestamp of the last update when expanded.
### Additional Features
Server-Side Rendering (SSR): Not applicable as the project does not utilize Next.js.
URL Parameters: Search functionality is managed using URL parameters, allowing for direct linking to filtered task views.
Good Styling and Alignment: The application features a user-friendly interface with visually appealing styling and alignment.
## System Design
The application is built using React, ensuring modularity and maintainability. The core components include:

App Component: The root component responsible for managing the overall state of the application, including tasks and search queries.
TaskList Component: Displays the list of tasks and handles the expansion of task details.
Task Component: Represents individual tasks, providing options for editing, marking as done, and expanding to show additional details.
SearchBar Component: Offers search functionality to filter tasks based on user input.
## Implementation
### Main Components
#### App Component:

Manages the global state of the application.
Handles CRUD (Create, Read, Update, Delete) operations on tasks.
Coordinates the flow of data between child components.
#### TaskList Component:

Renders the list of tasks.
Manages the expanded state of each task to show/hide additional details.
#### Task Component:

Displays individual task details, including title, description, and timestamp.
Provides UI elements for editing task details, marking tasks as completed, and toggling the expanded view.
#### SearchBar Component:

Provides an input field for users to enter search queries.
Updates the search state and filters the displayed tasks based on the input.
## State Management
State is managed using React's useState and useEffect hooks.
The application's state includes:
Tasks List: An array of task objects containing properties like id, title, description, completed status, and timestamp.
Search Query: A string representing the current search input, used to filter the displayed tasks.
## Data Storage
A dummy JSON file is used to simulate a data repository.
This file is loaded when the application starts, and all CRUD operations are performed on this data.
## Search Functionality
Search queries are handled using URL parameters.
The useEffect hook monitors changes to the search query and filters the task list accordingly.
Users can directly navigate to specific filtered views by modifying the URL parameters, making the search feature more dynamic and shareable.
# How to Run the Project
## Clone the repository:

bash
Copy code
git clone https://github.com/your-username/iTask-ToDo-App.git
cd iTask-ToDo-App
## Install dependencies:

bash
Copy code
npm install
## Start the development server:
bash
Copy code
npm start
The app will run on http://localhost:3000.

bash
Copy code
npm start
The app will run on http://localhost:3000.
