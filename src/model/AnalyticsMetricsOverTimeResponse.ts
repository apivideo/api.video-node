/**
 * @api.video/nodejs-client
 * api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */

import AttributeType from './AttributeType.js';
import AnalyticsMetricsOverTimeResponseContext from './AnalyticsMetricsOverTimeResponseContext.js';
import AnalyticsMetricsOverTimeResponseData from './AnalyticsMetricsOverTimeResponseData.js';
import Pagination from './Pagination.js';

export default class AnalyticsMetricsOverTimeResponse {
  'context': AnalyticsMetricsOverTimeResponseContext;
  /**
   * Returns an array of metrics and the timestamps.
   */
  'data': Array<AnalyticsMetricsOverTimeResponseData>;
  'pagination': Pagination;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'context',
      baseName: 'context',
      type: 'AnalyticsMetricsOverTimeResponseContext',
      format: '',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'Array<AnalyticsMetricsOverTimeResponseData>',
      format: '',
    },
    {
      name: 'pagination',
      baseName: 'pagination',
      type: 'Pagination',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AnalyticsMetricsOverTimeResponse.attributeTypeMap;
  }
}
