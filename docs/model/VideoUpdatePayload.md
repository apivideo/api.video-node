
# VideoUpdatePayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**playerId** | **string** \| **null** | The unique ID for the player you want to associate with your video. |  [optional]
**title** | **string** | The title you want to use for your video. |  [optional]
**description** | **string** | A brief description of the video. |  [optional]
**_public** | **boolean** | Whether the video is publicly available or not. False means it is set to private. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos/). |  [optional]
**panoramic** | **boolean** | Whether the video is a 360 degree or immersive video. |  [optional]
**mp4Support** | **boolean** | Whether the player supports the mp4 format. |  [optional]
**tags** | **Array&lt;string&gt;** | A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video. |  [optional]
**metadata** | [**Array&lt;Metadata&gt;**](Metadata.md) | A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video. |  [optional]
**language** | [**VideoUpdatePayloadLanguageEnum**](#VideoUpdatePayloadLanguageEnum) | Use this parameter to set the language of the video. When this parameter is set, the API creates a transcript of the video using the language you specify. You must use the [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.  &#x60;language&#x60; is a permanent attribute of the video. You can update it to another language using the [&#x60;PATCH /videos/{videoId}&#x60;](https://docs.api.video/reference/api/Videos#update-a-video-object) operation. This triggers the API to generate a new transcript using a different language. |  [optional]
**transcript** | **boolean** | Use this parameter to enable transcription.   - When &#x60;true&#x60;, the API generates a transcript for the video. - The default value is &#x60;false&#x60;. - If you define a video language using the &#x60;language&#x60; parameter, the API uses that language to transcribe the video. If you do not define a language, the API detects it based on the video.  - When the API generates a transcript, it will be available as a caption for the video. |  [optional]
**transcriptSummary** | **boolean** | Use this parameter to enable summarization.   - When &#x60;true&#x60;, the API generates a summary for the video, based on the transcription. - The default value is &#x60;false&#x60;. - If you define a video language using the &#x60;language&#x60; parameter, the API uses that language to summarize the video. If you do not define a language, the API detects it based on the video. |  [optional]
**transcriptSummaryAttributes** | [**Array&lt;VideoUpdatePayloadTranscriptSummaryAttributesEnum&gt;**](#Array&lt;VideoUpdatePayloadTranscriptSummaryAttributesEnum&gt;) | Use this parameter to define the elements of a summary that you want to generate. If you do not define this parameter, the API generates a full summary with all attributes. |  [optional]



## Enum: VideoUpdatePayloadLanguageEnum

Name | Value
---- | -----
Ar | &#39;ar&#39;
Ca | &#39;ca&#39;
Cs | &#39;cs&#39;
Da | &#39;da&#39;
De | &#39;de&#39;
El | &#39;el&#39;
En | &#39;en&#39;
Es | &#39;es&#39;
Fa | &#39;fa&#39;
Fi | &#39;fi&#39;
Fr | &#39;fr&#39;
He | &#39;he&#39;
Hi | &#39;hi&#39;
Hr | &#39;hr&#39;
Hu | &#39;hu&#39;
It | &#39;it&#39;
Ja | &#39;ja&#39;
Ko | &#39;ko&#39;
Ml | &#39;ml&#39;
Nl | &#39;nl&#39;
Nn | &#39;nn&#39;
False | &#39;false&#39;
Pl | &#39;pl&#39;
Pt | &#39;pt&#39;
Ru | &#39;ru&#39;
Sk | &#39;sk&#39;
Sl | &#39;sl&#39;
Te | &#39;te&#39;
Tr | &#39;tr&#39;
Uk | &#39;uk&#39;
Ur | &#39;ur&#39;
Vi | &#39;vi&#39;
Zh | &#39;zh&#39;



## Enum: Array&lt;VideoUpdatePayloadTranscriptSummaryAttributesEnum&gt;

Name | Value
---- | -----
Abstract | &#39;abstract&#39;
Takeaways | &#39;takeaways&#39;



