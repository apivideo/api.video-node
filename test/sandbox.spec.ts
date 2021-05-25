import { expect } from 'chai';
import ApiVideoClient from '../src';
import AccessToken from '../src/model/AccessToken';
import Account from '../src/model/Account';
import AccountQuota from '../src/model/AccountQuota';
import AuthenticatePayload from '../src/model/AuthenticatePayload';
import BadRequest from '../src/model/BadRequest';
import BytesRange from '../src/model/BytesRange';
import Caption from '../src/model/Caption';
import CaptionsListResponse from '../src/model/CaptionsListResponse';
import CaptionsUpdatePayload from '../src/model/CaptionsUpdatePayload';
import Chapter from '../src/model/Chapter';
import ChaptersListResponse from '../src/model/ChaptersListResponse';
import Link from '../src/model/Link';
import LiveStream from '../src/model/LiveStream';
import LiveStreamAssets from '../src/model/LiveStreamAssets';
import LiveStreamCreationPayload from '../src/model/LiveStreamCreationPayload';
import LiveStreamListResponse from '../src/model/LiveStreamListResponse';
import LiveStreamSession from '../src/model/LiveStreamSession';
import LiveStreamSessionClient from '../src/model/LiveStreamSessionClient';
import LiveStreamSessionDevice from '../src/model/LiveStreamSessionDevice';
import LiveStreamSessionLocation from '../src/model/LiveStreamSessionLocation';
import LiveStreamSessionReferrer from '../src/model/LiveStreamSessionReferrer';
import LiveStreamSessionSession from '../src/model/LiveStreamSessionSession';
import LiveStreamUpdatePayload from '../src/model/LiveStreamUpdatePayload';
import Metadata from '../src/model/Metadata';
import NotFound from '../src/model/NotFound';
import Pagination from '../src/model/Pagination';
import PaginationLink from '../src/model/PaginationLink';
import PlayerSessionEvent from '../src/model/PlayerSessionEvent';
import PlayerTheme from '../src/model/PlayerTheme';
import PlayerThemeAssets from '../src/model/PlayerThemeAssets';
import PlayerThemeCreationPayload from '../src/model/PlayerThemeCreationPayload';
import PlayerThemeUpdatePayload from '../src/model/PlayerThemeUpdatePayload';
import PlayerThemesListResponse from '../src/model/PlayerThemesListResponse';
import Quality from '../src/model/Quality';
import RawStatisticsListLiveStreamAnalyticsResponse from '../src/model/RawStatisticsListLiveStreamAnalyticsResponse';
import RawStatisticsListPlayerSessionEventsResponse from '../src/model/RawStatisticsListPlayerSessionEventsResponse';
import RawStatisticsListSessionsResponse from '../src/model/RawStatisticsListSessionsResponse';
import RefreshTokenPayload from '../src/model/RefreshTokenPayload';
import TokenCreationPayload from '../src/model/TokenCreationPayload';
import TokenListResponse from '../src/model/TokenListResponse';
import UploadToken from '../src/model/UploadToken';
import Video from '../src/model/Video';
import VideoAssets from '../src/model/VideoAssets';
import VideoCreationPayload from '../src/model/VideoCreationPayload';
import VideoSession from '../src/model/VideoSession';
import VideoSessionClient from '../src/model/VideoSessionClient';
import VideoSessionDevice from '../src/model/VideoSessionDevice';
import VideoSessionLocation from '../src/model/VideoSessionLocation';
import VideoSessionOs from '../src/model/VideoSessionOs';
import VideoSessionReferrer from '../src/model/VideoSessionReferrer';
import VideoSessionSession from '../src/model/VideoSessionSession';
import VideoSource from '../src/model/VideoSource';
import VideoSourceLiveStream from '../src/model/VideoSourceLiveStream';
import VideoSourceLiveStreamLink from '../src/model/VideoSourceLiveStreamLink';
import VideoStatus from '../src/model/VideoStatus';
import VideoStatusEncoding from '../src/model/VideoStatusEncoding';
import VideoStatusEncodingMetadata from '../src/model/VideoStatusEncodingMetadata';
import VideoStatusIngest from '../src/model/VideoStatusIngest';
import VideoThumbnailPickPayload from '../src/model/VideoThumbnailPickPayload';
import VideoUpdatePayload from '../src/model/VideoUpdatePayload';
import VideosListResponse from '../src/model/VideosListResponse';
import Webhook from '../src/model/Webhook';
import WebhooksCreationPayload from '../src/model/WebhooksCreationPayload';
import WebhooksListResponse from '../src/model/WebhooksListResponse';

const timeout = (ms = 100) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

try {
  if (!process.env.API_KEY) {
    console.error(
      'You must provide `API_KEY` environment variable to test the sandbox.'
    );
    console.log('API_KEY=xxx yarn test:sandbox');

    process.exit(1);
  }
} catch (e) {
  console.error(e);
  process.exit(1);
}

