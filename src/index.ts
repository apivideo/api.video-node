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

import HttpClient from './HttpClient';

import CaptionsApi from 'api/CaptionsApi';
import ChaptersApi from 'api/ChaptersApi';
import LiveStreamsApi from 'api/LiveStreamsApi';
import PlayerThemesApi from 'api/PlayerThemesApi';
import RawStatisticsApi from 'api/RawStatisticsApi';
import UploadTokensApi from 'api/UploadTokensApi';
import VideosApi from 'api/VideosApi';
import WebhooksApi from 'api/WebhooksApi';

const PRODUCTION_BASE_URI = 'https://ws.api.video';

export default class ApiVideoClient {
  private httpClient: HttpClient;
  private _captions: CaptionsApi;
  private _chapters: ChaptersApi;
  private _liveStreams: LiveStreamsApi;
  private _playerThemes: PlayerThemesApi;
  private _rawStatistics: RawStatisticsApi;
  private _uploadTokens: UploadTokensApi;
  private _videos: VideosApi;
  private _webhooks: WebhooksApi;

  constructor(params: { apiKey?: string; baseUri?: string }) {
    this.httpClient = new HttpClient({
      ...params,
      baseUri: params.baseUri || PRODUCTION_BASE_URI,
    });

    this._captions = new CaptionsApi(this.httpClient);
    this._chapters = new ChaptersApi(this.httpClient);
    this._liveStreams = new LiveStreamsApi(this.httpClient);
    this._playerThemes = new PlayerThemesApi(this.httpClient);
    this._rawStatistics = new RawStatisticsApi(this.httpClient);
    this._uploadTokens = new UploadTokensApi(this.httpClient);
    this._videos = new VideosApi(this.httpClient);
    this._webhooks = new WebhooksApi(this.httpClient);
  }

  /**
   * Get an CaptionsApi instance
   * @return CaptionsApi
   */
  public get captions(): CaptionsApi {
    return this._captions;
  }

  /**
   * Get an ChaptersApi instance
   * @return ChaptersApi
   */
  public get chapters(): ChaptersApi {
    return this._chapters;
  }

  /**
   * Get an LiveStreamsApi instance
   * @return LiveStreamsApi
   */
  public get liveStreams(): LiveStreamsApi {
    return this._liveStreams;
  }

  /**
   * Get an PlayerThemesApi instance
   * @return PlayerThemesApi
   */
  public get playerThemes(): PlayerThemesApi {
    return this._playerThemes;
  }

  /**
   * Get an RawStatisticsApi instance
   * @return RawStatisticsApi
   */
  public get rawStatistics(): RawStatisticsApi {
    return this._rawStatistics;
  }

  /**
   * Get an UploadTokensApi instance
   * @return UploadTokensApi
   */
  public get uploadTokens(): UploadTokensApi {
    return this._uploadTokens;
  }

  /**
   * Get an VideosApi instance
   * @return VideosApi
   */
  public get videos(): VideosApi {
    return this._videos;
  }

  /**
   * Get an WebhooksApi instance
   * @return WebhooksApi
   */
  public get webhooks(): WebhooksApi {
    return this._webhooks;
  }
}
