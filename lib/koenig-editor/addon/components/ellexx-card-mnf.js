import EllexxComponent from './ellexx/ellexx-card-component';

export default EllexxComponent.extend({
    init() {
        this._super(...arguments);
        this.initField('mnf_generosity', '5');
        this.initField('mnf_generosity_display', 'on');
        this.initField('mnf_assets', '5');
        this.initField('mnf_assets_display', 'on');
        this.initField('mnf_decision', '0');
        this.initField('mnf_decision_display', 'on');
        this.initField('mnf_currency', '0');
        this.initField('mnf_currency_display', 'on');
        this.initField('mnf_age');
        this.initField('mnf_job');
        this.initField('mnf_largest_expense_item');
        this.initField('mnf_income');
    }
});
