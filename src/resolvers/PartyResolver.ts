import { Resolver, Query, Arg, Mutation } from 'type-graphql';

import Party from '../entities/Party';
import { PartyInput } from '../entities/PartyInput';
import PartyService from '../services/PartyService';

@Resolver(Party)
export class PartyResolver {
  @Query(() => [Party])
  public async getAllParties() {
    return await PartyService.getAll();
  }

  @Query(() => Party)
  public async findPartyById(@Arg('id') id: number): Promise<Party> {
    return await PartyService.findById(id);
  }

  @Mutation((() => Party))
  public async createParty(@Arg('data') data: PartyInput): Promise<Party> {
    return await PartyService.create(data);
  }

}
