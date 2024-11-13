
# WebhooksCreationPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**Array&lt;WebhooksCreationPayloadEventsEnum&gt;**](#Array&lt;WebhooksCreationPayloadEventsEnum&gt;) | An array of webhook events that you want to subscribe to. | 
**url** | **string** | The the url to which HTTP notifications are sent. It could be any http or https URL. | 



## Enum: Array&lt;WebhooksCreationPayloadEventsEnum&gt;

Name | Value
---- | -----
LiveStreamBroadcastStarted | &#39;live-stream.broadcast.started&#39;
LiveStreamBroadcastEnded | &#39;live-stream.broadcast.ended&#39;
VideoSourceRecorded | &#39;video.source.recorded&#39;
VideoEncodingQualityCompleted | &#39;video.encoding.quality.completed&#39;
VideoCaptionGenerated | &#39;video.caption.generated&#39;
VideoSummaryGenerated | &#39;video.summary.generated&#39;



