# WebhooksApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](WebhooksApi.md#create) | Create Webhook | **POST** /webhooks |
| [**get()**](WebhooksApi.md#get) | Retrieve Webhook details | **GET** /webhooks/{webhookId} |
| [**delete()**](WebhooksApi.md#delete) | Delete a Webhook | **DELETE** /webhooks/{webhookId} |
| [**list()**](WebhooksApi.md#list) | List all webhooks | **GET** /webhooks |


<a name="create"></a>
## **`create()` - Create Webhook**


Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events: 

* `video.encoding.quality.completed` Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ "type": "video.encoding.quality.completed", "emittedAt": "2021-01-29T16:46:25.217+01:00", "videoId": "viXXXXXXXX", "encoding": "hls", "quality": "720p"} ```. This request says that the 720p HLS encoding was completed.

* `live-stream.broadcast.started`  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.

* `live-stream.broadcast.ended`  This event fires when a live stream has finished broadcasting.

* `video.source.recorded`  This event occurs when a live stream is recorded and submitted for encoding.

* `video.caption.generated`  This event occurs when an automatic caption has been generated.

* `video.summary.generated`  This event occurs when an automatic summary has been generated.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **webhooksCreationPayload** | [**WebhooksCreationPayload**](../model/WebhooksCreationPayload.md)| **yes**|  |


### Return type

Promise<[**Webhook**](../model/Webhook.md)>.




---

<a name="get"></a>
## **`get()` - Retrieve Webhook details**


Retrieve webhook details by id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **webhookId** | **string**| **yes**| The unique webhook you wish to retreive details on. |


### Return type

Promise<[**Webhook**](../model/Webhook.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete a Webhook**


This method will delete the indicated webhook.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **webhookId** | **string**| **yes**| The webhook you wish to delete. |


### Return type

Promise<[**void**](../model/.md)>.




---

<a name="list"></a>
## **`list()` - List all webhooks**


Thie method returns a list of your webhooks (with all their details). 

You can filter what the webhook list that the API returns using the parameters described below.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **events** | **string**| no| The webhook event that you wish to filter on. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**WebhooksListResponse**](../model/WebhooksListResponse.md)>.




---

