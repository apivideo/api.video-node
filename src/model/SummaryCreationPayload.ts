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

export default class SummaryCreationPayload {
  /**
   * Create a summary of a video using the video ID.
   */
  'videoId': string;
  /**
   * Use this parameter to define how the API generates the summary. The only allowed value is `auto`, which means that the API generates a summary automatically.  If you do not set this parameter, **the API will not generate a summary automatically**.  In this case, `sourceStatus` will return `missing`, and you have to manually add a summary using the `PATCH /summaries/{summaryId}/source` endpoint operation.
   */
  'origin'?: SummaryCreationPayloadOriginEnum;
  /**
   * Use this parameter to define the elements of a summary that you want to generate. If you do not define this parameter, the API generates a full summary with all attributes.
   */
  'attributes'?: Array<SummaryCreationPayloadAttributesEnum>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'videoId',
      baseName: 'videoId',
      type: 'string',
      format: '',
    },
    {
      name: 'origin',
      baseName: 'origin',
      type: 'SummaryCreationPayloadOriginEnum',
      format: '',
    },
    {
      name: 'attributes',
      baseName: 'attributes',
      type: 'Array<SummaryCreationPayloadAttributesEnum>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return SummaryCreationPayload.attributeTypeMap;
  }
}

export type SummaryCreationPayloadOriginEnum = 'auto';
export type SummaryCreationPayloadAttributesEnum = 'abstract' | 'takeaways';
