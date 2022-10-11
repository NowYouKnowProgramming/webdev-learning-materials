<details>
<summary>Real-world React technical questions</summary>

- What is props?
- Why you have to use `className` attribute instead of `class`?
- What will happen when a component in React component tree throws an error?
- What are the rules of the React Hooks?
- Given this following state:

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

what is the correct way to increment the age?

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

How you can store the `prevName` value, so that it holds the previous value of `name` and is displayed properly in React?

- Which data structures cannot be rendered in React?
- What is `React.memo` and when you should use it?
- When do you use the `useCallback` hook and `React.memo`?
- Which methods of class components is combined the `useEffect` hook?
- What hooks do you know and explain how do you use them?

</details>
