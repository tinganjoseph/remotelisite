import {card} from '../assets'
import styles, {layout} from "../style"
import Button from "./Button"
const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      BUSINESS ASSISTANT,   <br className="sm:block hidden"/> SOFTWARE DEVELOPMENT SERVICES
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
      Remoteli provides an opportunity for companies to utilise the incredible African talent pool.
      </p>
      <Button styles="mt-3"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
      
    </section>
  )


export default CardDeal