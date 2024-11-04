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

import axios, { AxiosError, AxiosHeaders, AxiosProgressEvent } from 'axios';
import ApiVideoError from './ApiVideoError';
import ProblemDetails from './model/ProblemDetails';
import { encode } from 'js-base64';
import { Readable, Stream } from 'stream';
import AccessToken from './model/AccessToken';

export type QueryOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
  searchParams?: URLSearchParams;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

export type ApiResponseHeaders = {
  server: string;
  'content-type': string;
  'transfer-encoding': string;
  connection: string;
  'cache-control': string;
  date: string;
  'x-ratelimit-remaining': string;
  'x-ratelimit-retry-after': string;
  'x-ratelimit-limit': string;
  'x-server': string;
  'access-control-allow-origin': string;
  'timing-allow-origin': string;
};

export default class HttpClient {
  private apiKey?: string;
  private baseUri: string;
  private headers: AxiosHeaders;
  private chunkSize: number;

  constructor(params: {
    apiKey?: string;
    baseUri: string;
    chunkSize: number;
    applicationName?: string;
    applicationVersion?: string;
    sdkName?: string;
    sdkVersion?: string;
  }) {
    this.apiKey = params.apiKey;
    this.baseUri = params.baseUri;
    this.chunkSize = params.chunkSize;
    this.headers = new AxiosHeaders({
      Accept: 'application/json, */*;q=0.8',
      'AV-Origin-Client': 'nodejs:2.6.7',
      Authorization: this.apiKey ? `Basic ${encode(`${this.apiKey}:`)}` : '',
      ...(params.applicationName && params.applicationVersion
        ? {
            'AV-Origin-App': `${params.applicationName}:${params.applicationVersion}`,
          }
        : {}),
      ...(params.sdkName && params.sdkVersion
        ? {
            'AV-Origin-Sdk': `${params.sdkName}:${params.sdkVersion}`,
          }
        : {}),
    });
  }

  getChunkSize() {
    return this.chunkSize;
  }

  public async getAccessToken(): Promise<AccessToken> {
    const axiosRes = await axios.request({
      url: `${this.baseUri}/auth/api-key`,
      headers: this.headers,
      method: 'POST',
      data: {
        apiKey: this.apiKey,
      },
    });

    return {
      accessToken: axiosRes.data.access_token,
      refreshToken: axiosRes.data.refresh_token,
      tokenType: axiosRes.data.token_type,
      expiresIn: axiosRes.data.expires_in,
    };
  }

  public async call(path: string, options: QueryOptions) {
    if (!options.method) throw new Error('Method is required');
    try {
      const axiosRes = await axios.request({
        url: `${this.baseUri}/${path}${
          options.searchParams ? `?${options.searchParams.toString()}` : ''
        }`,
        headers: this.headers.concat(options.headers || {}),
        method: options.method,
        onUploadProgress: options.onUploadProgress,
        data: options.body,
      });

      return {
        headers: axiosRes.headers as any,
        body: JSON.stringify(axiosRes.data),
      };
    } catch (error: any) {
      const axiosError = error as AxiosError;
      throw new ApiVideoError(
        axiosError.response?.status || 0,
        axiosError.response?.data as ProblemDetails
      );
    }
  }
}

export async function readableToBuffer(readable: Readable): Promise<Buffer> {
  const writableStream = new Stream.Writable({
    defaultEncoding: 'utf-8',
  });
  const data: Buffer[] = [];
  writableStream._write = (chunk, encoding, next) => {
    data.push(Buffer.from(chunk, encoding));
    next();
  };

  return new Promise((resolve, reject) => {
    Stream.pipeline(readable, writableStream, async (err) => {
      if (err) {
        reject(err);
      }

      const buffer = Buffer.concat(data);
      resolve(buffer);
    });
  });
}
