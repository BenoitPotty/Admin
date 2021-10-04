import EllexxCardMixin from './utils/ellexx-card-mixin';
import KoenigCardImage from '../koenig-card-image';

export default KoenigCardImage.extend(EllexxCardMixin, {

    type: null,

    init() {
        this._super(...arguments);
    }
});
