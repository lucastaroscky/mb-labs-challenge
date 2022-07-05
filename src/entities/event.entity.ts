import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventCategory } from '../enums/category.enum';
import Place from './place.entity';
import User from './user.entity';

@Entity('events')
class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'longtext' })
  description: string;

  @ManyToOne(() => Place, place => place.eventPlace)
  place: Place;

  @Column()
  date: string;

  @Column({ type: 'enum', default: EventCategory.BUSINESS, enum: EventCategory })
  category: EventCategory;

  @Column()
  image: string;

  @Column()
  price: Number;

  @OneToMany(() => User, episode => episode.tickets, { eager: true })
  users: User[];

  @ManyToOne(() => User)
  @JoinTable()
  createdBy: User;
}

export default Event;
