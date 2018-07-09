import { Resolver, Query, Arg, Mutation } from 'type-graphql';

import Guest from '../entities/Guest';
import { GuestInput } from '../entities/GuestInput';
import GuestService from '../services/GuestService';

@Resolver(Guest)
export class GuestResolver {
  @Query(() => [Guest])
  public async getAllGuests() {
    return await GuestService.getAll();
  }

  @Query(() => Guest)
  public async findGuestById(@Arg('id') id: number) {
    return await GuestService.findById(id);
  }

  @Mutation((() => Guest))
  public async createGuest(@Arg('guest') guest: GuestInput): Promise<Guest> {
    return await GuestService.create(guest);
  }

}
