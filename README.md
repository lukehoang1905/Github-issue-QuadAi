# Alt-H1

### Description

Web app show list of github issue. User able to highlight one selection at a time.
A new feed page to show up-to 5 most recent selection.

### Limitation (out of scope)

⋅⋅* Better Pagination with total page numbe and jumpto-page
⋅⋅* Dublicate SelectedIssues history

### Dependencies

⋅⋅* react-bootrap : main styling structure
⋅⋅* moment : to caculate and render "x hours ago from created_at"
⋅⋅* font-awesome: logos
⋅⋅* axios: planned to use for api url creation (alternated by fetch)
⋅⋅* react-spinners: for loading circle spinner
⋅⋅* redux : a library for global state management

### Getting started

Please use `npm install` after `git-clone` this repo.
The app will run on <http://localhost:3000/> after `npm start`
There is no login/register required.
There is no env keys.

### Technical decision

1. How did you implement styling? What are the pros and cons? Why did you chose this approach?

⋅⋅⋅I use bootstrap to do most of the styling structure since the app is relative small so that would be the most efficent though it is quite unflexible and less of artistic side.

⋅⋅⋅Moreover, with conditional styling, I use variable from redux store to able to maintain selection ⋅⋅
⋅⋅⋅Another reason is that this is the approach I feel comfortable of using at the moment⋅⋅

2. How did you share state between components? What are the pros and cons? Why did you chose this approach?

⋅⋅⋅I used both props and redux to manage my state.
⋅⋅⋅With state like **currentpage** and **setcurrentpage** I will sent as props to every single issue items ⋅⋅
⋅⋅⋅For state like **selection** I would useSelector from redux to pick out the current state of the selection rather than have to send as props to newsfeed page and also avoid sending to PublicNavbar⋅⋅
⋅⋅⋅I am also using redux to store article retrieved from api call that I have not using much. However, as if the app need to be improve on performance, I would be able to store data to state everytime user load newpage. Then rerender from redux store when Pagination happens (especially, go to previous page) to prevent waste api call to the sever for previous loaded issues...

3. Did you use React hooks? Why or why not?
   ⋅⋅⋅Yes, I used React hooks.
   ⋅⋅⋅ Because Im coding this app in functional component style⋅⋅

4. How did you prevent wasted renders?
   ⋅⋅⋅asad.
   ⋅⋅⋅ asad⋅⋅

5. How did you handle side-effects (e.g. data fetching)? What are the pros and cons? Why did you chose this approach?

### Production Link

<https://github-issue.netlify.app/>

### code by Luke Hoang Anh Tuan
