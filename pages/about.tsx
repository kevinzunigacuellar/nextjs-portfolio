import Container from 'components/Container';
import Header from 'components/Header';
import { UserCircleIcon } from '@heroicons/react/outline';

export default function About() {
  return (
    <Container title="About – Kevin Zuniga Cuellar">
      <Header title="About" svg={<UserCircleIcon />} />
      <p>Under construction</p>
    </Container>
  );
}
