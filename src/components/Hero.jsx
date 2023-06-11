import { motion } from "framer-motion"
import { ComputersCanvas } from './canvas'
import { styles } from '../style'

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
    >
      <div className={`
        ${styles.paddingX}
        absolute 
        flex 
        flex-row 
        items-start 
        gap-5 
        inset-0
        mx-auto
        top-[120px]
        max-w-7xl
      `}>
        <div
          className="
          flex flex-col items-center justify-center mt-5
          "
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Jagjeet</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop visually appealing <br className="sm:block hidden" />
            websites and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 flex items-center justify-center w-full">
        <a href="#about">
          <div className="
          w-[35px] 
          h-[64px] 
          rounded-3xl 
          border-4 
          p-2
          border-secondary
          flex
          items-start
          justify-center
          ">
            <motion.div
              className="w-3 h-3 bg-secondary mb-1 rounded-full"
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            >

            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero