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
import Metadata from './Metadata.js';
import VideoClip from './VideoClip.js';
import VideoWatermark from './VideoWatermark.js';

export default class VideoCreationPayload {
  /**
   * The title of your new video.
   */
  'title': string;
  /**
   * A brief description of your video.
   */
  'description'?: string;
  /**
   * You can either add a video already on the web, by entering the URL of the video, or you can also enter the `videoId` of one of the videos you already have on your api.video acccount, and this will generate a copy of your video. Creating a copy of a video can be especially useful if you want to keep your original video and trim or apply a watermark onto the copy you would create.
   */
  'source'?: string;
  /**
   * Default: True. If set to `false` the video will become private. More information on private videos can be found [here](https://docs.api.video/delivery/video-privacy-access-management)
   */
  '_public'?: boolean;
  /**
   * Indicates if your video is a 360/immersive video.
   */
  'panoramic'?: boolean;
  /**
   * Enables mp4 version in addition to streamed version.
   */
  'mp4Support'?: boolean;
  /**
   * The unique identification number for your video player.
   */
  'playerId'?: string;
  /**
   * A list of tags you want to use to describe your video.
   */
  'tags'?: Array<string>;
  /**
   * A list of key value pairs that you use to provide metadata for your video.
   */
  'metadata'?: Array<Metadata>;
  'clip'?: VideoClip;
  'watermark'?: VideoWatermark;
  /**
   * Use this parameter to set the language of the video. When this parameter is set, the API creates a transcript of the video using the language you specify. You must use the [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.  `language` is a permanent attribute of the video. You can update it to another language using the [`PATCH /videos/{videoId}`](https://docs.api.video/reference/api/Videos#update-a-video-object) operation. This triggers the API to generate a new transcript using a different language.
   */
  'language'?: VideoCreationPayloadLanguageEnum;
  /**
   * Use this parameter to enable transcription.   - When `true`, the API generates a transcript for the video. - The default value is `false`. - If you define a video language using the `language` parameter, the API uses that language to transcribe the video. If you do not define a language, the API detects it based on the video.  - When the API generates a transcript, it will be available as a caption for the video.
   */
  'transcript'?: boolean;
  /**
   * Use this parameter to enable summarization. We recommend using this parameter together with `transcript: true`.  - When `true`, the API generates a summary for the video, based on the transcription. - The default value is `false`. - If you define a video language using the `language` parameter, the API uses that language to summarize the video. If you do not define a language, the API detects it based on the video.
   */
  'transcriptSummary'?: boolean;
  /**
   * Use this parameter to define the elements of a summary that you want to generate. If you do not define this parameter, the API generates a full summary with all attributes.
   */
  'transcriptSummaryAttributes'?: Array<VideoCreationPayloadTranscriptSummaryAttributesEnum>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
      format: '',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
      format: '',
    },
    {
      name: 'source',
      baseName: 'source',
      type: 'string',
      format: '',
    },
    {
      name: '_public',
      baseName: 'public',
      type: 'boolean',
      format: '',
    },
    {
      name: 'panoramic',
      baseName: 'panoramic',
      type: 'boolean',
      format: '',
    },
    {
      name: 'mp4Support',
      baseName: 'mp4Support',
      type: 'boolean',
      format: '',
    },
    {
      name: 'playerId',
      baseName: 'playerId',
      type: 'string',
      format: '',
    },
    {
      name: 'tags',
      baseName: 'tags',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'Array<Metadata>',
      format: '',
    },
    {
      name: 'clip',
      baseName: 'clip',
      type: 'VideoClip',
      format: '',
    },
    {
      name: 'watermark',
      baseName: 'watermark',
      type: 'VideoWatermark',
      format: '',
    },
    {
      name: 'language',
      baseName: 'language',
      type: 'VideoCreationPayloadLanguageEnum',
      format: '',
    },
    {
      name: 'transcript',
      baseName: 'transcript',
      type: 'boolean',
      format: '',
    },
    {
      name: 'transcriptSummary',
      baseName: 'transcriptSummary',
      type: 'boolean',
      format: '',
    },
    {
      name: 'transcriptSummaryAttributes',
      baseName: 'transcriptSummaryAttributes',
      type: 'Array<VideoCreationPayloadTranscriptSummaryAttributesEnum>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoCreationPayload.attributeTypeMap;
  }
}

export type VideoCreationPayloadLanguageEnum =
  | 'ar'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'es'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'it'
  | 'ja'
  | 'ko'
  | 'ml'
  | 'nl'
  | 'nn'
  | 'false'
  | 'pl'
  | 'pt'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'te'
  | 'tr'
  | 'uk'
  | 'ur'
  | 'vi'
  | 'zh';
export type VideoCreationPayloadTranscriptSummaryAttributesEnum =
  | 'abstract'
  | 'takeaways';
