# PI LIFE

## Overview

This project is a NodeJS application with MongoDB and Mongoose technologies. It features a user-friendly interface with five main pages, each serving a different purpose. The backend is built using Express, with multiple APIs for handling data retrieval and posting on the frontend.

## Pages

### 1. User Profile Page

- **Description:** Displays user information, including name, email, description, and data.
- **File Creation:** Allows users to create files containing specific data.

### 2. Calendar/Reminder Page

- **Functionality:** Displays a calendar for the current month.
- **Navigation:** Users can switch between months.
- **Note Adding:** Users can add short notes with any date.
- **Storage:** Notes are stored in MongoDB, associated with the corresponding date.

### 3. To-Do List Page

- **Functionality:** Allows users to create and manage a to-do list.
- **Storage:** All to-do data is stored in MongoDB, including task status and the ability to create multiple to-dos.

### 4. Notes File Creation Page

- **Functionality:** Enables users to create large text files.
- **Storage:** Files are stored in MongoDB along with the date, data, and file name.

### 5. Data Display and Update Page

- **Functionality:** Displays user data and allows updates to files.
- **Backend:** Utilizes Express to handle multiple APIs for getting and posting data.
- **Server:** The server runs on port 5000.
- **Client:** The client-side application runs on port 5500.

## Backend

The backend of this project is built using the Express framework for NodeJS. It offers a set of APIs that handle data retrieval and posting on the frontend. These APIs facilitate communication between the server and the client.

## How to Run

1. **Install Dependencies:**
   ```bash
   npm install
   ```

## Open the `PI-Life` folder in your preferred Integrated Development Environment (IDE) or Visual Studio Code.

cd PI-Life

## Navigate to the terminal within the `PI-LIFE` directory.

# Enter the following commands:

1.**Client Server:**
This command initializes the Graphical User Interface (GUI) and starts the client-side server, accessible on port number 5500. Access it through the hyperlink [http://localhost:5500](http://localhost:5500). 1.**Client Server:**

```bash
npm start
```

2.**Application Server:**
This command initiates the server for the application, running on port number 5000. It establishes a connection between the MongoDB database and the client-side server using APIs.

```bash
npm server
```
