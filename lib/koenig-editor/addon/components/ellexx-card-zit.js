import EllexxComponent from './ellexx/ellexx-card-component';

export default EllexxComponent.extend({
    init() {
        this._super(...arguments);
        this.initLinkValidation('zit_link');
        this.initFieldWithLength('zit_quote', 86);
        this.initField('zit_author');
    }
});
