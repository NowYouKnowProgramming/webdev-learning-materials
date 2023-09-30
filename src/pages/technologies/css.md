---
title: CSS materials
description: Useful materials about CSS. Pro tips for writing best CSS code, learn about different CSS gotchas. Free and paid CSS courses, stuff you need to know
layout: ../../layouts/MainLayout.astro
image: { src: /metaimages/css.png, alt: 'CSS' }
---

## Free

- [Codecademy - Learn CSS](https://www.codecademy.com/learn/learn-css)
- [Codecademy - Intermediate CSS](https://www.codecademy.com/learn/learn-intermediate-css)
- [web.dev - Learn CSS](https://web.dev/learn/css/)

## Paid

- [CSS for JavaScript Developers](https://css-for-js.dev/)

## Additional content

### Tips compilations

- [Fireship - 10 CSS Pro Tips - Code this, NOT that!](https://youtu.be/Qhaz36TZG5Y)
- [Fireship - 3 More Life-Changing CSS Tips](https://www.youtube.com/watch?v=JSURzPQnkl0)
- [Defensive CSS - practical tips that helps in building "bullet-proof" UI interfaces](https://defensivecss.dev/)
- [CSS Reference - visual guide for the most popular properties](https://cssreference.io/)
- [CSS Tricks - My Dumbest CSS Mistakes](https://css-tricks.com/my-dumbest-css-mistakes/)
- [Josh W. Comeau - Secret Mechanisms of CSS [learn the "hidden" fundamentals that nobody told you about.]](https://www.youtube.com/watch?v=Xt1Cw4qM3Ec)

<details>
<summary>Takeaways from CSS for JavaScript Developers:</summary>

Flex Basis / Flex Grow / Flex Shrink
![Flex Basis / Flex Grow / Flex Shrink](/images/css/flex_basis_grow_shrink.webp)
Flex Shorthand
![Flex Shorthand](/images/css/flex_shorthand.webp)

</details>

### Core concepts

- [Writing CSS In 2023: Is It Any Different Than A Few Years Ago?](https://www.smashingmagazine.com/2023/07/writing-css-2023/)
- [Josh W. Comeau - The Surprising Truth About Pixels and Accessibility](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility)
- [Josh W. Comeau - What The Heck, z-index?? [how to manage the positioning of elements]](https://www.joshwcomeau.com/css/stacking-contexts/)

### Selectors

#### :has()

- [Web Dev Simplified - learn about the :has selector](https://www.youtube.com/watch?v=K6CWjkDgQnE)
- [Kevin Powell - :has() opens up new possibilities with CSS](https://www.youtube.com/watch?v=OGJvhpoE8b4)
- [Kevin Powell - Exploring :has() and New CSS Possibilities](https://www.youtube.com/watch?v=jJcO-IZJalQ)

### Responsive

- [You Probably Don't Need Media Queries Anymore - how to build truly dynamic responsive websites](https://dev.to/kathryngrayson/you-probably-dont-need-media-queries-anymore-a4j)
- [Web Dev Simplified - Top 10 Advanced CSS Responsive Design Concepts You Should Know](https://www.youtube.com/watch?v=TUD1AWZVgQ8)

### Layouts

- [Utopia - learn fluid responsive design](https://utopia.fyi/)
- [Web Dev Simplified - How To Create Skeleton Loading Animation With CSS](https://www.youtube.com/watch?v=ZVug65gW-fc)
- [Web Dev Simplified - How To Create Custom Scrollbar In CSS](https://www.youtube.com/watch?v=v_8CmC6cwUs)
- [Web Dev Simplified - How To Create Advanced CSS Dropdown Menus](https://www.youtube.com/watch?v=S-VeYcOCFZw)
- [Web Dev Simplified - How To Create Animated CSS Cards](https://www.youtube.com/watch?v=h2x4YTI6WeE)
- [Web Dev Simplified - How To Create An Animated Image Carousel With CSS/JavaScript](https://www.youtube.com/watch?v=9HcxHDS2w1s)
- [Web Dev Simplified - Create CSS Parallax](https://www.youtube.com/watch?v=mxHoPYFsTuk)
- [Web Dev Simplified - Limit lines of text with CSS](https://www.youtube.com/watch?v=OhCzEjXvY9A)
- [Web Dev Simplified - How To Create This Unbelievable CSS Scroll Animation](https://www.youtube.com/watch?v=-pDPASqX97w)
- [Web Dev Simplified - CSS Anchor Is The Best New CSS Feature Since Flexbox](https://www.youtube.com/watch?v=B4Y9Ed4lLAI)
- [Beyond Fireship - Subtle, yet Beautiful Scroll Animations](https://www.youtube.com/watch?v=T33NN_pPeNI)

### Common mistakes

- [Web Dev Simplified - Are You Making These CSS Height Mistakes?](https://www.youtube.com/watch?v=-sF5KsEo6gM)
- [Kevin Powell - CSS gap is NOT a replacement for margins](https://www.youtube.com/watch?v=Gx0iZrN-0L4)
- [Kevin Powell - Please NEVER do this in your CSS](https://www.youtube.com/watch?v=gxbBg6dyvhM)
- [Kevin Powell - The problems with viewport units](https://www.youtube.com/watch?v=veEqYQlfNx8)
- [Kevin Powell - 5 common beginner CSS mistakes](https://www.youtube.com/watch?v=rxnX1jdoI6c)
- [Kevin Powell - My dumbest CSS mistakes and how I debug them](https://www.youtube.com/watch?v=GWkMYvoCXyQ)

### Debugging

- [Kevin Powell - The console.log() of CSS](https://www.youtube.com/shorts/ii-lSK2_Nu4)

### Tailwind CSS

<details>
<summary>Dynamic variants without using third-party library (like CVA or tw.classed)</summary>

![Tweet with description: "Have found this to be a pretty effective lightweight strategy for managing variants using clsx vs needing to reach for cva or tailwind variants: code snippet showing classes being applied to an element based on keys from packages."](/images/css/tailwind_variants.png)

</details>


<details>
<summary>Atomic CSS - pros, cons and will it replace BEM?</summary>

<iframe src="https://www.youtube.com/embed/e0rxJXwnHLY?si=O258GEUXPZte37tr" loading="lazy"></iframe>

#### The most important highlights

##### Difference between a single class (BEM approach) and the atomic approach (tailwind):

The classname "tells" you **what kind of component it is** (e.g., whether it's a card or a container), but **it doesn't give you implementation details** (i.e., what styles it's made up of), while Tailwind gives you the **details of the implementation**, but **doesn't illustrate what the component represents**.

##### Cons of Tailwind

<p> - Debugging in the browser because there isn't a single specific class (this can be circumvented by using the devtools of a specific framework and searching by components). Additionally, dynamically adding a new attribute is difficult (this can be circumvented using external devtools like <a href="https://tailscan.com/">https://tailscan.com/</a>, <a href="https://www.inspectflow.io/">https://www.inspectflow.io/</a>, or <a href="https://devtoolsfortailwind.com/">https://devtoolsfortailwind.com/</a>).</p>

<br />

<p>- Reading the classes alone doesn't provide specific information compared to regular CSS.</p></p>

<br />

<p>- It won't be suitable everywhere. For example, in a project where only HTML, CSS, and JS are used, Tailwind will be a poor solution.</p>

<br />

<p>- Since v3, the addition of dynamic classes has been significantly limited, e.g., <code>bg-{color}-500</code> won't work anymore (this can be bypassed by loading the entire Tailwind via CDN, which significantly increases the project bundle).</p>

<br />

<p>- Tailwind users tend to write non-semantic HTML - this can be prevented by using a11y analysis tools.</p>

<br />

![Screen slide showing accessibility tips - BUILD PROCESS: catch errors as you build out the app (axe-core, jsx-a11y, lighthouse audits, accesslint.js). Continuous Integration: find issues in your pull requests (axe-linter or accesslint)](/images/css/tailwind_ally1.png)
![Screen slide showing pull request and comments made by axe-linter that catched accessibility errors](/images/css/tailwind_ally2.png)

<br />

An alternative approach to Tailwind towards type safety - for those who want to be sure there will be no typos and want the styles to be modular and extensible as in CSS Modules.

Drawbacks - the syntax isn't as convenient, but it's a matter of getting used to.

![Screen slide showing Typewind and tailwind-classnames](/images/css/tailwind_typesafe.png)

</details>

- [6 useful CSS features implemented in Tailwind](https://www.youtube.com/watch?v=5hF0IVQIBN8)


### Other

- [Going beyond CSS variables with custom properties](https://techhub.iodigital.com/articles/going-beyond-constants-with-custom-properties)
- [Tailwind CSS vs Vanilla CSS + BEM - which approach is better?](https://www.youtube.com/watch?v=cfleIyat5b0)
- [Josh W. Comeau - You Don’t Need A UI Framework (how to build ui without using the third-party component library?)](https://www.smashingmagazine.com/2022/05/you-dont-need-ui-framework/)
- [Theo - ping.gg - Tailwind isn't Bootstrap (a short video showing differences between CSS solutions)](https://www.youtube.com/watch?v=5tV-xRq0IJs&lc=Ugwg2EHqIdaTYKKvpfV4AaABAg)
