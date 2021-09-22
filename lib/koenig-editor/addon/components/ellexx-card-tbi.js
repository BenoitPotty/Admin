import EllexxCardMixin from './ellexx/ellexx-card-mixin';
import KoenigCardImage from './koenig-card-image';

export default KoenigCardImage.extend(EllexxCardMixin, {

    type: null,

    init() {
        console.dir(this)
        this._super(...arguments);
        this.initLinkValidation('tbi_link');
        this.initFieldWithLength('tbi_text', 64);
    }
});
