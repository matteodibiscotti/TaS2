To view this project:

1. Navigate to the following URL [INSERT URL HERE]

To launch this project:

Running on the local machine (assuming that nodejs and npm are installed):

1. Clone the Github repository.
2. Navigate to the root directory for the project.
3. Run the command 'npm install' which will install the required dependencies for this application
4. Run the command 'npm start &' to start the
5. Navigate to http://localhost:3000/ to start run the application locally.
6. Note that as the database is connected with mLab, some parts of the application may not function.

Deploying this project on Heroku:

1. Create a Heroku account
2. Run 'heroku login', and login to Heroku using your credentials.
3. Run 'heroku create' to generate a website URL.
4. Run 'git init', 'git add .' to add the entire repository, 'git commit -m "Commiting TaS project"'
5. Run 'git push heroku master' to push the entire repository to Heroku.
6. Run '% heroku ps:scale web=1' to start Heroku, and then navigate to the generated URL to see the project!

To run the automated tests:

1. Run 'npm test'. 

To run the automated user interface tests:

1. Install the Selenium IDE addon for Firefox, from https://addons.mozilla.org/en-us/firefox/addon/selenium-ide/
2. Start Selenium IDE from the developer tools in the browser, and run the test suite 'TaS_Selenium_Tests'


Further information about our project, including a description of the architecture,
can be found in the webpage.
