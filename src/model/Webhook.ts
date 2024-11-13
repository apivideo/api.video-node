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

export default class Webhook {
  /**
   * A unique identifier of the webhook you subscribed to.
   */
  'webhookId'?: string;
  /**
   * The time and date when you created this webhook subscription, in ATOM UTC format.
   */
  'createdAt'?: Date;
  /**
   * A list of events that you subscribed to. When these events occur, the API triggers a webhook call to the URL you provided.
   */
  'events'?: Array<WebhookEventsEnum>;
  /**
   * The URL where the API sends the webhook.
   */
  'url'?: string;
  /**
   * A secret key for the webhook you subscribed to. You can use it to verify the origin of the webhook call that you receive.
   */
  'signatureSecret'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'webhookId',
      baseName: 'webhookId',
      type: 'string',
      format: '',
    },
    {
      name: 'createdAt',
      baseName: 'createdAt',
      type: 'Date',
      format: 'date-time',
    },
    {
      name: 'events',
      baseName: 'events',
      type: 'Array<WebhookEventsEnum>',
      format: '',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
      format: '',
    },
    {
      name: 'signatureSecret',
      baseName: 'signatureSecret',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Webhook.attributeTypeMap;
  }
}

export type WebhookEventsEnum =
  | 'live-stream.broadcast.started'
  | 'live-stream.broadcast.ended'
  | 'video.source.recorded'
  | 'video.encoding.quality.completed'
  | 'video.caption.generated'
  | 'video.summary.generated';
