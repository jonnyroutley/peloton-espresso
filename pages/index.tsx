import Head from 'next/head'
import Image from 'next/image'
import "@fontsource/arvo"; // Defaults to weight 400.
import styles from '@/styles/Home.module.css'
import { SocialIcon } from 'react-social-icons';


export default function Home() {
  return (
    <>
      <Head>
        <title>Peloton Espresso</title>
        <meta name="description" content="Speciality Coffee Shop and Cafe in Cowley, Oxford." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className={styles.main}>
        <div className='mb-4 md:mb-8'>
          <Image src='/peloton-logo.svg' width='128' height='128' alt='some image'/>
        </div>
        <div className="header text-center mb-6 md:mb-8">
          <h1 className="">Peloton Espresso</h1>
          <h3 className="">Coffee Shop and Clubhouse</h3>
        </div>
        <div className="main-page flex flex-col justify-start max-w-xl w-full gap-4 md:gap-8 ">
          <hr />
          <div className="section about-section">
            <h2 className="">About</h2>
            <p>Peloton Espresso is the best cafe in Oxford ! Opened in 2017... Bike/Dog Friendly... </p>
            <p>Please check our Instagram (below) for recent news and updates.</p>
          </div>

          <div className="section time-section">
            <h2 className="">Opening Times</h2>
            <p>Mon - Fri: 8:00 - 17:00</p>
            <p>Sat & Sun: 9:00 - 17:00</p>
          </div>
          <div className="section coffee-section">
            <h2 className="">Our Coffee</h2>
            <p>Our coffee is sourced from <a className='text-link' href='https://routescoffee.co.uk/'>Routes</a>, a local roastery.</p>
            <p>We serve a range of espresso-based drinks... two filters on every day... tea + decaf options</p>
          </div>
          <div className="section cake-section">
            <h2 className="">Cakes</h2>
            <p>Fresh baked goods ! Toasted banana bread ! Donut Thursdays !</p>
          </div>
          <div className="section location-section">
            <h2 className="">Find Us</h2>
            <p>Peloton Espresso, 76 Cowley Road, Oxford, OX4 1JB</p>
            {/* <div className=''> */}
            <iframe className='my-4 w-full h-[200px] md:h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.136893415165!2d-1.242926482556114!3d51.74882029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c14dcf888d3f%3A0xc8e148a68f832588!2sPeloton%20Espresso!5e0!3m2!1sen!2suk!4v1678747848259!5m2!1sen!2suk" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* </div> */}
          </div>
          <div>
            <h2>Contact</h2>
            <p>Any questions? We would love to hear from you !</p>
            <p>Email: <a className='text-link' href="mailto:pelotonespresso@gmail.com">pelotonespresso@gmail.com</a></p>
            <p>Telephone: 01865 248808</p>
            <p>We are also on Instagram, Facebook and Twitter: @pelotonespresso</p>
            <div className="social-icons flex flex-row gap-6 mt-4 justify-center">
              <SocialIcon url='https://www.instagram.com/pelotonespresso/' bgColor="#ffffff"/>
              <SocialIcon url='https://www.facebook.com/pelotonespresso/' bgColor='#ffffff' />
              <SocialIcon url='https://twitter.com/pelotonespresso' bgColor='#ffffff' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
