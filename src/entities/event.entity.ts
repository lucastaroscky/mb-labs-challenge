import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventCategory } from '../enum/category.enum';
import User from './user.entity';

@Entity('events')
class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'longtext' })
  dscription: string;

  @Column()
  place: string;

  @Column()
  date: string;

  @Column()
  category: EventCategory;

  @Column()
  image: string;

  @Column()
  price: Number;

  @OneToMany(() => User, episode => episode.tickets, { eager: true })
  users: User[]
}

export default Event;
