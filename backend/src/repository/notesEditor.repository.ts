import * as Minio from 'minio'
import log4js from 'log4js'

import minioS3Config from '../../conf/minioS3.config'

const logger = log4js.getLogger()

const BACKET_NAME = 'notes'

export interface INotesEditorRepository {
  uploadNote(content: string, slug: string): void;
  loadNote(slug: string): Promise<unknown>;
}

export class NotesEditorMinioRepository implements INotesEditorRepository {
  s3: Minio.Client

  constructor() {
    this.s3 = new Minio.Client(minioS3Config)
  }
  async uploadNote(content: string, slug: string) {
    const buffer = Buffer.from(content.toString())
    await this.s3.putObject(
      BACKET_NAME,
      `${slug}.txt`,
      buffer,
      buffer.length,
      (err, etag) => {
        if (err) {
          return logger.error(err)
        }
        logger.info(`uploadded file ${slug}.txt`)
        logger.info(slug)
      },
    )
  }

  async loadNote(slug: string) {
    return new Promise((resolve, reject) => {
      try {
        logger.info(`loadded file ${slug}.txt`)
        this.s3.statObject(BACKET_NAME, `${slug}.txt`, async (err) => {
          if (err) {
            logger.error(err)
            resolve('')
          } else {
            const dataStream = await this.s3.getObject(
              BACKET_NAME,
              `${slug}.txt`,
            )
            let content = ''
            dataStream.on('data', (chunk) => {
              content += chunk
            })
            dataStream.on('end', () => {
              try {
                resolve(content)
              } catch (error) {
                reject(error)
              }
            })
          }
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}
