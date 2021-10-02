import { Client } from '@elastic/elasticsearch'

export async function connectToElasticsearch() { 

    const ESS_CLOUD_ID = process.env.ESS_CLOUD_ID
    const ESS_CLOUD_USERNAME = process.env.ESS_CLOUD_USERNAME
    const ESS_CLOUD_PASSWORD = process.env.ESS_CLOUD_PASSWORD

    if (!ESS_CLOUD_ID || !ESS_CLOUD_USERNAME || !ESS_CLOUD_PASSWORD)
    {
        return "ERR_ENV_NOT_DEFINED"
    }

    return new Client({
        cloud: {
            id: ESS_CLOUD_ID,
        },
        auth: {
            username: ESS_CLOUD_USERNAME,
            password: ESS_CLOUD_PASSWORD,
        }
    })
}

export async function isConnectedToESS() { 
    let isConnected=false
    let dataIngested=false
    let docCount=0
    const client = await connectToElasticsearch()
    if(client != "ERR_ENV_NOT_DEFINED"){
      isConnected = true
  
      try{
      let {body : status} = await client.cat.count({
        index: 'my-index',
        format: 'json'
        })
        if(status && status.[0].count > 0){
          docCount = status.[0].count
          dataIngested = true
        }
      }catch (e){
        console.error('[WARN] Index {} Not found, ingest some data!')
      }
    }
    return {
        props: {
          isConnected,
          dataIngested,
          docCount,
        },
      }
}

export function IngestDataIntoESS(props) {
  console.log("Ingest Data into ESS")
  return <div>
  <p className="text-center">You're connected to Elastic Cloud! Hit below button to ingest sample data.</p>
  <div className="text-center pt-2">
    <a href="/api/ingestData" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-poppy text-black tracking-wider font-semibold text-sm">
      Ingest!
    </a>
  </div>
</div>;
}

export function ConfigureESS() {
  console.log("Configure ESS")
  return <div className="">
  <p className="text-2xl">
    It seems you have not configured Elasticsearch!
    <p className="p-20 pt-2 text-xl">
      Get started by editing <code className="pl-1 pr-1 bg-gray-200 rounded-md">env.local</code>
    </p>
  </p>
</div>;
}
