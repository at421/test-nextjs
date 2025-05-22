import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <footer>
          <main>{children}</main>
        </footer>
      </body>
    </html>
  );
}