import RRender from 'react-test-renderer';
import Home from './home';

it('renders the Homepage Page correctly', () => {
  const tree = RRender.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});
