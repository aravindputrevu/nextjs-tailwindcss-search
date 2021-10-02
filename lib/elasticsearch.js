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