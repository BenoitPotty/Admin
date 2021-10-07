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
        } else {
            this.payload.items.sort((e1, e2) => e1.order - e2.order);
        }
    },

    actions: {
        addItem() {
            const newItem = {id: this.nexId ,markdown: '', title: '', order: this.getMaxOrder() + 1};
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', [...this.payload.items, newItem], this.saveCard);
            this.nexId = this.nexId + 1;
        },
        deleteItem(item) {
            const newArray = this.payload.items.filter(i => i.id !== item.id);
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', newArray, this.saveCard);
        },
        updateMarkdown(item, value) {
            item.markdown = value;
            ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', this.payload.items, this.saveCard);
        }
    },

    getMaxOrder() {
        if (!this.payload || !this.payload.items) {
            return 0;
        }
        return this.payload.items.reduce(function (a, b) {
            return Math.max(a, b.order ? b.order : 0);
        }, 0);
    },

    updateItemTitle: action(function (item, event) {
        item.title = event.target.value;
        ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', this.payload.items, this.saveCard);
    }),

    updateItemOrder: action(function (item, event) {
        item.order = Number(event.target.value);
        ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', this.payload.items, this.saveCard);
    }),

    updateImgUrl: action(function (item, event) {
        item.img_url = event.target.value;
        ellexxCardUtils.updatePayloadAttribute(this.payload, 'items', this.payload.items, this.saveCard);
    })
});
