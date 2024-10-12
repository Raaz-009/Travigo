import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import TravelPlanForm from './components/travel-plans/TravelPlanForm';
import TravelPlanList from './components/travel-plans/TravelPlanList';
import BlogPostList from './components/blog-posts/BlogPostList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mx-auto px-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/create-plan" component={TravelPlanForm} />
            <Route path="/my-plans" component={TravelPlanList} />
            <Route path="/blog" component={BlogPostList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;