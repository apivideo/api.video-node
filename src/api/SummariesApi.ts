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

import { URLSearchParams } from 'url';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import SummariesListResponse from '../model/SummariesListResponse';
import Summary from '../model/Summary';
import SummaryCreationPayload from '../model/SummaryCreationPayload';
import SummarySource from '../model/SummarySource';
import SummaryUpdatePayload from '../model/SummaryUpdatePayload';

/**
 * no description
 */
export default class SummariesApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Generate an abstract and key takeaways for a video.
   * Generate video summary
   * @param summaryCreationPayload
   */
  public async create(
    summaryCreationPayload: SummaryCreationPayload
  ): Promise<Summary> {
    return this.createWithResponseHeaders(summaryCreationPayload).then(
      (res) => res.body
    );
  }

  /**
   * Generate an abstract and key takeaways for a video.
   * Generate video summary
   * @param summaryCreationPayload
   */
  public async createWithResponseHeaders(
    summaryCreationPayload: SummaryCreationPayload
  ): Promise<{ headers: ApiResponseHeaders; body: Summary }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (
      summaryCreationPayload === null ||
      summaryCreationPayload === undefined
    ) {
      throw new Error(
        'Required parameter summaryCreationPayload was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/summaries'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        summaryCreationPayload,
        'SummaryCreationPayload',
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
          'Summary',
          ''
        ) as Summary,
      };
    });
  }

  /**
   * Update details for a summary.
   * Update summary details
   * @param summaryId The unique identifier of the summary source you want to update.
   * @param summaryUpdatePayload
   */
  public async update(
    summaryId: string,
    summaryUpdatePayload: SummaryUpdatePayload = {}
  ): Promise<SummarySource> {
    return this.updateWithResponseHeaders(summaryId, summaryUpdatePayload).then(
      (res) => res.body
    );
  }

  /**
   * Update details for a summary.
   * Update summary details
   * @param summaryId The unique identifier of the summary source you want to update.
   * @param summaryUpdatePayload
   */
  public async updateWithResponseHeaders(
    summaryId: string,
    summaryUpdatePayload: SummaryUpdatePayload = {}
  ): Promise<{ headers: ApiResponseHeaders; body: SummarySource }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (summaryId === null || summaryId === undefined) {
      throw new Error(
        'Required parameter summaryId was null or undefined when calling update.'
      );
    }
    if (summaryUpdatePayload === null || summaryUpdatePayload === undefined) {
      throw new Error(
        'Required parameter summaryUpdatePayload was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/summaries/{summaryId}/source'
      .substring(1)
      .replace('{' + 'summaryId' + '}', encodeURIComponent(String(summaryId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        summaryUpdatePayload,
        'SummaryUpdatePayload',
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
          'SummarySource',
          ''
        ) as SummarySource,
      };
    });
  }

  /**
   * Delete a summary tied to a video.
   * Delete video summary
   * @param summaryId The unique identifier of the summary you want to delete.
   */
  public async delete(summaryId: string): Promise<void> {
    return this.deleteWithResponseHeaders(summaryId).then((res) => res.body);
  }

  /**
   * Delete a summary tied to a video.
   * Delete video summary
   * @param summaryId The unique identifier of the summary you want to delete.
   */
  public async deleteWithResponseHeaders(
    summaryId: string
  ): Promise<{ headers: ApiResponseHeaders; body: void }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (summaryId === null || summaryId === undefined) {
      throw new Error(
        'Required parameter summaryId was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/summaries/{summaryId}'
      .substring(1)
      .replace('{' + 'summaryId' + '}', encodeURIComponent(String(summaryId)));

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
   * List all summarries for your videos in a project.
   * List summaries
   * @param {Object} searchParams
   * @param { string } searchParams.videoId Use this parameter to filter for a summary that belongs to a specific video.
   * @param { &#39;auto&#39; | &#39;api&#39; } searchParams.origin Use this parameter to filter for summaries based on the way they were created: automatically or manually via the API.
   * @param { &#39;missing&#39; | &#39;waiting&#39; | &#39;failed&#39; | &#39;completed&#39; | &#39;unprocessable&#39; } searchParams.sourceStatus Use this parameter to filter for summaries based on the current status of the summary source.  These are the available statuses:  &#x60;missing&#x60;: the input for a summary is not present. &#x60;waiting&#x60; : the input video is being processed and a summary will be generated. &#x60;failed&#x60;: a technical issue prevented summary generation. &#x60;completed&#x60;: the summary is generated. &#x60;unprocessable&#x60;: the API rules the source video to be unsuitable for summary generation. An example for this is an input video that has no audio.
   * @param { &#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;videoId&#39; } searchParams.sortBy Use this parameter to choose which field the API will use to sort the response data. The default is &#x60;value&#x60;.  These are the available fields to sort by:  - &#x60;createdAt&#x60;: Sorts the results based on date and timestamps when summaries were created. - &#x60;updatedAt&#x60;: Sorts the results based on date and timestamps when summaries were last updated. - &#x60;videoId&#x60;: Sorts the results based on video IDs.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list(args: {
    videoId?: string;
    origin?: 'auto' | 'api';
    sourceStatus?:
      | 'missing'
      | 'waiting'
      | 'failed'
      | 'completed'
      | 'unprocessable';
    sortBy?: 'createdAt' | 'updatedAt' | 'videoId';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  }): Promise<SummariesListResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * List all summarries for your videos in a project.
   * List summaries
   * @param {Object} searchParams
   * @param { string } searchParams.videoId Use this parameter to filter for a summary that belongs to a specific video.
   * @param { &#39;auto&#39; | &#39;api&#39; } searchParams.origin Use this parameter to filter for summaries based on the way they were created: automatically or manually via the API.
   * @param { &#39;missing&#39; | &#39;waiting&#39; | &#39;failed&#39; | &#39;completed&#39; | &#39;unprocessable&#39; } searchParams.sourceStatus Use this parameter to filter for summaries based on the current status of the summary source.  These are the available statuses:  &#x60;missing&#x60;: the input for a summary is not present. &#x60;waiting&#x60; : the input video is being processed and a summary will be generated. &#x60;failed&#x60;: a technical issue prevented summary generation. &#x60;completed&#x60;: the summary is generated. &#x60;unprocessable&#x60;: the API rules the source video to be unsuitable for summary generation. An example for this is an input video that has no audio.
   * @param { &#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;videoId&#39; } searchParams.sortBy Use this parameter to choose which field the API will use to sort the response data. The default is &#x60;value&#x60;.  These are the available fields to sort by:  - &#x60;createdAt&#x60;: Sorts the results based on date and timestamps when summaries were created. - &#x60;updatedAt&#x60;: Sorts the results based on date and timestamps when summaries were last updated. - &#x60;videoId&#x60;: Sorts the results based on video IDs.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listWithResponseHeaders({
    videoId,
    origin,
    sourceStatus,
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    videoId?: string;
    origin?: 'auto' | 'api';
    sourceStatus?:
      | 'missing'
      | 'waiting'
      | 'failed'
      | 'completed'
      | 'unprocessable';
    sortBy?: 'createdAt' | 'updatedAt' | 'videoId';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  }): Promise<{ headers: ApiResponseHeaders; body: SummariesListResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/summaries'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (videoId !== undefined) {
      urlSearchParams.append(
        'videoId',
        ObjectSerializer.serialize(videoId, 'string', '')
      );
    }
    if (origin !== undefined) {
      urlSearchParams.append(
        'origin',
        ObjectSerializer.serialize(origin, "'auto' | 'api'", '')
      );
    }
    if (sourceStatus !== undefined) {
      urlSearchParams.append(
        'sourceStatus',
        ObjectSerializer.serialize(
          sourceStatus,
          "'missing' | 'waiting' | 'failed' | 'completed' | 'unprocessable'",
          ''
        )
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sortBy',
        ObjectSerializer.serialize(
          sortBy,
          "'createdAt' | 'updatedAt' | 'videoId'",
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
          'SummariesListResponse',
          ''
        ) as SummariesListResponse,
      };
    });
  }

  /**
   * Get all details for a summary.
   * Get summary details
   * @param summaryId The unique identifier of the summary source you want to retrieve.
   */
  public async getSummarySource(summaryId: string): Promise<SummarySource> {
    return this.getSummarySourceWithResponseHeaders(summaryId).then(
      (res) => res.body
    );
  }

  /**
   * Get all details for a summary.
   * Get summary details
   * @param summaryId The unique identifier of the summary source you want to retrieve.
   */
  public async getSummarySourceWithResponseHeaders(
    summaryId: string
  ): Promise<{ headers: ApiResponseHeaders; body: SummarySource }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (summaryId === null || summaryId === undefined) {
      throw new Error(
        'Required parameter summaryId was null or undefined when calling getSummarySource.'
      );
    }
    // Path Params
    const localVarPath = '/summaries/{summaryId}/source'
      .substring(1)
      .replace('{' + 'summaryId' + '}', encodeURIComponent(String(summaryId)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'SummarySource',
          ''
        ) as SummarySource,
      };
    });
  }
}
