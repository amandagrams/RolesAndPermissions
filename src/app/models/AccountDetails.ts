import { FeaturePermission } from '../permission/models/feature-permission.model';

export class AccountDetails {
    User_Row_Seq: number;
  Role: String;
  ErStatus: String;
  FrStatus: String;
  LchSRStatus:string;
  featurePermissions: FeaturePermission[];
}