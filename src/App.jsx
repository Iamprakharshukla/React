import UserComponent ,{UserAddress,UserDetails} from './UserComponent.jsx';
import JSX from './JSX.jsx';
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <UserComponent />
      {<UserDetails />}
      <UserAddress />
      <Name />
      <Age />
      <JSX />
    </div>
  )
}

function Name() {
  return (
    <div>
      <h2>Prakhar Shukla</h2>
    </div>
  );
}

function Age() {
  return (
    <div>
      <h2>22</h2>
    </div>
  );
}






export default App;
