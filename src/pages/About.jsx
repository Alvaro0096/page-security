import React from 'react';
import '../styles/About.css';
import * as Icons from 'react-icons/im';


const About = () => {
  return (
    <section className='about'>
      <div className="container-about">
        <div className="icon-about"><Icons.ImQuotesLeft /></div>
        <div className="info-about">
          <div className="text-about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quae ex distinctio dolorem, quis dolores. Necessitatibus iusto accusantium rerum itaque, accusamus, aperiam ullam fuga nisi laborum aspernatur, beatae temporibus.</div>
          <div className="descr-about">
            <p>Nombre</p>
            <p>Lugar</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About