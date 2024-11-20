import { Poppins } from 'next/font/google';
import './global.css';
import './icon.css';
import './animation.css';

export const poppins = Poppins({
    weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});
