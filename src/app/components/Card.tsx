import styles from '../styles/Card.module.css';

interface CardProps {
  name: string;
  image: string;
  feedback: string;
}

const Card: React.FC<CardProps> = ({ name, image, feedback }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={`Carro do cliente ${name}`} className={styles.cardImage} />
      <h3>{name}</h3>
      <p>{`"${feedback}"`}</p>
    </div>
  );
};

export default Card;
