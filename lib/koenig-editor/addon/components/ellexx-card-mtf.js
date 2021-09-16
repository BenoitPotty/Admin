import EllexxComponent from './ellexx/ellexx-card-component';

export default EllexxComponent.extend({
    init() {
        this.setDefaultValueIfNeeded();
        this._super(...arguments);
        this.initField('mtf_generosity');
        this.initField('mtf_generosity_display', true);
        this.initField('mtf_assets');
        this.initField('mtf_assets_display');
        this.initField('mtf_decision');
        this.initField('mtf_decision_display');
        this.initField('mtf_currency');
        this.initField('mtf_currency_display');
        this.initField('mtf_age');
        this.initField('mtf_children');
        this.initField('mtf_location');
        this.initField('mtf_largest_expense_item');
        this.initField('mtf_income');
        this.initField('mtf_lang');
    },

    setDefaultValueIfNeeded() {
        if (!this.payload) {
            this.payload = {
                mtf_generosity: 5,
                mtf_generosity_display: true,
                mtf_assets: 5,
                mtf_assets_display: true,
                mtf_decision: 5,
                mtf_decision_display: true,
                mtf_currency: 5,
                mtf_currency_display: true,
                mtf_lang: 'de'
            };
        }
    }
});
