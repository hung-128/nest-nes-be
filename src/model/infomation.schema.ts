import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Information {
  @Prop({ required: true })
  detail: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export type InformationDocument = Information & Document;
export const InformationSchema = SchemaFactory.createForClass(Information);