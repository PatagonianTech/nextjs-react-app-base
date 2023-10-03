import Link from 'next/link';

import { Title } from './styles';

export default function HomePage() {
  return (
    <div data-testid="home-page-main-container">
      <Title>Home Page</Title>
      <Link href="/other-page">Other Page</Link>
    </div>
  );
}
