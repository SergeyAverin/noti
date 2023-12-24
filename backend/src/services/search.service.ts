import log4js from "log4js";

import { INote } from "../models/note.model";
import { ISearchRepository } from "../repository/search.repository"
import { INotesEditorRepository } from "../repository/notesEditor.repository"


const logger = log4js.getLogger()

export class SearchService {
    private searchRepository: ISearchRepository;
    private notesEditorRepository: INotesEditorRepository;
    constructor(searchRepository: ISearchRepository, notesEditorRepository: INotesEditorRepository) {
        this.searchRepository = searchRepository
        this.notesEditorRepository = notesEditorRepository;
    }
    search(searchString: string) {
        this.searchRepository.search(searchString);
    }
    async createDocument(note: INote) {
        const content = await this.notesEditorRepository.loadNote(note.slug)
        this.searchRepository.createDocument(note, content)
    }
}
