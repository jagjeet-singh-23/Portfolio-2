import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { projects } from "../constants"
import { SectionWrapper } from "../hoc"
import { github } from "../assets"
import { textVariant, fadeIn } from "../utils/motion"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="sm:w-[360px] w-full bg-tertiary p-5 rounded-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image} 
            alt={name}
            className="w-full h-full object-contain rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="
                black-gradient 
                w-10 
                h-10 
                rounded-full
                flex
                justify-center
                items-center
                cursor-pointer
              ">
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="mt-3 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name}
              className={`${tag.color} text-[14px]`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div
        className="w-full flex"
      >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl"
        >
          Following projects shows my skills and experience through these real-world web applications. Each project is briefly described below along with a live demo and link to its GitHub repo .
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");