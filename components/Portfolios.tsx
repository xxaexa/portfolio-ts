import React from 'react'
import { portfolios } from '@/constant'
import Portfolio from './Portfolio'

const Portfolios = () => {
  return (
    <section id="portfolio">
      <h2 className="mt-32 mb-4 lg:mt-0 text-center text-3xl">PORTFOLIO</h2>
      <div className="mx-auto">
        {portfolios.map((portfolio, index) => (
          <React.Fragment key={index}>
            <Portfolio {...portfolio} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
export default Portfolios
