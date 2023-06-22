export const BillObjectSchema = {
  name: 'BillObjectSchema',

  properties: {
    _id: 'string',
    name: 'string',
    amount: 'string',
    date: 'string',
    description: 'string',
    repetition: 'string',
    created_at: 'date',
    isBill: 'bool',
  },

  primaryKey: '_id',
}