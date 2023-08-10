import Image from 'next/image'
import { portfolios } from '@/constant'
import Button from './Button'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-5/6 mx-auto">
      <h2 className="text-3xl font-extrabold text-center">PORTFOLIO</h2>
      {portfolios.map((portfolio) => (
        <motion.div
          key={portfolio.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-0 md:space-y-12">
            <div className="w-full md:w-1/2 flex flex-col text-left mb-4 md:mb-0">
              <h2 className="uppercase font-extrabold mt-4">
                {portfolio.title}
              </h2>
              <p>{portfolio.description}</p>
              <p>{portfolio.stack}</p>
              <Button link={portfolio.link} title="Live View" />
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={portfolio.thumb}
                width={700}
                height={100}
                alt="ex"
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
export default Portfolio
