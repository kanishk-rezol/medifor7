import Head from 'next/head'
import Navbar from '@/components/pages/Navbar'
import HomeSection from '@/components/pages/Home'
import AboutSection from '@/components/pages/About'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kanishk Portfolio</title>
      </Head>

      <main>
        <Navbar />
        <HomeSection />
        <AboutSection/>
      </main>
    </>
  )
}
