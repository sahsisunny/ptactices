import logo from './logo.svg';
import './App.css';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <Profile text={{ name: 'Sunny Sahsi', age: 25, email: 'sahsisunny@gmail.com' }} />
      <Profile text={{ name: 'Sunny Sahsi', age: 25, email: 'sahsisunny@gmail.com' }} />
      <Profile text={{ name: 'Sunny Sahsi', age: 25, email: 'sahsisunny@gmail.com' }} />
    </div>
  );
}

export default App;
