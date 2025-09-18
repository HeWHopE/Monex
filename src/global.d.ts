/* eslint-disable */
export {};

declare global {
  interface TikTokAnalytics {
    methods: string[];
    queue?: any[];
    _i?: Record<string, any[]>;
    _t?: Record<string, number>;
    _o?: Record<string, any>;
    [key: string]: any; // ✅ Allows dynamic string indexing

    // TikTok Pixel core methods
    page: (...args: any[]) => void;
    track: (...args: any[]) => void;
    identify: (...args: any[]) => void;
    instances: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    on: (...args: any[]) => void;
    off: (...args: any[]) => void;
    once: (...args: any[]) => void;
    ready: (...args: any[]) => void;
    alias: (...args: any[]) => void;
    group: (...args: any[]) => void;
    enableCookie: (...args: any[]) => void;
    disableCookie: (...args: any[]) => void;
    holdConsent: (...args: any[]) => void;
    revokeConsent: (...args: any[]) => void;
    grantConsent: (...args: any[]) => void;

    // Custom helper methods
    setAndDefer?: (obj: TikTokAnalytics, method: string) => void;
    instance?: (id: string) => TikTokAnalytics;
    load?: (id: string, config?: Record<string, any>) => void;
  }

  interface Window {
    _u?: string;
    TiktokAnalyticsObject?: string;
    ttq?: TikTokAnalytics;
  }
}
