import "./globals.css";

export const metadata = {
  title: "Wilmer Hedström Portfolio",
  description: "My portfolio showcasing fullstack web development projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
