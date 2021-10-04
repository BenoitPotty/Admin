import EllexxComponent from './utils/ellexx-card-component';

export default EllexxComponent.extend({
    init() {
        this._super(...arguments);
        this.initLinkValidation('lnk_link');
        this.initFieldWithLength('lnk_title', 64);
        this.initFieldWithLength('lnk_source', 65);
    }
});
