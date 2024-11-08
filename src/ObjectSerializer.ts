/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-non-null-assertion */
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

import AccessToken from './model/AccessToken';
import AdditionalBadRequestErrors from './model/AdditionalBadRequestErrors';
import AnalyticsAggregatedMetricsResponse from './model/AnalyticsAggregatedMetricsResponse';
import AnalyticsAggregatedMetricsResponseContext from './model/AnalyticsAggregatedMetricsResponseContext';
import AnalyticsAggregatedMetricsResponseContextTimeframe from './model/AnalyticsAggregatedMetricsResponseContextTimeframe';
import AnalyticsData from './model/AnalyticsData';
import AnalyticsMetricsBreakdownResponse from './model/AnalyticsMetricsBreakdownResponse';
import AnalyticsMetricsBreakdownResponseContext from './model/AnalyticsMetricsBreakdownResponseContext';
import AnalyticsMetricsBreakdownResponseData from './model/AnalyticsMetricsBreakdownResponseData';
import AnalyticsMetricsOverTimeResponse from './model/AnalyticsMetricsOverTimeResponse';
import AnalyticsMetricsOverTimeResponseContext from './model/AnalyticsMetricsOverTimeResponseContext';
import AnalyticsMetricsOverTimeResponseData from './model/AnalyticsMetricsOverTimeResponseData';
import AnalyticsPlays400Error from './model/AnalyticsPlays400Error';
import AnalyticsPlaysResponse from './model/AnalyticsPlaysResponse';
import AuthenticatePayload from './model/AuthenticatePayload';
import BadRequest from './model/BadRequest';
import BytesRange from './model/BytesRange';
import Caption from './model/Caption';
import CaptionsListResponse from './model/CaptionsListResponse';
import CaptionsUpdatePayload from './model/CaptionsUpdatePayload';
import Chapter from './model/Chapter';
import ChaptersListResponse from './model/ChaptersListResponse';
import ConflictError from './model/ConflictError';
import DiscardedVideoUpdatePayload from './model/DiscardedVideoUpdatePayload';
import FilterBy from './model/FilterBy';
import FilterBy1 from './model/FilterBy1';
import FilterBy2 from './model/FilterBy2';
import Link from './model/Link';
import ListTagsResponse from './model/ListTagsResponse';
import ListTagsResponseData from './model/ListTagsResponseData';
import LiveStream from './model/LiveStream';
import LiveStreamAssets from './model/LiveStreamAssets';
import LiveStreamCreationPayload from './model/LiveStreamCreationPayload';
import LiveStreamListResponse from './model/LiveStreamListResponse';
import LiveStreamUpdatePayload from './model/LiveStreamUpdatePayload';
import Metadata from './model/Metadata';
import Model403ErrorSchema from './model/Model403ErrorSchema';
import NotFound from './model/NotFound';
import Pagination from './model/Pagination';
import PaginationLink from './model/PaginationLink';
import PlayerSessionEvent from './model/PlayerSessionEvent';
import PlayerTheme from './model/PlayerTheme';
import PlayerThemeAssets from './model/PlayerThemeAssets';
import PlayerThemeCreationPayload from './model/PlayerThemeCreationPayload';
import PlayerThemeUpdatePayload from './model/PlayerThemeUpdatePayload';
import PlayerThemesListResponse from './model/PlayerThemesListResponse';
import Quality from './model/Quality';
import RefreshTokenPayload from './model/RefreshTokenPayload';
import RestreamsRequestObject from './model/RestreamsRequestObject';
import RestreamsResponseObject from './model/RestreamsResponseObject';
import SummariesListResponse from './model/SummariesListResponse';
import Summary from './model/Summary';
import SummaryCreationPayload from './model/SummaryCreationPayload';
import SummarySource from './model/SummarySource';
import SummaryUpdatePayload from './model/SummaryUpdatePayload';
import TokenCreationPayload from './model/TokenCreationPayload';
import TokenListResponse from './model/TokenListResponse';
import TooManyRequests from './model/TooManyRequests';
import UnrecognizedRequestUrl from './model/UnrecognizedRequestUrl';
import UploadToken from './model/UploadToken';
import Video from './model/Video';
import VideoAssets from './model/VideoAssets';
import VideoClip from './model/VideoClip';
import VideoCreationPayload from './model/VideoCreationPayload';
import VideoSource from './model/VideoSource';
import VideoSourceLiveStream from './model/VideoSourceLiveStream';
import VideoSourceLiveStreamLink from './model/VideoSourceLiveStreamLink';
import VideoStatus from './model/VideoStatus';
import VideoStatusEncoding from './model/VideoStatusEncoding';
import VideoStatusEncodingMetadata from './model/VideoStatusEncodingMetadata';
import VideoStatusIngest from './model/VideoStatusIngest';
import VideoStatusIngestReceivedParts from './model/VideoStatusIngestReceivedParts';
import VideoThumbnailPickPayload from './model/VideoThumbnailPickPayload';
import VideoUpdatePayload from './model/VideoUpdatePayload';
import VideoWatermark from './model/VideoWatermark';
import VideosListResponse from './model/VideosListResponse';
import Watermark from './model/Watermark';
import WatermarksListResponse from './model/WatermarksListResponse';
import Webhook from './model/Webhook';
import WebhooksCreationPayload from './model/WebhooksCreationPayload';
import WebhooksListResponse from './model/WebhooksListResponse';

