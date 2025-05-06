import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
    switch (req.method) {
        case 'POST':
            return login(req, res);
        default:
            return res.status(403).json(false);
    }
}

const login = async (req: NextApiRequest, res: NextApiResponse<boolean>) => {
    const { user, password } = req.body;
    if (user === 'test@pulsar.io' && password === 'pass123*') {
        return res.status(200).json(true);
    }
    return res.status(403).json(false);
};
