import Component from '@ember/component';
import {action} from '@ember/object';
import {set} from '@ember/object';

export default Component.extend({

    zdt_number: '',

    // closure actions
    selectCard() {},
    deselectCard() {},
    registerComponent() {},

    init() {
        this._super(...arguments);

        if (!this.payload) {
            this.set('payload', {});
        }
        this.zdt_number = this.payload.zdt_number;

        this.registerComponent(this);
    },

    updateZdtNumber: action(function (event) {
        this._updatePayloadAttr('zdt_number', event.target.value);
    }),

    updateZdtContent: action(function (event) {
        this._updatePayloadAttr('zdt_content', event.target.value);
    }),

    updateZdtSource: action(function (event) {
        this._updatePayloadAttr('zdt_source', event.target.value);
    }),

    updateZdtLink: action(function (event) {
        this._updatePayloadAttr('zdt_link', event.target.value);
    }),

    _updatePayloadAttr(attr, value) {
        let payload = this.payload;
        let save = this.saveCard;

        set(payload, attr, value);

        // update the mobiledoc and stay in edit mode
        save(payload, false);
    }
});
