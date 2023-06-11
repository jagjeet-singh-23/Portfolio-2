import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from "../hoc/SectionWrapper"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="
            min-h-[280px] 
            bg-tertiary 
            rounded-[20px] 
            py-5 
            px-12
            flex
            justify-evenly
            items-center
            flex-col
          ">
            <img src={icon} alt="icon" className="w-16 h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary max-w-3xl text-[16px] leading-[30px]"
      >
        I am a highly skilled Full Stack web developer with expertise in a wide range of technologies, including JavaScript, TypeScript, React.js for front-end development, as well as Node.js, Express.js for back-end development. Additionally, I have extensive experience working with databases, particularly MongoDB. My passion for learning drives me to constantly expand my knowledge and stay up-to-date with the latest industry trends. By collaborating together, we can transform your ideas into fully functional and captivating web solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");