/**
 * HouseHold
 * HouseHold API
 *
 * The version of the OpenAPI document: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineResponse2003 from '../model/InlineResponse2003';
import ProductStockjsonld from '../model/ProductStockjsonld';

/**
* ProductStock service.
* @module api/ProductStockApi
* @version 0.0.3
*/
export default class ProductStockApi {

    /**
    * Constructs a new ProductStockApi. 
    * @alias module:api/ProductStockApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieves the collection of ProductStock resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    getProductStockCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/ld+json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/api/product/stocks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the collection of ProductStock resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    getProductStockCollection(opts) {
      return this.getProductStockCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a ProductStock resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductStockjsonld} and HTTP response
     */
    getProductStockItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductStockItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/ld+json'];
      let returnType = ProductStockjsonld;
      return this.apiClient.callApi(
        '/api/product/stocks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a ProductStock resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductStockjsonld}
     */
    getProductStockItem(id) {
      return this.getProductStockItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add product into stock.
     * Add specific amount of specific product into stock.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    stockAddProductStockItemWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['inlineObject1'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling stockAddProductStockItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/ld+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/product/stocks/{id}/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add product into stock.
     * Add specific amount of specific product into stock.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    stockAddProductStockItem(id, opts) {
      return this.stockAddProductStockItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create stock for product and location.
     * Initialize stock for specific product in specific location.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductStockjsonld} and HTTP response
     */
    stockInitProductStockCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['inlineObject'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/ld+json'];
      let accepts = ['application/ld+json'];
      let returnType = ProductStockjsonld;
      return this.apiClient.callApi(
        '/api/product/stocks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create stock for product and location.
     * Initialize stock for specific product in specific location.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductStockjsonld}
     */
    stockInitProductStockCollection(opts) {
      return this.stockInitProductStockCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
