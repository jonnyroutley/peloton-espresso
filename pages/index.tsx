import Header from './components/header'
import Socials from './components/socials'
import Image from 'next/image'
import "@fontsource/arvo"; // Defaults to weight 400.
import styles from '@/styles/Home.module.css'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className='w-full bg-zinc-50'>
          <div className="main-page flex flex-col mx-auto bg-zinc-50 text-zinc-800 p-2 md:p-4 justify-start max-w-2xl w-full gap-4 md:gap-6">
            <div className="section about-section">
              <h2 className="">About</h2>
              <p>Peloton Espresso is the best cafe in Oxford ! Opened in 2017... Bike/Dog Friendly... </p>
              <p>Please check our Instagram (below) for recent news and updates.</p>
            </div>
            {/* <div className='gallery flex justify-between gap-2'>
              <div className='gallery-image'>
                <Image src='/shop.jpg' width='300' height='300' alt='shop'/>
              </div>
              <div className='gallery-image'>
                <Image src='/donuts.jpg' width='300' height='300' alt='doughnuts'/>
              </div>
              <div className='gallery-image'>
                <Image src='/garden.jpg' width='300' height='300' alt='garden'/>
              </div>
            </div> */}
            <div className="section time-section">
              <h2 className="">Opening Times</h2>
              <p>MON - FRI: 8:00 - 17:00</p>
              <p>SAT & SUN: 9:00 - 17:00</p>
            </div>
            <div className="section coffee-section">
              <h2 className="">Coffee & Food</h2>
              <p>Our coffee is sourced from <a className='text-link' href='https://routescoffee.co.uk/'>Routes</a>, a local roastery. We also serve decaf, a range of teas, and other soft drinks. <Link href='/foodanddrink' className="text-link">Read more...</Link></p>
            </div>
            {/* <div className="section cake-section">
              <h2 className="">Cakes</h2>
              <p>Fresh baked goods ! Toasted banana bread ! Donut Thursdays !</p>
            </div> */}
            <div className="section location-section">
              <h2 className="">Find Us</h2>
              <p>Peloton Espresso, 76 Cowley Road, Oxford, OX4 1JB</p>
              {/* <div className=''> */}
              <iframe className='my-4 w-full h-[200px] md:h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.136893415165!2d-1.242926482556114!3d51.74882029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c14dcf888d3f%3A0xc8e148a68f832588!2sPeloton%20Espresso!5e0!3m2!1sen!2suk!4v1678747848259!5m2!1sen!2suk" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              {/* </div> */}
            </div>
            <div className='section contact-section space-y-4 '>
              <h2>Contact</h2>
              <p>Any questions? We would love to hear from you !</p>
              <p>Email: <a className='text-link' href="mailto:pelotonespresso@gmail.com">pelotonespresso@gmail.com</a></p>
              <p>Telephone: 01865 248808</p>
              <p>We are also on Instagram, Facebook and Twitter: @pelotonespresso</p>
            </div>
            <Socials />
          </div>
        </div>
      </main>
    </>
  )
}
