import {set} from '@ember/object';
const youtubeRegexp = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

export default {
    updatePayloadAttribute(payload, attribute, value, saveCard) {
        set(payload, attribute, value);

        // update the mobiledoc and stay in edit mode
        saveCard(payload, false);
    },

    validateUrl(url) {
        return !url || /(?:^|[ \t])((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)/.test(url);
    },

    validateYoutubeUrl(url) {
        return !url || youtubeRegexp.test(url);
    },

    getYoutubeVideoCode(url) {
        return !url ? null : url.match(youtubeRegexp)[5];
    }
};
