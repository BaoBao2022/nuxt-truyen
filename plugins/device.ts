import MobileDetect from 'mobile-detect';
import {useState} from "#imports";

export default () => {
    const headers = useRequestHeaders()
    const md = new MobileDetect(headers['user-agent'])
    const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
    const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
    const isDesktop = !isMobile && !isTablet

    const state = {
        hasMobile: isMobile,
        hasTablet: isTablet,
        hasDesktop: isDesktop
    }


    useState('devices', () => state)
    return true;
}