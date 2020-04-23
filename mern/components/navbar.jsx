import Link from 'next/link';

export default () => (
  <div className="container">
    <ul class="nav">
      <li class="nav-item">
        <Link className="nav-link" href="/">
          HOME
        </Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" href="/about">
          ABOUT
        </Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" href="/api">
          API
        </Link>
      </li>
    </ul>
  </div>
);
