import {set} from '@ember/object';
const youtubeRegexp = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

export default {
    updatePayloadAttribute(payload, attribute, value, saveCard) {
        set(payload, attribute, value);

        // update the mobiledoc and stay in edit mode
        saveCard(payload, false);
    },

    validateUrl(url) {
        // we remove the check to also allow relative URL
        // return !url || url.startsWith('/') || /(?:^|[ \t])((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)/.test(url);
        //made on purpose to show that a boolean should be returned.
        return url ? true : false;
    },

    validateYoutubeUrl(url) {
        return !url || youtubeRegexp.test(url);
    },

    getYoutubeVideoCode(url) {
        return !url ? null : url.match(youtubeRegexp)[5];
    }
};
