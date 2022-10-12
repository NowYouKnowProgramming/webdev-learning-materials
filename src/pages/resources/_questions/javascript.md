<details>
<summary>Real-world JavaScript technical questions</summary>

- How this expression is called?

```js
;(function () {
 console.log('Hello!')
})()
```

- What are the differences between JavaScript and other programming languages such as C++ and PHP?
- What are the key differences between `var`, `let` and `const`?
- How do you handle asynchronous requests in JavaScript?
- `const` vs `Object.freeze` - what are differences for arrays and objects?
- Based on this code:

```js
const obj = { nested: {} }

const anotherObj = { ...obj }

obj.nested.a = 1
```

Does the `a` property will be declared also in `anotherObj` and why? If yes, how you can prevent it?

- How you can iterate through the objects?
- How you would describe hoisting?
- How you would describe array/object mutation? It is a good practice or something to avoid?
- Based on this code:

```js
const result = (flag: boolean) => {
 return new Promise((resolve, reject) => {
  if (flag) {
   resolve('success')
  } else {
   reject('error')
  }
 })
}

const promise = result(true)

promise
 .then((r) => {
  // 1.
  console.log(r)

  return result(false)
 })
 .catch((e) => {
  // 2.
  console.log(e)

  return 'fail'
 })
 .then((r) => {
  // 3.
  console.log(r)

  return result(true)
 })
 .catch((e) => {
  // 4.
  console.log(e)
 })
```

What results will be displayed in console.log's and why?

- Based on this code:

```js
const timeoutAsync = (time) => {
 return new Promise((resolve) => {
  const timeout = setTimeout(() => {
   clearTimeout(timeout)
   resolve(`Timeout resolved after ${time} milliseconds.`)
  }, time)
 })
}

const timeouts = [timeoutAsync(9000), timeoutAsync(5500), timeoutAsync(1000)]

// 1.
timeouts.forEach(async (timeout) => {
 const info = await timeout
 console.log(info)
})

// 2.
const timeoutsInfos = timeouts.reduce(async (promisedAcc, timeout) => {
 const acc = await promisedAcc
 const info = await timeout
 console.log(info)
 acc.push(info)
 return acc
}, Promise.resolve([]))

// 3.
for await (const info of timeouts) {
 console.log(info)
}
```

What will be differences between those iterators? In which order the timeouts will be resolved and why?

- What are types of storages in browser?
- What will be result of `{} === {}` and why?
- Based on this code:

```js
const arr = [7, 1, 4, 3, 2]

for (const elem of arr) {
 setTimeout(() => console.log(elem), elem)
}
```

In which order will be the logs displayed and why?

- Based on this code (functional programming):

```ts
import { interval, OperatorFunction } from 'rxjs'
import { take, map, filter } from 'rxjs/operators'

const curry: (n: number) => (num: number) => number = (n) => {
 return (num) => {
  return num * n
 }
}

const operator = (n: number): OperatorFunction<number, number> => {
 return map((number: number) => number * n)
}

const increaseByOne = (n: number): number => n + 1

const number$ = interval(1000).pipe(map(increaseByOne))
const obser1$ = number$.pipe(take(3))
const obser2$ = number$.pipe(
 take(4),
 map((n: number): string => `Hello ${'!'.repeat(n - 1)}`)
)
const obser3$ = number$.pipe(take(5), map(curry(2)))
const obser4$ = number$.pipe(
 take(4),
 filter((n: number) => n !== 3),
 operator(10)
)

obser1$.subscribe((value: number) => {
 // 1.
 console.log(value)
})

obser2$.subscribe((value: string) => {
 // 2.
 console.log(value)
})

obser3$.subscribe((value: number) => {
 // 3.
 console.log(value)
})

obser4$.subscribe((value: number) => {
 // 4.
 console.log(value)
})
```

What values will be console.log'ed from observables and why?

</details>
