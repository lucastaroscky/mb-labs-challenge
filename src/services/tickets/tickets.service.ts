import { Repository } from 'typeorm';
import { AppDataSource } from '../../../configs/database/data-source';
import { Event, User } from '../../entities';
import BadRequestException from '../../exceptions/bad-request.exception';

class TicketService {
  userRepository: Repository<User>;
  eventRepository: Repository<Event>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
    this.eventRepository = AppDataSource.getRepository(Event);
  }

  private isEventOnTheList(eventId: number, user: User) {
    console.log(user.tickets);
    return user.tickets.filter((ticket) => ticket.id === eventId).length > 0;
  }

  async add(eventId: number, user: User) {
    if (this.isEventOnTheList(eventId, user)) {
      throw new BadRequestException('You already have this event ticket!');
    }

    const event = await this.eventRepository.findOne({ where: { id: eventId } });

    if (!event) {
      throw new BadRequestException(`Event id ${eventId} was not found!`);
    }

    user.tickets = [...user.tickets, event];

    await this.userRepository.save(user);

    return this.userRepository.findOne({ where: { id: user.id } });
  }

  remove(eventId: number, user: User) {
    const newUserList = user.tickets.filter((ticket) => ticket.id !== eventId);

    return this.userRepository.save({
      ...user,
      tickets: newUserList
    });
  }
}

export default TicketService;