/* tslint:disable:no-unused-variable */
const primitives = [
  'string',
  'boolean',
  'double',
  'integer',
  'long',
  'float',
  'number',
  'any',
];

const supportedMediaTypes: { [mediaType: string]: number } = {
  'application/json': Infinity,
  'application/octet-stream': 0,
};

const enumsMap: Set<string> = new Set<string>([
  'AnalyticsAggregatedMetricsResponseContextMetricEnum',
  'AnalyticsAggregatedMetricsResponseContextAggregationEnum',
  'AnalyticsMetricsBreakdownResponseContextMetricEnum',
  'AnalyticsMetricsBreakdownResponseContextBreakdownEnum',
  'AnalyticsMetricsOverTimeResponseContextMetricEnum',
  'AnalyticsMetricsOverTimeResponseContextIntervalEnum',
  'FilterByMediaTypeEnum',
  'FilterByContinentEnum',
  'FilterBy1MediaTypeEnum',
  'FilterBy1ContinentEnum',
  'FilterBy2MediaTypeEnum',
  'FilterBy2ContinentEnum',
  'QualityTypeEnum',
  'QualityQualityEnum',
  'QualityStatusEnum',
  'SummaryOriginEnum',
  'SummarySourceStatusEnum',
  'SummaryCreationPayloadOriginEnum',
  'SummaryCreationPayloadAttributesEnum',
  'VideoLanguageOriginEnum',
  'VideoCreationPayloadLanguageEnum',
  'VideoCreationPayloadTranscriptSummaryAttributesEnum',
  'VideoStatusIngestStatusEnum',
  'VideoUpdatePayloadLanguageEnum',
  'VideoUpdatePayloadTranscriptSummaryAttributesEnum',
]);

const typeMap: { [index: string]: any } = {
  AccessToken: AccessToken,
  AdditionalBadRequestErrors: AdditionalBadRequestErrors,
  AnalyticsAggregatedMetricsResponse: AnalyticsAggregatedMetricsResponse,
  AnalyticsAggregatedMetricsResponseContext:
    AnalyticsAggregatedMetricsResponseContext,
  AnalyticsAggregatedMetricsResponseContextTimeframe:
    AnalyticsAggregatedMetricsResponseContextTimeframe,
  AnalyticsData: AnalyticsData,
  AnalyticsMetricsBreakdownResponse: AnalyticsMetricsBreakdownResponse,
  AnalyticsMetricsBreakdownResponseContext:
    AnalyticsMetricsBreakdownResponseContext,
  AnalyticsMetricsBreakdownResponseData: AnalyticsMetricsBreakdownResponseData,
  AnalyticsMetricsOverTimeResponse: AnalyticsMetricsOverTimeResponse,
  AnalyticsMetricsOverTimeResponseContext:
    AnalyticsMetricsOverTimeResponseContext,
  AnalyticsMetricsOverTimeResponseData: AnalyticsMetricsOverTimeResponseData,
  AnalyticsPlays400Error: AnalyticsPlays400Error,
  AnalyticsPlaysResponse: AnalyticsPlaysResponse,
  AuthenticatePayload: AuthenticatePayload,
  BadRequest: BadRequest,
  BytesRange: BytesRange,
  Caption: Caption,
  CaptionsListResponse: CaptionsListResponse,
  CaptionsUpdatePayload: CaptionsUpdatePayload,
  Chapter: Chapter,
  ChaptersListResponse: ChaptersListResponse,
  ConflictError: ConflictError,
  DiscardedVideoUpdatePayload: DiscardedVideoUpdatePayload,
  FilterBy: FilterBy,
  FilterBy1: FilterBy1,
  FilterBy2: FilterBy2,
  Link: Link,
  ListTagsResponse: ListTagsResponse,
  ListTagsResponseData: ListTagsResponseData,
  LiveStream: LiveStream,
  LiveStreamAssets: LiveStreamAssets,
  LiveStreamCreationPayload: LiveStreamCreationPayload,
  LiveStreamListResponse: LiveStreamListResponse,
  LiveStreamUpdatePayload: LiveStreamUpdatePayload,
  Metadata: Metadata,
  Model403ErrorSchema: Model403ErrorSchema,
  NotFound: NotFound,
  Pagination: Pagination,
  PaginationLink: PaginationLink,
  PlayerSessionEvent: PlayerSessionEvent,
  PlayerTheme: PlayerTheme,
  PlayerThemeAssets: PlayerThemeAssets,
  PlayerThemeCreationPayload: PlayerThemeCreationPayload,
  PlayerThemeUpdatePayload: PlayerThemeUpdatePayload,
  PlayerThemesListResponse: PlayerThemesListResponse,
  Quality: Quality,
  RefreshTokenPayload: RefreshTokenPayload,
  RestreamsRequestObject: RestreamsRequestObject,
  RestreamsResponseObject: RestreamsResponseObject,
  SummariesListResponse: SummariesListResponse,
  Summary: Summary,
  SummaryCreationPayload: SummaryCreationPayload,
  SummarySource: SummarySource,
  SummaryUpdatePayload: SummaryUpdatePayload,
  TokenCreationPayload: TokenCreationPayload,
  TokenListResponse: TokenListResponse,
  TooManyRequests: TooManyRequests,
  UnrecognizedRequestUrl: UnrecognizedRequestUrl,
  UploadToken: UploadToken,
  Video: Video,
  VideoAssets: VideoAssets,
  VideoClip: VideoClip,
  VideoCreationPayload: VideoCreationPayload,
  VideoSource: VideoSource,
  VideoSourceLiveStream: VideoSourceLiveStream,
  VideoSourceLiveStreamLink: VideoSourceLiveStreamLink,
  VideoStatus: VideoStatus,
  VideoStatusEncoding: VideoStatusEncoding,
  VideoStatusEncodingMetadata: VideoStatusEncodingMetadata,
  VideoStatusIngest: VideoStatusIngest,
  VideoStatusIngestReceivedParts: VideoStatusIngestReceivedParts,
  VideoThumbnailPickPayload: VideoThumbnailPickPayload,
  VideoUpdatePayload: VideoUpdatePayload,
  VideoWatermark: VideoWatermark,
  VideosListResponse: VideosListResponse,
  Watermark: Watermark,
  WatermarksListResponse: WatermarksListResponse,
  Webhook: Webhook,
  WebhooksCreationPayload: WebhooksCreationPayload,
  WebhooksListResponse: WebhooksListResponse,
};

