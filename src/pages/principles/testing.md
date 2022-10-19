---
title: Testing materials
description: Free and paid testing courses. Learn Jest, Cypress and Vitest. React testing, unit testing, integration testing, E2E testing and more
layout: ../../layouts/MainLayout.astro
---

## Testing introduction

### Why testing is important

- Catch bugs before they appear in production
- Increase confidence in application
- Testing can serve as documentation
- Speeding up QA time
- In a very large codebases you cannot predict or test manually if your change in code will break something, automated testing helps with checking if your changes are valid

[Video explanation of theese points](https://youtu.be/tit8PecSH70?t=115)

### Structure of a test

- **Arrange** - set up the test data, test conditions, and test environment
- **Act** - run logic that should be tested (eg. execute function), click a button
- **Assert** - compare the expected result with the actual result

### Types of tests

- **Unit** tests - testing an isolated function
- **Integration** tests - testing a component that uses other components, testing things _working_ together
- **End to end** tests - testing user interaction with UI

### How to pick elements to test

Test element selectors from best to worst, you want to test your application in a way the user is interacting with it.

- Accessible by **Everyone**
  - getByRole
  - getByLabelText
  - getByPlaceholderText
  - getByText
- Accesible by **Screen readers**
  - getByAltText
  - getByTitle
- **Last resort** methods (if it's not possible to use other means)
  = getByTestId

## Free courses

- [Net Ninja - React Testing Library tutorial series](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)
- [Jack Herrington - Testing with Jest and Wallaby](https://www.youtube.com/watch?v=FC5gM49xQPE)
- [Jack Herrington - TypeScript/React Testing: Components, Hooks, Custom Hooks, Redux and Zustand](https://www.youtube.com/watch?v=bvdHVxqjv80)

### Polish free courses

  <details>
  <summary>Frontlive - Jest & React Testing Library: seria kursów na blogu</summary>

- [Frontlive - Testowanie JS - podstawy](https://frontlive.pl/blog/podstawy-testowania)
- [Frontlive - Jest - pierwszy test](https://frontlive.pl/blog/jest-pierwszy-test)
- [Frontlive - Jest - mock functions](https://frontlive.pl/blog/jest-mockowanie)
- [Frontlive - React Testing Library - podstawy](https://frontlive.pl/blog/react-testing-library-podstawy)
- [Frontlive - React Testing Library - testy w praktyce](https://frontlive.pl/blog/react-testing-library-testy-w-praktyce)
- [Frontlive - React Testing Library - Mock Service Worker](https://frontlive.pl/blog/react-testing-library-msw)

</details>

## Paid courses

- [Academind - JavaScript Unit Testing - The Practical Guide](https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/)
- [Kent C. Dodds - Testing JavaScript](https://testingjavascript.com/)

## Additional content

### Jest

- [Testing React Applications with Jest by Joyce Echessa - auth0.com](https://auth0.com/blog/testing-react-applications-with-jest/)

### Vitest an alternative to Jest

#### Why choose Vitest

- built in typescript support
- chai and jest compatible assertions
- works out of the box with super fast build tool: [Vite](https://vitejs.dev/)

#### Vitest materials

- [Vitest docs](https://vitest.dev/)
- [thisdot.co - Testing with Vitest by Ignacio Falk](https://www.thisdot.co/blog/testing-with-vitest)

  > Protip: You can use Vitest like Jest, just some minor adjustments are needed for it to work. You can watch Jest tutorials to learn Vitest

#### Import modules for testing as globals in config

```js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom',
	},
})
```

### End to end testing

- [circleci.com - What is end to end testing by Jacob Schmitt](https://circleci.com/blog/what-is-end-to-end-testing/#c-consent-modal)
- [Cypress - Documentation](https://docs.cypress.io/)

### Testing principles

What to test? Why test? Which type of test to write?

- [Kent C. Dodds - The Testing Trophy and Testing Classifications](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- [Kent C. Dodds - Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests)
- [Fireship - Test-Driven Development // Fun TDD Introduction with JavaScript](https://www.youtube.com/watch?v=Jv2uxzhPFl4)
- [Jack Herrington - Test Driven Development: The best way to code that I almost never use](https://www.youtube.com/watch?v=EH9Suo_J4Ks)
- [Kent C. Dodds - AHA Testing (how to test wisely)](https://kentcdodds.com/blog/aha-testing)

### Other testing materials

- [Kent C. Dodds - Confidently Shipping Code (why you should learn testing)](https://kentcdodds.com/blog/confidently-shipping-code)
- [Theo - ping.gg - Does unit testing makes sense?](https://www.youtube.com/watch?v=ZGKGb109-I4)
