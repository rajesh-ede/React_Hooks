# React Hooks
-------------------------------------------
# useState()

The useState hook is a function that allows you to add state to a functional component. It is an alternative to the useReducer hook that is preferred when we require the basic update. useState Hooks are used to add the state variables in the component.

const [state, setState] = useState(initialState)

- state: It is the value of the current state.
- setState: It is the function that is used to update the state.
- initialState: It is the initial value of the state.

- Example 
An Undo/Redo system allows users to move backward or forward through previous states of an application.
It works by storing a history of states or actions in a sequence (like a stack or array) and keeping a pointer (index) to track the current state.

When a user performs an action, the new state is added to the history, and any “future” states (after an undo) are cleared.

Undo moves one step back in the history (restoring a previous state).

Redo moves one step forward (restoring a later state).

This mechanism is similar to how browsers handle page navigation — pressing Back and Forward works on the same time-travel principle.

# useEffect()

The useEffect hook is one of the most commonly used hooks in ReactJS, used to handle side effects in functional components. Before hooks, these kinds of tasks were only possible in class components through lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

Fetching data from an API.
Setting up event listeners or subscriptions.
Manipulating the DOM directly (although React generally handles DOM manipulation for you).
Cleaning up resources when a component unmounts.

useEffect(() => {
    // Code to run on each render
    return () => {
        // Cleanup function (optional)
    };
}, [dependencies]);

- Effect function: This is where your side effect code runs.
- Cleanup function: This optional return function cleans up side effects like subscriptions or timers when the component unmounts.
- Dependencies array: React re-runs the effect if any of the values in this array change

- - Example

I created a NetworkStatus component using the useEffect hook to track the user’s connectivity.
It leverages the browser’s native navigator.onLine API and the online/offline events.
On mount, I register two event listeners that trigger whenever the network state changes.
The callback updates React state with the new status, allowing real-time UI updates even when the internet disconnects or reconnects.
The cleanup function ensures the event listeners are removed when the component unmounts, preventing memory leaks.
This is a common use case of useEffect to synchronize React state with browser-level side effects.
