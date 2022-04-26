import { Route, Link, Switch } from 'react-router-dom';


export default function App() {
  return (
    <Switch>
      <Route path="/list">
        <List />
      </Route>
      <Route path="/">
        <p>Home</p>
        <Link to="/list">List</Link>
      </Route>
    </Switch>
  );
}
