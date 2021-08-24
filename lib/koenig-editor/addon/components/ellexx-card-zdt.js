import EllexxComponent from './ellexx/ellexx-card-component';

export default EllexxComponent.extend({

    init() {
        this._super(...arguments);
        this.initLinkValidation('zdt_link');
        this.initFieldWithLength('zdt_content', 140);
        this.initFieldWithLength('zdt_number', 6);
    }
});
