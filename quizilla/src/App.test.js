import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import {
        Link,
        BrowserRouter as Router,
        MemoryRouter
      } from 'react-router-dom'
import LandingPage from './containers/LandingPage/LandingPage';

describe('App.js', () => {
  let wrapper;

  beforeEach(() => {
     wrapper = shallow(<App />);
  })

  it('contains only one element with classname App', () => {
    expect(wrapper.find('.App').length).toEqual(1);
  })

  it('should render our Link in a navbar', () => {
    expect(wrapper.find(Link).length).toEqual(1);
  })

  it('the link should have a classname ', () => {
    expect(wrapper.find(Link).hasClass('homeButton')).toEqual(true);
  })

  it('should render landing page by default', () => {
    let component = mount(
    <MemoryRouter>
       <App />
    </MemoryRouter>
   );
    expect(component.find(LandingPage)).toHaveLength(1)
  })


})
