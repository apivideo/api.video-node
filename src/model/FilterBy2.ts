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

export default class FilterBy2 {
  /**
   * Returns analytics based on the unique identifiers of a video or a live stream.
   */
  'mediaId'?: Array<string>;
  'mediaType'?: FilterBy2MediaTypeEnum;
  /**
   * Returns analytics based on the viewers' continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example `EU`.
   */
  'continent'?: Array<FilterBy2ContinentEnum>;
  /**
   * Returns analytics based on the viewers' country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example `FR`.
   */
  'country'?: Array<string>;
  /**
   * Returns analytics based on the type of device used by the viewers. Response values can include: `computer`, `phone`, `tablet`, `tv`, `console`, `wearable`, `unknown`.
   */
  'deviceType'?: Array<string>;
  /**
   * Returns analytics based on the operating system used by the viewers. Response values can include `windows`, `mac osx`, `android`, `ios`, `linux`.
   */
  'operatingSystem'?: Array<string>;
  /**
   * Returns analytics based on the browser used by the viewers. Response values can include `chrome`, `firefox`, `edge`, `opera`.
   */
  'browser'?: Array<string>;
  /**
   * Returns analytics for videos using this tag. This filter only accepts a single value and is case sensitive. Read more about tagging your videos [here](https://docs.api.video/vod/tags-metadata).
   */
  'tag'?: string;
  /**
   * Filters data based on the URL where the view is originating from. This filter parameter accepts an empty string to filter view events where no referrer is available.  - The API filters for exact matches. Include the trailing `/` characters if needed. - The URLs you add must be URL encoded.
   */
  'referrer'?: Array<string>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'mediaId',
      baseName: 'mediaId',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'mediaType',
      baseName: 'mediaType',
      type: 'FilterBy2MediaTypeEnum',
      format: '',
    },
    {
      name: 'continent',
      baseName: 'continent',
      type: 'Array<FilterBy2ContinentEnum>',
      format: '',
    },
    {
      name: 'country',
      baseName: 'country',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'deviceType',
      baseName: 'deviceType',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'operatingSystem',
      baseName: 'operatingSystem',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'browser',
      baseName: 'browser',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'tag',
      baseName: 'tag',
      type: 'string',
      format: '',
    },
    {
      name: 'referrer',
      baseName: 'referrer',
      type: 'Array<string>',
      format: 'uri',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return FilterBy2.attributeTypeMap;
  }
}

export type FilterBy2MediaTypeEnum = 'video' | 'live-stream';
export type FilterBy2ContinentEnum =
  | 'AS'
  | 'AF'
  | 'NA'
  | 'SA'
  | 'AN'
  | 'EU'
  | 'AZ';
