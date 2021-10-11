import ellexxCardMixin from './utils/ellexx-card-mixin';
import ellexxCardUtils from './utils/ellexx-card-utils';
import imageComponentCard from '../koenig-card-image';

export default imageComponentCard.extend(ellexxCardMixin, {

    init() {
        this.setDefaultValueIfNeeded();
        this._super(...arguments);
        this.initField('pers_name');
        this.initField('pers_description');
        this.initField('pers_type');
    },

    setDefaultValueIfNeeded() {
        if (!this.payload || !this.payload.pers_type) {
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'pers_type', 'founder', this.saveCard);
        }
    }
});
