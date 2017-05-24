package com.intenttest.intentmodule;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.util.Map;

import android.content.Intent;

import android.os.Bundle;

import android.content.Context;

import android.util.Log;

import com.facebook.react.bridge.ReactContext;

public class IntentTestModule extends ReactContextBaseJavaModule {

  private ReactContext mReactContext;

  public IntentTestModule(ReactApplicationContext reactContext) {
    super(reactContext);

    mReactContext = reactContext;
  }

   @Override
   public String getName() {
     return "IntentTest";
   }

    private static final String DATABASE_NAME_KEY = "DATABASE_NAME";
    private static final String NAME_KEY = "NAME";
    private static final String VALUE_KEY = "VALUE";
    private static final String TIMESTAMP_KEY = "TIMESTAMP";
    private static final String ACTION_RECORD = "edu.mit.media.funf.RECORD";


    @ReactMethod
    public void sendLog(String name, String value) {
        Intent i = new Intent();
        i.setAction(ACTION_RECORD);
        Bundle b = new Bundle();
        b.putString(DATABASE_NAME_KEY, "mainPipeline");
        b.putLong(TIMESTAMP_KEY, System.currentTimeMillis()/1000);
        b.putString(NAME_KEY, name);
        b.putString(VALUE_KEY, value);
        i.putExtras(b);
        mReactContext.sendBroadcast(i);
        Log.i("FUNF", "Funf Record: " + name + " = " + value);
    }

}
