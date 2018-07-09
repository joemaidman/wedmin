import { EntityManager, Repository, getRepository } from 'typeorm';

import Party from '../entities/Party';

export default class PartyService {
  public static query = (context?: EntityManager): Repository<Party> => context ? context.getRepository(Party) : getRepository(Party);

  public static async getAll(): Promise<Party[]> {
    return await this.query().find();
  }

  public static async findById(id: number): Promise<Party> {
    return await this.query().findOne(id);
  }

  public static async create(party: Party): Promise<Party> {
    return await this.query().save(party);
  }
}
