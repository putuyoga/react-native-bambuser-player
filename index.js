import PropTypes from 'prop-types';
import React from 'react';
import {
  requireNativeComponent,
  View
} from 'react-native';

const REQUIRED_BROADCAST_STATE = {
  ANY: 'any',
  LIVE: 'live',
  ARCHIVED: 'archived'
};

const VIDEO_SCALE_MODE = {
  ASPECT_FIT: 'aspectFit',
  ASPECT_FILL: 'aspectFill',
  SCALE_TO_FILL: 'scaleToFill'
};

const propTypes = {
  applicationId: PropTypes.string,
  resourceUri: PropTypes.string,
  timeShiftMode: PropTypes.bool,
  volume: PropTypes.number,
  videoScaleMode: PropTypes.oneOf(Object.values(VIDEO_SCALE_MODE)),
  requiredBroadcastState: PropTypes.oneOf(Object.values(REQUIRED_BROADCAST_STATE)),
  onCurrentViewerCountUpdate: PropTypes.func,
  onTotalViewerCountUpdate: PropTypes.func,
  onReady: PropTypes.func,
  onProgressUpdate: PropTypes.func,
  onLoading: PropTypes.func,
  onPlaying: PropTypes.func,
  onPaused: PropTypes.func,
  onPlaybackComplete: PropTypes.func,
  onStopped: PropTypes.func,
  onPlaybackError: PropTypes.func,
  ...View.propTypes
};

class RNBambuserPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.playerComponentView = null;
    this._onReady = this._onReady.bind(this);
    this._onCurrentViewerCountUpdate = this._onCurrentViewerCountUpdate.bind(this);
    this._onTotalViewerCountUpdate = this._onTotalViewerCountUpdate.bind(this);
    this._onProgressUpdate = this._onProgressUpdate.bind(this);
    this._onLoading = this._onLoading.bind(this);
    this._onPlaying = this._onPlaying.bind(this);
    this._onPaused = this._onPaused.bind(this);
    this._onPlaybackComplete = this._onPlaybackComplete.bind(this);
    this._onStopped = this._onStopped.bind(this);
    this._onPlaybackError = this._onPlaybackError.bind(this);
  }

  play() {
    this.playerComponentView.setNativeProps({
      play: true
    });
  }

  pause() {
    this.playerComponentView.setNativeProps({
      pause: true
    });
  }

  stop() {
    this.playerComponentView.setNativeProps({
      stop: true
    });
  }

  seekTo(position) {
    this.playerComponentView.setNativeProps({
      seekTo: position
    });
  }

  _onProgressUpdate(event) {
    if (typeof this.props.onProgressUpdate === 'function') {
      this.props.onProgressUpdate(event.nativeEvent.live, event.nativeEvent.currentPosition, event.nativeEvent.duration);
    }
  }

  _onReady() {
    if (typeof this.props.onReady === 'function') {
      this.props.onReady();
    }
  }

  _onCurrentViewerCountUpdate(event) {
    if (typeof this.props.onCurrentViewerCountUpdate === 'function') {
      this.props.onCurrentViewerCountUpdate(event.nativeEvent.viewers);
    }
  }

  _onTotalViewerCountUpdate(event) {
    if (typeof this.props.onTotalViewerCountUpdate === 'function') {
      this.props.onTotalViewerCountUpdate(event.nativeEvent.viewers);
    }
  }
  
  _onLoading() {
    if (typeof this.props.onLoading === 'function') {
      this.props.onLoading();
    }
  }

  _onPlaying() {
    if (typeof this.props.onPlaying === 'function') {
      this.props.onPlaying();
    }
  }

  _onPaused() {
    if (typeof this.props.onPaused === 'function') {
      this.props.onPaused();
    }
  }

  _onPlaybackComplete() {
    if (typeof this.props.onPlaybackComplete === 'function') {
      this.props.onPlaybackComplete();
    }
  }

  _onStopped() {
    if (typeof this.props.onStopped === 'function') {
      this.props.onStopped();
    }
  }

  _onPlaybackError() {
    if (typeof this.props.onError === 'function') {
      this.props.onError();
    }
  }

  render() {
    return (
      <BambuserPlayerView
        ref={ref => {
          this.playerComponentView = ref;
        }}
        {...this.props}
        onReady={this._onReady}
        onCurrentViewerCountUpdate={this._onCurrentViewersUpdated}
        onTotalViewerCountUpdate={this._onTotalViewerCountUpdate}
        onProgressUpdate={this._onProgressUpdate}
        onLoading={this._onLoading}
        onPlaying={this._onPlaying}
        onPaused={this._onPaused}
        onPlaybackComplete={this._onPlaybackComplete}
        onStopped={this._onStopped}
        onPlaybackError={this._onPlaybackError} />
    );
  }
}

RNBambuserPlayer.propTypes = propTypes;
RNBambuserPlayer.REQUIRED_BROADCAST_STATE = REQUIRED_BROADCAST_STATE;
RNBambuserPlayer.VIDEO_SCALE_MODE = VIDEO_SCALE_MODE;

const BambuserPlayerView = requireNativeComponent('BambuserPlayerView', RNBambuserPlayer, {
  nativeOnly: {
    play: PropTypes.bool,
    pause: PropTypes.bool,
    stop: PropTypes.bool,
    seekTo: PropTypes.number
  }
});

module.exports = RNBambuserPlayer;
