
# AnalyticsMetricsBreakdownResponseContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | [**AnalyticsMetricsBreakdownResponseContextMetricEnum**](#AnalyticsMetricsBreakdownResponseContextMetricEnum) | Returns the metric and relevant parameters you selected. |  [optional]
**breakdown** | [**AnalyticsMetricsBreakdownResponseContextBreakdownEnum**](#AnalyticsMetricsBreakdownResponseContextBreakdownEnum) | Returns the dimension you selected. |  [optional]
**timeframe** | [**AnalyticsAggregatedMetricsResponseContextTimeframe**](AnalyticsAggregatedMetricsResponseContextTimeframe.md) |  |  [optional]



## Enum: AnalyticsMetricsBreakdownResponseContextMetricEnum

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



## Enum: AnalyticsMetricsBreakdownResponseContextBreakdownEnum

Name | Value
---- | -----
MediaId | &#39;media-id&#39;
MediaType | &#39;media-type&#39;
Continent | &#39;continent&#39;
Country | &#39;country&#39;
DeviceType | &#39;device-type&#39;
OperatingSystem | &#39;operating-system&#39;
Browser | &#39;browser&#39;



