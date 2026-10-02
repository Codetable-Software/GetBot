import { search } from './search.js';
export class GetBot { constructor({ documents = [] } = {}) { this.documents = documents; } async search(query, options) { return search(query, this.documents, options); } }
