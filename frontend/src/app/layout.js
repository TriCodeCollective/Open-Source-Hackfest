import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "./(components)/NavBar";
import { AuthProvider } from "./(context)/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head></head>
        <body className={inter.className}>
          <AuthProvider>
            <NavBar></NavBar>
            <div>{children}</div>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
