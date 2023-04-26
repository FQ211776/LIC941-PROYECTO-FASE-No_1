import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Planifica = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Planifica, vive y <br className="sm:block hidden" /> gestiona tu dinero.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Porque los bancos tradicionales restan y nosotros solo queremos que
        sumes: en tus viajes, facturas, ahorro.... Recupera el control de todo y
        elige a PokemonBank, para vivir tu dinero más y mejor.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Planifica;
