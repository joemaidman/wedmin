import { InputType, Field } from 'type-graphql';

import Guest from './Guest';

@InputType()
export class GuestInput implements Partial<Guest> {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  emailAddress: string;
}
