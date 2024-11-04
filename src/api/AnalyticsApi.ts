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
import AnalyticsAggregatedMetricsResponse from '../model/AnalyticsAggregatedMetricsResponse';
import AnalyticsMetricsBreakdownResponse from '../model/AnalyticsMetricsBreakdownResponse';
import AnalyticsMetricsOverTimeResponse from '../model/AnalyticsMetricsOverTimeResponse';
import FilterBy2 from '../model/FilterBy2';

/**
 * no description
 */
export default class AnalyticsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Retrieve time-based and countable metrics like average watch time or the number of impressions over a certain period of time.
   * Retrieve aggregated metrics
   * @param {Object} searchParams
   * @param { &#39;play&#39; | &#39;start&#39; | &#39;end&#39; | &#39;impression&#39; | &#39;impression-time&#39; | &#39;watch-time&#39; | &#39;ccv&#39; | &#39;view&#39; } searchParams.metric Use this path parameter to select a metric that you want analytics for.  - &#x60;play&#x60; is the number of times your content has been played. You can use the aggregations &#x60;count&#x60;, &#x60;rate&#x60;, and &#x60;total&#x60; with the &#x60;play&#x60; metric. - &#x60;start&#x60; is the number of times playback was started. You can use the aggregation &#x60;count&#x60; with this metric. - &#x60;end&#x60; is the number of times playback has ended with the content watch until the end. You can use the aggregation &#x60;count&#x60; with this metric. - &#x60;impression&#x60; is the number of times your content has been loaded and was ready for playback. You can use the aggregation &#x60;count&#x60; with this metric. - &#x60;impression-time&#x60; is the time in milliseconds that your content was loading for until the first video frame is displayed. You can use the aggregations &#x60;average&#x60; and &#x60;sum&#x60; with this metric. - &#x60;watch-time&#x60; is the cumulative time in seconds that the user has spent watching your content. You can use the aggregations &#x60;average&#x60; and &#x60;sum&#x60; with this metric. - &#x60;ccv&#x60;: is the number of concurrent viewers, or users watching at the same time. - &#x60;view&#x60;: the total number of viewers until this point in time.
   * @param { &#39;count&#39; | &#39;rate&#39; | &#39;total&#39; | &#39;average&#39; | &#39;sum&#39; | &#39;peak&#39; | &#39;live&#39; } searchParams.aggregation Use this path parameter to define a way of collecting data for the metric that you want analytics for.  - &#x60;count&#x60; returns the overall number of events for the &#x60;play&#x60; metric. - &#x60;rate&#x60; returns the ratio that calculates the number of plays your content receives divided by its impressions. This aggregation can be used only with the &#x60;play&#x60; metric. - &#x60;total&#x60; calculates the total number of events for the &#x60;play&#x60; metric.  - &#x60;average&#x60; calculates an average value for the selected metric. - &#x60;sum&#x60; adds up the total value of the select metric. - &#x60;peak&#x60; shows the highest value of the &#x60;ccv&#x60; metric in the timeframe of your request. You can use this aggregation only with the &#x60;ccv&#x60; metric. - &#x60;live&#x60; shows the highest value of the &#x60;ccv&#x60; metric from the last 20 seconds. You can use this aggregation only with the &#x60;ccv&#x60; metric.
   * @param { Date } searchParams.from Use this query parameter to define the starting date-time of the period you want analytics for.  - If you do not set a value for &#x60;from&#x60;, the default assigned value is 1 day ago, based on the &#x60;to&#x60; parameter. - The maximum value is 30 days ago. - The value you provide should follow the ATOM date-time format: &#x60;2024-02-05T00:00:00+01:00&#x60; - The API ignores this parameter when you call &#x60;/data/metrics/play/total&#x60;.
   * @param { Date } searchParams.to Use this query parameter to define the ending date-time of the period you want analytics for.  - If you do not set a value for &#x60;to&#x60;, the default assigned value is &#x60;now&#x60;. - The API ignores this parameter when you call &#x60;/data/metrics/play/total&#x60;. - The value for &#x60;to&#x60; is a non-inclusive value: the API returns data **before** the date-time that you set.
   * @param { boolean } searchParams.unique Use this query parameter to control how viewer data is counted:  - &#x60;true&#x60; means that a single user watchig multiple times counts as 1 unique viewer - &#x60;false&#x60; means that all views count, even if from the same user.  The API accepts this parameter only when you use the &#x60;ccv-peak&#x60;, &#x60;ccv-average&#x60;, or &#x60;view&#x60; metric.            Viewers are unique for 1 day.  The API determines uniqueness based on a viewer&#39;s &#x60;user-agent&#x60; and IP address. This means that the API can filter viewers using multiple tabs to watch the same video multiple times, but cannot filter for viewers who use multiple browsers to watch the same content multiple times.
   * @param { &#39;3s&#39; | &#39;5s&#39; | &#39;10s&#39; | &#39;30s&#39; } searchParams.viewDuration Use this query parameter to define how many seconds a view has to last to be counted in analytics data.  - You can only use this parameter together with the &#x60;view&#x60; metric. - The accepted values are &#x60;3s&#x60;, &#x60;5s&#x60;, &#x60;10s&#x60;, and &#x60;30s&#x60;.  - If you do not set this parameter, the API defaults to &#x60;5s&#x60;.
   * @param { FilterBy2 } searchParams.filterBy Use this parameter to filter the API&#39;s response based on different data dimensions. You can serialize filters in your query to receive more detailed breakdowns of your analytics.  - If you do not set a value for &#x60;filterBy&#x60;, the API returns the full dataset for your project. - The API only accepts the &#x60;mediaId&#x60; and &#x60;mediaType&#x60; filters when you call &#x60;/data/metrics/play/total&#x60; or &#x60;/data/buckets/play-total/media-id&#x60;.  These are the available breakdown dimensions:  - &#x60;mediaId&#x60;: Returns analytics based on the unique identifiers of a video or a live stream. - &#x60;mediaType&#x60;: Returns analytics based on the type of content. Possible values: &#x60;video&#x60; and &#x60;live-stream&#x60;.  - &#x60;continent&#x60;: Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;EU&#x60;. Possible values are: &#x60;AS&#x60;, &#x60;AF&#x60;, &#x60;NA&#x60;, &#x60;SA&#x60;, &#x60;AN&#x60;, &#x60;EU&#x60;, &#x60;AZ&#x60;.  - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;FR&#x60;. - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. - &#x60;tag&#x60;: Returns analytics for videos using this tag. This filter only accepts a single value and is case sensitive. Read more about tagging your videos [here](https://docs.api.video/vod/tags-metadata). - &#x60;referrer&#x60;: Filters data based on the URL where the view is originating from. Accepts an empty string as a value to filter view events where no referrer is available.
   */
  public async getAggregatedMetrics(args: {
    metric:
      | 'play'
      | 'start'
      | 'end'
      | 'impression'
      | 'impression-time'
      | 'watch-time'
      | 'ccv'
      | 'view';
    aggregation:
      | 'count'
      | 'rate'
      | 'total'
      | 'average'
      | 'sum'
      | 'peak'
      | 'live';
    from?: Date;
    to?: Date;
    unique?: boolean;
    viewDuration?: '3s' | '5s' | '10s' | '30s';
    filterBy?: FilterBy2;
  }): Promise<AnalyticsAggregatedMetricsResponse> {
    return this.getAggregatedMetricsWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve time-based and countable metrics like average watch time or the number of impressions over a certain period of time.
   * Retrieve aggregated metrics
   * @param {Object} searchParams
   * @param { &#39;play&#39; | &#39;start&#39; | &#39;end&#39; | &#39;impression&#39; | &#39;impression-time&#39; | &#39;watch-time&#39; | &#39;ccv&#39; | &#39;view&#39; } searchParams.metric Use this path parameter to select a metric that you want analytics for.  - &#x60;play&#x60; is the number of times your content has been played. You can use the aggregations &#x60;count&#x60;, &#x60;rate&#x60;, and &#x60;total&#x60; with the &#x60;play&#x60; metric. - &#x60;start&#x60; is the number of times playback was started. You can use the aggregation &#x60;count&#x60; with this metric. - &#x60;end&#x60; is the number of times playback has ended with the content watch until the end. You can use the aggregation &#x60;count&#x60; with this metric. - &#x60;impression&#x60; is the number of times your content has been loaded and was ready for playback. You can use the aggregation &#x60;count&#x60; with this metric. - &#x60;impression-time&#x60; is the time in milliseconds that your content was loading for until the first video frame is displayed. You can use the aggregations &#x60;average&#x60; and &#x60;sum&#x60; with this metric. - &#x60;watch-time&#x60; is the cumulative time in seconds that the user has spent watching your content. You can use the aggregations &#x60;average&#x60; and &#x60;sum&#x60; with this metric. - &#x60;ccv&#x60;: is the number of concurrent viewers, or users watching at the same time. - &#x60;view&#x60;: the total number of viewers until this point in time.
   * @param { &#39;count&#39; | &#39;rate&#39; | &#39;total&#39; | &#39;average&#39; | &#39;sum&#39; | &#39;peak&#39; | &#39;live&#39; } searchParams.aggregation Use this path parameter to define a way of collecting data for the metric that you want analytics for.  - &#x60;count&#x60; returns the overall number of events for the &#x60;play&#x60; metric. - &#x60;rate&#x60; returns the ratio that calculates the number of plays your content receives divided by its impressions. This aggregation can be used only with the &#x60;play&#x60; metric. - &#x60;total&#x60; calculates the total number of events for the &#x60;play&#x60; metric.  - &#x60;average&#x60; calculates an average value for the selected metric. - &#x60;sum&#x60; adds up the total value of the select metric. - &#x60;peak&#x60; shows the highest value of the &#x60;ccv&#x60; metric in the timeframe of your request. You can use this aggregation only with the &#x60;ccv&#x60; metric. - &#x60;live&#x60; shows the highest value of the &#x60;ccv&#x60; metric from the last 20 seconds. You can use this aggregation only with the &#x60;ccv&#x60; metric.
   * @param { Date } searchParams.from Use this query parameter to define the starting date-time of the period you want analytics for.  - If you do not set a value for &#x60;from&#x60;, the default assigned value is 1 day ago, based on the &#x60;to&#x60; parameter. - The maximum value is 30 days ago. - The value you provide should follow the ATOM date-time format: &#x60;2024-02-05T00:00:00+01:00&#x60; - The API ignores this parameter when you call &#x60;/data/metrics/play/total&#x60;.
   * @param { Date } searchParams.to Use this query parameter to define the ending date-time of the period you want analytics for.  - If you do not set a value for &#x60;to&#x60;, the default assigned value is &#x60;now&#x60;. - The API ignores this parameter when you call &#x60;/data/metrics/play/total&#x60;. - The value for &#x60;to&#x60; is a non-inclusive value: the API returns data **before** the date-time that you set.
   * @param { boolean } searchParams.unique Use this query parameter to control how viewer data is counted:  - &#x60;true&#x60; means that a single user watchig multiple times counts as 1 unique viewer - &#x60;false&#x60; means that all views count, even if from the same user.  The API accepts this parameter only when you use the &#x60;ccv-peak&#x60;, &#x60;ccv-average&#x60;, or &#x60;view&#x60; metric.            Viewers are unique for 1 day.  The API determines uniqueness based on a viewer&#39;s &#x60;user-agent&#x60; and IP address. This means that the API can filter viewers using multiple tabs to watch the same video multiple times, but cannot filter for viewers who use multiple browsers to watch the same content multiple times.
   * @param { &#39;3s&#39; | &#39;5s&#39; | &#39;10s&#39; | &#39;30s&#39; } searchParams.viewDuration Use this query parameter to define how many seconds a view has to last to be counted in analytics data.  - You can only use this parameter together with the &#x60;view&#x60; metric. - The accepted values are &#x60;3s&#x60;, &#x60;5s&#x60;, &#x60;10s&#x60;, and &#x60;30s&#x60;.  - If you do not set this parameter, the API defaults to &#x60;5s&#x60;.
   * @param { FilterBy2 } searchParams.filterBy Use this parameter to filter the API&#39;s response based on different data dimensions. You can serialize filters in your query to receive more detailed breakdowns of your analytics.  - If you do not set a value for &#x60;filterBy&#x60;, the API returns the full dataset for your project. - The API only accepts the &#x60;mediaId&#x60; and &#x60;mediaType&#x60; filters when you call &#x60;/data/metrics/play/total&#x60; or &#x60;/data/buckets/play-total/media-id&#x60;.  These are the available breakdown dimensions:  - &#x60;mediaId&#x60;: Returns analytics based on the unique identifiers of a video or a live stream. - &#x60;mediaType&#x60;: Returns analytics based on the type of content. Possible values: &#x60;video&#x60; and &#x60;live-stream&#x60;.  - &#x60;continent&#x60;: Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;EU&#x60;. Possible values are: &#x60;AS&#x60;, &#x60;AF&#x60;, &#x60;NA&#x60;, &#x60;SA&#x60;, &#x60;AN&#x60;, &#x60;EU&#x60;, &#x60;AZ&#x60;.  - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;FR&#x60;. - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. - &#x60;tag&#x60;: Returns analytics for videos using this tag. This filter only accepts a single value and is case sensitive. Read more about tagging your videos [here](https://docs.api.video/vod/tags-metadata). - &#x60;referrer&#x60;: Filters data based on the URL where the view is originating from. Accepts an empty string as a value to filter view events where no referrer is available.
   */
  public async getAggregatedMetricsWithResponseHeaders({
    metric,
    aggregation,
    from,
    to,
    unique,
    viewDuration,
    filterBy,
  }: {
    metric:
      | 'play'
      | 'start'
      | 'end'
      | 'impression'
      | 'impression-time'
      | 'watch-time'
      | 'ccv'
      | 'view';
    aggregation:
      | 'count'
      | 'rate'
      | 'total'
      | 'average'
      | 'sum'
      | 'peak'
      | 'live';
    from?: Date;
    to?: Date;
    unique?: boolean;
    viewDuration?: '3s' | '5s' | '10s' | '30s';
    filterBy?: FilterBy2;
  }): Promise<{
    headers: ApiResponseHeaders;
    body: AnalyticsAggregatedMetricsResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling getAggregatedMetrics.'
      );
    }
    if (aggregation === null || aggregation === undefined) {
      throw new Error(
        'Required parameter aggregation was null or undefined when calling getAggregatedMetrics.'
      );
    }
    // Path Params
    const localVarPath = '/data/metrics/{metric}/{aggregation}'
      .substring(1)
      .replace('{' + 'metric' + '}', encodeURIComponent(String(metric)))
      .replace(
        '{' + 'aggregation' + '}',
        encodeURIComponent(String(aggregation))
      );

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'Date', 'date-time')
      );
    }
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'Date', 'date-time')
      );
    }
    if (unique !== undefined) {
      urlSearchParams.append(
        'unique',
        ObjectSerializer.serialize(unique, 'boolean', '')
      );
    }
    if (viewDuration !== undefined) {
      urlSearchParams.append(
        'viewDuration',
        ObjectSerializer.serialize(
          viewDuration,
          "'3s' | '5s' | '10s' | '30s'",
          ''
        )
      );
    }
    if (filterBy !== undefined) {
      if (typeof filterBy !== 'object') {
        throw new Error(`${filterBy} is not an object`);
      }
      Object.keys(filterBy).forEach((k) => {
        if ((filterBy as any)[k] instanceof Object) {
          Object.keys((filterBy as any)[k]).forEach((key) => {
            urlSearchParams.append(
              `filterBy[${k}][${key}]`,
              ObjectSerializer.serialize(
                (filterBy as any)[k][key],
                'string',
                ''
              )
            );
          });
        } else {
          urlSearchParams.append(
            'filterBy[' + k + ']',
            ObjectSerializer.serialize((filterBy as any)[k], 'string', '')
          );
        }
      });
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
          'AnalyticsAggregatedMetricsResponse',
          ''
        ) as AnalyticsAggregatedMetricsResponse,
      };
    });
  }

  /**
   * Retrieve detailed analytics play-rate and number of impressions segmented by dimensions like country or device type.
   * Retrieve metrics in a breakdown of dimensions
   * @param {Object} searchParams
   * @param { &#39;play&#39; | &#39;play-rate&#39; | &#39;play-total&#39; | &#39;start&#39; | &#39;end&#39; | &#39;impression&#39; | &#39;ccv-peak&#39; | &#39;ccv-average&#39; | &#39;view&#39; } searchParams.metric Use this path parameter to select a metric that you want analytics for.  - &#x60;play&#x60; is the number of times your content has been played. - &#x60;play-rate&#x60; is the ratio that calculates the number of plays your content receives divided by its impressions. - &#x60;play-total&#x60; is the total number of times a specific content has been played. You can only use the &#x60;media-id&#x60; breakdown with this metric. - &#x60;start&#x60; is the number of times playback was started. - &#x60;end&#x60; is the number of times playback has ended with the content watch until the end. - &#x60;impression&#x60; is the number of times your content has been loaded and was ready for playback. - &#x60;ccv-peak&#x60; is the highest number of concurrent viewers in the timeframe of your request. - &#x60;ccv-average&#x60; is the average number of concurrent viewers in the timeframe of your request. - &#x60;view&#x60; is the total number of viewers until this point in time.
   * @param { &#39;media-id&#39; | &#39;media-type&#39; | &#39;continent&#39; | &#39;country&#39; | &#39;device-type&#39; | &#39;operating-system&#39; | &#39;browser&#39; | &#39;referrer&#39; } searchParams.breakdown Use this path parameter to define a dimension for segmenting analytics data. You must use &#x60;kebab-case&#x60; for path parameters.  These are the available dimensions:  - &#x60;media-id&#x60;: Returns analytics based on the unique identifiers of a video or a live stream. - &#x60;media-type&#x60;: Returns analytics based on the type of content. Possible values: &#x60;video&#x60; and &#x60;live-stream&#x60;.  - &#x60;continent&#x60;: Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). Possible values are: &#x60;AS&#x60;, &#x60;AF&#x60;, &#x60;NA&#x60;, &#x60;SA&#x60;, &#x60;AN&#x60;, &#x60;EU&#x60;, &#x60;AZ&#x60;.  - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - &#x60;device-type&#x60;: Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operating-system&#x60;: Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. - &#x60;referrer&#x60;: Returns the URL where the view originates from, for example a website where the video is embedded. View events from Android and iOS return empty strings as referrer.
   * @param { Date } searchParams.from Use this query parameter to define the starting date-time of the period you want analytics for.  - If you do not set a value for &#x60;from&#x60;, the default assigned value is 1 day ago, based on the &#x60;to&#x60; parameter. - The maximum value is 30 days ago. - The value you provide should follow the ATOM date-time format: &#x60;2024-02-05T00:00:00+01:00&#x60;
   * @param { Date } searchParams.to Use this query parameter to define the ending date-time of the period you want analytics for.  - If you do not set a value for &#x60;to&#x60;, the default assigned value is &#x60;now&#x60;. - The value for &#x60;to&#x60; is a non-inclusive value: the API returns data **before** the date-time that you set.
   * @param { &#39;metricValue&#39; | &#39;dimensionValue&#39; } searchParams.sortBy Use this parameter to choose which field the API will use to sort the analytics data.  These are the available fields to sort by:  - &#x60;metricValue&#x60;: Sorts the results based on the **metric** you selected in your request. - &#x60;dimensionValue&#x60;: Sorts the results based on the **dimension** you selected in your request.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to define the sort order of results.  These are the available sort orders:  - &#x60;asc&#x60;: Sorts the results in ascending order: &#x60;A to Z&#x60; and &#x60;0 to 9&#x60;. - &#x60;desc&#x60;: Sorts the results in descending order: &#x60;Z to A&#x60; and &#x60;9 to 0&#x60;.
   * @param { boolean } searchParams.unique Use this query parameter to control how viewer data is counted:  - &#x60;true&#x60; means that a single user watchig multiple times counts as 1 unique viewer - &#x60;false&#x60; means that all views count, even if from the same user.  The API accepts this parameter only when you use the &#x60;ccv-peak&#x60;, &#x60;ccv-average&#x60;, or &#x60;view&#x60; metric.            Viewers are unique for 1 day.  The API determines uniqueness based on a viewer&#39;s &#x60;user-agent&#x60; and IP address. This means that the API can filter viewers using multiple tabs to watch the same video multiple times, but cannot filter for viewers who use multiple browsers to watch the same content multiple times.
   * @param { &#39;3s&#39; | &#39;5s&#39; | &#39;10s&#39; | &#39;30s&#39; } searchParams.viewDuration Use this query parameter to define how many seconds a view has to last to be counted in analytics data.  - You can only use this parameter together with the &#x60;view&#x60; metric. - The accepted values are &#x60;3s&#x60;, &#x60;5s&#x60;, &#x60;10s&#x60;, and &#x60;30s&#x60;.  - If you do not set this parameter, the API defaults to &#x60;5s&#x60;.
   * @param { FilterBy2 } searchParams.filterBy Use this parameter to filter the API&#39;s response based on different data dimensions. You can serialize filters in your query to receive more detailed breakdowns of your analytics.  - If you do not set a value for &#x60;filterBy&#x60;, the API returns the full dataset for your project. - The API only accepts the &#x60;mediaId&#x60; and &#x60;mediaType&#x60; filters when you call &#x60;/data/metrics/play/total&#x60; or &#x60;/data/buckets/play-total/media-id&#x60;.  These are the available breakdown dimensions:  - &#x60;mediaId&#x60;: Returns analytics based on the unique identifiers of a video or a live stream. - &#x60;mediaType&#x60;: Returns analytics based on the type of content. Possible values: &#x60;video&#x60; and &#x60;live-stream&#x60;.  - &#x60;continent&#x60;: Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;EU&#x60;. Possible values are: &#x60;AS&#x60;, &#x60;AF&#x60;, &#x60;NA&#x60;, &#x60;SA&#x60;, &#x60;AN&#x60;, &#x60;EU&#x60;, &#x60;AZ&#x60;.  - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;FR&#x60;. - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. - &#x60;tag&#x60;: Returns analytics for videos using this tag. This filter only accepts a single value and is case sensitive. Read more about tagging your videos [here](https://docs.api.video/vod/tags-metadata). - &#x60;referrer&#x60;: Filters data based on the URL where the view is originating from. Accepts an empty string as a value to filter view events where no referrer is available.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async getMetricsBreakdown(args: {
    metric:
      | 'play'
      | 'play-rate'
      | 'play-total'
      | 'start'
      | 'end'
      | 'impression'
      | 'ccv-peak'
      | 'ccv-average'
      | 'view';
    breakdown:
      | 'media-id'
      | 'media-type'
      | 'continent'
      | 'country'
      | 'device-type'
      | 'operating-system'
      | 'browser'
      | 'referrer';
    from?: Date;
    to?: Date;
    sortBy?: 'metricValue' | 'dimensionValue';
    sortOrder?: 'asc' | 'desc';
    unique?: boolean;
    viewDuration?: '3s' | '5s' | '10s' | '30s';
    filterBy?: FilterBy2;
    currentPage?: number;
    pageSize?: number;
  }): Promise<AnalyticsMetricsBreakdownResponse> {
    return this.getMetricsBreakdownWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve detailed analytics play-rate and number of impressions segmented by dimensions like country or device type.
   * Retrieve metrics in a breakdown of dimensions
   * @param {Object} searchParams
   * @param { &#39;play&#39; | &#39;play-rate&#39; | &#39;play-total&#39; | &#39;start&#39; | &#39;end&#39; | &#39;impression&#39; | &#39;ccv-peak&#39; | &#39;ccv-average&#39; | &#39;view&#39; } searchParams.metric Use this path parameter to select a metric that you want analytics for.  - &#x60;play&#x60; is the number of times your content has been played. - &#x60;play-rate&#x60; is the ratio that calculates the number of plays your content receives divided by its impressions. - &#x60;play-total&#x60; is the total number of times a specific content has been played. You can only use the &#x60;media-id&#x60; breakdown with this metric. - &#x60;start&#x60; is the number of times playback was started. - &#x60;end&#x60; is the number of times playback has ended with the content watch until the end. - &#x60;impression&#x60; is the number of times your content has been loaded and was ready for playback. - &#x60;ccv-peak&#x60; is the highest number of concurrent viewers in the timeframe of your request. - &#x60;ccv-average&#x60; is the average number of concurrent viewers in the timeframe of your request. - &#x60;view&#x60; is the total number of viewers until this point in time.
   * @param { &#39;media-id&#39; | &#39;media-type&#39; | &#39;continent&#39; | &#39;country&#39; | &#39;device-type&#39; | &#39;operating-system&#39; | &#39;browser&#39; | &#39;referrer&#39; } searchParams.breakdown Use this path parameter to define a dimension for segmenting analytics data. You must use &#x60;kebab-case&#x60; for path parameters.  These are the available dimensions:  - &#x60;media-id&#x60;: Returns analytics based on the unique identifiers of a video or a live stream. - &#x60;media-type&#x60;: Returns analytics based on the type of content. Possible values: &#x60;video&#x60; and &#x60;live-stream&#x60;.  - &#x60;continent&#x60;: Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). Possible values are: &#x60;AS&#x60;, &#x60;AF&#x60;, &#x60;NA&#x60;, &#x60;SA&#x60;, &#x60;AN&#x60;, &#x60;EU&#x60;, &#x60;AZ&#x60;.  - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - &#x60;device-type&#x60;: Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operating-system&#x60;: Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. - &#x60;referrer&#x60;: Returns the URL where the view originates from, for example a website where the video is embedded. View events from Android and iOS return empty strings as referrer.
   * @param { Date } searchParams.from Use this query parameter to define the starting date-time of the period you want analytics for.  - If you do not set a value for &#x60;from&#x60;, the default assigned value is 1 day ago, based on the &#x60;to&#x60; parameter. - The maximum value is 30 days ago. - The value you provide should follow the ATOM date-time format: &#x60;2024-02-05T00:00:00+01:00&#x60;
   * @param { Date } searchParams.to Use this query parameter to define the ending date-time of the period you want analytics for.  - If you do not set a value for &#x60;to&#x60;, the default assigned value is &#x60;now&#x60;. - The value for &#x60;to&#x60; is a non-inclusive value: the API returns data **before** the date-time that you set.
   * @param { &#39;metricValue&#39; | &#39;dimensionValue&#39; } searchParams.sortBy Use this parameter to choose which field the API will use to sort the analytics data.  These are the available fields to sort by:  - &#x60;metricValue&#x60;: Sorts the results based on the **metric** you selected in your request. - &#x60;dimensionValue&#x60;: Sorts the results based on the **dimension** you selected in your request.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to define the sort order of results.  These are the available sort orders:  - &#x60;asc&#x60;: Sorts the results in ascending order: &#x60;A to Z&#x60; and &#x60;0 to 9&#x60;. - &#x60;desc&#x60;: Sorts the results in descending order: &#x60;Z to A&#x60; and &#x60;9 to 0&#x60;.
   * @param { boolean } searchParams.unique Use this query parameter to control how viewer data is counted:  - &#x60;true&#x60; means that a single user watchig multiple times counts as 1 unique viewer - &#x60;false&#x60; means that all views count, even if from the same user.  The API accepts this parameter only when you use the &#x60;ccv-peak&#x60;, &#x60;ccv-average&#x60;, or &#x60;view&#x60; metric.            Viewers are unique for 1 day.  The API determines uniqueness based on a viewer&#39;s &#x60;user-agent&#x60; and IP address. This means that the API can filter viewers using multiple tabs to watch the same video multiple times, but cannot filter for viewers who use multiple browsers to watch the same content multiple times.
   * @param { &#39;3s&#39; | &#39;5s&#39; | &#39;10s&#39; | &#39;30s&#39; } searchParams.viewDuration Use this query parameter to define how many seconds a view has to last to be counted in analytics data.  - You can only use this parameter together with the &#x60;view&#x60; metric. - The accepted values are &#x60;3s&#x60;, &#x60;5s&#x60;, &#x60;10s&#x60;, and &#x60;30s&#x60;.  - If you do not set this parameter, the API defaults to &#x60;5s&#x60;.
   * @param { FilterBy2 } searchParams.filterBy Use this parameter to filter the API&#39;s response based on different data dimensions. You can serialize filters in your query to receive more detailed breakdowns of your analytics.  - If you do not set a value for &#x60;filterBy&#x60;, the API returns the full dataset for your project. - The API only accepts the &#x60;mediaId&#x60; and &#x60;mediaType&#x60; filters when you call &#x60;/data/metrics/play/total&#x60; or &#x60;/data/buckets/play-total/media-id&#x60;.  These are the available breakdown dimensions:  - &#x60;mediaId&#x60;: Returns analytics based on the unique identifiers of a video or a live stream. - &#x60;mediaType&#x60;: Returns analytics based on the type of content. Possible values: &#x60;video&#x60; and &#x60;live-stream&#x60;.  - &#x60;continent&#x60;: Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;EU&#x60;. Possible values are: &#x60;AS&#x60;, &#x60;AF&#x60;, &#x60;NA&#x60;, &#x60;SA&#x60;, &#x60;AN&#x60;, &#x60;EU&#x60;, &#x60;AZ&#x60;.  - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;FR&#x60;. - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. - &#x60;tag&#x60;: Returns analytics for videos using this tag. This filter only accepts a single value and is case sensitive. Read more about tagging your videos [here](https://docs.api.video/vod/tags-metadata). - &#x60;referrer&#x60;: Filters data based on the URL where the view is originating from. Accepts an empty string as a value to filter view events where no referrer is available.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async getMetricsBreakdownWithResponseHeaders({
    metric,
    breakdown,
    from,
    to,
    sortBy,
    sortOrder,
    unique,
    viewDuration,
    filterBy,
    currentPage,
    pageSize,
  }: {
    metric:
      | 'play'
      | 'play-rate'
      | 'play-total'
      | 'start'
      | 'end'
      | 'impression'
      | 'ccv-peak'
      | 'ccv-average'
      | 'view';
    breakdown:
      | 'media-id'
      | 'media-type'
      | 'continent'
      | 'country'
      | 'device-type'
      | 'operating-system'
      | 'browser'
      | 'referrer';
    from?: Date;
    to?: Date;
    sortBy?: 'metricValue' | 'dimensionValue';
    sortOrder?: 'asc' | 'desc';
    unique?: boolean;
    viewDuration?: '3s' | '5s' | '10s' | '30s';
    filterBy?: FilterBy2;
    currentPage?: number;
    pageSize?: number;
  }): Promise<{
    headers: ApiResponseHeaders;
    body: AnalyticsMetricsBreakdownResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling getMetricsBreakdown.'
      );
    }
    if (breakdown === null || breakdown === undefined) {
      throw new Error(
        'Required parameter breakdown was null or undefined when calling getMetricsBreakdown.'
      );
    }
    // Path Params
    const localVarPath = '/data/buckets/{metric}/{breakdown}'
      .substring(1)
      .replace('{' + 'metric' + '}', encodeURIComponent(String(metric)))
      .replace('{' + 'breakdown' + '}', encodeURIComponent(String(breakdown)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'Date', 'date-time')
      );
    }
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'Date', 'date-time')
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sortBy',
        ObjectSerializer.serialize(
          sortBy,
          "'metricValue' | 'dimensionValue'",
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
    if (unique !== undefined) {
      urlSearchParams.append(
        'unique',
        ObjectSerializer.serialize(unique, 'boolean', '')
      );
    }
    if (viewDuration !== undefined) {
      urlSearchParams.append(
        'viewDuration',
        ObjectSerializer.serialize(
          viewDuration,
          "'3s' | '5s' | '10s' | '30s'",
          ''
        )
      );
    }
    if (filterBy !== undefined) {
      if (typeof filterBy !== 'object') {
        throw new Error(`${filterBy} is not an object`);
      }
      Object.keys(filterBy).forEach((k) => {
        if ((filterBy as any)[k] instanceof Object) {
          Object.keys((filterBy as any)[k]).forEach((key) => {
            urlSearchParams.append(
              `filterBy[${k}][${key}]`,
              ObjectSerializer.serialize(
                (filterBy as any)[k][key],
                'string',
                ''
              )
            );
          });
        } else {
          urlSearchParams.append(
            'filterBy[' + k + ']',
            ObjectSerializer.serialize((filterBy as any)[k], 'string', '')
          );
        }
      });
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
          'AnalyticsMetricsBreakdownResponse',
          ''
        ) as AnalyticsMetricsBreakdownResponse,
      };
    });
  }

  /**
   * Retrieve countable metrics like the number of plays or impressions, grouped by the time at which they occurred
   * Retrieve metrics over time
   * @param {Object} searchParams
   * @param { &#39;play&#39; | &#39;play-rate&#39; | &#39;start&#39; | &#39;end&#39; | &#39;impression&#39; | &#39;ccv-peak&#39; | &#39;ccv-average&#39; | &#39;view&#39; } searchParams.metric Use this path parameter to select a metric that you want analytics for.  - &#x60;play&#x60; is the number of times your content has been played. - &#x60;play-rate&#x60; is the ratio that calculates the number of plays your content receives divided by its impressions. - &#x60;start&#x60; is the number of times playback was started. - &#x60;end&#x60; is the number of times playback has ended with the content watch until the end. - &#x60;impression&#x60; is the number of times your content has been loaded and was ready for playback. - &#x60;ccv-peak&#x60; is the highest number of concurrent viewers in the timeframe of your request. - &#x60;ccv-average&#x60; is the average number of concurrent viewers in the timeframe of your request. - &#x60;view&#x60; is the total number of viewers.
   * @param { Date } searchParams.from Use this query parameter to define the starting date-time of the period you want analytics for.  - If you do not set a value for &#x60;from&#x60;, the default assigned value is 1 day ago, based on the &#x60;to&#x60; parameter. - The maximum value is 30 days ago. - The value you provide should follow the ATOM date-time format: &#x60;2024-02-05T00:00:00+01:00&#x60;
   * @param { Date } searchParams.to Use this query parameter to define the ending date-time of the period you want analytics for.  - If you do not set a value for &#x60;to&#x60;, the default assigned value is &#x60;now&#x60;. - The value for &#x60;to&#x60; is a non-inclusive value: the API returns data **before** the date-time that you set.
   * @param { &#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; } searchParams.interval Use this query parameter to define the granularity of the data. Possible values: &#x60;minute&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;.  - If you do not set a value for &#x60;interval&#x60;, and the period you set using the &#x60;from&#x60; and &#x60;to&#x60; parameters is less than or equals to 2 days, then the default assigned value is &#x60;hour&#x60;. Otherwise the API sets it to &#x60;day&#x60;. - When you set &#x60;minute&#x60; as interval, the timeframe you define with the &#x60;from&#x60; and &#x60;to&#x60; parameters should be less than 60 minutes.
   * @param { &#39;metricValue&#39; | &#39;emittedAt&#39; } searchParams.sortBy Use this parameter to choose which field the API will use to sort the analytics data.  These are the available fields to sort by:  - &#x60;metricValue&#x60;: Sorts the results based on the **metric** you selected in your request. - &#x60;emittedAt&#x60;: Sorts the results based on the **timestamp** of the event in ATOM date-time format.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to define the sort order of results.  These are the available sort orders:  - &#x60;asc&#x60;: Sorts the results in ascending order: &#x60;A to Z&#x60; and &#x60;0 to 9&#x60;. - &#x60;desc&#x60;: Sorts the results in descending order: &#x60;Z to A&#x60; and &#x60;9 to 0&#x60;.
   * @param { boolean } searchParams.unique Use this query parameter to control how viewer data is counted:  - &#x60;true&#x60; means that a single user watchig multiple times counts as 1 unique viewer - &#x60;false&#x60; means that all views count, even if from the same user.  The API accepts this parameter only when you use the &#x60;ccv-peak&#x60;, &#x60;ccv-average&#x60;, or &#x60;view&#x60; metric.            Viewers are unique for 1 day.  The API determines uniqueness based on a viewer&#39;s &#x60;user-agent&#x60; and IP address. This means that the API can filter viewers using multiple tabs to watch the same video multiple times, but cannot filter for viewers who use multiple browsers to watch the same content multiple times.
   * @param { &#39;3s&#39; | &#39;5s&#39; | &#39;10s&#39; | &#39;30s&#39; } searchParams.viewDuration Use this query parameter to define how many seconds a view has to last to be counted in analytics data.  - You can only use this parameter together with the &#x60;view&#x60; metric. - The accepted values are &#x60;3s&#x60;, &#x60;5s&#x60;, &#x60;10s&#x60;, and &#x60;30s&#x60;.  - If you do not set this parameter, the API defaults to &#x60;5s&#x60;.
   * @param { FilterBy2 } searchParams.filterBy Use this parameter to filter the API&#39;s response based on different data dimensions. You can serialize filters in your query to receive more detailed breakdowns of your analytics.  - If you do not set a value for &#x60;filterBy&#x60;, the API returns the full dataset for your project. - The API only accepts the &#x60;mediaId&#x60; and &#x60;mediaType&#x60; filters when you call &#x60;/data/metrics/play/total&#x60; or &#x60;/data/buckets/play-total/media-id&#x60;.  These are the available breakdown dimensions:  - &#x60;mediaId&#x60;: Returns analytics based on the unique identifiers of a video or a live stream. - &#x60;mediaType&#x60;: Returns analytics based on the type of content. Possible values: &#x60;video&#x60; and &#x60;live-stream&#x60;.  - &#x60;continent&#x60;: Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;EU&#x60;. Possible values are: &#x60;AS&#x60;, &#x60;AF&#x60;, &#x60;NA&#x60;, &#x60;SA&#x60;, &#x60;AN&#x60;, &#x60;EU&#x60;, &#x60;AZ&#x60;.  - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;FR&#x60;. - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. - &#x60;tag&#x60;: Returns analytics for videos using this tag. This filter only accepts a single value and is case sensitive. Read more about tagging your videos [here](https://docs.api.video/vod/tags-metadata). - &#x60;referrer&#x60;: Filters data based on the URL where the view is originating from. Accepts an empty string as a value to filter view events where no referrer is available.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async getMetricsOverTime(args: {
    metric:
      | 'play'
      | 'play-rate'
      | 'start'
      | 'end'
      | 'impression'
      | 'ccv-peak'
      | 'ccv-average'
      | 'view';
    from?: Date;
    to?: Date;
    interval?: 'minute' | 'hour' | 'day';
    sortBy?: 'metricValue' | 'emittedAt';
    sortOrder?: 'asc' | 'desc';
    unique?: boolean;
    viewDuration?: '3s' | '5s' | '10s' | '30s';
    filterBy?: FilterBy2;
    currentPage?: number;
    pageSize?: number;
  }): Promise<AnalyticsMetricsOverTimeResponse> {
    return this.getMetricsOverTimeWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve countable metrics like the number of plays or impressions, grouped by the time at which they occurred
   * Retrieve metrics over time
   * @param {Object} searchParams
   * @param { &#39;play&#39; | &#39;play-rate&#39; | &#39;start&#39; | &#39;end&#39; | &#39;impression&#39; | &#39;ccv-peak&#39; | &#39;ccv-average&#39; | &#39;view&#39; } searchParams.metric Use this path parameter to select a metric that you want analytics for.  - &#x60;play&#x60; is the number of times your content has been played. - &#x60;play-rate&#x60; is the ratio that calculates the number of plays your content receives divided by its impressions. - &#x60;start&#x60; is the number of times playback was started. - &#x60;end&#x60; is the number of times playback has ended with the content watch until the end. - &#x60;impression&#x60; is the number of times your content has been loaded and was ready for playback. - &#x60;ccv-peak&#x60; is the highest number of concurrent viewers in the timeframe of your request. - &#x60;ccv-average&#x60; is the average number of concurrent viewers in the timeframe of your request. - &#x60;view&#x60; is the total number of viewers.
   * @param { Date } searchParams.from Use this query parameter to define the starting date-time of the period you want analytics for.  - If you do not set a value for &#x60;from&#x60;, the default assigned value is 1 day ago, based on the &#x60;to&#x60; parameter. - The maximum value is 30 days ago. - The value you provide should follow the ATOM date-time format: &#x60;2024-02-05T00:00:00+01:00&#x60;
   * @param { Date } searchParams.to Use this query parameter to define the ending date-time of the period you want analytics for.  - If you do not set a value for &#x60;to&#x60;, the default assigned value is &#x60;now&#x60;. - The value for &#x60;to&#x60; is a non-inclusive value: the API returns data **before** the date-time that you set.
   * @param { &#39;minute&#39; | &#39;hour&#39; | &#39;day&#39; } searchParams.interval Use this query parameter to define the granularity of the data. Possible values: &#x60;minute&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;.  - If you do not set a value for &#x60;interval&#x60;, and the period you set using the &#x60;from&#x60; and &#x60;to&#x60; parameters is less than or equals to 2 days, then the default assigned value is &#x60;hour&#x60;. Otherwise the API sets it to &#x60;day&#x60;. - When you set &#x60;minute&#x60; as interval, the timeframe you define with the &#x60;from&#x60; and &#x60;to&#x60; parameters should be less than 60 minutes.
   * @param { &#39;metricValue&#39; | &#39;emittedAt&#39; } searchParams.sortBy Use this parameter to choose which field the API will use to sort the analytics data.  These are the available fields to sort by:  - &#x60;metricValue&#x60;: Sorts the results based on the **metric** you selected in your request. - &#x60;emittedAt&#x60;: Sorts the results based on the **timestamp** of the event in ATOM date-time format.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to define the sort order of results.  These are the available sort orders:  - &#x60;asc&#x60;: Sorts the results in ascending order: &#x60;A to Z&#x60; and &#x60;0 to 9&#x60;. - &#x60;desc&#x60;: Sorts the results in descending order: &#x60;Z to A&#x60; and &#x60;9 to 0&#x60;.
   * @param { boolean } searchParams.unique Use this query parameter to control how viewer data is counted:  - &#x60;true&#x60; means that a single user watchig multiple times counts as 1 unique viewer - &#x60;false&#x60; means that all views count, even if from the same user.  The API accepts this parameter only when you use the &#x60;ccv-peak&#x60;, &#x60;ccv-average&#x60;, or &#x60;view&#x60; metric.            Viewers are unique for 1 day.  The API determines uniqueness based on a viewer&#39;s &#x60;user-agent&#x60; and IP address. This means that the API can filter viewers using multiple tabs to watch the same video multiple times, but cannot filter for viewers who use multiple browsers to watch the same content multiple times.
   * @param { &#39;3s&#39; | &#39;5s&#39; | &#39;10s&#39; | &#39;30s&#39; } searchParams.viewDuration Use this query parameter to define how many seconds a view has to last to be counted in analytics data.  - You can only use this parameter together with the &#x60;view&#x60; metric. - The accepted values are &#x60;3s&#x60;, &#x60;5s&#x60;, &#x60;10s&#x60;, and &#x60;30s&#x60;.  - If you do not set this parameter, the API defaults to &#x60;5s&#x60;.
   * @param { FilterBy2 } searchParams.filterBy Use this parameter to filter the API&#39;s response based on different data dimensions. You can serialize filters in your query to receive more detailed breakdowns of your analytics.  - If you do not set a value for &#x60;filterBy&#x60;, the API returns the full dataset for your project. - The API only accepts the &#x60;mediaId&#x60; and &#x60;mediaType&#x60; filters when you call &#x60;/data/metrics/play/total&#x60; or &#x60;/data/buckets/play-total/media-id&#x60;.  These are the available breakdown dimensions:  - &#x60;mediaId&#x60;: Returns analytics based on the unique identifiers of a video or a live stream. - &#x60;mediaType&#x60;: Returns analytics based on the type of content. Possible values: &#x60;video&#x60; and &#x60;live-stream&#x60;.  - &#x60;continent&#x60;: Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;EU&#x60;. Possible values are: &#x60;AS&#x60;, &#x60;AF&#x60;, &#x60;NA&#x60;, &#x60;SA&#x60;, &#x60;AN&#x60;, &#x60;EU&#x60;, &#x60;AZ&#x60;.  - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;FR&#x60;. - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. - &#x60;tag&#x60;: Returns analytics for videos using this tag. This filter only accepts a single value and is case sensitive. Read more about tagging your videos [here](https://docs.api.video/vod/tags-metadata). - &#x60;referrer&#x60;: Filters data based on the URL where the view is originating from. Accepts an empty string as a value to filter view events where no referrer is available.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async getMetricsOverTimeWithResponseHeaders({
    metric,
    from,
    to,
    interval,
    sortBy,
    sortOrder,
    unique,
    viewDuration,
    filterBy,
    currentPage,
    pageSize,
  }: {
    metric:
      | 'play'
      | 'play-rate'
      | 'start'
      | 'end'
      | 'impression'
      | 'ccv-peak'
      | 'ccv-average'
      | 'view';
    from?: Date;
    to?: Date;
    interval?: 'minute' | 'hour' | 'day';
    sortBy?: 'metricValue' | 'emittedAt';
    sortOrder?: 'asc' | 'desc';
    unique?: boolean;
    viewDuration?: '3s' | '5s' | '10s' | '30s';
    filterBy?: FilterBy2;
    currentPage?: number;
    pageSize?: number;
  }): Promise<{
    headers: ApiResponseHeaders;
    body: AnalyticsMetricsOverTimeResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling getMetricsOverTime.'
      );
    }
    // Path Params
    const localVarPath = '/data/timeseries/{metric}'
      .substring(1)
      .replace('{' + 'metric' + '}', encodeURIComponent(String(metric)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'Date', 'date-time')
      );
    }
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'Date', 'date-time')
      );
    }
    if (interval !== undefined) {
      urlSearchParams.append(
        'interval',
        ObjectSerializer.serialize(interval, "'minute' | 'hour' | 'day'", '')
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sortBy',
        ObjectSerializer.serialize(sortBy, "'metricValue' | 'emittedAt'", '')
      );
    }
    if (sortOrder !== undefined) {
      urlSearchParams.append(
        'sortOrder',
        ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", '')
      );
    }
    if (unique !== undefined) {
      urlSearchParams.append(
        'unique',
        ObjectSerializer.serialize(unique, 'boolean', '')
      );
    }
    if (viewDuration !== undefined) {
      urlSearchParams.append(
        'viewDuration',
        ObjectSerializer.serialize(
          viewDuration,
          "'3s' | '5s' | '10s' | '30s'",
          ''
        )
      );
    }
    if (filterBy !== undefined) {
      if (typeof filterBy !== 'object') {
        throw new Error(`${filterBy} is not an object`);
      }
      Object.keys(filterBy).forEach((k) => {
        if ((filterBy as any)[k] instanceof Object) {
          Object.keys((filterBy as any)[k]).forEach((key) => {
            urlSearchParams.append(
              `filterBy[${k}][${key}]`,
              ObjectSerializer.serialize(
                (filterBy as any)[k][key],
                'string',
                ''
              )
            );
          });
        } else {
          urlSearchParams.append(
            'filterBy[' + k + ']',
            ObjectSerializer.serialize((filterBy as any)[k], 'string', '')
          );
        }
      });
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
          'AnalyticsMetricsOverTimeResponse',
          ''
        ) as AnalyticsMetricsOverTimeResponse,
      };
    });
  }
}
