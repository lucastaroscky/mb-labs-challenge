import { Repository } from 'typeorm';
import { AppDataSource } from '../../../configs/database/data-source';
import { Event } from '../../entities';
import NotFoundException from '../../exceptions/not-found.exception';

class EventService {
  private eventRepository: Repository<Event>;

  constructor() {
    this.eventRepository = AppDataSource.getRepository(Event);
  }

  private async findOne(id: number) {
    return this.eventRepository.findOne({ where: { id } });
  }

  async list() {
    return this.eventRepository.find();
  }

  async listOne(id: number) {
    const event = await this.findOne(id);

    if (!event) {
      throw new NotFoundException(`Event id ${id} was not found!`);
    }

    return event;
  }

  async create(event: Event) {
    return this.eventRepository.save(event);
  };

  async update(id: number, event: Partial<Event>) {
    await this.eventRepository.update(id, event);

    return this.listOne(id);
  };

  async delete(id: number) {
    const deleted = await this.eventRepository.delete(id);

    if (!deleted.affected) {
      throw new NotFoundException(`Event ${id} was not found!`);
    }

    return deleted;
  };
}

export default EventService;
