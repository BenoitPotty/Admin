import GHOST_CARDS, {CARD_MENU} from '../../../options/cards';
import createComponentCard from '../../../utils/create-component-card';
import {CARD_COMPONENT_MAP} from '../../../options/cards';
const cardsToAdd = [
    {
        key: 'zdt',
        koenigOptions: {selectAfterInsert: true},
        menuItems: [{
            label: '(Quick content) Zahl des Tages',
            desc: 'Insert a \'Zahl des Tages\' for Quick Content',
            iconClass: 'kg-card-type-native',
            matches: ['zahl', 'zdt'],
            type: 'card',
            replaceArg: 'zdt'
        }]
    },
    {
        key: 'fdw',
        koenigOptions: {selectAfterInsert: true},
        menuItems: [{
            label: '(Quick content) Frage der Woche',
            desc: 'Insert a \'Frage der Woche\' for Quick Content',
            iconClass: 'kg-card-type-native',
            matches: ['frage', 'fdw'],
            type: 'card',
            replaceArg: 'fdw'
        }]
    },
    {
        key: 'zit',
        koenigOptions: {selectAfterInsert: true},
        menuItems: [{
            label: '(Quick content) Zitat',
            desc: 'Insert a \'Zitat\' for Quick Content',
            iconClass: 'kg-card-type-native',
            matches: ['zitat', 'zit'],
            type: 'card',
            replaceArg: 'zit'
        }]
    },
    {
        key: 'vid',
        icon: 'koenig/kg-card-type-gen-embed',
        koenigOptions: {hasEditMode: false, deleteIfEmpty: 'payload.html'},
        menuItems: [{
            label: '(Quick content) Video',
            desc: 'Insert a \'Video\' for Quick Content',
            iconClass: 'kg-card-type-native',
            matches: ['video', 'vid'],
            type: 'card',
            replaceArg: 'vid',
            params: ['url']
        }]
    },
    {
        key: 'ifk',
        icon: 'koenig/kg-card-type-gen-embed',
        koenigOptions: {hasEditMode: false, deleteIfEmpty(card) {
            return card.payload.imageSelector && !card.payload.src;
        }},
        menuItems: [{
            label: '(Quick content) Inforgrafik',
            desc: 'Insert an \'Infographik\' for Quick Content',
            matches: ['infografik', 'info'],
            type: 'card',
            replaceArg: 'ifk',
            params: ['src'],
            payload: {
                triggerBrowse: true
            }
        }]
    },
    {
        key: 'lnk',
        koenigOptions: {selectAfterInsert: true},
        menuItems: [{
            label: 'Curated Link',
            desc: 'Insert a currated link',
            iconClass: 'kg-card-type-native',
            matches: ['curated', 'lnk'],
            type: 'card',
            replaceArg: 'lnk'
        }]
    },
    {
        key: 'mtf',
        koenigOptions: {selectAfterInsert: true},
        menuItems: [
            {
                label: '(Money talk) Money Facts',
                desc: 'Insert \'Money Facts\' for Money Talk',
                iconClass: 'kg-card-type-native',
                matches: ['moneyfacts', 'mtf'],
                type: 'card',
                replaceArg: 'mtf'
            }
        ]
    },
    {
        key: 'pers',
        koenigOptions: {selectAfterInsert: true},
        menuItems: [
            {
                label: 'Person details',
                desc: 'Insert details about a person',
                iconClass: 'kg-card-type-native',
                matches: ['pers'],
                type: 'card',
                replaceArg: 'pers'
            }
        ]
    },
    {
        key: 'outlook',
        koenigOptions: {selectAfterInsert: true},
        menuItems: [
            {
                label: 'Outlook Box',
                desc: 'Insert an \'Outloolk\' box',
                iconClass: 'kg-card-type-native',
                matches: ['outlook'],
                type: 'card',
                replaceArg: 'outlook'
            }
        ]
    },
    {
        key: 'tbi',
        koenigOptions: {selectAfterInsert: true, type: 'Infographik'},
        menuItems: [
            {
                label: '(Teaser Block) Infografik ',
                desc: 'Insert an \'Infografik\' for Teaser Block',
                iconClass: 'kg-card-type-native',
                matches: ['teaser', 'tbi'],
                type: 'card',
                replaceArg: 'tbi',
                payload: {
                    type: 'infografik'
                }
            },
            {
                label: '(Teaser Block) Video',
                desc: 'Insert an \'Video\' for Teaser Block',
                iconClass: 'kg-card-type-native',
                matches: ['teaser', 'tbi'],
                type: 'card',
                replaceArg: 'tbi',
                payload: {
                    type: 'video'
                }
            },
            {
                label: '(Teaser Block) Zitat',
                desc: 'Insert a \'Zitat\' for Teaser Block',
                iconClass: 'kg-card-type-native',
                matches: ['teaser', 'tbi'],
                type: 'card',
                replaceArg: 'tbi',
                payload: {
                    type: 'zitat'
                }
            }
        ]
    },
    {
        key: 'pdf',
        koenigOptions: {hasEditMode: false, deleteIfEmpty(card) {
            return card.payload.imageSelector && !card.payload.src;
        }},
        menuItems: [
            {
                label: 'PDF Document',
                desc: 'Insert a \'PDF\' document',
                iconClass: 'kg-card-type-native',
                matches: ['document', 'pdf'],
                type: 'card',
                replaceArg: 'pdf',
                params: ['src'],
                payload: {
                    triggerBrowse: true
                }
            }
        ]
    },
    {
        key: 'mdh',
        icon: 'koenig/kg-card-type-markdown',
        koenigOptions: {deleteIfEmpty: 'payload.markdown'},
        menuItems: [
            {
                label: '(Close the gaps) Markdown Header',
                desc: 'Insert a header for Close the gaps',
                iconClass: 'kg-card-type-native',
                matches: ['moneyfacts', 'mdh'],
                type: 'card',
                replaceArg: 'mdh'
            }
        ]
    }
];

export class EditorMenuUtils {
    addEllexMenuElements() {
        addEllexxComponentCardsDefinitions();
        addEllexxComponentCards();
        addEllexxMenuEntries();
    }
}

function addEllexxComponentCardsDefinitions() {
    cardsToAdd.forEach((c) => {
        CARD_COMPONENT_MAP[c.key] = c.component ? c.component : `ellexx-card-${c.key}`;
    });
}

function addEllexxComponentCards() {
    cardsToAdd.forEach((c) => {
        GHOST_CARDS.push(
            createComponentCard(c.key, c.koenigOptions));
    });
}

function addEllexxMenuEntries() {
    const ellexxMenu = {
        title: 'ELLEXX Components',
        rowLength: 1,
        items: []
    };

    cardsToAdd.forEach((c) => {
        ellexxMenu.items = ellexxMenu.items.concat(c.menuItems);
    });

    ellexxMenu.items.sort((a,b) => (a.label > b.label ? 1 : -1));

    CARD_MENU.unshift(ellexxMenu);
}
