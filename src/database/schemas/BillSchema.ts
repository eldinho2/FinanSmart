export const BillSchema = {
  name: 'Bill',

  properties: {
    _id: 'string',
    amount: 'string',
    date: 'string',
    description: 'string',
    created_at: 'date',
  },

  primaryKey: '_id',
}