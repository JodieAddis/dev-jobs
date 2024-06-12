import { ReactNode } from "react";
import Header from "../components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
