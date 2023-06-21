export const BillSchema = {
  name: 'Bill',

  properties: {
    _id: 'string',
    amount: 'string',
    date: 'string',
    description: 'string',
    repetition: 'string',
    created_at: 'date',
    isBill: 'bool',
  },

  primaryKey: '_id',
}