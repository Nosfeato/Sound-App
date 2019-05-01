# Technical Project Presentation
                                             
## Overall strategy

The task has been laid out in a document, but its important to think about who will benefit from this project.
A client won't just need a play button and won't just need a audio file reader system. Taking into account Audionamix's clients, he is going to need features outside of the simple " add file && play all files" system. Also, the audio tracks must be played at the **SAME TIME** to ensure the usefulness of the web-app. 

In other words the necessary elements of this project are as follows:

- *File drag & drop system (for fast and confortable file loading , as well as future management)*
- *Synchronous audio Play and Pause function*
- *Responsive css (to respect the given task which aims to provide a universal app )*
- *Visual layout of the audio track (for style and easy to use functional sound engeneering)*

Point 1-3 will be developped for the V1 of the app, as they represent the basic functions of our app.
Point 4 ( and later points ) will be developped for the V2 of the app, as it represent a bonus feature more then a necessity.

## Technologies used

React.js was the main technology given by the task makers. However we must first ensure that this choice constitutes the optimum logical solution to the client's needs. Indeed, React is the easiest Javascript framework to learn while also being lightweight and easily mobile-adaptable (with React Native). Angular would be an intresting alternative depending on the size of the App, while Vue has a harder to find developper community despite its recent growth. France (the location where our app is being produced) doesn't have a lot of Vue.js developpers, compared to Angular and React. Vue.js is therefor not a good option yet for our app, especialy if we take into account the performances which are near but actualy lower then React's and Angular's performances.

In other words the choice depends on using either Angular or React. While Angular has a steeper learning curve, meaning it is hard to find inexperienced developpers in that technology, React on the other hand can be mastered relatively quickly. The performances are slightly better using Angular, but most of that performance gain is due to the usage of Typescript and the scale of the app. In contrast React.js has a faster performance with lighter applications as it is a library and not a framework unlike Angular and Vue.js. Our app is relatively small , and while it is easier and cleaner to code in Vue.js , the flexibility and readability of React.js , as well as not overloading the app dependencies, can lead to a faster, easier to maintain, scalable app , with a strong developper base (though Vue.Js is growing fast). React.js is therefor the perfect pick for the app, and will allow the company to find more developpers if needs be then Vue.js , while maintaining a clean code with a lower learning curve.

However, the use of React.js also implies the use of the right dependencies, for SEO, code organisation and code testing and deployment.
We will therefor need the following dependencies:

- Webpack (for testing and compiling the app while minifying and sanatysing the code)
- Babel (to allow the reading of our app for testing, otherwise Webpack dev server can't work)
- Eslint (all the eslints related to the use of React, based on the airbnb practices which are recognized world-wide as one of the best practices)
- Autoprefixer (for faster development, it won't affect the app compiling)
- Css, file, sass and Babel loader (for production and testing, Babel isn't made to translate all languages, it translates a specific set of languages and file formats. So we need a loader for the CSS, files and Sass which we will use for adaptable/reusable responsive code).
- React affiliated dependencies ( prop-types, classnames)
- Redux ( necessary for a scalable app development in React )
- uuidv4 (to provent React component key mapping issues)


## Project layout

Each components should have an index.js and affiliated **NAMED** css file in order to increase import/development speed while keeping an easily reorganisable code (that way future reorganisation only requires to drag and drop and almost evrything will work without needing to recode imports). Indeed we will use relative and not absolute path for our imports to increase the flexibility of our app.

Components should respect the following web and React standards and organisation:

- Dependencies imports.
- Component imports (optional)
- Pascal case class names (functions may be use in the event that we know the component will not require a state or use of lifecycles, or other React class related technologies)
- props and state constants layout.
- Jsx React fragments
- Jsx
- default exports

All repeatable code should be stored in a "helpers" folder.
This organisation will insure a clean code where evry Javascript file has its own particular use, allowing a perfect (or near perfect) organisation of the code, as well as optimise its readability. After all we are using React, might as well use it to the maximum of its capabilities.

## Projects potential issues/technicalities

Cyber-security is defenetly going to be an issue with this project. The technology for dynamic imports and audio file imports in React is still in alpha since before November 2018 and has been a major issue since HTML5, meaning we can't use that to code a perfectly efficient and uninjectable code , as we will have to pass values around, which are values protected by default in browsers. File pathing will have to be made through an encrypted temporary path, which might create an issue during saves. If that is so we will have to first upload the files to a database to then create the temporary path otherwise the app will not work. Luckily no database is needed for this front-end task so we only have 2 out of 3 issues to deal with, but the true project might face this issue.

Special attention should be placed on the synchronous actions in regards to our audio files. There should be no shifts between tracks when pressing the overall PLAY or PAUSE buttons.

To ensure a responsive web-app we will need to use "rem" and "em" measures. Pourcentages are allowed but should be used with caution. Any other measures are **NOT** to be used. This will allow for our app to be adaptable to any media query with 5 lines of codes per device width, therefor increasing development speed and code flexibility and efficiency (always a bonus for SEO purposes).

## How to test ?

1. Install yarn localy (or globaly if you think you will reuse yarn )
2. Clone the repository (open command prompt and type "git clone https://github.com/Nosfeato/Sound-App.git" then press enter)
3. In the command prompt, once the cloning is finished, please write "cd Sound-App" then press enter(this should put you inside the necessary folder for the upcoming commands).
4. In the command prompt write "yarn" and press enter (this will load the app with all the dependencies , allowing it to work)
5. Once that is done, write "yarn start" (this will start the development build , its the same thing as doing "npm run build:dev")
6. Wait a few seconds for the script to load then your browser should automaticaly open with the App !


Have fun ! :D
