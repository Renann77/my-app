import styles from '../styles/Propaganda.module.css';

export default function Propaganda() {
  return (
    <section className={styles.propaganda}>
      <div className={styles.propagandaContent}>
        <h2>Promoção Especial: Lave 3 Pague 2!</h2>
        <p>Deixe seu carro brilhando com nossos serviços profissionais.</p>
        <img src="/car-wash.jpg" alt="Carro lavando" className={styles.propagandaImage} />
      </div>
    </section>
  );
}
