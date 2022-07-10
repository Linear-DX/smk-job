import { fireEvent, render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/home.tsx';
import Search from './components/heading.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store';

test('Testing text SMKJOB', () => {
  render(
    <ChakraProvider>
      <Provider store={store}>
      <Home />
      </Provider>
    </ChakraProvider>
  );
  const linkElement = screen.getAllByText('SMKJOB');
  expect(linkElement).toBeTruthy();

});

test('user input in search bar', () => {
  render(
    <ChakraProvider>
      <Search />
    </ChakraProvider>
  );
  const input = screen.getByPlaceholderText('Cari Lowongan')
  fireEvent.change(input, {target: {value: 'programmer'}})
  expect(input.value).toBe('programmer')
})
