import * as Minio from 'minio'
import log4js from 'log4js'

import minioS3Config from '../../conf/minioS3.config'
import { ICell } from '../models/cell'

const logger = log4js.getLogger()

const BACKET_NAME = 'notes'

export class NotesEditorRepository {
  s3: Minio.Client

  constructor() {
    logger.debug('NotesEditorRepository constructor')
    this.s3 = new Minio.Client(minioS3Config)
    logger.debug('NotesEditorRepository end constructor')
  }
  async uploadNote(note: ICell[], slug: string) {
    logger.debug('NotesEditorRepository uploadNote')
    const jsonBuffer = Buffer.from(JSON.stringify(note))
    await this.s3.putObject(
      BACKET_NAME,
      `${slug}.json`,
      jsonBuffer,
      (err, etag) => {
        if (err) {
          return console.log(err)
        }
        console.log(`File uploaded successfully. ETag: ${etag}`)
      },
    )
    logger.debug(`Put ${slug}.json in ${BACKET_NAME}`)
  }
}
