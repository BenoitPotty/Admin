import EllexxComponent from './utils/ellexx-card-component';
import ellexxCardUtils from './utils/ellexx-card-utils';
import {action} from '@ember/object';

export default EllexxComponent.extend({
    nexId: 1,

    init() {
        this._super(...arguments);
        this.initField('vcol_title');
        this.initField('vcol_subtitle');
        this.initField('vcol_generate_summary');
        this.initField('vcol_summary_title');
        this.initField('vcol_text_to_end');

        if (!this.payload.items) {
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', [], this.saveCard);
            this.nexId = this.payload.items.length;
        }
    },

    actions: {
        addItem() {
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', [...this.payload.items, {id: this.nexId ,markdown: '', title: ''}], this.saveCard);
            this.nexId = this.nexId + 1;
        },
        deleteItem(item) {
            const newArray = this.payload.items.filter(i => i.id !== item.id);
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', newArray, this.saveCard);
        },
        updateMarkdown(item, value) {
            item.markdown = value;
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', this.payload.items, this.saveCard);
        },
        updateItemTitle(item, value) {
            item.title = value;
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', this.payload.items, this.saveCard);
        }
    },

    updateItemTitle: action(function (item, event) {
        item.title = event.target.value;
    })
});
