
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import Party from './Party';
import GuestType from './GuestType';

@ObjectType()
@Entity()
export default class Guest {
  @Field()
  @PrimaryGeneratedColumn()
  public id?: number;

  @Field()
  @Column()
  public firstName?: string;

  @Field()
  @Column()
  public lastName?: string;

  @Field()
  @Column({ nullable: true })
  public emailAddress?: string;

  @Field()
  @Column({ nullable: true })
  public songChoice?: string;

  @Field()
  @Column({ nullable: true })
  public attending?: boolean;

  @Field()
  @Column({ nullable: true })
  public isChild?: boolean;

  @Field((() => GuestType))
  @Column('enum', { enum: GuestType })
  public guestType?: GuestType;

  @Field(() => Party)
  @ManyToOne(() => Party, party => party.guests , ({ nullable: true }))
  public party?: Party;

}
