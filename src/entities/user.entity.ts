import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Roles } from '../enums/role.enum';
import Event from './event.entity';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Roles })
  role: Roles;

  @ManyToMany(() => Event, { eager: true })
  @JoinTable()
  tickets: Event[];
}

export default User;
