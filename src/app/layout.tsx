import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div>
          <main>{children}</main>
        </div>
        <footer></footer>
      </body>
    </html>
  );
}