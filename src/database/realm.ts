import Realm from 'realm';
import { BillSchema } from './schemas/BillSchema';

export const getRealm = async () => await Realm.open({
  path: 'bills.realm',
  schema: [BillSchema],
});