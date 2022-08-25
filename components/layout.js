import Navbar from './navbar'
import USP from './usp'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children, metaTitle }) {
  return (
    <>

      <Head>
        <title>{metaTitle ? metaTitle : 'Hubble | We help organizations make sense of infinity'}</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <USP/>

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}
