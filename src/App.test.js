import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/home.tsx';
import Search from './components/search.tsx';

test('Testing text SMKJOB', () => {
  render(
    <ChakraProvider>
      <Home />
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
