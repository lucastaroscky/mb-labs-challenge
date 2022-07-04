import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
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

  @Column({ type: 'enum', default: Roles.USER, enum: Roles })
  role: Roles;

  @ManyToMany(() => Event)
  @JoinTable()
  tickets: Event[];

  @OneToMany(() => Event, event => event.createdBy)
  list: Event[];
}

export default User;
