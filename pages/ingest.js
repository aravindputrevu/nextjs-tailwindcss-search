import Head from 'next/head'
import { IngestDataIntoESS, ConfigureESS, isConnectedToESS } from '../lib/elasticsearch'

export default function ingest({isConnected, dataIngested, docCount}) {
  console.log('Test Test variables ***', isConnected, docCount, dataIngested)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
        <title>Ingesting data into Elasticsearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(isConnected && dataIngested) && <DataIngested docCount={docCount}/>}
      {(isConnected===true && dataIngested===false) && <IngestDataIntoESS/> }
      {(isConnected=== false) && <ConfigureESS/>}
    </div>
  )
}



function DataIngested(props){
  console.log("Data Ingested")
  return ( 
        <div className="text-center text-2xl">
            <p className="break-all tracking-normal max-w-xl leading-loose"> 
                🎉 You've ingested <span className="animate-bounce text-red-800 font-bold">{props.docCount}</span> documents into Elasticsearch! 
                <a href="/search" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-blue-450 text-white tracking-wider font-semibold text-lg">
                   Search 🔍
                </a>
            </p> 
        </div> 
        );

}

export async function getServerSideProps() {
    return isConnectedToESS()
}