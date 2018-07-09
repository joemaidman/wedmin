import { InputType, Field } from 'type-graphql';

import Party from './Party';

@InputType()
export class PartyInput implements Partial<Party> {
  @Field()
  name: string;

}
