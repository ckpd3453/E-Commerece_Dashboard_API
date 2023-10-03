import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String
    },
    description: {
      type: String
    },
    vendors: [
      {
        nameV: {
          type: String
        },
        is_main: {
          type: Boolean,
          default: false
        },
        varient: [
          {
            xs: {
              type: Number
            },
            sm: {
              type: Number
            },
            l: {
              type: Number
            },
            xl: {
              type: Number
            }
          }
        ]
      }
    ]
  },
  {
    timestamps: true
  }
);

export default model('Product', productSchema);
