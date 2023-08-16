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
  link,
}: PortfolioProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0">
      <section className="mx-auto bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[26rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex mt-4 mb-2 sm:mt-auto gap-4">
            <a
              href={link}
              target="_blank"
              className="rounded-full text-base bg-indigo-500 text-center px-3 py-1 text-white hover:bg-indigo-100 hover:text-black tracking-widest duration-500 ease-in-out">
              View
            </a>
          </div>
          <ul className="grid grid-cols-3  gap-2 ">
            {tags.map((tag, index) => (
              <li
                className="rounded-full text-base bg-indigo-500 text-center px-3 py-1 text-white"
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          height={400}
          width={400}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}
export default Portfolio
