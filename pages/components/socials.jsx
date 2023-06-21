import "@fontsource/arvo"; // Defaults to weight 400.
import styles from '@/styles/Home.module.css'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

export default function Socials () {
    return (
        <div className="social-icons flex flex-row gap-6 mt-10 mb-14 justify-center">
            <SocialIcon url='https://www.instagram.com/pelotonespresso/' target="_blank" rel="noopener noreferrer" bgColor="#dd0000"/>
            <SocialIcon url='https://www.facebook.com/pelotonespresso/' target="_blank" rel="noopener noreferrer" bgColor='#dd0000' />
            <SocialIcon url='https://twitter.com/pelotonespresso' target="_blank" rel="noopener noreferrer" bgColor='#dd0000' />
        </div>
    )
}