describe('ApiVideoClient', () => {
  it('works with the sandbox', async () => {
    // Create client for Sandbox and authenticate
    const client = new ApiVideoClient({ apiKey: process.env.API_KEY });

    // Create
    const videoTitle = 'Course #4 - Part B';
    const { videoId, title } = await client.videos.create({
      title: videoTitle,
    });

    // upload a video resource
    await client.videos
      .upload(videoId, 'test/data/small.webm')
      .then((video) => {
        expect(title).to.equals(videoTitle);
      });

    // Update video properties
    const newDescription = 'Course #4 - Part C';
    await client.videos
      .update(videoId, { description: newDescription })
      .then((video) => {
        expect(video.description).to.equals(newDescription);
      });

    // Search videos with paginated results
    await client.videos
      .list({ currentPage: 1, pageSize: 100 })
      .then(({ data: videos }) => {
        expect(videos).to.be.an('array');
        expect(
          videos.findIndex((v) => v.videoId === videoId) !== -1,
          'To find the previously created video in the list.'
        ).to.be.true;
      });

    // Upload a video thumbnail
    await client.videos
      .uploadThumbnail(videoId, 'test/data/test.jpg')
      .then((video) => expect(video.videoId).to.equals(videoId));

    // Pick a thumbnail from the given time code.
    await client.videos
      .pickThumbnail(videoId, { timecode: '00:15:22.05' })
      .then((video) => expect(video.videoId).to.equals(videoId));

    // Upload video caption
    await client.captions
      .upload(videoId, 'en', 'test/data/en.vtt')
      .then((caption) => expect(caption.srclang).to.equals('en'));

    await timeout(1000);

    // Get video caption by language
    await client.captions
      .get(videoId, 'en')
      .then((caption) => expect(caption.src).to.be.a('string'));

    // Update the default caption language
    await client.captions
      .update(videoId, 'en', { _default: true })
      .then((caption) => {
        expect(caption.srclang).to.equals('en');
        expect(caption._default).to.equals(true);
      });

    // Delete caption by language
    await client.captions.delete(videoId, 'en');

    // Upload video chapter
    await client.chapters
      .upload(videoId, 'en', 'test/data/en.vtt')
      .then((chapter) => expect(chapter.language).to.equals('en'));

    await timeout(1000);

    // Get video chapter by language
    await client.chapters
      .get(videoId, 'en')
      .then((chapter) => expect(chapter.language).to.equals('en'));

    // Delete chapter by language
    await client.chapters.delete(videoId, 'en');

    // Get video Analytics Data for the current year
    await client.rawStatistics
      .listVideoSessions({
        videoId,
        period: new Date().getFullYear().toString(),
      })
      .then(({ data: videoSessions }) =>
        expect(videoSessions).to.be.an('array')
      );

    // Delete video resource
    await client.videos.delete(videoId);

    // Create a player theme with default values
    const { playerId } = await client.playerThemes.create();
    expect(playerId).to.be.a('string');

    // Get a playerTheme
    await client.playerThemes.get(playerId).then((playerTheme) => {
      expect(playerId).to.equals(playerTheme.playerId);
    });

    // Search a player theme with paginate results
    await client.playerThemes
      .list({ currentPage: 1, pageSize: 50 })
      .then(({ data: playerThemes }) => expect(playerThemes).to.be.an('array'));

    const properties: PlayerThemeUpdatePayload = {
      text: 'rgba(255, 255, 255, .95)',
      link: 'rgba(255, 0, 0, .95)',
      linkHover: 'rgba(255, 255, 255, .75)',
      trackPlayed: 'rgba(255, 255, 255, .95)',
      trackUnplayed: 'rgba(255, 255, 255, .1)',
      trackBackground: 'rgba(0, 0, 0, 0)',
      backgroundTop: 'rgba(72, 4, 45, 1)',
      backgroundBottom: 'rgba(94, 95, 89, 1)',
      backgroundText: 'rgba(255, 255, 255, .95)',
      enableApi: true,
      enableControls: true,
      forceAutoplay: false,
      hideTitle: true,
      forceLoop: true,
    };

    await client.playerThemes
      .update(playerId, properties)
      .then((playerTheme) => {
        Object.keys(properties).forEach((property) => {
          // @ts-ignore
          expect(playerTheme).to.have.property(property, properties[property]);
        });
      });

    await client.playerThemes
      .uploadLogo(playerId, 'test/data/test.jpg', 'https://api.video')
      .then((playerTheme) =>
        expect(playerTheme.assets?.link).to.equals('https://api.video')
      );

    await client.playerThemes.delete(playerId);

    // Create a live
    const name = 'This is a live';
    const { liveStreamId, name: liveName } = await client.liveStreams.create({
      name,
    });
    expect(liveName).to.equals(name);

    // Update live thumbnail
    await client.liveStreams
      .uploadThumbnail(liveStreamId, 'test/data/test.jpg')
      .then((live) => expect(live.name).to.equals(name));

    // Get live Analytics Data for the current year
    await client.rawStatistics
      .listLiveStreamSessions({
        liveStreamId,
        period: new Date().getFullYear().toString(),
      })
      .then(({ data: liveStreamSessions }) =>
        expect(liveStreamSessions).to.be.an('array')
      );

    // Delete live resource
    await client.liveStreams.delete(liveStreamId);

    // Create a private live
    const { liveStreamId: privateLiveStreamId, _public: isPublic } =
      await client.liveStreams.create({
        name: 'This is a private live',
        _public: false,
      });
    expect(isPublic).to.equals(false);

    // Delete the private live
    await client.liveStreams.delete(privateLiveStreamId);

    // Generate a token for delegated upload
    const { token } = await client.uploadTokens.createToken();
    expect(token).to.be.a('string');

    // Upload a video with a token
    await client.videos.uploadWithUploadToken(
      token as string,
      'test/data/small.webm'
    );
  });
});
