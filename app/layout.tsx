import Footer from '@/components/footer'
import Header from '@/components/header'
// import ThemeSwitch from '@/components/theme-switch'
import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeContextProvider from '@/context/theme-context'
import { dateDiffInYears } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import favIcon from '@/app/favicon.ico'
import './globals.css'
// import { useEffect } from 'react'
import { Background } from '@/components/background'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
let yearsOfFreelancingExperience = dateDiffInYears(new Date("2020-11-1"), new Date(Date.now()))

export const metadata = {
  metadataBase: 'https://johnroylapida.vercel.app',
  title: 'John Roy Lapida | Portfolio',
  description: `John Roy Lapida is a freelance website and mobile app developer with ${yearsOfFreelancingExperience} years of experience in freelancing.`,
  openGraph: {
    title: "John Roy Lapida | Portfolio",
    description: `John Roy Lapida is a freelance website and mobile app developer with ${yearsOfFreelancingExperience} years of experience in freelancing.`,
    image: favIcon.src,
    url: "https://johnroylapida.vercel.app",
    type: "website",
    locale: "en_US",
    site_name: "John Roy Lapida | Portfolio",
    authors: ["John Roy Lapida"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='!scroll-smooth dark'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[hsla(240deg, 20%, 20%, 1)] dark:text-gray-50 dark:text-opacity-90`}>
        {/*         
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div> 
        */}

        {/* <!-- Messenger Chat Plugin Code --> */}
        <div id="fb-root"></div>

        {/* <!-- Your Chat Plugin code --> */}
        <div id="fb-customer-chat" className="fb-customerchat">
        </div>

        <Script
          id="messenger-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "189895014212773");
            chatbox.setAttribute("attribution", "biz_inbox");
        `
          }}
        ></Script>

        {/* <!-- Your SDK code --> */}
        <Script
          id="messenger-sdk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function() {
                FB.init({
                    xfbml            : true,
                    version          : 'v18.0'
                });
            };

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `
          }}
        ></Script>

        <ThemeContextProvider>
          <Background />
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position='top-right'/>
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
