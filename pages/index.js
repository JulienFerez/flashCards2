import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome my website</h1>
      <nav>
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
            <a>One Entry</a>
          </Link>
        </li>
        <li>
          <Link href="/multipleResponse">
            <a>MultipleResponse</a>
          </Link>
        </li>
      </nav>
    </div>
  );
}
