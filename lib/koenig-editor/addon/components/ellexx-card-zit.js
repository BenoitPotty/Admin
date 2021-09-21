import EllexxComponent from './ellexx/ellexx-card-component';
import utils from './ellexx/ellexx-card-utils';
import {action} from '@ember/object';
const MAX_QUICK_CONTENT = 86;
const MAX_ARTIKEL = 5000;

export default EllexxComponent.extend({
    init() {
        this.setDefaultValueIfNeeded();
        this._super(...arguments);
        this.initLinkValidation('zit_link');
        this.initFieldWithLength('zit_quote', 86);
        this.initField('zit_author');
        this.initField('zit_usage');
    },

    setDefaultValueIfNeeded() {
        if (!this.payload) {
            this.payload = {
            };
        }

        if (!this.payload.zit_usage) {
            this.payload.zit_usage = 'quick-content';
        }
    },

    updateUsage: action(function (event) {
        utils.updatePayloadAttribute(this.payload, event.target.name, event.target.value, this.saveCard);
        if (this.payload.zit_usage === 'quick-content') {
            this.set('zit_quote_max', MAX_QUICK_CONTENT);
            utils.updatePayloadAttribute(this.payload, 'zit_quote', this.payload.zit_quote.substring(0, MAX_QUICK_CONTENT), this.saveCard);
            this.set('zit_quote_length', MAX_QUICK_CONTENT);
        } else {
            this.set('zit_quote_max', MAX_ARTIKEL);
        }
    })
});
