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

export default class VideoUpdatePayload {
  /**
   * The unique ID for the player you want to associate with your video.
   */
  'playerId'?: string | null;
  /**
   * The title you want to use for your video.
   */
  'title'?: string;
  /**
   * A brief description of the video.
   */
  'description'?: string;
  /**
   * Whether the video is publicly available or not. False means it is set to private. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos/).
   */
  '_public'?: boolean;
  /**
   * Whether the video is a 360 degree or immersive video.
   */
  'panoramic'?: boolean;
  /**
   * Whether the player supports the mp4 format.
   */
  'mp4Support'?: boolean;
  /**
   * A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video.
   */
  'tags'?: Array<string>;
  /**
   * A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video.
   */
  'metadata'?: Array<Metadata>;
  /**
   * Use this parameter to set the language of the video. When this parameter is set, the API creates a transcript of the video using the language you specify. You must use the [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.  `language` is a permanent attribute of the video. You can update it to another language using the [`PATCH /videos/{videoId}`](https://docs.api.video/reference/api/Videos#update-a-video-object) operation. This triggers the API to generate a new transcript using a different language.
   */
  'language'?: VideoUpdatePayloadLanguageEnum;
  /**
   * Use this parameter to enable transcription.   - When `true`, the API generates a transcript for the video. - The default value is `false`. - If you define a video language using the `language` parameter, the API uses that language to transcribe the video. If you do not define a language, the API detects it based on the video.  - When the API generates a transcript, it will be available as a caption for the video.
   */
  'transcript'?: boolean;
  /**
   * Use this parameter to enable summarization.   - When `true`, the API generates a summary for the video, based on the transcription. - The default value is `false`. - If you define a video language using the `language` parameter, the API uses that language to summarize the video. If you do not define a language, the API detects it based on the video.
   */
  'transcriptSummary'?: boolean;
  /**
   * Use this parameter to define the elements of a summary that you want to generate. If you do not define this parameter, the API generates a full summary with all attributes.
   */
  'transcriptSummaryAttributes'?: Array<VideoUpdatePayloadTranscriptSummaryAttributesEnum>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playerId',
      baseName: 'playerId',
      type: 'string',
      format: '',
    },
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
      name: 'language',
      baseName: 'language',
      type: 'VideoUpdatePayloadLanguageEnum',
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
      type: 'Array<VideoUpdatePayloadTranscriptSummaryAttributesEnum>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoUpdatePayload.attributeTypeMap;
  }
}

export type VideoUpdatePayloadLanguageEnum =
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
export type VideoUpdatePayloadTranscriptSummaryAttributesEnum =
  | 'abstract'
  | 'takeaways';
