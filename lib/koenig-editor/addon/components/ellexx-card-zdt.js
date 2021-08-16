import Component from '@ember/component';
import {action} from '@ember/object';
import {set} from '@ember/object';

export default Component.extend({

    zdtContentLenght: 0,
    invalidUrl: true,

    // closure actions
    selectCard() {},
    deselectCard() {},
    registerComponent() {},

    init() {
        this._super(...arguments);

        if (!this.payload) {
            this.set('payload', {});
        }
        this.set('invalidUrl', !validateURL(this.payload.zdt_link));

        this.zdtContentLenght = this.payload.zdt_content ? this.payload.zdt_content.length : 0;

        this.registerComponent(this);
    },

    updateZdtNumber: action(function (event) {
        this._updatePayloadAttr('zdt_number', event.target.value);
    }),

    updateZdtContent: action(function (event) {
        this._updatePayloadAttr('zdt_content', event.target.value);
        this.set('zdtContentLenght',this.payload.zdt_content.length);
    }),

    updateZdtSource: action(function (event) {
        this._updatePayloadAttr('zdt_source', event.target.value);
    }),

    updateZdtLink: action(function (event) {
        if (validateURL(event.target.value)) {
            this._updatePayloadAttr('zdt_link', event.target.value);
            this.set('invalidUrl', false);
        } else {
            this.set('invalidUrl', true);
        }
    }),

    _updatePayloadAttr(attr, value) {
        let payload = this.payload;
        let save = this.saveCard;

        set(payload, attr, value);

        // update the mobiledoc and stay in edit mode
        save(payload, false);
    }
});
const emailRegexp = /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/;

function validateURL(str) {
    return emailRegexp.test(str);
}
