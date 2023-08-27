import Image from 'next/image'
import { useRef } from 'react'
import { portfolios } from '@/constant'
import { motion, useScroll, useTransform } from 'framer-motion'
type PortfolioProps = (typeof portfolios)[number]

const Portfolio = ({
  title,
  description,
  tags,
  imageUrl,
  live,
  code,
}: PortfolioProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0">
      <section className="flex justify-between mx-auto bg-gray-100 px-2 md:px-0 md:w-4/6 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 lg:max-w-[50%] flex flex-col h-full ">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-700 dark:text-white/70 uppercase">
              {description}
            </p>
            <div className="flex  space-x-2">
              <a
                href={live}
                target="_blank"
                className="w-32 rounded-lg text-base bg-indigo-500 text-center px-3 py-1 text-white hover:bg-indigo-100 hover:text-black tracking-widest duration-500 ease-in-out my-4">
                LIVE VIEW
              </a>
              <a
                href={code}
                target="_blank"
                className="w-32 rounded-lg text-base bg-indigo-500 text-center px-3 py-1 text-white hover:bg-indigo-100 hover:text-black tracking-widest duration-500 ease-in-out my-4">
                SOURCE CODE
              </a>
            </div>
          </div>
          <div className="flex mt-4 mb-2 sm:mt-auto"></div>
          <ul className="flex gap-2">
            {tags.map((tag, index) => (
              <li
                className="rounded-lg bg-indigo-500 text-center px-3 py-1 text-white text-2xl"
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="my project"
          quality={95}
          height={400}
          width={400}
          className="absolute hidden lg:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
       "
        />
      </section>
    </motion.div>
  )
}
export default Portfolio
