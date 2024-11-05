export interface ClientInfo {
    deviceType: string;
    mobileVendor?: string;
    mobileModel?: string;
    isTablet: boolean;
    isMobile: boolean;
    osName: string;
    osVersion: string;
    browserName: string;
    browserVersion: string;
    gpu: string;
    displayRes: string;
    cpuCores: string;
    ip?: string;
    location?: string;
    isp?: string;
    coordinates?: string;
}