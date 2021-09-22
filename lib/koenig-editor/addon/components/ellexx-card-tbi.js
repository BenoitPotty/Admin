import EllexxCardMixin from './ellexx/ellexx-card-mixin';
import KoenigCardImage from './koenig-card-image';

export default KoenigCardImage.extend(EllexxCardMixin, {

    type: null,

    init() {
        this._super(...arguments);
        this.initLinkValidation('tbi_link');
        this.initFieldWithLength('tbi_text', 40);
        this.set('videoCode', this.payload.tbi_video_link_code);
    }
});
