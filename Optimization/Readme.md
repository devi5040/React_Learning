# React rendering

- If there are any state changes then the component function will re render
- If the component function re rendered then the parent component will not be rendered again. But all the child components will be rendered again

# memo

By wrapping the function component inside this we can reduce the unnecessary rendering of a component.

- It will look at the prop passed to the child component and if the old prop value and new value are exactly same then the child component will not render again
  Don't overuse memo
- if the react looks prop for each and every execution then it will cost performance
- Do not use it on the component which gets the changed prop every time
- Use as high up as possible

# useCallback()

The function defined inside the component will be recreated whenever the component re renders so to restrict that we will be using the useCallback to wrap the function so it will not be recreated whenever component re render.
It will have an array of dependencies as second arguement, so whenever the dependency changes then only the function is re created.

# useMemo()

We can restrict re executing of the function

## Virtual DOM

It creates and compares the virtual dom to find out which part of the DOM needs to be updated

key -> willbe used to map the state.
key -> Also helps to update the items(list items for example) in the dom.
key -> can also be used for resetting components

Reduce the use of useEffect since it will lead an extra rendering of components

State updates will always be sheduled and we cannot use new state immediately after changing!
It will execute in the order they're scheduled

Multiple state updates inside a function will be batched together and will lead the execution of component function to one time - State batching
