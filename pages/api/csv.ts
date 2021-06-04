// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getData } from '../../lib/ParseCSV'

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const data = await getData();
    res.status(200).json({ data: data })
  } catch (error) {
    res.status(404).json({error: "cannot load data, please inform the author"})
  }

}
