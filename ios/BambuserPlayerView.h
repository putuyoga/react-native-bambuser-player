/**
 * Copyright Bambuser AB 2018
 */

#import <UIKit/UIKit.h>

// import RCTComponent.h
#if __has_include(<React/RCTComponent.h>)
#import <React/RCTComponent.h>
#elif __has_include("RCTComponent.h")
#import "RCTComponent.h"
#else
#import "React/RCTComponent.h"
#endif

@interface BambuserPlayerView : UIView

@property (nonatomic) NSString *resourceUri;
@property (nonatomic) NSString *applicatonId;
@property (nonatomic) NSString *videoScaleMode;
@property (nonatomic) NSString *requiredBroadcastState;
@property (nonatomic) BOOL timeShiftMode;
@property (nonatomic) float volume;
@property (nonatomic) float duration;
@property (nonatomic) BOOL play;
@property (nonatomic) BOOL pause;
@property (nonatomic) BOOL stop;
@property (nonatomic) float seekTo;
@property (nonatomic, copy) RCTBubblingEventBlock onReady;
@property (nonatomic, copy) RCTBubblingEventBlock onCurrentViewerCountUpdate;
@property (nonatomic, copy) RCTBubblingEventBlock onTotalViewerCountUpdate;
@property (nonatomic, copy) RCTBubblingEventBlock onProgressUpdate;
@property (nonatomic, copy) RCTBubblingEventBlock onLoading;
@property (nonatomic, copy) RCTBubblingEventBlock onPlaying;
@property (nonatomic, copy) RCTBubblingEventBlock onPaused;
@property (nonatomic, copy) RCTBubblingEventBlock onPlaybackComplete;
@property (nonatomic, copy) RCTBubblingEventBlock onStopped;
@property (nonatomic, copy) RCTBubblingEventBlock onPlaybackError;

@end
