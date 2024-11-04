
# FilterBy2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mediaId** | **Array&lt;string&gt;** | Returns analytics based on the unique identifiers of a video or a live stream. |  [optional]
**mediaType** | [**FilterBy2MediaTypeEnum**](#FilterBy2MediaTypeEnum) |  |  [optional]
**continent** | [**Array&lt;FilterBy2ContinentEnum&gt;**](#Array&lt;FilterBy2ContinentEnum&gt;) | Returns analytics based on the viewers&#39; continent. The list of supported continents names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;EU&#x60;. |  [optional]
**country** | **Array&lt;string&gt;** | Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). You must use the ISO-3166 alpha2 format, for example &#x60;FR&#x60;. |  [optional]
**deviceType** | **Array&lt;string&gt;** | Returns analytics based on the type of device used by the viewers. Response values can include: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. |  [optional]
**operatingSystem** | **Array&lt;string&gt;** | Returns analytics based on the operating system used by the viewers. Response values can include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. |  [optional]
**browser** | **Array&lt;string&gt;** | Returns analytics based on the browser used by the viewers. Response values can include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. |  [optional]
**tag** | **string** | Returns analytics for videos using this tag. This filter only accepts a single value and is case sensitive. Read more about tagging your videos [here](https://docs.api.video/vod/tags-metadata). |  [optional]
**referrer** | **Array&lt;string&gt;** | Filters data based on the URL where the view is originating from. This filter parameter accepts an empty string to filter view events where no referrer is available. |  [optional]



## Enum: FilterBy2MediaTypeEnum

Name | Value
---- | -----
Video | &#39;video&#39;
LiveStream | &#39;live-stream&#39;



## Enum: Array&lt;FilterBy2ContinentEnum&gt;

Name | Value
---- | -----
AS | &#39;AS&#39;
AF | &#39;AF&#39;
NA | &#39;NA&#39;
SA | &#39;SA&#39;
AN | &#39;AN&#39;
EU | &#39;EU&#39;
AZ | &#39;AZ&#39;



