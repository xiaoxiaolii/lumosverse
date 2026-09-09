import type { Metadata } from 'next';
import './globals.css';
import {Inter} from 'next/font/google';
const inter=Inter({subsets:['latin'],weight:['300','400','500','600','700'],variable:'--font-inter',display:'swap'});
export const metadata: Metadata = {title:'Lumosverse — Every story deserves its audience.',description:'A creator-first content distribution platform. Connect with the audiences who value your stories and keep more of the value you create.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={inter.variable}>{children}</body></html>}
