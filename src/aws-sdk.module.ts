// src/aws-sdk.module.ts
import { Module, Global } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Global()
@Module({
  providers: [
    {
      provide: 'DYNAMODB',
      useFactory: () => {
        AWS.config.update({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: 'ap-southeast-1',
        });
        return new AWS.DynamoDB.DocumentClient();
      },
    },
  ],
  exports: ['DYNAMODB'],
})
export class AwsSdkModule {}
