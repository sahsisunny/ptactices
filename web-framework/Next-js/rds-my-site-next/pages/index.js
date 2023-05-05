import Head from 'next/head'
import Navbar from '../components/Navbar'
import UserStatus from '../components/UserStatus'

export default function Home() {
  return (
    <>
      <Head>
        <title>My | Real Dev Squad</title>
        <meta name="description" content="Sunny Sahsi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://my.realdevsquad.com/icons/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <UserStatus />
      </main>

    </>
  )
}
