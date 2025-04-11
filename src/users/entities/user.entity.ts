import { Entity } from 'typeorm';
export class User {
  public id?: number;
  public userId!: string;
  public firstName!: string;
  public lastName!: string;
  public mobileNumber!: string;
  public emailAddress!: string;
  public password!: string;
  public gender!: string;
  public emailVerifiedAt?: Date;
  public lastLoginDate?: Date;
  public deletedAt?: string;
  public authToken?: string;
  public createAt!: Date;
  public updatedAt!: Date;
  public isVerified?: boolean;
  public userRoleId?: number;
  public photoLink?: string;
  public createdBy?: string;
  public modifiedBy?: string;
  public loginAttempt?: number;
  public authTokenCreationDate?: number;
  public authTokenExpirationDate?: number;
  public otp!: string;
  public otpCreatedDate!: string;
  public otpExpDate!: string;
  public userStatus!: string;
}
