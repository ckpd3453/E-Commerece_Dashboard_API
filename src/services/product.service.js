import Product from '../models/product.model';

export const getAllProducts = async () => {
  const vendors = await Product.find();
  return vendors;
};

export const addProducts = async (body) => {
  const product = await Product.findOne({ name: body.name });
  if (product == null) {
    if (body.vendors[0].varient[0] == null) {
      throw new Error('Please add atleast one varient.');
    }

    const addedVendor = await Product.create(body);
    return addedVendor;
  } else {
    throw new Error('Product is already added');
  }
};

export const updateProductDetails = async (productId, body) => {
  const product = await Product.findByIdAndUpdate({ _id: productId }, body);
  return product;
};

export const deleteProductDetail = async (productId) => {
  const deletedProduct = await Product.findByIdAndDelete({ _id: productId });
  return deletedProduct;
};

// export const addVarient = async (productId, vendorId, varient) => {
//   const product = await Product.findById(productId);

//   if (product) {
//     const vendor = product.vendors.filter((vendor) => vendor._id == vendorId);
//     vendor.varient.map((obj) => {
//       if()
//     })
//   }
// };
// else {
//     console.log("Product available");
//     let count = 0;
//     product.vendors.map((vendor) => {
//       if (vendor.nameV === body.nameV) {
//         count = count + 1;
//       }
//     });
//     if (count == 1) {
//       throw new Error('Vendor is already added');
//     }

//     if (body.vendors[0].varient.length == 0) {
//       throw new Error('Please add atleast one varient');
//     }
//     product.vendors.push(body);
//     console.log('hello', product);
//     await Vendor.findByIdAndUpdate({ _id: product._id }, product);
//     return product;
//   }
