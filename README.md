# Github Issue

### Description

Web app show list of github issue. User able to highlight one selection at a time.
A new feed page to show up-to 5 most recent selection.

### Features

- Fetch and display github issue from <https://api.github.com/repos/rails/rails/issues?page=1&per_page=5>
- Fetch with fetch()
- Load 5 page, then next button to next 5
- On click highlights issue, 1 highlight at a time, double click = > toogle-highlight
- Notification counter and show recent five selection

### Dependencies

- fontawesome : for logo and icons
- bootrap : for styling
- moment : to caculate and render "x hours ago from created_at"
- react-spinners: for loading circle spinner
- redux : library for global state management
- redux-thunk: as middleware to call function in redux action

### Getting started

Please use `npm install` after `git-clone` this repo.
The app will run on <http://localhost:3000/> after `npm start`
There is no login/register required.
There is no env keys.

### Project structure

```
|- public\
    |- _redirects
|- src\
    |- components\
        |- Navbar
            |- PublicNavbar.js
        |- SingleIssue.js
        |- SingleIssue.css
    |- containers\
        |- HomePage.js
    |- redux\
        |- actions\
            |- issue.action.js
        |- constants\
            |- issue.constant.js
        |- reducers\
            |- issue.reducer.js
        |- store.js
    |- App.css
    |- App.js
    |- index.js

```

- `public/redirects`: configuration to fix netlify url 404 error
- `src/components/`: folder for simple stateless components : Navbar and Single Issue
- `src/containers/`: folder for stateful components : Homepage
- `src/redux/issue.actions`: set of all actions (issue and notification)
- `src/redux/issue.reducers`: set of all reducers and states (issue and notification)
- `src/redux/issue.constants`: set of all constants (issue and notification)
- `src/redux/store.js`: configuration of the store
- _Note_: because Notification Counter only have 1 small action, so I combined it within Issue.actions/constants/reducers

### Solution Flow

This is as walkthrough of the logic flow to my solution of the app.

##### Fetch and display list of issue with basic pagination

- Fetch 5 issues and store in redux state, render all 5
- Create state for current page in homepage, pagination will setCurrentPage
- Put fetch in useEffect with dependency is Current Page Number to fecth new page from API when current page changes

##### Highlight one selection at a time and toogle highlight as double click

- Redux state for currentHighlight to store latest selection.
  - State changes base on payload value of Select_Action which is {null or issueId}
  - Dispatch this action everytime select an issue with payload = issue.id
  - If the issue.id match state.id , dispatch this action with payload = null
  - If the issue.id match current state of currentHighlight, className [highlighted]. Style the highligh ui for the class.

##### Selection History and Notification Counter

- Redux state for selection history to store selection (max 5).

  - State changes base on payload value of Record_History
  - Dispatch this action everytime select an issue that have issue_id does not match current_highlight
  - Take 4 elements from index 0 of selection history, then add newest payload to the first possition.

- Dropdown menu style for notification with title is number of new notification, reset at seen.
  - Render all selection history
  - Redux state for number of unseen notification start at 0
  - Increase notification to + 1 whenever record history action success
  - Dispatch action reset notification counter to 0 when click to see dropdown list
  - Max 5 selection displayed, so only max 5 new notification show on counter. Reason is to make sure UI/UX concise with data display. (max 5 selection -> max 5 counter)

### Technical decision

1. How did you implement styling? What are the pros and cons? Why did you chose this approach?

   I use bootstrap to do most of the styling structure since the app is relative small so that would be the most efficent though it is quite unflexible.

   - pros : simple, easy to use, responssive
   - cons : Unflexible sometime, external libary risk,

   I also use inline CSS styling where there is logic , conditional that applied. Because it is more efficient and easier to manage the code where logic, variables and styling result are in 1 js file.

   - pros: utilize of ES6 template literal notation, easy to manage logics and variables that in 1 file .js
   - cons: unreusable

2. How did you share state between components? What are the pros and cons? Why did you chose this approach?

   I used both component state and pass from HomePage to SingleIssue by props as well as Redux to manage my state.

3. Did you use React hooks? Why or why not?

   Yes, I used React hooks.
   Because Im coding this app in functional component style which help make the code shorter

4. How did you prevent wasted renders?

   I use react hook useEffect(similar to ComponentDidMount) and dependencies(ComponentDidUpdate) to make sure app only render when there are change in these dependencies.

5. How did you handle side-effects (e.g. data fetching)? What are the pros and cons? Why did you chose this approach?

   I use Redux middle thunk to call the asunchronous fetching function whenever the action data request is dispatch.
   Also, I store data responsed to redux store.

   Pros:

   - Solving asynchronous dispatches of Redux.
   - Allow write action that return function (fetching) instead of passing only data object
   - Easy to access data, trim down the passing props to component process.
     Cons:
   - Not really a cons, but all this could be alternate by fetching data inside useEffect as component state without redux. Then pass to child as props

### Production Link

<https://github-issue.netlify.app/>

#### coded by Luke Hoang Anh Tuan
