import Head from 'next/head'
import Image from 'next/image'
import "@fontsource/arvo"; // Defaults to weight 400.
import Link from 'next/link';

export default function Header () {
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
      <div className='header flex flex-col items-center pt-[1rem] md:pt-[2rem] bg-[#dd0000] text-white font-[arvo]'>
        <div className='mx-auto mb-4 md:mb-8'>
          <Image src='/peloton-logo.svg' width='96' height='96' alt='some image'/>
        </div>
        <div className="text-center mb-6 md:mb-8">
          <h1 className="leading-none"><Link href='/'>Peloton Espresso</Link></h1>
          <h3 className="mt-4">Coffee Shop and Clubhouse</h3>
        <hr className="border-0 md:border md:mt-4"/>
        </div>
      </div>
    </>
  )
}