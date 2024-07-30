# Movie App

This is a Movie App built with Angular that allows users to browse through a list of movies, view detailed information about each movie, and manage their accounts. Users can log in, sign up, or sign in using Google or anonymously.

## Features

- **Authentication:**
  - **Login:** Users can log in with their credentials.
  - **Google Sign-In:** Users can sign in with their Google account.
  - **Anonymous Sign-In:** Users can sign in anonymously without creating an account.
  - **Sign-Up:** Users can create a new account by providing a username, email, and password.

- **Registration:**
  - Users can sign up with a username, email, and password.
  - After successful registration, users are redirected to the login page.

- **Movie List:**
  - Once logged in, users can see a list of movies.
  - Each movie has a "Details" button that navigates to a detailed page for the movie.

- **User Header:**
  - Displays the logged-in user's name.
  - Provides a logout option.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/LeksoKashia/komokie
   npm i
   ng s
