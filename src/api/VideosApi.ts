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

import path from 'path';
import { existsSync, statSync, createReadStream } from 'fs';
import { URLSearchParams } from 'url';
import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import ProgressiveSession from '../model/ProgressiveSession';
import DiscardedVideoUpdatePayload from '../model/DiscardedVideoUpdatePayload';
import Video from '../model/Video';
import VideoCreationPayload from '../model/VideoCreationPayload';
import VideoStatus from '../model/VideoStatus';
import VideoThumbnailPickPayload from '../model/VideoThumbnailPickPayload';
import VideoUpdatePayload from '../model/VideoUpdatePayload';
import VideosListResponse from '../model/VideosListResponse';
import UploadProgressEvent from '../model/UploadProgressEvent';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class VideosApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Creates a video object. More information on video objects can be found [here](https://docs.api.video/reference/api/Videos).
   * Create a video object
   * @param videoCreationPayload video to create
   */
  public async create(
    videoCreationPayload: VideoCreationPayload
  ): Promise<Video> {
    return this.createWithResponseHeaders(videoCreationPayload).then(
      (res) => res.body
    );
  }

  /**
   * Creates a video object. More information on video objects can be found [here](https://docs.api.video/reference/api/Videos).
   * Create a video object
   * @param videoCreationPayload video to create
   */
  public async createWithResponseHeaders(
    videoCreationPayload: VideoCreationPayload
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoCreationPayload === null || videoCreationPayload === undefined) {
      throw new Error(
        'Required parameter videoCreationPayload was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/videos'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        videoCreationPayload,
        'VideoCreationPayload',
        ''
      ),
      contentType
    );

    queryParams.method = 'POST';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Video,
      };
    });
  }

  /**
   * Upload a video
   * This will create a progressive upload session.
   * @param videoId Enter the videoId you want to use to upload your video.
   */
  public createUploadProgressiveSession(
    videoId: string
  ): ProgressiveSession<Video> {
    class UploadProgressiveSession<Type> {
      private httpClient: HttpClient;
      private currentPart = 1;

      constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
      }

      uploadPart(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, false, progressListener).then(
          (res) => res.body
        );
      }

      uploadPartWithResponseHeaders(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, false, progressListener);
      }

      uploadLastPart(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, true, progressListener).then(
          (res) => res.body
        );
      }

      uploadLastPartWithResponseHeaders(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, true, progressListener);
      }

      async upload(
        file: string,
        isLast: boolean,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        const queryParams: QueryOptions = {};
        queryParams.headers = {};

        if (videoId === null || videoId === undefined) {
          throw new Error(
            'Required parameter videoId was null or undefined when calling upload.'
          );
        }

        if (!existsSync(file)) {
          throw new Error(`${file} must be a readable source file`);
        }

        const length = statSync(file).size;
        if (length <= 0) {
          throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/videos/{videoId}/source'
          .substring(1)
          .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        queryParams.method = 'POST';

        const formData = new FormData();

        const filename = path.basename(file);
        formData.append(filename, createReadStream(file), filename);
        queryParams.body = formData;
        queryParams.headers['Content-Range'] = `part ${this.currentPart}/${
          isLast ? this.currentPart : '*'
        }`;

        if (progressListener) {
          queryParams.onUploadProgress = (progress) => {
            progressListener({
              chunksCount: 1,
              currentChunk: 0,
              currentChunkUploadedBytes: progress.loaded,
              currentChunkTotalBytes: progress.total || 0,
              uploadedBytes: progress.loaded,
              totalBytes: progress.total || 0,
            });
          };
        }

        const response = await this.httpClient.call(localVarPath, queryParams);

        this.currentPart++;
        const responseBody = ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Type;

        return {
          body: responseBody,
          headers: response.headers,
        };
      }
    }

    return new UploadProgressiveSession<Video>(this.httpClient);
  }

  /**
   * To upload a video to the videoId you created. You can only upload your video to the videoId once.



We offer 2 types of upload: 

* Regular upload 

* Progressive upload

The latter allows you to split a video source into X chunks and send those chunks independently (concurrently or sequentially). The 2 main goals for our users are to

  * allow the upload of video sources > 200 MiB (200 MiB = the max. allowed file size for regular upload)

  * allow to send a video source "progressively", i.e., before before knowing the total size of the video.

  Once all chunks have been sent, they are reaggregated to one source file. The video source is considered as "completely sent" when the "last" chunk is sent (i.e., the chunk that "completes" the upload).


   * Upload a video
   * @param videoId Enter the videoId you want to use to upload your video.
   * @param file The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\&quot;/videos\\\&quot; endpoint and add the \\\&quot;source\\\&quot; parameter when you create a new video.
   */
  public async upload(
    videoId: string,
    file: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<Video> {
    return this.uploadWithResponseHeaders(videoId, file, progressListener).then(
      (res) => res.body
    );
  }

  /**
   * To upload a video to the videoId you created. You can only upload your video to the videoId once.



We offer 2 types of upload: 

* Regular upload 

* Progressive upload

The latter allows you to split a video source into X chunks and send those chunks independently (concurrently or sequentially). The 2 main goals for our users are to

  * allow the upload of video sources > 200 MiB (200 MiB = the max. allowed file size for regular upload)

  * allow to send a video source "progressively", i.e., before before knowing the total size of the video.

  Once all chunks have been sent, they are reaggregated to one source file. The video source is considered as "completely sent" when the "last" chunk is sent (i.e., the chunk that "completes" the upload).


   * Upload a video
   * @param videoId Enter the videoId you want to use to upload your video.
   * @param file The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\&quot;/videos\\\&quot; endpoint and add the \\\&quot;source\\\&quot; parameter when you create a new video.
   */
  public async uploadWithResponseHeaders(
    videoId: string,
    file: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling upload.'
      );
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const length = statSync(file).size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/source'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'POST';

    const formData = new FormData();

    const chunkSize = this.httpClient.getChunkSize();
    // Upload in a single request when file is small enough
    if (chunkSize > length) {
      const filename = path.basename(file);
      formData.append(filename, createReadStream(file), filename);
      queryParams.body = formData;

      if (progressListener) {
        queryParams.onUploadProgress = (progress) => {
          progressListener({
            chunksCount: 1,
            currentChunk: 0,
            currentChunkUploadedBytes: progress.loaded,
            currentChunkTotalBytes: progress.total || 0,
            uploadedBytes: progress.loaded,
            totalBytes: progress.total || 0,
          });
        };
      }

      const call = this.httpClient.call(localVarPath, queryParams);

      return call.then((response) => {
        return {
          headers: response.headers,
          body: ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video,
        };
      });
    }
    let uploadChunkSize = chunkSize;
    let lastResponse;
    let stream;
    let chunkNumber = 0;

    const partsCount = Math.ceil(length / chunkSize);
    let part = 1;

    for (let offset = 0; offset < length; offset += chunkSize, chunkNumber++) {
      // default the upload size to be as large as possible.
      uploadChunkSize = chunkSize;
      // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
      // reduced to match the remaining bytes in the file
      if (offset + uploadChunkSize > length) {
        uploadChunkSize = length - offset;
      }

      const filename = path.basename(file);
      const chunkFormData = new FormData();
      stream = createReadStream(file, {
        start: offset,
        end: uploadChunkSize + offset - 1,
      });
      chunkFormData.append(filename, stream, filename);

      queryParams.body = chunkFormData;
      queryParams.headers['Content-Range'] = `part ${part}/${partsCount}`;
      part++;

      if (progressListener) {
        queryParams.onUploadProgress = (progress) => {
          progressListener({
            chunksCount: Math.ceil(length / chunkSize),
            currentChunk: chunkNumber,
            currentChunkUploadedBytes: progress.loaded,
            currentChunkTotalBytes: progress.total || 0,
            uploadedBytes: Math.min(
              length,
              chunkNumber * chunkSize + progress.loaded
            ),
            totalBytes: length,
          });
        };
      }
      const call = this.httpClient.call(localVarPath, queryParams);

      lastResponse = await call.then((response) => {
        return {
          headers: response.headers,
          body: ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video,
        };
      });

      stream.close();
    }

    return Promise.resolve(lastResponse!);
  }

  /**
   * Upload with an delegated upload token
   * This will create a progressive upload session.
   * @param token The unique identifier for the token you want to use to upload a video.
   */
  public createUploadWithUploadTokenProgressiveSession(
    token: string
  ): ProgressiveSession<Video> {
    class UploadWithUploadTokenProgressiveSession<Type> {
      private httpClient: HttpClient;
      private currentPart = 1;
      private videoId?: string;

      constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
      }

      uploadPart(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, false, progressListener).then(
          (res) => res.body
        );
      }

      uploadPartWithResponseHeaders(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, false, progressListener);
      }

      uploadLastPart(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, true, progressListener).then(
          (res) => res.body
        );
      }

      uploadLastPartWithResponseHeaders(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, true, progressListener);
      }

      async upload(
        file: string,
        isLast: boolean,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        const queryParams: QueryOptions = {};
        queryParams.headers = {};

        if (token === null || token === undefined) {
          throw new Error(
            'Required parameter token was null or undefined when calling uploadWithUploadToken.'
          );
        }

        if (!existsSync(file)) {
          throw new Error(`${file} must be a readable source file`);
        }

        const length = statSync(file).size;
        if (length <= 0) {
          throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/upload'.substring(1);

        // Query Params
        const urlSearchParams = new URLSearchParams();

        if (token !== undefined) {
          urlSearchParams.append(
            'token',
            ObjectSerializer.serialize(token, 'string', '')
          );
        }
        queryParams.searchParams = urlSearchParams;

        queryParams.method = 'POST';

        const formData = new FormData();

        const filename = path.basename(file);
        formData.append(filename, createReadStream(file), filename);
        if (this.videoId) {
          formData.append('videoId', this.videoId);
        }
        queryParams.body = formData;
        queryParams.headers['Content-Range'] = `part ${this.currentPart}/${
          isLast ? this.currentPart : '*'
        }`;

        if (progressListener) {
          queryParams.onUploadProgress = (progress) => {
            progressListener({
              chunksCount: 1,
              currentChunk: 0,
              currentChunkUploadedBytes: progress.loaded,
              currentChunkTotalBytes: progress.total || 0,
              uploadedBytes: progress.loaded,
              totalBytes: progress.total || 0,
            });
          };
        }

        const response = await this.httpClient.call(localVarPath, queryParams);

        this.currentPart++;
        const responseBody = ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Type;

        this.videoId = (responseBody as any).videoId;

        return {
          body: responseBody,
          headers: response.headers,
        };
      }
    }

    return new UploadWithUploadTokenProgressiveSession<Video>(this.httpClient);
  }

  /**
   * This method allows you to send a video using an upload token. Upload tokens are especially useful when the upload is done from the client side. If you want to upload a video from your server-side application, you'd better use the [standard upload method](#upload).
   * Upload with an delegated upload token
   * @param token The unique identifier for the token you want to use to upload a video.
   * @param file The path to the video you want to upload.
   */
  public async uploadWithUploadToken(
    token: string,
    file: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<Video> {
    return this.uploadWithUploadTokenWithResponseHeaders(
      token,
      file,
      progressListener
    ).then((res) => res.body);
  }

  /**
   * This method allows you to send a video using an upload token. Upload tokens are especially useful when the upload is done from the client side. If you want to upload a video from your server-side application, you'd better use the [standard upload method](#upload).
   * Upload with an delegated upload token
   * @param token The unique identifier for the token you want to use to upload a video.
   * @param file The path to the video you want to upload.
   */
  public async uploadWithUploadTokenWithResponseHeaders(
    token: string,
    file: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (token === null || token === undefined) {
      throw new Error(
        'Required parameter token was null or undefined when calling uploadWithUploadToken.'
      );
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const length = statSync(file).size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }
    // Path Params
    const localVarPath = '/upload'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (token !== undefined) {
      urlSearchParams.append(
        'token',
        ObjectSerializer.serialize(token, 'string', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'POST';

    const formData = new FormData();

    const chunkSize = this.httpClient.getChunkSize();
    // Upload in a single request when file is small enough
    if (chunkSize > length) {
      const filename = path.basename(file);
      formData.append(filename, createReadStream(file), filename);
      queryParams.body = formData;

      if (progressListener) {
        queryParams.onUploadProgress = (progress) => {
          progressListener({
            chunksCount: 1,
            currentChunk: 0,
            currentChunkUploadedBytes: progress.loaded,
            currentChunkTotalBytes: progress.total || 0,
            uploadedBytes: progress.loaded,
            totalBytes: progress.total || 0,
          });
        };
      }

      const call = this.httpClient.call(localVarPath, queryParams);

      return call.then((response) => {
        return {
          headers: response.headers,
          body: ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video,
        };
      });
    }
    let uploadChunkSize = chunkSize;
    let lastResponse;
    let stream;
    let chunkNumber = 0;

    const partsCount = Math.ceil(length / chunkSize);
    let part = 1;

    for (let offset = 0; offset < length; offset += chunkSize, chunkNumber++) {
      // default the upload size to be as large as possible.
      uploadChunkSize = chunkSize;
      // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
      // reduced to match the remaining bytes in the file
      if (offset + uploadChunkSize > length) {
        uploadChunkSize = length - offset;
      }

      const filename = path.basename(file);
      const chunkFormData = new FormData();
      stream = createReadStream(file, {
        start: offset,
        end: uploadChunkSize + offset - 1,
      });
      chunkFormData.append(filename, stream, filename);

      queryParams.body = chunkFormData;
      queryParams.headers['Content-Range'] = `part ${part}/${partsCount}`;
      part++;

      if (progressListener) {
        queryParams.onUploadProgress = (progress) => {
          progressListener({
            chunksCount: Math.ceil(length / chunkSize),
            currentChunk: chunkNumber,
            currentChunkUploadedBytes: progress.loaded,
            currentChunkTotalBytes: progress.total || 0,
            uploadedBytes: Math.min(
              length,
              chunkNumber * chunkSize + progress.loaded
            ),
            totalBytes: length,
          });
        };
      }
      const call = this.httpClient.call(localVarPath, queryParams);

      lastResponse = await call.then((response) => {
        return {
          headers: response.headers,
          body: ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video,
        };
      });

      stream.close();
    }

    return Promise.resolve(lastResponse!);
  }

  /**
   * This call provides the same information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL.
   * Retrieve a video object
   * @param videoId The unique identifier for the video you want details about.
   */
  public async get(videoId: string): Promise<Video> {
    return this.getWithResponseHeaders(videoId).then((res) => res.body);
  }

  /**
   * This call provides the same information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL.
   * Retrieve a video object
   * @param videoId The unique identifier for the video you want details about.
   */
  public async getWithResponseHeaders(
    videoId: string
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Video,
      };
    });
  }

  /**
   * Updates the parameters associated with a video ID. The video object you are updating is determined by the video ID you provide. 



NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it.


   * Update a video object
   * @param videoId The video ID for the video you want to update.
   * @param videoUpdatePayload 
   */
  public async update(
    videoId: string,
    videoUpdatePayload: VideoUpdatePayload = {}
  ): Promise<Video> {
    return this.updateWithResponseHeaders(videoId, videoUpdatePayload).then(
      (res) => res.body
    );
  }

  /**
   * Updates the parameters associated with a video ID. The video object you are updating is determined by the video ID you provide. 



NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it.


   * Update a video object
   * @param videoId The video ID for the video you want to update.
   * @param videoUpdatePayload 
   */
  public async updateWithResponseHeaders(
    videoId: string,
    videoUpdatePayload: VideoUpdatePayload = {}
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling update.'
      );
    }
    if (videoUpdatePayload === null || videoUpdatePayload === undefined) {
      throw new Error(
        'Required parameter videoUpdatePayload was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(videoUpdatePayload, 'VideoUpdatePayload', ''),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Video,
      };
    });
  }

  /**
   * If you do not need a video any longer, you can send a request to delete it. All you need is the videoId. By default, deleted videos cannot be recovered. If you have the Video Restore feature enabled, this operation will discard the video instead of permanently deleting it. Make sure you subscribe to the Video Restore feature if you want to be able to restore deleted videos! The Video Restore feature retains videos for 90 days, after which the videos are permanently deleted
   * Delete a video object
   * @param videoId The video ID for the video you want to delete.
   */
  public async delete(videoId: string): Promise<void> {
    return this.deleteWithResponseHeaders(videoId).then((res) => res.body);
  }

  /**
   * If you do not need a video any longer, you can send a request to delete it. All you need is the videoId. By default, deleted videos cannot be recovered. If you have the Video Restore feature enabled, this operation will discard the video instead of permanently deleting it. Make sure you subscribe to the Video Restore feature if you want to be able to restore deleted videos! The Video Restore feature retains videos for 90 days, after which the videos are permanently deleted
   * Delete a video object
   * @param videoId The video ID for the video you want to delete.
   */
  public async deleteWithResponseHeaders(
    videoId: string
  ): Promise<{ headers: ApiResponseHeaders; body: void }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'DELETE';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'void',
          ''
        ) as void,
      };
    });
  }

  /**
   * This method returns a list of your videos (with all their details). With no parameters added, the API returns the first page of all videos. You can filter videos using the parameters described below.
   * List all video objects
   * @param {Object} searchParams
   * @param { string } searchParams.title The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
   * @param { Array&lt;string&gt; } searchParams.tags A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
   * @param { { [key: string]: string; } } searchParams.metadata Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter.
   * @param { string } searchParams.description Retrieve video objects by &#x60;description&#x60;.
   * @param { string } searchParams.liveStreamId Retrieve video objects that were recorded from a live stream by &#x60;liveStreamId&#x60;.
   * @param { &#39;title&#39; | &#39;createdAt&#39; | &#39;publishedAt&#39; | &#39;updatedAt&#39; } searchParams.sortBy Use this parameter to sort videos by the their created time, published time, updated time, or by title.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list(
    args: {
      title?: string;
      tags?: Array<string>;
      metadata?: { [key: string]: string };
      description?: string;
      liveStreamId?: string;
      sortBy?: 'title' | 'createdAt' | 'publishedAt' | 'updatedAt';
      sortOrder?: 'asc' | 'desc';
      currentPage?: number;
      pageSize?: number;
    } = {}
  ): Promise<VideosListResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * This method returns a list of your videos (with all their details). With no parameters added, the API returns the first page of all videos. You can filter videos using the parameters described below.
   * List all video objects
   * @param {Object} searchParams
   * @param { string } searchParams.title The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
   * @param { Array&lt;string&gt; } searchParams.tags A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
   * @param { { [key: string]: string; } } searchParams.metadata Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter.
   * @param { string } searchParams.description Retrieve video objects by &#x60;description&#x60;.
   * @param { string } searchParams.liveStreamId Retrieve video objects that were recorded from a live stream by &#x60;liveStreamId&#x60;.
   * @param { &#39;title&#39; | &#39;createdAt&#39; | &#39;publishedAt&#39; | &#39;updatedAt&#39; } searchParams.sortBy Use this parameter to sort videos by the their created time, published time, updated time, or by title.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listWithResponseHeaders({
    title,
    tags,
    metadata,
    description,
    liveStreamId,
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    title?: string;
    tags?: Array<string>;
    metadata?: { [key: string]: string };
    description?: string;
    liveStreamId?: string;
    sortBy?: 'title' | 'createdAt' | 'publishedAt' | 'updatedAt';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  } = {}): Promise<{ headers: ApiResponseHeaders; body: VideosListResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/videos'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (title !== undefined) {
      urlSearchParams.append(
        'title',
        ObjectSerializer.serialize(title, 'string', '')
      );
    }
    if (tags !== undefined) {
      const tagsSerialized = ObjectSerializer.serialize(
        tags,
        'Array<string>',
        ''
      );
      tagsSerialized.forEach((v: string) =>
        urlSearchParams.append('tags[]', v)
      );
    }
    if (metadata !== undefined) {
      if (typeof metadata !== 'object') {
        throw new Error(`${metadata} is not an object`);
      }
      Object.keys(metadata).forEach((k) => {
        if ((metadata as any)[k] instanceof Object) {
          Object.keys((metadata as any)[k]).forEach((key) => {
            urlSearchParams.append(
              `metadata[${k}][${key}]`,
              ObjectSerializer.serialize(
                (metadata as any)[k][key],
                'string',
                ''
              )
            );
          });
        } else {
          urlSearchParams.append(
            'metadata[' + k + ']',
            ObjectSerializer.serialize((metadata as any)[k], 'string', '')
          );
        }
      });
    }
    if (description !== undefined) {
      urlSearchParams.append(
        'description',
        ObjectSerializer.serialize(description, 'string', '')
      );
    }
    if (liveStreamId !== undefined) {
      urlSearchParams.append(
        'liveStreamId',
        ObjectSerializer.serialize(liveStreamId, 'string', '')
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sortBy',
        ObjectSerializer.serialize(
          sortBy,
          "'title' | 'createdAt' | 'publishedAt' | 'updatedAt'",
          ''
        )
      );
    }
    if (sortOrder !== undefined) {
      urlSearchParams.append(
        'sortOrder',
        ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", '')
      );
    }
    if (currentPage !== undefined) {
      urlSearchParams.append(
        'currentPage',
        ObjectSerializer.serialize(currentPage, 'number', '')
      );
    }
    if (pageSize !== undefined) {
      urlSearchParams.append(
        'pageSize',
        ObjectSerializer.serialize(pageSize, 'number', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'VideosListResponse',
          ''
        ) as VideosListResponse,
      };
    });
  }

  /**
   * The thumbnail is the poster that appears in the player window before video playback begins.



This endpoint allows you to upload an image for the thumbnail.



To select a still frame from the video using a time stamp, use the [dedicated method](#pickThumbnail) to pick a time in the video.



Note: There may be a short delay before the new thumbnail is delivered to our CDN.
   * Upload a thumbnail
   * @param videoId Unique identifier of the chosen video 
   * @param file The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB.
   */
  public async uploadThumbnail(
    videoId: string,
    file: string | Readable | Buffer
  ): Promise<Video> {
    return this.uploadThumbnailWithResponseHeaders(videoId, file).then(
      (res) => res.body
    );
  }

  /**
   * The thumbnail is the poster that appears in the player window before video playback begins.



This endpoint allows you to upload an image for the thumbnail.



To select a still frame from the video using a time stamp, use the [dedicated method](#pickThumbnail) to pick a time in the video.



Note: There may be a short delay before the new thumbnail is delivered to our CDN.
   * Upload a thumbnail
   * @param videoId Unique identifier of the chosen video 
   * @param file The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB.
   */
  public async uploadThumbnailWithResponseHeaders(
    videoId: string,
    file: string | Readable | Buffer
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling uploadThumbnail.'
      );
    }
    let fileName = 'file';
    let fileBuffer = file;
    if (typeof file === 'string') {
      fileName = path.basename(file);
      fileBuffer = createReadStream(file);
    }
    if (file instanceof Readable) {
      fileBuffer = await readableToBuffer(file);
    }

    // Path Params
    const localVarPath = '/videos/{videoId}/thumbnail'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    queryParams.body = formData;
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Video,
      };
    });
  }

  /**
   * Pick a thumbnail from the given time code. 



If you'd like to upload an image for your thumbnail, use the dedicated [method](#uploadThumbnail). 



There may be a short delay for the thumbnail to update.


   * Set a thumbnail
   * @param videoId Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
   * @param videoThumbnailPickPayload 
   */
  public async pickThumbnail(
    videoId: string,
    videoThumbnailPickPayload: VideoThumbnailPickPayload
  ): Promise<Video> {
    return this.pickThumbnailWithResponseHeaders(
      videoId,
      videoThumbnailPickPayload
    ).then((res) => res.body);
  }

  /**
   * Pick a thumbnail from the given time code. 



If you'd like to upload an image for your thumbnail, use the dedicated [method](#uploadThumbnail). 



There may be a short delay for the thumbnail to update.


   * Set a thumbnail
   * @param videoId Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
   * @param videoThumbnailPickPayload 
   */
  public async pickThumbnailWithResponseHeaders(
    videoId: string,
    videoThumbnailPickPayload: VideoThumbnailPickPayload
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling pickThumbnail.'
      );
    }
    if (
      videoThumbnailPickPayload === null ||
      videoThumbnailPickPayload === undefined
    ) {
      throw new Error(
        'Required parameter videoThumbnailPickPayload was null or undefined when calling pickThumbnail.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/thumbnail'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        videoThumbnailPickPayload,
        'VideoThumbnailPickPayload',
        ''
      ),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Video,
      };
    });
  }

  /**
   * This call provides the same information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL.
   * Retrieve a discarded video object
   * @param videoId The unique identifier for the video you want details about.
   */
  public async getDiscarded(videoId: string): Promise<Video> {
    return this.getDiscardedWithResponseHeaders(videoId).then(
      (res) => res.body
    );
  }

  /**
   * This call provides the same information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL.
   * Retrieve a discarded video object
   * @param videoId The unique identifier for the video you want details about.
   */
  public async getDiscardedWithResponseHeaders(
    videoId: string
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling getDiscarded.'
      );
    }
    // Path Params
    const localVarPath = '/discarded/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Video,
      };
    });
  }

  /**
   * This method provides upload status & encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities.
   * Retrieve video status and details
   * @param videoId The unique identifier for the video you want the status for.
   */
  public async getStatus(videoId: string): Promise<VideoStatus> {
    return this.getStatusWithResponseHeaders(videoId).then((res) => res.body);
  }

  /**
   * This method provides upload status & encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities.
   * Retrieve video status and details
   * @param videoId The unique identifier for the video you want the status for.
   */
  public async getStatusWithResponseHeaders(
    videoId: string
  ): Promise<{ headers: ApiResponseHeaders; body: VideoStatus }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling getStatus.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/status'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'VideoStatus',
          ''
        ) as VideoStatus,
      };
    });
  }

  /**
   * This method returns a list of your discarded videos (with all their details). With no parameters added, the API returns the first page of all discarded videos. You can filter discarded videos using the parameters described below.
   * List all discarded video objects
   * @param {Object} searchParams
   * @param { string } searchParams.title The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
   * @param { Array&lt;string&gt; } searchParams.tags A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
   * @param { { [key: string]: string; } } searchParams.metadata Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter.
   * @param { string } searchParams.description Retrieve video objects by &#x60;description&#x60;.
   * @param { string } searchParams.liveStreamId Retrieve video objects that were recorded from a live stream by &#x60;liveStreamId&#x60;.
   * @param { &#39;title&#39; | &#39;createdAt&#39; | &#39;publishedAt&#39; | &#39;updatedAt&#39; } searchParams.sortBy Use this parameter to sort videos by the their created time, published time, updated time, or by title.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listDiscarded(
    args: {
      title?: string;
      tags?: Array<string>;
      metadata?: { [key: string]: string };
      description?: string;
      liveStreamId?: string;
      sortBy?: 'title' | 'createdAt' | 'publishedAt' | 'updatedAt';
      sortOrder?: 'asc' | 'desc';
      currentPage?: number;
      pageSize?: number;
    } = {}
  ): Promise<VideosListResponse> {
    return this.listDiscardedWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * This method returns a list of your discarded videos (with all their details). With no parameters added, the API returns the first page of all discarded videos. You can filter discarded videos using the parameters described below.
   * List all discarded video objects
   * @param {Object} searchParams
   * @param { string } searchParams.title The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
   * @param { Array&lt;string&gt; } searchParams.tags A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
   * @param { { [key: string]: string; } } searchParams.metadata Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter.
   * @param { string } searchParams.description Retrieve video objects by &#x60;description&#x60;.
   * @param { string } searchParams.liveStreamId Retrieve video objects that were recorded from a live stream by &#x60;liveStreamId&#x60;.
   * @param { &#39;title&#39; | &#39;createdAt&#39; | &#39;publishedAt&#39; | &#39;updatedAt&#39; } searchParams.sortBy Use this parameter to sort videos by the their created time, published time, updated time, or by title.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listDiscardedWithResponseHeaders({
    title,
    tags,
    metadata,
    description,
    liveStreamId,
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    title?: string;
    tags?: Array<string>;
    metadata?: { [key: string]: string };
    description?: string;
    liveStreamId?: string;
    sortBy?: 'title' | 'createdAt' | 'publishedAt' | 'updatedAt';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  } = {}): Promise<{ headers: ApiResponseHeaders; body: VideosListResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/discarded/videos'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (title !== undefined) {
      urlSearchParams.append(
        'title',
        ObjectSerializer.serialize(title, 'string', '')
      );
    }
    if (tags !== undefined) {
      const tagsSerialized = ObjectSerializer.serialize(
        tags,
        'Array<string>',
        ''
      );
      tagsSerialized.forEach((v: string) =>
        urlSearchParams.append('tags[]', v)
      );
    }
    if (metadata !== undefined) {
      if (typeof metadata !== 'object') {
        throw new Error(`${metadata} is not an object`);
      }
      Object.keys(metadata).forEach((k) => {
        if ((metadata as any)[k] instanceof Object) {
          Object.keys((metadata as any)[k]).forEach((key) => {
            urlSearchParams.append(
              `metadata[${k}][${key}]`,
              ObjectSerializer.serialize(
                (metadata as any)[k][key],
                'string',
                ''
              )
            );
          });
        } else {
          urlSearchParams.append(
            'metadata[' + k + ']',
            ObjectSerializer.serialize((metadata as any)[k], 'string', '')
          );
        }
      });
    }
    if (description !== undefined) {
      urlSearchParams.append(
        'description',
        ObjectSerializer.serialize(description, 'string', '')
      );
    }
    if (liveStreamId !== undefined) {
      urlSearchParams.append(
        'liveStreamId',
        ObjectSerializer.serialize(liveStreamId, 'string', '')
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sortBy',
        ObjectSerializer.serialize(
          sortBy,
          "'title' | 'createdAt' | 'publishedAt' | 'updatedAt'",
          ''
        )
      );
    }
    if (sortOrder !== undefined) {
      urlSearchParams.append(
        'sortOrder',
        ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", '')
      );
    }
    if (currentPage !== undefined) {
      urlSearchParams.append(
        'currentPage',
        ObjectSerializer.serialize(currentPage, 'number', '')
      );
    }
    if (pageSize !== undefined) {
      urlSearchParams.append(
        'pageSize',
        ObjectSerializer.serialize(pageSize, 'number', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'VideosListResponse',
          ''
        ) as VideosListResponse,
      };
    });
  }

  /**
   * Use this endpoint to restore a discarded video when you have the Video Restore feature enabled.


   * Update a discarded video object
   * @param videoId The video ID for the video you want to restore.
   * @param discardedVideoUpdatePayload 
   */
  public async updateDiscarded(
    videoId: string,
    discardedVideoUpdatePayload: DiscardedVideoUpdatePayload = {}
  ): Promise<Video> {
    return this.updateDiscardedWithResponseHeaders(
      videoId,
      discardedVideoUpdatePayload
    ).then((res) => res.body);
  }

  /**
   * Use this endpoint to restore a discarded video when you have the Video Restore feature enabled.


   * Update a discarded video object
   * @param videoId The video ID for the video you want to restore.
   * @param discardedVideoUpdatePayload 
   */
  public async updateDiscardedWithResponseHeaders(
    videoId: string,
    discardedVideoUpdatePayload: DiscardedVideoUpdatePayload = {}
  ): Promise<{ headers: ApiResponseHeaders; body: Video }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling updateDiscarded.'
      );
    }
    if (
      discardedVideoUpdatePayload === null ||
      discardedVideoUpdatePayload === undefined
    ) {
      throw new Error(
        'Required parameter discardedVideoUpdatePayload was null or undefined when calling updateDiscarded.'
      );
    }
    // Path Params
    const localVarPath = '/discarded/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        discardedVideoUpdatePayload,
        'DiscardedVideoUpdatePayload',
        ''
      ),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'Video',
          ''
        ) as Video,
      };
    });
  }
}
