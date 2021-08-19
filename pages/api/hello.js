import { connectToElasticsearch } from "../../lib/elasticsearch"

export default async function hello(req, res) {
    const client = await connectToElasticsearch()
    const { body } = await client.info()
    res.status(200).json({body})
    
  }