// app/layout.js
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Dhruv Gambhir | Portfolio',
  description: 'Portfolio website of Dhruv Gambhir',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

