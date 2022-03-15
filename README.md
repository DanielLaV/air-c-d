<h1 align="center"> Aircnd </h1>
<img width="1326" alt="image" src="https://user-images.githubusercontent.com/58845762/158475195-f6f1b688-b650-4984-aae7-b785fa9a3953.png">

Aircnd is an Airbnb clone specializing in cats and dogs. Customers who are unable to own a pet can rent others' pets for a bit. This website was designed as a Week 16 project as part of App Academy's 24-week Full Stack Software Engineering Bootcamp, built in under a week.

This is perfect for:
* Pet-lovers who are too allergic to adopt  
* Pet-lovers who can not own a pet 
* Potential pet owners who want to test their compatibility with a specific animal or breed
* Introducing children to a friendly animal
* Anyone who wants to meet more pets!

<a href="https://air-cnd.herokuapp.com/">Live Site</a>  |  <a href="https://github.com/DanielLaV/air-c-d/wiki"> Project Wiki</a> | <a href="https://github.com/DanielLaV/air-c-d/issue">Report Bug</a> 

## Technologies Used
[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | [Node.js](https://nodejs.org/en/) | [Express](https://expressjs.com/) | [React](https://reactjs.org/) | [Redux](https://redux.js.org/) | [Sequelize](https://sequelize.org/) | [PostgreSQL](https://www.postgresql.org/)

## Launching Locally

### Prerequisites
 - [Node.js 16.13.1](https://nodejs.org/en/)

### Getting Started

1. Clone the project repository
```
   git clone https://github.com/DanielLaV/air-c-d.git
```
2. Install dependencies
```
   cd backend
   npm install
```

3.  Create a local .env file modeled after the .env.example file in the root directory
```
   SECRET_KEY=<<YOUR-SECRET_KEY>>
   DATABASE_URL=postgresql://aircnd_dev:<<PASSWORD>>@localhost/aircnd_db
```
4. Set up your PostgreSQL user, password, and database. Make sure that it matches your .env file!

5. Access your PostgreSQL database, migrate your database, seed your database, and run your app with the following commands:
```
    cd backend
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
```

6. To run the React App, `cd` into the `frontend` directory, install `react-app`, and then start React:
 ```
    cd frontend
    npm install
    npm start
 ```

### User Registration and Authentication
New users can register for an account by entering a unique username, email and a secure password.
<p align='center'>
<img width="277" alt="signup" src="https://user-images.githubusercontent.com/58845762/158478320-c4e6ea28-fc2a-466d-a0b5-ceb3231314c6.png">

</p>

Existing users can log in to their account by submitting their credentials via the login form.
<p align='center'>
<img width="283" alt="login" src="https://user-images.githubusercontent.com/58845762/158478274-e66cffb8-e6e1-454b-bf4f-530d1565769f.png">
</p>

Users may log out of their account by clicking the **LOGOUT** button on the site-wide header.

### Adding a new pet
Logged-in users can add a new pet with a name, type, and image URL. Pets should also be checked if they are kid-friendly.
<p align='center'>
<img width="268" alt="newPet" src="https://user-images.githubusercontent.com/58845762/158478852-62ae08d8-b0e7-4751-a544-1edee1511741.png">
</p>

All users can view the pet information. Pet owners can only edit or delete their own pets.
<p align='center'>
<img width="573" alt="editDeletePet" src="https://user-images.githubusercontent.com/58845762/158478956-dba2017b-3c2a-428a-adfe-b8d18f6f2cd4.png">
</p>

When modifying a pet's information, an Edit form will populate with the pet's current information. Users will be able to edit all of the pet's information.


## Technical Implementation
### Database Design
The full database schema is available to view [on dbdiagram.io](https://dbdiagram.io/d/61da1895f8370f0a2ee71396), or as a [list of tables on the Database Schema page](https://github.com/DanielLaV/air-c-d/wiki/Database-Schema) of the wiki.



### Frontend Routes
Frontend routes were designed to enable users access to basic functionality such as registration, authentication, adding and viewing pets.

### API Routes
API routes were designed for users to interact with a page without being redirected.
   </br>


### Improved User Experience

#### **Site-wide Responsiveness**

The website is currently functional on all screen sizes, but is styled for screens greater than 900 px in width. New smaller-scale layouts will be implemented so that the user experience on mobile or tablet devices is comparable to the desktop user experience.



## Creator
**Daniel LaVergne** | <a href='https://github.com/DanielLaV'>Github</a> | <a href='https://www.linkedin.com/in/daniel-lavergne-137772206/'>LinkedIn</a></br>

* Enjoy!
