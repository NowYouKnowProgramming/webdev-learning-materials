Real-world frontend technical recruitment tasks

<details>
<summary>Internship recruitment task</summary>
1 - Create the function to calculate the balance in a specific category within the specified time period.

```js
function getBalanceByCategoryInPeriod(
 transactionsList,
 category,
 startTime,
 endTime
) {
 // ...
}
```

Parameters:

- transactionsList: array of transactions
- category: string
- start time: Date
- end time: Date

Transaction object looks like this:

```js
{
  id: 123,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-12T12:34:00Z'
}
```

<br />

2 - Create the function to find duplicated transactions.

Sometimes when a customer gets charged, a duplicate transaction is created.
We need to find those transactions so that they can be dealt with.
Everything about the transaction should be identical, except the transaction id and the time at which it occurred,
as there can be up to a minute delay.

```js
function findDuplicateTransactions(transactions) {
 // ...
}
```

Parameters:

- transactions: array of transactions

<br />

Find all transactions that have the same sourceAccount, targetAccount, category, amount,
and the time difference between each consecutive transaction is less than 1 minute.

You can assume that all parameters will always be present and valid.
However, the incoming transactions are not guaranteed to be in any particular order.

List of all the duplicate transaction groups, ordered by time ascending (nested array of transactions).
The groups should be sorted in ascending order of the first transaction in the group.

<br />

Example:

<br />

Input:

```js
;[
 {
  id: 3,
  sourceAccount: 'A',
  targetAccount: 'B',
  amount: 100,
  category: 'eating_out',
  time: '2018-03-02T10:34:30.000Z',
 },
 {
  id: 1,
  sourceAccount: 'A',
  targetAccount: 'B',
  amount: 100,
  category: 'eating_out',
  time: '2018-03-02T10:33:00.000Z',
 },
 {
  id: 6,
  sourceAccount: 'A',
  targetAccount: 'C',
  amount: 250,
  category: 'other',
  time: '2018-03-02T10:33:05.000Z',
 },
 {
  id: 4,
  sourceAccount: 'A',
  targetAccount: 'B',
  amount: 100,
  category: 'eating_out',
  time: '2018-03-02T10:36:00.000Z',
 },
 {
  id: 2,
  sourceAccount: 'A',
  targetAccount: 'B',
  amount: 100,
  category: 'eating_out',
  time: '2018-03-02T10:33:50.000Z',
 },
 {
  id: 5,
  sourceAccount: 'A',
  targetAccount: 'C',
  amount: 250,
  category: 'other',
  time: '2018-03-02T10:33:00.000Z',
 },
]
```

Output:

```js
;[
 [
  {
   id: 1,
   sourceAccount: 'A',
   targetAccount: 'B',
   amount: 100,
   category: 'eating_out',
   time: '2018-03-02T10:33:00.000Z',
  },
  {
   id: 2,
   sourceAccount: 'A',
   targetAccount: 'B',
   amount: 100,
   category: 'eating_out',
   time: '2018-03-02T10:33:50.000Z',
  },
  {
   id: 3,
   sourceAccount: 'A',
   targetAccount: 'B',
   amount: 100,
   category: 'eating_out',
   time: '2018-03-02T10:34:30.000Z',
  },
 ],
 [
  {
   id: 5,
   sourceAccount: 'A',
   targetAccount: 'C',
   amount: 250,
   category: 'other',
   time: '2018-03-02T10:33:00.000Z',
  },
  {
   id: 6,
   sourceAccount: 'A',
   targetAccount: 'C',
   amount: 250,
   category: 'other',
   time: '2018-03-02T10:33:05.000Z',
  },
 ],
]
```

</details>

<details>
<summary>Create e-commerce app using the included design (only for desktop).</summary>
Essentials:

- Has to use Gatsby.js (or any other SSG framework)
- Has to be pixel perfect.
- Use SCSS/SASS.
- Make the sliders animations (carousel).
- Recreate the hover effect.
- Upload it to GitHub.
- Use Bootstrap.
- App should be responsive.

<br />

Optional:

- Add the "lightbox" (create it yourself or use the NPM package), which opens, when clicked the image. Must have the option to move between the images (via the arrows).
- Add a bar under the slide that marks the countdown time until the next slide is shown. It is supposed to be animated, and when it reaches 100% it shows the next slide.
- Deploy the app on GitHub Pages / Netlify / Vercel / etc.
- Connect the WordPress to Gatsby and send the contact form data to it.
- Adding your own animations.
- Create a sub-page of the article, the content of which will be downloaded from wordpress. The look of this page is up to you, but put great emphasis on aesthetics.

