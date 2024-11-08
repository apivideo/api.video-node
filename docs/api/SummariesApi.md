# SummariesApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](SummariesApi.md#create) | Generate video summary | **POST** /summaries |
| [**update()**](SummariesApi.md#update) | Update summary details | **PATCH** /summaries/{summaryId}/source |
| [**delete()**](SummariesApi.md#delete) | Delete video summary | **DELETE** /summaries/{summaryId} |
| [**list()**](SummariesApi.md#list) | List summaries | **GET** /summaries |
| [**getSummarySource()**](SummariesApi.md#getSummarySource) | Get summary details | **GET** /summaries/{summaryId}/source |


<a name="create"></a>
## **`create()` - Generate video summary**


Generate an abstract and key takeaways for a video.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **summaryCreationPayload** | [**SummaryCreationPayload**](../model/SummaryCreationPayload.md)| **yes**|  |


### Return type

Promise<[**Summary**](../model/Summary.md)>.




---

<a name="update"></a>
## **`update()` - Update summary details**


Update details for a summary.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **summaryId** | **string**| **yes**| The unique identifier of the summary source you want to update. |
 | **summaryUpdatePayload** | [**SummaryUpdatePayload**](../model/SummaryUpdatePayload.md)| **yes**|  |


### Return type

Promise<[**SummarySource**](../model/SummarySource.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete video summary**


Delete a summary tied to a video.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **summaryId** | **string**| **yes**| The unique identifier of the summary you want to delete. |


### Return type

Promise<[**void**](../model/.md)>.




---

<a name="list"></a>
## **`list()` - List summaries**


List all summarries for your videos in a project.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| no| Use this parameter to filter for a summary that belongs to a specific video. |
 | **origin** | **&#39;auto&#39; \| &#39;api&#39;**| no| Use this parameter to filter for summaries based on the way they were created: automatically or manually via the API. |
 | **sourceStatus** | **&#39;missing&#39; \| &#39;waiting&#39; \| &#39;failed&#39; \| &#39;completed&#39; \| &#39;unprocessable&#39;**| no| Use this parameter to filter for summaries based on the current status of the summary source.  These are the available statuses:  &#x60;missing&#x60;: the input for a summary is not present. &#x60;waiting&#x60; : the input video is being processed and a summary will be generated. &#x60;failed&#x60;: a technical issue prevented summary generation. &#x60;completed&#x60;: the summary is generated. &#x60;unprocessable&#x60;: the API rules the source video to be unsuitable for summary generation. An example for this is an input video that has no audio.  |
 | **sortBy** | **&#39;createdAt&#39; \| &#39;updatedAt&#39; \| &#39;videoId&#39;**| no| Use this parameter to choose which field the API will use to sort the response data. The default is &#x60;value&#x60;.  These are the available fields to sort by:  - &#x60;createdAt&#x60;: Sorts the results based on date and timestamps when summaries were created. - &#x60;updatedAt&#x60;: Sorts the results based on date and timestamps when summaries were last updated. - &#x60;videoId&#x60;: Sorts the results based on video IDs.  |
 | **sortOrder** | **&#39;asc&#39; \| &#39;desc&#39;**| no| Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**SummariesListResponse**](../model/SummariesListResponse.md)>.




---

<a name="getSummarySource"></a>
## **`getSummarySource()` - Get summary details**


Get all details for a summary.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **summaryId** | **string**| **yes**| The unique identifier of the summary source you want to retrieve. |


### Return type

Promise<[**SummarySource**](../model/SummarySource.md)>.




---

