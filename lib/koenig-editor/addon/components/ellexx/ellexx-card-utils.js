import {set} from '@ember/object';

export default {
    updatePayloadAttribute(payload, attribute, value, saveCard) {
        set(payload, attribute, value);

        // update the mobiledoc and stay in edit mode
        saveCard(payload, false);
    },

    validateUrl(url) {
        return !url || /(?:^|[ \t])((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)/.test(url);
    }
};
