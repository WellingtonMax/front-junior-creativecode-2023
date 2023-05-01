import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import 'matchmedia-polyfill';

describe('Navigation', () => {
    test('renders home link', () => {
        render(
          <Router>
            <Navigation isLoggedIn={false} />
          </Router>
        );
        const homeLink = screen.getByRole('link', { name: /home/i });
        expect(homeLink).toBeInTheDocument();
      });
      

  test('renders login link if not logged in', () => {
    render(
      <Router>
        <Navigation isLoggedIn={false} />
      </Router>
    );
    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toBeInTheDocument();
  });
  

  test('does not render login link if logged in', () => {
    render(
      <Router>
        <Navigation isLoggedIn={true} />
      </Router>
    );
    const loginLink = screen.queryByText('Login');
    expect(loginLink).not.toBeInTheDocument();
  });

  test('renders contacts link if logged in', () => {
    render(
      <Router>
        <Navigation isLoggedIn={true} />
      </Router>
    );
    const contactsLink = screen.getByRole('link', { name: /contacts/i });
    expect(contactsLink).toBeInTheDocument();
  });

  test('does not render contacts link if not logged in', () => {
    render(
      <Router>
        <Navigation isLoggedIn={false} />
      </Router>
    );
    const contactsLink = screen.queryByText('Contacts');
    expect(contactsLink).not.toBeInTheDocument();
  });
});
