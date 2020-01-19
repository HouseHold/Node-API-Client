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

import ApiClient from '../ApiClient';

/**
 * The Productjsonld model module.
 * @module model/Productjsonld
 * @version 0.0.3
 */
class Productjsonld {
    /**
     * Constructs a new <code>Productjsonld</code>.
     * @alias module:model/Productjsonld
     */
    constructor() { 
        
        Productjsonld.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Productjsonld</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Productjsonld} obj Optional instance to populate.
     * @return {module:model/Productjsonld} The populated <code>Productjsonld</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Productjsonld();

            if (data.hasOwnProperty('@context')) {
                obj['@context'] = ApiClient.convertToType(data['@context'], 'String');
            }
            if (data.hasOwnProperty('@id')) {
                obj['@id'] = ApiClient.convertToType(data['@id'], 'String');
            }
            if (data.hasOwnProperty('@type')) {
                obj['@type'] = ApiClient.convertToType(data['@type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ean')) {
                obj['ean'] = ApiClient.convertToType(data['ean'], ['String']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('expiring')) {
                obj['expiring'] = ApiClient.convertToType(data['expiring'], 'Boolean');
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = ApiClient.convertToType(data['collection'], 'String');
            }
            if (data.hasOwnProperty('stocks')) {
                obj['stocks'] = ApiClient.convertToType(data['stocks'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} @context
 */
Productjsonld.prototype['@context'] = undefined;

/**
 * @member {String} @id
 */
Productjsonld.prototype['@id'] = undefined;

/**
 * @member {String} @type
 */
Productjsonld.prototype['@type'] = undefined;

/**
 * @member {String} name
 */
Productjsonld.prototype['name'] = undefined;

/**
 * @member {Array.<String>} ean
 */
Productjsonld.prototype['ean'] = undefined;

/**
 * @member {Number} price
 */
Productjsonld.prototype['price'] = undefined;

/**
 * @member {Boolean} expiring
 */
Productjsonld.prototype['expiring'] = undefined;

/**
 * @member {String} collection
 */
Productjsonld.prototype['collection'] = undefined;

/**
 * @member {Array.<String>} stocks
 */
Productjsonld.prototype['stocks'] = undefined;

/**
 * @member {String} id
 */
Productjsonld.prototype['id'] = undefined;






export default Productjsonld;

