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

export default class AnalyticsMetricsBreakdownResponseContext {
  /**
   * Returns the metric you selected.
   */
  'metric'?: AnalyticsMetricsBreakdownResponseContextMetricEnum;
  /**
   * Returns the dimension you selected.
   */
  'breakdown'?: AnalyticsMetricsBreakdownResponseContextBreakdownEnum;
  'timeframe'?: AnalyticsAggregatedMetricsResponseContextTimeframe;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'metric',
      baseName: 'metric',
      type: 'AnalyticsMetricsBreakdownResponseContextMetricEnum',
      format: '',
    },
    {
      name: 'breakdown',
      baseName: 'breakdown',
      type: 'AnalyticsMetricsBreakdownResponseContextBreakdownEnum',
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
    return AnalyticsMetricsBreakdownResponseContext.attributeTypeMap;
  }
}

export type AnalyticsMetricsBreakdownResponseContextMetricEnum =
  | 'play'
  | 'play-rate'
  | 'start'
  | 'end'
  | 'impression';
export type AnalyticsMetricsBreakdownResponseContextBreakdownEnum =
  | 'media-id'
  | 'media-type'
  | 'continent'
  | 'country'
  | 'device-type'
  | 'operating-system'
  | 'browser';
