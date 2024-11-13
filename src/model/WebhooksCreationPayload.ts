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

export default class WebhooksCreationPayload {
  /**
   * An array of webhook events that you want to subscribe to.
   */
  'events': Array<WebhooksCreationPayloadEventsEnum>;
  /**
   * The the url to which HTTP notifications are sent. It could be any http or https URL.
   */
  'url': string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'events',
      baseName: 'events',
      type: 'Array<WebhooksCreationPayloadEventsEnum>',
      format: '',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return WebhooksCreationPayload.attributeTypeMap;
  }
}

export type WebhooksCreationPayloadEventsEnum =
  | 'live-stream.broadcast.started'
  | 'live-stream.broadcast.ended'
  | 'video.source.recorded'
  | 'video.encoding.quality.completed'
  | 'video.caption.generated'
  | 'video.summary.generated';
