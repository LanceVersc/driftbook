import { useSession, getSession, signIn, signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from "./api/auth/[...nextauth]";
import Head from 'next/head';
import Header from '@/components/Header';
import Login from '@/components/Login';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';
import Widgets from '@/components/Widgets'
import { db } from '@/firebase';

export default function Home() {
  const { data: session } = useSession()

  if (session) return (
    <div className='h-screen bg-gray-700 overflox-hidden'>
      <Head>
        <title>Driftbook</title>
      </Head>
      
      <Header />

      <main className='flex'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>)
    else return (<div>
      <Login />
    </div>);
  
}

export async function getServerSideProps(context) {
  // Pobierz użytkownika
  const session = await getSession(context);
  
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  return {
    props: {
      session
    },
  }
}