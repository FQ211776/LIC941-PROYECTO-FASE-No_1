import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Crea tu cuenta en nuestra App en minutos
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        La libertad financiera, la posibilidad de transferir dinero a cualquier
        parte de LatinoAmerica, Ahorros exclusivos y mucho, mucho mas... <br />
        ¡CREA TU CUENTA HOY MISMO!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
