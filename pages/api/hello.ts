// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const API_KEY = process.env.GOOGLE_KEY;
  res.status(200).json({ key: API_KEY })
}
