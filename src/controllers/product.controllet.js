import * as productService from '../services/product.service';
import HttpStatus from 'http-status-codes';

export const getAllProducts = async (req, res) => {
  try {
    // console.log('In controller', req.params);
    const data = await productService.getAllProducts();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All vendors fetched successfull'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

export const addProducts = async (req, res) => {
  try {
    console.log(req.body);
    const data = await productService.addProducts(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Vendor added successfully!'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

export const updateProductDetails = async (req, res) => {
  try {
    const data = await productService.updateProductDetails(
      req.params._id,
      req.body
    );
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Data Updated Successfully!'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

export const deleteProductDetails = async (req, res) => {
  try {
    const data = await productService.deleteProductDetail(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Data Deleted Successfully!'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    });
  }
};

// export const addVarient = async (req, res) => {
//   try {
//     const data = await productService.addVarient(
//       req.params._id,
//       req.params._idV,
//       req.body
//     );
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'Varient Added Successfull!'
//     });
//   } catch (error) {
//     res.status(HttpStatus.BAD_REQUEST).json({
//       code: HttpStatus.BAD_REQUEST,
//       message: error.message
//     });
//   }
// };
