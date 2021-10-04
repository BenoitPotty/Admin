import EllexxComponent from './utils/ellexx-card-component';

export default EllexxComponent.extend({
    init() {
        this._super(...arguments);
        this.initField('outlook_title');
        this.initField('outlook_text');
        this.initLinkValidation('outlook_cta_link');
        this.initField('outlook_cta_text');
    }
});
