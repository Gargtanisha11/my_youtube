import config from "../key";

const KEY1 = config.MY_API_YOUTUBE_KEY1;

export const OFFSET_LIVECHAT=10;

export const YOUTUBE_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  KEY1;
export const YOUTUBE_VIDEO_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  KEY1;

export const YOUTUBE_CHANNEL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  KEY1;

export const YOUTUBE_VIDEO_COMMENT =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&key=" +
  KEY1 +
  "&videoId=";

  export const YOUTUBE_RELATED_VIDEO="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+KEY1+"&q="