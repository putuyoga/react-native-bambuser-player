/**
 * Copyright Bambuser AB 2018
 */

#import "BambuserPlayerViewManager.h"
#import "BambuserPlayerView.h"

@implementation BambuserPlayerViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(onCurrentViewerCountUpdate, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onTotalViewerCountUpdate, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onReady, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onProgressUpdate, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onLoading, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPlaying, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPaused, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPlaybackComplete, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onStopped, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPlaybackError, RCTBubblingEventBlock)

-(UIView *)view {
  BambuserPlayerView *bambuserPlayerView = [[BambuserPlayerView alloc] init];
  return bambuserPlayerView;
}

RCT_CUSTOM_VIEW_PROPERTY(resourceUri, NSString, BambuserPlayerView) {
  [view setResourceUri:json];
}

RCT_CUSTOM_VIEW_PROPERTY(applicationId, NSString, BambuserPlayerView) {
  [view setApplicatonId:json];
}

RCT_CUSTOM_VIEW_PROPERTY(timeShiftMode, BOOL, BambuserPlayerView) {
  [view setTimeShiftMode:[json boolValue]];
}

RCT_CUSTOM_VIEW_PROPERTY(volume, float, BambuserPlayerView) {
  [view setVolume:[json floatValue]];
}

RCT_CUSTOM_VIEW_PROPERTY(videoScaleMode, NSString, BambuserPlayerView) {
  [view setVideoScaleMode:json];
}

RCT_CUSTOM_VIEW_PROPERTY(requiredBroadcastState, NSString, BambuserPlayerView) {
  [view setRequiredBroadcastState:json];
}

RCT_CUSTOM_VIEW_PROPERTY(play, BOOL, BambuserPlayerView) {
  [view setPlay:true];
}

RCT_CUSTOM_VIEW_PROPERTY(stop, BOOL, BambuserPlayerView) {
  [view setStop:true];
}

RCT_CUSTOM_VIEW_PROPERTY(pause, BOOL, BambuserPlayerView) {
  [view setPause:true];
}

RCT_CUSTOM_VIEW_PROPERTY(seekTo, float, BambuserPlayerView) {
  [view setSeekTo:[json floatValue]];
}

@end
