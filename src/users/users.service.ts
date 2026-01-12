import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  async create(data: Partial<User>) {
    const user = new this.userModel(data);
    return user.save();
  }

  async findAll() {
    return this.userModel.find().select('-password');
  }
}
