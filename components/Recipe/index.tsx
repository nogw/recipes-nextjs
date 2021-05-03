import { Container } from './styles';
import Link from 'next/link'

function Recipe({ title, score, image, id }) {
  return (
    <Link href={id}>
      <Container
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={image} alt="food"/>
        <h1>{ title }</h1>
        <h2>{ score }</h2>
      </Container>
    </Link>
  );
};

export default Recipe;
