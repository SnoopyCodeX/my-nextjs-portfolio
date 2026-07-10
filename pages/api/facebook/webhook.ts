import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { mode, token, challenge } = {mode: req.query['hub.mode'], token: req.query['hub.token'], challenge: req.query['hub.challenge']}

        if (mode && token) {
            if (mode === 'subscribe' && token === 'supersecretverifytokenfromfb') {
                console.log('WEBHOOK_VERIFIED')
                res.status(200).send(challenge)
            } else {
                res.status(403)
            }
        }
    } else if (req.method === 'POST') {
        const { object } = req.body

        if (object === 'page') {
            res.status(200).send('EVENT_RECEIVED')
        } else {
            res.status(404)
        }
    }
}