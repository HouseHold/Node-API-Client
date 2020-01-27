# HouseHold.ProductStockApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductStockCollection**](ProductStockApi.md#getProductStockCollection) | **GET** /api/product/stocks | Retrieves the collection of ProductStock resources.
[**getProductStockItem**](ProductStockApi.md#getProductStockItem) | **GET** /api/product/stocks/{id} | Retrieves a ProductStock resource.
[**stockAddProductStockItem**](ProductStockApi.md#stockAddProductStockItem) | **POST** /api/product/stocks/{id}/add | Add product into stock.
[**stockConsumeProductStockItem**](ProductStockApi.md#stockConsumeProductStockItem) | **POST** /api/product/stocks/{id}/consume | Consume product from stock.
[**stockInitProductStockCollection**](ProductStockApi.md#stockInitProductStockCollection) | **POST** /api/product/stocks | Create stock for product and location.



## getProductStockCollection

> InlineResponse2003 getProductStockCollection(opts)

Retrieves the collection of ProductStock resources.

### Example

```javascript
import HouseHold from 'house_hold';

let apiInstance = new HouseHold.ProductStockApi();
let opts = {
  'quantity': 56, // Number | 
  'quantity2': [null], // [Number] | 
  'location': "location_example", // String | 
  'location2': ["null"], // [String] | 
  'product': "product_example", // String | 
  'product2': ["null"], // [String] | 
  'page': 1 // Number | The collection page number
};
apiInstance.getProductStockCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quantity** | **Number**|  | [optional] 
 **quantity2** | [**[Number]**](Number.md)|  | [optional] 
 **location** | **String**|  | [optional] 
 **location2** | [**[String]**](String.md)|  | [optional] 
 **product** | **String**|  | [optional] 
 **product2** | [**[String]**](String.md)|  | [optional] 
 **page** | **Number**| The collection page number | [optional] [default to 1]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json


## getProductStockItem

> ProductStockjsonld getProductStockItem(id)

Retrieves a ProductStock resource.

### Example

```javascript
import HouseHold from 'house_hold';

let apiInstance = new HouseHold.ProductStockApi();
let id = "id_example"; // String | 
apiInstance.getProductStockItem(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ProductStockjsonld**](ProductStockjsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json


## stockAddProductStockItem

> stockAddProductStockItem(id, opts)

Add product into stock.

Add specific amount of specific product into stock.

### Example

```javascript
import HouseHold from 'house_hold';

let apiInstance = new HouseHold.ProductStockApi();
let id = "id_example"; // String | 
let opts = {
  'inlineObject1': new HouseHold.InlineObject1() // InlineObject1 | 
};
apiInstance.stockAddProductStockItem(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json
- **Accept**: Not defined


## stockConsumeProductStockItem

> stockConsumeProductStockItem(id, opts)

Consume product from stock.

Consume specific amount of specific product from stock.

### Example

```javascript
import HouseHold from 'house_hold';

let apiInstance = new HouseHold.ProductStockApi();
let id = "id_example"; // String | 
let opts = {
  'inlineObject2': new HouseHold.InlineObject2() // InlineObject2 | 
};
apiInstance.stockConsumeProductStockItem(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json
- **Accept**: Not defined


## stockInitProductStockCollection

> ProductStockjsonld stockInitProductStockCollection(opts)

Create stock for product and location.

Initialize stock for specific product in specific location.

### Example

```javascript
import HouseHold from 'house_hold';

let apiInstance = new HouseHold.ProductStockApi();
let opts = {
  'inlineObject': new HouseHold.InlineObject() // InlineObject | 
};
apiInstance.stockInitProductStockCollection(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**ProductStockjsonld**](ProductStockjsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json
- **Accept**: application/ld+json

