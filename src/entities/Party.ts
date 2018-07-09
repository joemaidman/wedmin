import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import Guest from './Guest';

@ObjectType()
@Entity()
export default class Party {
  @Field()
  @PrimaryGeneratedColumn()
  public id?: number;

  @Field()
  @Column()
  public name?: string;

  @Field(() => [Guest])
  @OneToMany(() => Guest, guest => guest.party, { nullable: true, eager: true })
  public guests?: Guest[];
}
