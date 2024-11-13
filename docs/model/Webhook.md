
# Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhookId** | **string** | A unique identifier of the webhook you subscribed to. |  [optional]
**createdAt** | **Date** | The time and date when you created this webhook subscription, in ATOM UTC format. |  [optional]
**events** | [**Array&lt;WebhookEventsEnum&gt;**](#Array&lt;WebhookEventsEnum&gt;) | A list of events that you subscribed to. When these events occur, the API triggers a webhook call to the URL you provided. |  [optional]
**url** | **string** | The URL where the API sends the webhook. |  [optional]
**signatureSecret** | **string** | A secret key for the webhook you subscribed to. You can use it to verify the origin of the webhook call that you receive. |  [optional]



## Enum: Array&lt;WebhookEventsEnum&gt;

Name | Value
---- | -----
LiveStreamBroadcastStarted | &#39;live-stream.broadcast.started&#39;
LiveStreamBroadcastEnded | &#39;live-stream.broadcast.ended&#39;
VideoSourceRecorded | &#39;video.source.recorded&#39;
VideoEncodingQualityCompleted | &#39;video.encoding.quality.completed&#39;
VideoCaptionGenerated | &#39;video.caption.generated&#39;
VideoSummaryGenerated | &#39;video.summary.generated&#39;



