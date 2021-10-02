import Head from 'next/head'
import { isConnectedToESS } from '../lib/elasticsearch'

export default function ingest() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
        <title>Ingesting data into Elasticsearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className="text-center">You're connected to Elastic Cloud!</p>
      </div>
    </div>
  )
  }

export async function getServerSideProps() {
    return isConnectedToESS()
}