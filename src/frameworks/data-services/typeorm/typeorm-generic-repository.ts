import { Repository, FindOptionsWhere } from "typeorm";
import { IGenericRepository } from "../../../core";

export class TypeormGenericRepository<T>
  implements IGenericRepository<T>
{
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  findOne(id: number): Promise<T> {
    let findOptions: FindOptionsWhere<T> = { };
    findOptions = Object.assign(findOptions, { id });
    return this._repository.findOneBy(findOptions);
  }

  create(item: T): Promise<T> {
    let data = this._repository.create(item);
    return this._repository.save(data);
  }

  async update(id: number, item: T): Promise<T> {
    const data = await this.findOne(id);
    return this._repository.save({ ...data, ...item });
  } 

  async delete(id: number): Promise<void> {
    const data = await this.findOne(id);
    await this._repository.remove(data);
  }
}
