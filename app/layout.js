// components/Layout.js
import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/contacts"><a>Contacts</a></Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2024 Contact List App</footer>
    </div>
  );
}
