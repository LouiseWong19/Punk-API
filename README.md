# Punk-API 
### Author - Louise Wong

## Introduction
A beer website was created with React and SCSS. Contained a search bar that allows the users to search the beers by name. 

### Technology Used:
- React
- SCSS

### Design 
The website has two sections, `NavBar` and `Main`. The logo uses the Brew Dog colour `#028da7`. A darker blue `#222831` is used in the background and `#EEEEEE` is used for the beer card and search bar.

## Description 
### App 
The App.jsx included the logic for fetching the data, filtering the search bar results and implementing the `NavBar` and `Main` containers on the webpage.
#### Fetching Beer data
`fetch` is used to fetch the API and the data is stored in the `useState`. `useEffect` is used to stop the fetching repeatedly.
#### Handling Search Bar value
A function `handleInput` is created to handle the input value of the search box. A `useState`,`[searchTerm, setSearchTerm]`, is used to store the search box input value. `handleInput` allows to set all the search term letters to lowercased.
#### Filtering the beer card
A variable `filteredBeer` is created to store the filtered beer array. `.filter` and `includes` are used to filter the beer card out and only display the user the beer card that includes the filtered term.
#### Returning components
In `App`, the `NavBar` and `Main` are returned to be displayed on the webpage. 

### Containers
Two containers have been created for this webpage, `NavBar` and `Main`. The `NavBar` container includes the `SearchBox` component with `searchTerm` and `handleInput` as the props. The `Main` container includes the `CardList` with `beerArray` as the prop which represents the array with details of different beers.

### Components
Three components are created, `SearchBox`, `CardList` and `Card`. The `SearchBox` component includes a form with text input that allows the user to type in a search term to search the beer. The `CardList` maps out the beer cards. The `Card` component has included all the information needed from the beer array to form a beer card. Information of the beer such as the image, name, pH and descriptions have been added as props in the `Card`.

## Roadmap
### Features to add
- Add the filtering feature

## Known Bug