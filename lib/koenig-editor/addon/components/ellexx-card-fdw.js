import EllexxComponent from './ellexx/ellexx-card-component';

export default EllexxComponent.extend({
    init() {
        this._super(...arguments);
        this.initLinkValidation('fdw_link');
        this.initFieldWithLength('fdw_sentence', 86);
    }
});
