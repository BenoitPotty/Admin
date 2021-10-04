import EllexxComponent from './utils/ellexx-card-component';

export default EllexxComponent.extend({

    init() {
        this._super(...arguments);
        this.initFieldWithLength('mini_content', 93);
    }
});
