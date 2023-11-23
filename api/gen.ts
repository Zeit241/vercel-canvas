import { createCanvas } from  'canvas'
import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {
    const canvas = createCanvas(200, 200)
    const ctx = canvas.getContext('2d')
    ctx.font = '30px Impact'
    ctx.fillText('Awesome!', 50, 100)
    res.send(canvas.toBuffer() )
    // return res.json({ name: 'John', email: 'john@example.com', buffer: });
}