export default class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string): string {
    // Check the discriminator
    if (typeMap[expectedType]) {
      const discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty && data[discriminatorProperty]) {
        const discriminatorType = data[discriminatorProperty];
        if (typeMap[discriminatorType]) {
          return discriminatorType; // use the type given in the discriminator
        }
      }
    }

    return expectedType;
  }

  public static serialize(
    data: any,
    type: string,
    format: string,
    defaultValue?: any
  ): any {
    if (data == undefined) {
      if (typeof defaultValue === 'undefined') {
        return data;
      }
      data = defaultValue;
    }
    if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(ObjectSerializer.serialize(date, subType, format));
      }
      return transformedData;
    } else if (type === 'Date') {
      if (format == 'date') {
        let month = data.getMonth() + 1;
        month = month < 10 ? '0' + month.toString() : month.toString();
        let day = data.getDate();
        day = day < 10 ? '0' + day.toString() : day.toString();

        return data.getFullYear() + '-' + month + '-' + day;
      } else {
        return data.toISOString().split('.')[0] + 'Z';
      }
    } else {
      if (enumsMap.has(type)) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      const attributeTypes = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};
      for (const index in attributeTypes) {
        const attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type,
          attributeType.format,
          attributeType.defaultValue
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string): any {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(
          ObjectSerializer.deserialize(date, subType, format)
        );
      }
      return transformedData;
    } else if (type === 'Date') {
      return new Date(data);
    } else {
      if (enumsMap.has(type)) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      const instance = new typeMap[type]();
      const attributeTypes = typeMap[type].getAttributeTypeMap();
      for (const index in attributeTypes) {
        const attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type,
          attributeType.format
        );
      }
      return instance;
    }
  }

  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(
    mediaType: string | undefined
  ): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(';')[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return 'application/json';
    }

    const normalMediaTypes = mediaTypes
      .map(this.normalizeMediaType)
      .filter((mt) => mt);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (supportedMediaTypes[mediaType!] > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supportedMediaTypes[mediaType!];
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        'None of the given media types are supported: ' + mediaTypes.join(', ')
      );
    }

    return selectedMediaType!;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === 'application/json') {
      return JSON.stringify(data);
    }

    // HTTP DELETE response.
    if (data === '') {
      return data;
    }

    throw new Error(
      'The mediaType ' +
        mediaType +
        ' is not supported by ObjectSerializer.stringify.'
    );
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined): any {
    if (mediaType === undefined) {
      // HTTP DELETE response.
      if (rawData === '' || rawData === '""') {
        return rawData;
      }

      throw new Error('Cannot parse content. No Content-Type defined.');
    }

    if (
      mediaType === 'application/json' ||
      mediaType.indexOf('application/vnd.api.video+json;version=') === 0
    ) {
      return JSON.parse(rawData);
    }

    throw new Error(
      'The mediaType ' +
        mediaType +
        ' is not supported by ObjectSerializer.parse.'
    );
  }
}
