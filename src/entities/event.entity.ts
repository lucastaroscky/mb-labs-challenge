import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventCategory } from '../enums/category.enum';
import User from './user.entity';

@Entity('events')
class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column()
  place: string;

  @Column()
  date: string;

  @Column({ type: 'enum', default: EventCategory.BUSINESS, enum: EventCategory })
  category: EventCategory;

  @Column()
  image: string;

  @Column()
  price: Number;

  @OneToMany(() => User, episode => episode.tickets)
  users: User[];
}

export default Event;
