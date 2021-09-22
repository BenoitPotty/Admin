import Mixin from '@ember/object/mixin';
import utils from './ellexx-card-utils';
import {action} from '@ember/object';

export default Mixin.create({

    // closure actions
    selectCard() {},
    deselectCard() {},
    registerComponent() {},

    init() {
        this._super(...arguments);

        if (!this.payload) {
            this.set('payload', {});
        }
        this.registerComponent(this);
    },

    updateField: action(function (event) {
        utils.updatePayloadAttribute(this.payload, event.target.name, event.target.value, this.saveCard);
    }),

    updateCheckbox: action(function (event) {
        utils.updatePayloadAttribute(this.payload, event.target.name, event.target.checked, this.saveCard);
    }),

    updateFieldWithLength: action(function (event) {
        utils.updatePayloadAttribute(this.payload, event.target.name, event.target.value, this.saveCard);
        this.set(`${event.target.name}_length`, this.payload[event.target.name].length);
    }),

    updateLink: action(function (event) {
        let isValid = false;
        if (utils.validateUrl(event.target.value)) {
            utils.updatePayloadAttribute(this.payload, event.target.name, event.target.value, this.saveCard);
            isValid = true;
        }
        this.set(`${event.target.name}_invalid`, !isValid);
    }),

    updateYoutubeLink: action(function (event) {
        let isValid = false;
        this.set('videoCode', undefined);
        if (utils.validateYoutubeUrl(event.target.value)) {
            utils.updatePayloadAttribute(this.payload, event.target.name, event.target.value, this.saveCard);
            const videoCode = utils.getYoutubeVideoCode(event.target.value);
            console.log(videoCode)
            utils.updatePayloadAttribute(this.payload, `${event.target.name}_code`, videoCode , this.saveCard),
            this.set('videoCode', videoCode);
            isValid = true;
        }
        this.set(`${event.target.name}_invalid`, !isValid);
    }),

    initLinkValidation(name) {
        this.set(`${name}_invalid`, !utils.validateUrl(this.payload[name]));
    },

    initFieldWithLength(name, max) {
        this.set(`${name}_max`, max);
        this.set(`${name}_length`, this.payload[name] ? this.payload[name].length : 0);
    },

    initField(name, value) {
        this.set(`${name}`, value ? value : '');
    }
});
