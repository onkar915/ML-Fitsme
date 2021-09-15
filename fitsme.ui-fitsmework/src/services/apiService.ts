import api from '../api';
import {
  CalculatorResponse,
  CalculatorRequest,
  ProductView,
  ProductMeasurementView,
} from '../api/generated';

class ApiService {
  getCalculation = async (request: CalculatorRequest): Promise<CalculatorResponse> => {
    return await api.get(
      process.env.REACT_APP_API_URL + '/api/calculator/GetMeasurement',
      {
        params: {
          age: request.age,
          height: request.height,
          torsoLlength: request.torsoLength,
          fitPreference: request.fitPreference,
          gender: request.gender,
          bodyWeight: request.bodyWeight,
          bodyShape: request.bodyShape,
          torsoLength: request.torsoLength,
          brandCode: request.brandCode,
          productCode: request.productCode,
          emailAddress: request.emailAddress,
        },
      }
    );
  };

  getProductDetail = async (
    brandCode: String,
    productCode: String
  ): Promise<ProductView> => {
    return await api.get(
      `${process.env.REACT_APP_API_URL}/api/product/getProductDetail/${brandCode}/${productCode}`
    );
  };

  getProductMeasurements = async (
    brandCode: String,
    productCode: String
  ): Promise<ProductMeasurementView[]> => {
    return await api.get(
      `${process.env.REACT_APP_API_URL}/api/product/GetProductMeasurement/${brandCode}/${productCode}`
    );
  };
}
export default ApiService;
