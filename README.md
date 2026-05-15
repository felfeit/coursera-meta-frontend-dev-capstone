# Little Lemon Restaurant Web App

This is the front-end capstone project for the Meta Front-End Developer Professional Certificate. It is a React web application for the Little Lemon restaurant, allowing users to browse the menu, view specials, and reserve a table.

## Features

- **Responsive Layout**: Designed mobile-first, ensuring an optimal viewing experience across all devices (desktops, tablets, phones).
- **Client-Side Routing**: Implemented using React Router DOM for seamless transitions between the homepage, booking page, and confirmation page.
- **Form Validation**: The booking form enforces both HTML5 attribute validation and React state-based validation. It ensures valid party sizes (1-10) and prevents submission until all required fields are filled.
- **Accessibility**: Includes semantic HTML structure (`<header>`, `<main>`, `<nav>`, `<section>`), appropriate form `<label>` associations, and essential ARIA attributes (`aria-label`) to support screen readers.
- **Unit Testing**: Developed robust automated tests utilizing React Testing Library to verify form static rendering, validation logic, and reducer behaviors.

## Setup Instructions

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository to your local machine.
2. Navigate into the project directory:
   ```bash
   cd littlelemon
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the application in development mode, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Running Tests

To launch the test runner in interactive watch mode, run:

```bash
npm test
```

## Project Architecture

- `src/components/`: Contains all modular, reusable UI components (e.g., `HomePage`, `BookingForm`, `Nav`).
- `src/App.js` & `src/components/Main.js`: Configures the global React Router setup and handles the main application state using the `useReducer` hook.
- External API Script: Fetches mock booking times and handles API submissions via the Coursera Javascript asset loaded in `index.html`.
