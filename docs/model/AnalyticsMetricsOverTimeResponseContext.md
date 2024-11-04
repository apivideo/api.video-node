
# AnalyticsMetricsOverTimeResponseContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | [**AnalyticsMetricsOverTimeResponseContextMetricEnum**](#AnalyticsMetricsOverTimeResponseContextMetricEnum) | Returns the metric and relevant parameters you selected. |  [optional]
**interval** | [**AnalyticsMetricsOverTimeResponseContextIntervalEnum**](#AnalyticsMetricsOverTimeResponseContextIntervalEnum) | Returns the interval you selected. |  [optional]
**timeframe** | [**AnalyticsAggregatedMetricsResponseContextTimeframe**](AnalyticsAggregatedMetricsResponseContextTimeframe.md) |  |  [optional]



## Enum: AnalyticsMetricsOverTimeResponseContextMetricEnum

Name | Value
---- | -----
Play | &#39;play&#39;
PlayRate | &#39;play-rate&#39;
Start | &#39;start&#39;
End | &#39;end&#39;
Impression | &#39;impression&#39;
CcvAverage | &#39;ccv-average&#39;
CcvPeak | &#39;ccv-peak&#39;
UniqueCcvAverage | &#39;unique-ccv-average&#39;
UniqueCcvPeak | &#39;unique-ccv-peak&#39;
View3 | &#39;view-3&#39;
View5 | &#39;view-5&#39;
View10 | &#39;view-10&#39;
View30 | &#39;view-30&#39;
UniqueView | &#39;unique-view&#39;
UniqueView3 | &#39;unique-view-3&#39;
UniqueView5 | &#39;unique-view-5&#39;
UniqueView10 | &#39;unique-view-10&#39;
UniqueView30 | &#39;unique-view-30&#39;



## Enum: AnalyticsMetricsOverTimeResponseContextIntervalEnum

Name | Value
---- | -----
Minute | &#39;minute&#39;
Hour | &#39;hour&#39;
Day | &#39;day&#39;



