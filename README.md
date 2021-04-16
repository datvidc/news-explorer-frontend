# FINAL project in Practicum WebDeveloper Bootcamp

Project consists of integrating news API with own backend, serving a frontend that enables users to search for news articles.

Practicum by Yandex course overview:

Basics of HTML, CSS:
Advanced HTML & CSS
Adaptive Web Design and Working with Layouts
Basic JavaScript and Working with the Browser
Applied JavaScript
Creating an Interface with React
Back-end Basics for Web Developers
Final Project

## Backend : 
API Repo can be found at 
https://github.com/datvidc/news-explorer-api

Live API can be found at
api.dave.students.nomoreparties.site https://api.dave.students.nomoreparties.site http://api.dave.students.nomoreparties.site


# Learnings
- never code a single font - always add system fonts
- Code the most expensive option first. 
- Aim for screensizes specified - do responsiveness in-between.
- check Figma on new screens. My old screens do not show ANY grey, but a whole section is grey
- sometimes chrome misbehaves. Restart often. Also, window.innerWidth gives wrong pixel count...why ? 
  Use window.screen.width for some reason this shows correct. 
- Take the time- document your API in/Out - this helps always. 
- When in doubt - control formats excessively. Third Parties change formats all the time... 
- never work with crappy dataformats. Always FORCE THEM TO BEND TO YOUR WILL. First time you touch them, change them. 
  this will save time...wish I had done it here.



{
    "_id": "60666432161cbb48f32c2d1c",
    "keyword": "yay",
    "title": "Yay is yay",
    "text": "yay is text",
    "date": "Monday",
    "source": "http://www.website.is",
    "link": "http://www.website.com",
    "image": "http://photo.website.is",
    "owner": "60540ceed1ccba35d1986789",
    "createdAt": "2021-04-02T00:24:18.426Z",
    "__v": 0
}
{
    "source": {
        "id": null,
        "name": "New York Times"
    },
    "author": "Dave Philipps and John Ismay",
    "title": "Veterans React to Biden's Afghanistan Troop Pullout Announcement",
    "description": "President Biden’s decision to withdraw American troops from Afghanistan by Sept. 11 is met with relief and anguish, frustration and regret among those who served there.",
    "url": "https://www.nytimes.com/2021/04/14/us/afghanistan-veterans-biden.html",
    "urlToImage": "https://static01.nyt.com/images/2021/04/14/us/politics/14veterans-afghanistan1/14veterans-afghanistan1-facebookJumbo.jpg",
    "publishedAt": "2021-04-14T22:57:04Z",
    "content": "Ms. Byrnes now works for Disabled American Veterans, and sees people every day who were wounded in war. She said she thought pulling out was a hard choice, but the right choice.\r\nIts tough to not get… [+1265 chars]"
}


title
keyword = keyword
text = description
date =publishedAt 
source = source.name
link = url
image = urlToImage



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
