# React Search List

## Description
This is a React-based web application designed to display a list of cards fetched from a JSON file. The application provides a search functionality that allows users to search for specific text across all fields available in the JSON data. Upon typing in the search input box, the search results list dynamically updates to display cards matching the search query. The matching text in the search results is highlighted in blue, and if the search query is found within the items, it displays a message indicating the presence of the query value.

## Features
1. **Search Functionality**: Users can search for text across all fields available in the JSON data.
2. **Dynamic Search Results**: Search results list updates dynamically as the user types in the search input box.
3. **Text Highlighting**: Matching text in search results is highlighted in blue.
4. **Feedback on Search**: If the search query is found in items, it displays a message indicating the presence of the query value.
5. **Keyboard and Mouse Navigation**: Users can navigate through the list of cards using either keyboard or mouse.
6. **Single Card Highlighting**: Only one card is highlighted at a time, regardless of whether keyboard or mouse navigation is used.
7. **Preference Handling**: Keyboard navigation takes precedence if the mouse is hovered on the list, and vice versa.
8. **Empty Card Display**: When no search results are found, an empty card is displayed.
9. **Scrollable Card List**: The list of cards is scrollable.
10. **Scroll Into View**: The highlighted card (via keyboard/mouse) will scroll into view.

## Evaluation Criteria
1. **Modularity of Code**: The codebase is structured into modular components, promoting code reusability and maintainability.
2. **Handling of Keyboard Navigation with Mouse**: The application effectively handles both keyboard and mouse navigation, ensuring a seamless user experience.
3. **Handling Scroll Into View**: The implementation appropriately handles scrolling the highlighted card into view using refs.

## Requirements
- React
- No jQuery
- No fancy CSS (except for card structure)
- Do not use a library for handling ScrollIntoView


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

