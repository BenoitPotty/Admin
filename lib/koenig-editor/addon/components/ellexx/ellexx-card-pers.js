import ellexxCardMixin from './utils/ellexx-card-mixin';
import imageComponentCard from '../koenig-card-image';

export default imageComponentCard.extend(ellexxCardMixin, {

    init() {
        this._super(...arguments);
        this.initField('name');
        this.initField('description');
    }
});
