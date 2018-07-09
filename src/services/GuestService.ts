import { EntityManager, Repository, getRepository } from 'typeorm';

import Guest from '../entities/Guest';

export default class GuestService {
  public static query = (context?: EntityManager): Repository<Guest> => context ? context.getRepository(Guest) : getRepository(Guest);

  public static async getAll(): Promise<Guest[]> {
    return await this.query().find({ relations: ['party'] });
  }

  public static async findById(id: number): Promise<Guest> {
    return await this.query().findOne(id, { relations: ['party'] });
  }

  public static async create(guest: Partial<Guest>): Promise<Partial<Guest>> {
    return await this.query().save(guest);
  }
}
