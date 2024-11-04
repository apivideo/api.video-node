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
import AnalyticsAggregatedMetricsResponseContextTimeframe from './AnalyticsAggregatedMetricsResponseContextTimeframe.js';

export default class AnalyticsMetricsOverTimeResponseContext {
  /**
   * Returns the metric and relevant parameters you selected.
   */
  'metric'?: AnalyticsMetricsOverTimeResponseContextMetricEnum;
  /**
   * Returns the interval you selected.
   */
  'interval'?: AnalyticsMetricsOverTimeResponseContextIntervalEnum;
  'timeframe'?: AnalyticsAggregatedMetricsResponseContextTimeframe;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'metric',
      baseName: 'metric',
      type: 'AnalyticsMetricsOverTimeResponseContextMetricEnum',
      format: '',
    },
    {
      name: 'interval',
      baseName: 'interval',
      type: 'AnalyticsMetricsOverTimeResponseContextIntervalEnum',
      format: '',
    },
    {
      name: 'timeframe',
      baseName: 'timeframe',
      type: 'AnalyticsAggregatedMetricsResponseContextTimeframe',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AnalyticsMetricsOverTimeResponseContext.attributeTypeMap;
  }
}

export type AnalyticsMetricsOverTimeResponseContextMetricEnum =
  | 'play'
  | 'play-rate'
  | 'start'
  | 'end'
  | 'impression'
  | 'ccv-average'
  | 'ccv-peak'
  | 'unique-ccv-average'
  | 'unique-ccv-peak'
  | 'view-3'
  | 'view-5'
  | 'view-10'
  | 'view-30'
  | 'unique-view'
  | 'unique-view-3'
  | 'unique-view-5'
  | 'unique-view-10'
  | 'unique-view-30';
export type AnalyticsMetricsOverTimeResponseContextIntervalEnum =
  | 'minute'
  | 'hour'
  | 'day';
