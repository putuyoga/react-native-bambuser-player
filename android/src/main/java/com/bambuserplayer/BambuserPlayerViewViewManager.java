package com.bambuserplayer;

import android.support.annotation.Nullable;
import android.view.ViewGroup;

import com.bambuser.broadcaster.BroadcastPlayer;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

/**
 * Copyright Bambuser AB 2018
 */

public class BambuserPlayerViewViewManager extends ViewGroupManager<BambuserPlayerView> {

    private static Map<String, BroadcastPlayer.AcceptType> REQUIRED_BROADCAST_STATE = MapBuilder.of(
        "any", BroadcastPlayer.AcceptType.ANY,
        "live", BroadcastPlayer.AcceptType.LIVE,
        "archived", BroadcastPlayer.AcceptType.ARCHIVED
    );

    public static final String REACT_CLASS = "BambuserPlayerView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected BambuserPlayerView createViewInstance(ThemedReactContext reactContext) {
        return new BambuserPlayerView(reactContext, this);
    }

    @ReactProp(name = "applicationId")
    public void setApplicationId(BambuserPlayerView view, String applicationId) {
        view.setApplicationId(applicationId);
    }

    @ReactProp(name = "resourceUri")
    public void setResourceUri(BambuserPlayerView view, String resourceUri) {
        view.setResourceUri(resourceUri);
    }

    @ReactProp(name = "timeShiftMode")
    public void setTimeShiftMode(BambuserPlayerView view, boolean timeShiftMode) {
        view.setTimeShiftMode(timeShiftMode);
    }

    @ReactProp(name = "volume")
    public void setVolume(BambuserPlayerView view, float volume) {
        view.setVolume(volume);
    }

    @ReactProp(name = "videoScaleMode")
    public void setVideoScaleMode(BambuserPlayerView view, String videoScaleMode) {
      view.setVideoScaleMode(videoScaleMode);
    }

    @ReactProp(name = "requiredBroadcastState")
    public void setRequiredBroadcastState(BambuserPlayerView view, String requiredBroadcastState) {
        BroadcastPlayer.AcceptType acceptType = REQUIRED_BROADCAST_STATE.get(requiredBroadcastState);
        view.setRequiredBroadcastState(acceptType);
    }

    @ReactProp(name = "play")
    public void play(BambuserPlayerView view, boolean state) {
        view.play();
    }

    @ReactProp(name = "pause")
    public void pause(BambuserPlayerView view, boolean state) {
        view.pause();
    }

    @ReactProp(name = "stop")
    public void stop(BambuserPlayerView view, boolean state) {
        view.stop();
    }

    @ReactProp(name = "seekTo")
    public void seekTo(BambuserPlayerView view, int position) {
        view.seekTo(position);
    }

    void pushEvent(ThemedReactContext context, ViewGroup view, String name, WritableMap event) {
        context.getJSModule(RCTEventEmitter.class).receiveEvent(view.getId(), name, event);
    }

    @Override
    @Nullable
    public Map getExportedCustomDirectEventTypeConstants() {
        Map<String, Map<String, String>> map = MapBuilder.of(
            "onCurrentViewerCountUpdate", MapBuilder.of("registrationName", "onCurrentViewerCountUpdate"),
            "onTotalViewerCountUpdate", MapBuilder.of("registrationName", "onTotalViewerCountUpdate"),
            "onReady", MapBuilder.of("registrationName", "onReady"),
            "onProgressUpdate", MapBuilder.of("registrationName", "onProgressUpdate"),
            "onLoading", MapBuilder.of("registrationName", "onLoading"),
            "onPlaying", MapBuilder.of("registrationName", "onPlaying"),
            "onPaused", MapBuilder.of("registrationName", "onPaused")
        );

        map.putAll(MapBuilder.of(
            "onPlaybackComplete", MapBuilder.of("registrationName", "onPlaybackComplete"),
            "onStopped", MapBuilder.of("registrationName", "onStopped"),
            "onPlaybackError", MapBuilder.of("registrationName", "onPlaybackError")
        ));

        return map;
    }
}
