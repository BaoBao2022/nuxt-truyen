import MobileDetect from 'mobile-detect';
import {useState} from "#imports";

export default ({req}) => {
    const md = new MobileDetect(req.headers['user-agent'])
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