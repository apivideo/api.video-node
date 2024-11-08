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

export default class SummarySource {
  /**
   * A short outline of the contents of the video. The length of an `abstract` depends on the amount of content in a video that can be transcribed. The API condenses the contents into minimum 20, maximum 300 words.
   */
  '_abstract'?: string;
  /**
   * A list of 3 key points from the video, in chronological order.
   */
  'takeaways'?: Array<string>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: '_abstract',
      baseName: 'abstract',
      type: 'string',
      format: '',
    },
    {
      name: 'takeaways',
      baseName: 'takeaways',
      type: 'Array<string>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return SummarySource.attributeTypeMap;
  }
}
