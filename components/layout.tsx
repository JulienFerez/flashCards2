import React from "react";
import Link from "next/link";

// import { arrayData } from "../../src/data/questionAnswer";
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/mentale">
              <a>Mentale</a>
            </Link>
          </li>
          <li>
            <Link href="/oneEntry">
              <a>Card Mentale One entry</a>
            </Link>
          </li>

          <li>
            <Link href="/multipleResponse">
              <a> Response Multiple</a>
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
};

export default Layout;
