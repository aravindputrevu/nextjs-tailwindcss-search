import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to{' '}
          <a className="text-blue-450 hover:text-pink-400" href="https://elastic.co">
            Next.js with Elasticsearch!
          </a>
        </h1>

        <p className="mt-5 text-3xl">
          You know,{' '} for Search!
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/ingest">
            <a
              href="/ingest"
              className="p-4 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Ingest Data &rarr;</h3>
              <p className="mt-4 text-xl">
                Index sample data into Elasticsearch!
              </p>
            </a>
            </Link>
          <a
            href="/search"
            className="p-4 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Search &rarr;</h3>
            <p className="mt-4 text-xl">
              Search the data stored in Elasticsearch!
            </p>
          </a>

          <a
            href="https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html"
            className="p-4 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn more about Elasticsearch Node.js client!
            </p>
          </a>

          <a
            href="#"
            className="p-4 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Deploy your Next.js & Elasticsearch site Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/elastic.svg" alt="Vercel Logo" className="p-1 h-9 ml-2" /><div className="p-2">&</div>  
          <img src="/vercel.svg" alt="Vercel Logo" className="h-5 ml-2" />
        </a>
      </footer>
    </div>
  )
}