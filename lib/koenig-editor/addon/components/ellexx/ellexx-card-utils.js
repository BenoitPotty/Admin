import {set} from '@ember/object';

export default {
    updatePayloadAttribute(payload, attribute, value, saveCard) {
        set(payload, attribute, value);

        // update the mobiledoc and stay in edit mode
        saveCard(payload, false);
    },

    validateUrl(url) {
        return !url || /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/.test(url);
    }
};
