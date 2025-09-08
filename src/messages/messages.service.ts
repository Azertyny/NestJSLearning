import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependancies
    // DONT DO THIS ON REAL APPS (instead use dependancies injection)
    this.messagesRepo = new MessagesRepository();
  }
  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(message: string) {
    this.messagesRepo.create(message);
  }
}
