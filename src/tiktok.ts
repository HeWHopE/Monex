/* eslint-disable */

import { useEffect } from "react";

const TIKTOK_PIXEL_ID = "D362NHJC77U6IE15KBCG";

interface TikTokInstance {
  _u?: string;
  [key: string]: any;
}

interface TikTokAnalytics {
  methods: string[];
  queue?: any[];
  _i?: Record<string, TikTokInstance>;
  _t?: Record<string, number>;
  _o?: Record<string, any>;
  setAndDefer?: (obj: any, method: string) => void;
  load?: (id: string, config?: any) => void;
  page?: () => void;
  track?: (...args: any[]) => void;
  identify?: (...args: any[]) => void;
  [key: string]: any;
}

// Make TypeScript aware of ttq on window
declare global {
  interface Window {
    ttq?: TikTokAnalytics;
    TiktokAnalyticsObject?: string;
  }
}

export const useTikTokPixel = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.ttq) {
      console.log("TikTok Pixel already initialized.");
      window.ttq.page?.();
      return;
    }

    console.log("TikTok Pixel not found, injecting script...");

    window.TiktokAnalyticsObject = "ttq";

    const ttq: TikTokAnalytics = (window.ttq = {
      methods: [],
      queue: [],
      page: () => {},
      track: () => {},
      identify: () => {},
      instances: () => {},
      debug: () => {},
      on: () => {},
      off: () => {},
      once: () => {},
      ready: () => {},
      alias: () => {},
      group: () => {},
      enableCookie: () => {},
      disableCookie: () => {},
      holdConsent: () => {},
      revokeConsent: () => {},
      grantConsent: () => {},
    });

    ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
      "holdConsent",
      "revokeConsent",
      "grantConsent",
    ];

    ttq.setAndDefer = (obj, method) => {
      obj[method] = function () {
        (obj.queue = obj.queue || []).push([method, ...arguments]);
      };
    };

    ttq.methods.forEach((method) => ttq.setAndDefer!(ttq, method));

    // eslint-disable-next-line
    ttq.instance = (id: any) => {
      ttq._i ??= {};
      const inst: TikTokInstance = ttq._i[id] || {};
      ttq._i[id] = inst;
      ttq.methods.forEach((method) => ttq.setAndDefer!(inst, method));
      return inst;
    };

    ttq.load = (id, config) => {
      const src = "https://analytics.tiktok.com/i18n/pixel/events.js";
      ttq._i ??= {};
      ttq._i[id] = ttq._i[id] || {};
      ttq._i[id]._u = src;

      ttq._t = ttq._t || {};
      ttq._t[id] = +new Date();

      ttq._o = ttq._o || {};
      ttq._o[id] = config || {};

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = `${src}?sdkid=${id}&lib=${window.TiktokAnalyticsObject}`;

      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    };

    ttq.load(TIKTOK_PIXEL_ID);
    ttq.page?.();

    console.log("TikTok Pixel initialized and page view tracked.");
  }, []);
};
