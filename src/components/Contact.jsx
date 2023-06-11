import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => { };
  const handleSubmit = (e) => { };
  return (
    <div
      className='
      xl:mt-12 
      xl:flex-row 
      flex-col-reverse 
      flex 
      gap-10 
      overflow-hidden
      '
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.heroSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name
            </span>
            <input
              type='text'
              onChange={handleChange}
              value={form.name}
              name='name'
              placeholder="What's your name"
              className='
              bg-tertiary 
              rounded-xl
              px-6
              py-4
              placeholder:text-secondary
              outline-none
              border-none
              text-white
              font-medium
              '
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email
            </span>
            <input
              type='email'
              onChange={handleChange}
              value={form.email}
              name='email'
              placeholder="What's your Email"
              className='
              bg-tertiary 
              rounded-xl
              px-6
              py-4
              placeholder:text-secondary
              outline-none
              border-none
              text-white
              font-medium
              '
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message
            </span>
            <textarea
              rows={7}
              onChange={handleChange}
              value={form.message}
              name='name'
              placeholder="What do you want to say?"
              className='
              bg-tertiary 
              rounded-xl
              px-6
              py-4
              placeholder:text-secondary
              outline-none
              border-none
              text-white
              font-medium
              resize-none
              '
            />
          </label>
          <button
            type='submit'
            className='
            bg-tertiary 
            py-3 
            px-8 
            w-fit 
            text-white
            font-bold
            outline-none
            shadow-md
            shadow-primary
            rounded-xl
            '
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");