<br />

Pay attention to the file structure.
Folders or components properly laid out. It will be an added advantage to pay attention to such elements as page loading speed, optimization of images, use of lazy loading, etc.

<br />

As a design you can use:

- <https://dribbble.com/shots/15389208-Antic-Decoration-Landing-Page>
- <https://dribbble.com/shots/15182337-BoConcept-e-Commerce-Slider>

</details>

<details>
<summary>GitHub Issues App</summary>
Essentials:

- Use GitHub API - either the REST API or GraphQL API.
- Use TypeScript.
- Take care of code quality and clean code.
- Use any JavaScript framework.

<br />

Features:

- App should search GitHub issues by username and repository name.
- App should have search bar, results list and number of results.
- On default it should display the default GitHub issues list response.
- While searching, the app should display the loading indicator.
- While searching, the result list should display the result of the search.
- It should search and display users and repositories together.
- The results should be sorted by ID.
- Pagination is optional.
- The app should be responsive.
- When the user is clicked, it should display in another view the username, nickname, followers count, following count, stars count and their avatar.
- When the repo is clicked, then nothing happens.

</details>

<details>
<summary>Yet another variation of GitHub Issues App.</summary>
Essentials:

- Use GitHub API - either the REST API or GraphQL API.
- Select any repo, which it should fetch the issues, ie. <https://github.com/facebook/react>
- You can use any third-party libraries.
- Take care of code quality and clean code.
- Use any architecture.
- App should be responsive.

<br />

Features:

- Load and display the last 10 issues.
- Implement the infinite scroll - when scrolled to the bottom, the app should fetch the next 5 issues.
- Each "tile" should have a title, issue number and creation date.
- When clicked, it should display the title, issue number, it's status (open/closed), creation date and it's body.
- It should also display the issue rate counter (like on Stack Overflow) and have to possibility to increase/decrease it.
- When the count is below `-99` or above `99`, it should display `99!!`, otherwise it should display the count.
- The count should be saved somewhere and still be available when the app is reloaded and the same issue will be open.

<br />

Optional:

- Local search engine.
- Animations and transitions.

</details>

<details>
<summary>Create the part of e-commerce app.</summary>

- Use this API: <https://jsonplaceholder.typicode.com/photos>
- Has to be pixel perfect.
- You can use Bootstrap, Material Design or any other component library.
- App should be responsive.
- TypeScript is recommended, but still optional.

<br />

Main page:

- Load and display all products.
- On navbar:
  - Search bar should filter the products by title.
  - Next to search bar it should have two checkboxes - active and promo, that are acting as filters.
  - Next to checkboxes it should have the Log In button - when clicked it should redirect to the login page.
- Working pagination in certain way:
  - When all pages are: n > 6
    - When user is on the first or second page:
      - 1,2,3 ... n-2, n-1, n
    - When user is on third page:
      - 2,3,4 ... n-2, n-1, n
  - When all pages are: n < 6
    - Present all pages like this:
      - 1,2,3,4,5,6
- Handle the situation, when it couldn't find the products.

<br />

Login page:

- The only login and password that is valid is "admin" and "admin123!".
- The "Forgot password" should do nothing.
- Handle the situation, when the login or password is incorrect.
- When the login is successful, it should redirect to the main page.
- The Log in button is changed to the avatar icon - when clicked, it should display the dropdown with the "Log out" option.
- When logout, the avatar icon is changed to the "Log in" button.
- The log in should be persistent, even after the page is closed.

<br />

Optional:

- Write the unit tests.
- Write the e2e tests.

<br />

As a design you can use:

- <https://dribbble.com/shots/15389208-Antic-Decoration-Landing-Page>
- <https://dribbble.com/shots/15117860-Syncrhomedics-Reference-Page>
- <https://dribbble.com/shots/16634976-eCommerce-Cosmetic-Web-design>

</details>

<details>
<summary>Live-coding problem #1 - issue with too much rerendering of the same component (look at the console)</summary>

   (you have to do something with memoization inside of the App component)
   <https://jsfiddle.net/mdh2c7xg/>

</details>

<details>
<summary>Live-coding problem #2 - how to fetch user from the GitHub API?</summary>

   <https://jsfiddle.net/dn8rqksL/>

</details>
