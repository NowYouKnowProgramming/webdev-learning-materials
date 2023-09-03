<details>
<summary>Real-world React technical questions</summary>

- What is props?
- Why you have to use `className` attribute instead of `class`?
- What will happen when a component in React component tree throws an error?
- What are the rules of the React Hooks?
- Given this following state, what is the correct way to increment the age?:

```js
{
  id: 0,
  name: 'John',
  detailedInfo: {
    age: 30,
    address: '123 Main St',
  }
}
```

<br />

- What is React Fragment and how they work?

- Given this code:

```js
const names = ['John', 'Jane', 'Mary', 'Bob']

function RandomName() {
 const [name, setName] = useState(name.at(0))
 const changeName = () => {
  const randomNameIndex = Math.floor(Math.random() * names.length)
  setName(names[randomNameIndex])
 }

 return (
  <div>
   <p>Current name: {name}</p>
   <p>Previous name: {prevName}</p>
   <button onClick={changeName}>Change name</button>
  </div>
 )
}
```

- How you can store the `prevName` value, so that it holds the previous value of `name` and is displayed properly in React?

<br />

- Which data structures cannot be rendered in React?
- What is `React.memo` and when you should use it?
- When do you use the `useCallback` hook and `React.memo`?
- Which methods of class components is combined the `useEffect` hook?
- What hooks do you know and explain how do you use them?
- What is JSX Transform and what benefits it brings?
- What is React Suspence and when you should use it?
- What are the cons of using React? What are the alternatives?
- How the diffing algorithm works in React (in the Virtual DOM)?
- Which way you can force a component to re-render?
- You want to render thousands of elements in React, but the browser is freezing.
  - - Why is this happening?
  - - How you can fix this and why it works?

</details>
