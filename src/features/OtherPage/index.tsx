import Link from 'next/link';

import { Title } from './styles';

export default function LoanSimulator() {
  return (
    <div data-testid="other-page-main-container">
      <Title>Other Page</Title>
      <Link href="/">Home Page</Link>
    </div>
  );
}
