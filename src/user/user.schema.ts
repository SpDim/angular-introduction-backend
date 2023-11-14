import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop({ type: String, required: true })
  givenName: string;
  @Prop({ type: String, required: true })
  surName: string;
  @Prop({ type: String, required: true })
  age: string;
  @Prop({ type: String, required: true, unique: true })
  email: string;
  @Prop({ type: String, required: true })
  address: string;
  @Prop({ type: String, default: '' })
  photoURL: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
