/**
 * HouseHold
 * HouseHold API
 *
 * The version of the OpenAPI document: 0.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse200HydraSearch from './InlineResponse200HydraSearch';
import InlineResponse200HydraView from './InlineResponse200HydraView';
import ProductCollectionjsonld from './ProductCollectionjsonld';

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 0.0.6
 */
class InlineResponse2001 {
    /**
     * Constructs a new <code>InlineResponse2001</code>.
     * @alias module:model/InlineResponse2001
     * @param hydramember {Array.<module:model/ProductCollectionjsonld>} 
     */
    constructor(hydramember) { 
        
        InlineResponse2001.initialize(this, hydramember);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hydramember) { 
        obj['hydra:member'] = hydramember;
    }

    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001();

            if (data.hasOwnProperty('hydra:member')) {
                obj['hydra:member'] = ApiClient.convertToType(data['hydra:member'], [ProductCollectionjsonld]);
            }
            if (data.hasOwnProperty('hydra:totalItems')) {
                obj['hydra:totalItems'] = ApiClient.convertToType(data['hydra:totalItems'], 'Number');
            }
            if (data.hasOwnProperty('hydra:view')) {
                obj['hydra:view'] = InlineResponse200HydraView.constructFromObject(data['hydra:view']);
            }
            if (data.hasOwnProperty('hydra:search')) {
                obj['hydra:search'] = InlineResponse200HydraSearch.constructFromObject(data['hydra:search']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ProductCollectionjsonld>} hydra:member
 */
InlineResponse2001.prototype['hydra:member'] = undefined;

/**
 * @member {Number} hydra:totalItems
 */
InlineResponse2001.prototype['hydra:totalItems'] = undefined;

/**
 * @member {module:model/InlineResponse200HydraView} hydra:view
 */
InlineResponse2001.prototype['hydra:view'] = undefined;

/**
 * @member {module:model/InlineResponse200HydraSearch} hydra:search
 */
InlineResponse2001.prototype['hydra:search'] = undefined;






export default InlineResponse2001;

