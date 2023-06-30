import { Request, Response } from 'express'

class NotesController {
  get(req: Request, res: Response) {
    res.send('note list')
  }
}

export default new NotesController()
