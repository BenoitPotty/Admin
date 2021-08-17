import EllexxComponent from './ellexx/ellexx-card-component';

export default EllexxComponent.extend({
    init() {
        this._super(...arguments);
        this.initLinkValidation('vid_link');
        this.initField('vid_explainations');
    }
});
