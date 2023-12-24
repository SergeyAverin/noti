import log4js from 'log4js'
import { Client } from '@elastic/elasticsearch'

import { INote } from '../models/note.model'

const logger = log4js.getLogger()
const NOTE_INDEX_NAME = 'notes'

export interface ISearchRepository {
  search(searchString: string):  Promise<undefined>;
  createDocument(note: INote, content: unknown): void;
  updateDocument(note: INote): void;
  removeDocument(noteSlug: string): void;
}

export class SearchElasticsearchRepository implements ISearchRepository {
  private client: Client;
  constructor() {
    this.client = new Client({ node: 'http://elasticsearch:9200' })
    this.createIndexIfNotExists(NOTE_INDEX_NAME)
    this.checkConnection();
  }
  async createIndexIfNotExists(indexName: string) {
    const indexExists = await this.client.indices.exists({ index: indexName });
    if (indexExists == false) {
      await this.createNoteIndex();
    }
  }
  async search(searchString: string) {
    const response = await this.client.search({
      index: NOTE_INDEX_NAME,
      body: {
        query: {
          match_all: {}
        },
        size: 10000
      }
    });
    logger.error('response')
    logger.error(response.hits.hits.length)
    return undefined
  }
  async createDocument(note: INote, content: unknown | string) {
    const isExist =  await this.client.exists({ index: NOTE_INDEX_NAME, id: note.slug });
    const body =  {
      title: note.title,
      slug: note.slug,
      content: content
    }
    if (isExist == false) {
      this.client.index({
        index: NOTE_INDEX_NAME,
        id: note.slug,
        body: body
      })
    } else {
      this.client.update({
        index: NOTE_INDEX_NAME,
        id: note.slug,
        body: {doc: body}
      })
    }
  }
  updateDocument(note: INote) {
    return
  }
  removeDocument(noteSlug: string) {
    return
  }

  async checkConnection() {
    try {
      await this.client.ping();
      logger.info('Elasticsearch is up and running!');
    } catch (error) {
      logger.error('Error connecting to Elasticsearch: ', error);
    }
  }
  
  private async createNoteIndex() {
    await this.client.indices.create({
      index: NOTE_INDEX_NAME,
      body: {
        mappings: {
          properties: {
            title: { type: 'text' },
            slug: { type: 'keyword' },
            content: { type: 'text' },
          },
        },
      },
    })
    
  }
}
