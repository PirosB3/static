var GOVUK = GOVUK || {};
GOVUK.Analytics = GOVUK.Analytics || {};
GOVUK.Analytics.Trackers = {};

/*
 * Available methods on control:
 * - trackTimeBasedSuccess(millisecondsUntilSuccess)
 * - trackLinks(linkSelector)
 */
GOVUK.Analytics.Trackers.guide = function (control) {
    control.trackTimeBasedSuccess(7000);
    control.trackLinks("#content a");
};

GOVUK.Analytics.Trackers.transaction = function (control) {
    control.trackLinks("#content a");
};