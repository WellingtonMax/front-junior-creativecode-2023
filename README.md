# CreativeCode Junior Front-end Challenge (2023)

**React contact-manager exercise · Portfolio archive**

This repository is a React application created for a 2023 junior front-end selection challenge. It demonstrates UI routes, forms, contact management, and a **client-side-only login simulation**. It is not a secure authentication system or production contact database.

## Features visible in source

- Home, login, contacts, and not-found pages with React Router.
- Create, edit, and delete contacts in a responsive Ant Design interface.
- Browser `localStorage` for the contact list and the simulated login flag.
- React 18, Ant Design, React Router, and UUIDs.

## Local setup

Requires Node.js and npm.

```bash
npm install
cp .env.example .env
npm start
```

On Windows, copy `.env.example` to `.env` manually. The example username and password values are **demonstration inputs only**, not protected secrets. To run the test script supplied by Create React App, use `npm test`. The test suite has not been freshly validated as part of this documentation update.

## Important security limitations

- `REACT_APP_USERNAME` and `REACT_APP_PASSWORD` are compiled into client-side JavaScript. **They cannot protect a real application.**
- Authentication state and contacts live in browser `localStorage`, without a backend or authorization checks. Never enter real customer data.
- A local `.env` file had previously been committed publicly. Removing it from the latest branch does not erase old revisions; rotate any credentials that were ever reused on actual services.
- A real deployment would require backend authentication, server-enforced permissions, safe credential storage, tests, and a production security review.

## Related portfolio

See [Freelance Solutions Portfolio](https://github.com/WellingtonMax/freelance-solutions-portfolio) for newer demonstrations and clearer verification boundaries. A related contact-manager iteration is preserved in [Calldex](https://github.com/WellingtonMax/calldex).
