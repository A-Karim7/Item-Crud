# Getting Started

## Step 1: Setup React Native Environment
Ensure you have the React Native environment set up on your machine. You can follow the instructions on the React Native Getting Started page.

## Step 2: Initialize the React Native Project
Create a new React Native project using the following command:
      npx react-native init CrudApp
      cd CrudApp

## Step 3: Install Required Packages
Install  Packages: Redux Toolkit, React Redux and Axios
      npm install @reduxjs/toolkit react-redux axios

## Step 4: Config files
We have 4 files apiSlice, store, App and ItemList
1. /src/services/apiSlice.js
This file is responsible for defining the API endpoints and generating hooks to interact with these endpoints.
->createApi: This function creates a slice of the Redux store to manage API data.
->fetchBaseQuery: A default base query that handles fetching from a given base URL.
->endpoints: Defines the various API operations:
      *getItems: Fetches the list of items.
      *addItem: Adds a new item.
      *updateItem: Updates an existing item by ID.
      *deleteItem: Deletes an item by ID.
->Exported Hooks: Hooks are automatically generated for each endpoint to be used in React components.

2. /src/store.js
This file configures the Redux store, integrating the apiSlice created in the previous step.
->configureStore: A function from Redux Toolkit that sets up the Redux store.
->reducer: Integrates the apiSlice reducer into the Redux store.
->middleware: Adds the middleware from apiSlice to handle caching, invalidation, polling, and other RTK Query features.

3. /App.js
This is the entry point of the React Native application, wrapping the application in the Redux Provider.
->Provider: A component from react-redux that makes the Redux store available to the rest of the app.
->store: The Redux store configured in store.js.
->ItemList: The main component that displays the list of items and provides CRUD functionality.

4. /src/components/ItemList.js
This component handles the display and interaction of items.
->State Management: Uses local state (newItem) to handle the input for adding new items.
->API Hooks: Uses the hooks generated by apiSlice to interact with the API:
      *useGetItemsQuery: Fetches the list of items.
      *useAddItemMutation: Adds a new item.
      *useUpdateItemMutation: Updates an item.
      *useDeleteItemMutation: Deletes an item.
->handleAddItem: Function to handle adding a new item.
->Conditional Rendering: Displays loading and error states.
->UI Components: Renders a list of items with update and delete buttons.

## Step 5: Set Up Simple API Server
We use JSON Server. Install it globally:
      npm install -g json-server

## Step 7: Create db file
Create a db.json file in your project root with initial data

## Step 8: Start the JSON Server:
Use command :
      json-server --watch db.json --port 3000

## Step 9: Running the Application
To run your application on an Android device or emulator:
      npx react-native run-android