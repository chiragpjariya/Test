Section 2: React Router DOM (1 Hour)
Task 1: Basic Navigation with React Router (20 Minutes)
Create a React app with three pages:
1. Home: A simple homepage with a welcome message.
2. About: An About page with some information about the app.
3. Contact: A Contact page with a dummy form (can be a placeholder form).
Use React Router DOM to set up navigation between these pages.
Requirements:
● Use BrowserRouter, Route, and Link from react-router-dom.
● Implement simple navigation to switch between these pages without reloading the
page.
● Display a navbar with links to "Home," "About," and "Contact."


///////////////////////////////////////////////////////////////////////////////////

Task 2: Dynamic Routing (20 Minutes)
Create a blog-style app with two pages:
1. Home Page: Displays a list of blog posts (use static data like post titles and IDs).
2. Post Page: When a user clicks on a post title, they should be redirected to a detailed
post page. The URL should be dynamic (e.g., /post/1, /post/2).
Requirements:
● Use useParams to fetch the post ID and display the post content.
● Set up dynamic routes with Route and pass dynamic values via the URL.
● Display the post content only after navigating to the detailed post page.

///////////////////

not commplete

Task 3: Protected Route (20 Minutes)
Create a protected route for an Admin page that can only be accessed when a user is
logged in.
● Show a login page if the user is not logged in and prevent access to the Admin page
until the user logs in.
● For simplicity, use useState to simulate the login state (e.g., a boolean
isLoggedIn).
Requirements:
● Use Route and Navigate to redirect users based on the login state.
● Implement the login page and show a message saying "You are logged in" when the
user is authenticated.