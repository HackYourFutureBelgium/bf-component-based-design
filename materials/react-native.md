# React Native Functional Components Guide

## 1. What is React Native?

React Native is a JavaScript framework for building cross-platform mobile applications. Developed by Facebook, it allows developers to use React (a JavaScript library for building user interfaces) to create native mobile applications for iOS and Android platforms.

## 2. Key Features

- **Cross-Platform Development:** Write code once, run it on both iOS and Android platforms.
- **Reusable Components:** Develop modular components for efficient code reuse.
- **Hot Reloading:** See the result of new code in real-time without losing the application state.
- **Native Performance:** Achieve native performance by using native components.

## 3. Installation

To get started with React Native, set up your development environment. Follow the instructions in the [official documentation](https://reactnative.dev/docs/environment-setup) for detailed installation steps.

## 4. Getting Started

Create your first React Native project using functional components:

```bash
# Install Expo CLI globally
npm install -g expo-cli
expo init MyFirstApp
cd MyFirstApp

# Start the Expo development server
expo start

```

## 5. Components and Props

React Native uses functional components to build the user interface. Learn how to create and use components, as well as how to pass data to them through props. Example:

```jsx
// Functional Component
const Welcome = ({ name }) => {
  return <Text>Hello, {name}!</Text>;
};

// Usage
<Welcome name="John" />;
```

## 6. State and Lifecycle

Understand how to manage component state and lifecycle using the `useState` and `useEffect` hooks. Example:

```jsx
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Text>Seconds: {seconds}</Text>;
};
```

## 7. Styling

Explore styling in React Native using the `StyleSheet` object. Example:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
```

## 8. Navigation

Implement navigation in your React Native application using the `useNavigation` hook from React Navigation. Example:

```jsx
const App = () => {
  const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

## 9. Networking

Make network requests in React Native using the Fetch API or third-party libraries like Axios. Example:

```jsx
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 10. Redux Integration

Integrate Redux for state management in functional components using the `useSelector` and `useDispatch` hooks. Example:

```jsx
const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
    </View>
  );
};
```

## 11. Testing

Write unit tests for your React Native functional components using testing libraries like Jest and React Testing Library.

## 12. Optimizations

Explore performance optimizations such as memoization and React Native's built-in optimizations.

## 13. Debugging

Use React DevTools, React Native Debugger, and built-in debugging tools to identify and fix issues in your application.

## 14. Deployment

Follow the deployment guidelines in the [official documentation](https://reactnative.dev/docs/running-on-device) to deploy your React Native application on physical devices.

## 15. Resources

- [Official Documentation](https://reactnative.dev/docs/getting-started)
- [React Native Express](https://www.reactnative.express/)
- [Awesome React Native](https://github.com/jondot/awesome-react-native)
