import styles  from "./style"

import {Navbar, Hero, Business, Billing,Stats,
CardDeal, Testimonials, Contact, Footer} from './components';



function App() {
  return (
    //<navbar/>
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}` }>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
      </div>
        {/* hero section(main application) */}
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
       {/* statistic section(main application) */}
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
        
          <CardDeal/>
          <Testimonials/>
          <Contact/>
       
        
        
          <Footer/>
        </div>
      </div>
      
    </div>
  )
}

export default App