import Realm from 'realm';
import { BillObjectSchema } from './schemas/BillObjectSchema';

export const getRealm = async () => await Realm.open({
  path: 'BillObjectSchema.realm',
  schema: [BillObjectSchema],
});