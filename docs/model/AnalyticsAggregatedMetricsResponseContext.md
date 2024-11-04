
# AnalyticsAggregatedMetricsResponseContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | [**AnalyticsAggregatedMetricsResponseContextMetricEnum**](#AnalyticsAggregatedMetricsResponseContextMetricEnum) | Returns the metric and relevant parameters you selected. |  [optional]
**aggregation** | [**AnalyticsAggregatedMetricsResponseContextAggregationEnum**](#AnalyticsAggregatedMetricsResponseContextAggregationEnum) | Returns the aggregation you selected. |  [optional]
**timeframe** | [**AnalyticsAggregatedMetricsResponseContextTimeframe**](AnalyticsAggregatedMetricsResponseContextTimeframe.md) |  |  [optional]



## Enum: AnalyticsAggregatedMetricsResponseContextMetricEnum

Name | Value
---- | -----
Play | &#39;play&#39;
Start | &#39;start&#39;
End | &#39;end&#39;
Impression | &#39;impression&#39;
ImpressionTime | &#39;impression-time&#39;
WatchTime | &#39;watch-time&#39;
Ccv | &#39;ccv&#39;
UniqueCcv | &#39;unique-ccv&#39;
View3 | &#39;view-3&#39;
View5 | &#39;view-5&#39;
View10 | &#39;view-10&#39;
View30 | &#39;view-30&#39;
UniqueView | &#39;unique-view&#39;
UniqueView3 | &#39;unique-view-3&#39;
UniqueView5 | &#39;unique-view-5&#39;
UniqueView10 | &#39;unique-view-10&#39;
UniqueView30 | &#39;unique-view-30&#39;



## Enum: AnalyticsAggregatedMetricsResponseContextAggregationEnum

Name | Value
---- | -----
Count | &#39;count&#39;
Rate | &#39;rate&#39;
Total | &#39;total&#39;
Average | &#39;average&#39;
Sum | &#39;sum&#39;



