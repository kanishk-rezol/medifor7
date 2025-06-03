"use client";
import Head from 'next/head'
import Navbar from '@/components/pages/Navbar'
import HomeSection from '@/components/pages/Home'
import dynamic from 'next/dynamic'
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kanishk Portfolio</title>
      </Head>

      <main>
        <Navbar />
        <HomeSection />
      </main>
    </>
  )
}
