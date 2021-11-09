import Head from 'next/head'
import { isConnectedToESS } from '../lib/elasticsearch'

export default function ingest({ isConnected, dataIngested, docCount }) {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ingesting data into Elasticsearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(isConnected && dataIngested) && <DataIngested docCount={docCount}/>}
      {(isConnected === true && dataIngested === false) && <IngestDataIntoESS/>}
      {(isConnected=== false) && <ConfigureESS/>}
    </div>
  )
}

export function DataIngested(props){
  return ( 
        <div className="text-center text-2xl">
            <p className="break-all tracking-normal max-w-xl leading-loose"> 
                🎉 You've ingested <span className="animate-bounce text-red-800 font-bold">{props.docCount}</span> documents into Elasticsearch!
            </p> 
        </div> 
        );

}

export function ConfigureESS() {
  return <div className="">
  <p className="text-2xl">
    It seems you have not configured Elasticsearch!
    <p className="p-20 pt-2 text-xl">
      Get started by editing <code className="pl-1 pr-1 bg-gray-200 rounded-md">env.local</code>
    </p>
  </p>
</div>;
}

export function IngestDataIntoESS(props) {
  return <div>
    <p className="text-center">You're connected to Elastic Cloud! Hit below button to ingest sample data.</p>
    <div className="text-center pt-2">
      <a href="/api/ingestData" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-poppy text-black tracking-wider font-semibold text-sm">
        Ingest!
      </a>
    </div>
  </div>;
}

export async function getServerSideProps() {
  return isConnectedToESS()
}