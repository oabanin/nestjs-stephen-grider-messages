import { Injectable } from '@nestjs/common';

import { MessagesRepository } from './messages.repository';
@Injectable()
export class MessagesService {
  //SERVICE CREATING ITS OWN DEPENDENCIES
  //DO NOT DO THIS
  // constructor() {
  //   this.messagesRepo = new MessagesRepository();
  // }

  // messagesRepo: MessagesRepository;
  // constructor(repo: MessagesRepository) {
  //   this.messagesRepo = repo;
  // }
  // SAME AS
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
