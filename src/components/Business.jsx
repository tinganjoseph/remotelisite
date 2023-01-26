import { features } from "../constants"
import styles, {layout} from "../style"
import Button from "./Button"


const FeatureCard =({icon, title, content, index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-yellow-600`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1">
        {title}</h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px] mb-1">{content}</p>
      
    </div>
    
  </div>
)

const Business=()=> {
  return(
      <section id="about" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
          WANT TO JOIN REMOTELI?
          </h2>
          <p className= "max-w-[470px] mt-5 text-black font-poppins font-normal  text-[15px] leading-[30.8px]">Remoteli is on a mission to become the biggest company on the continent of Africa. We are rapidly growing our team to move towards our vision of employing 1,000,000 people on the continent.
We are passionate about nurturing talented people and creating career opportunities. We have created a friendly, fun and supportive working environment as we continue to build a unique company culture.
We are currently searching for the brightest young talent on the continent and have a variety of vacancies available. Do you have what it takes?</p>
<div class="flex flex-col mt-9 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Account
                
            </a>
           
        </div>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index)=>(
            <FeatureCard key={feature.id}{...feature } index={index}/>
          ))}

        </div>
        
      </section>
  )
}


export default Business