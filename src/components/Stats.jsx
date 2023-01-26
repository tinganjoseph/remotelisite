import {stats} from '../constants'
import styles from '../style'

const Stats=() =>(
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 bg-teal-700 rounded-[10px]`}>
      {stats.map((stat)=>(
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
         <h4 className="font-poppins font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] text-teal-300">{stat.value}</h4>
         <p className="font-poppins font-bold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white uppercase ml-3">{stat.title}</p>
        </div>
      ))}

    </section >
  )


export default Stats