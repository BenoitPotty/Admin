import GHOST_CARDS, {CARD_MENU} from '../../../options/cards';
import createComponentCard from '../../../utils/create-component-card';
import {CARD_COMPONENT_MAP, CARD_ICON_MAP} from '../../../options/cards';
const cardsToAdd = [
    {
        key: 'zdt',
        koenigOptions: {selectAfterInsert: true},
        menuItems: [{
            label: 'Zahl des Tages',
            icon: 'ellexx/card-indicator-zdt',
            desc: 'Zahl des Tages Eingeben',
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
            label: 'Frage der Woche',
            icon: 'ellexx/card-indicator-fdw',
            desc: 'Frage der Woche Eingeben',
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
            label: 'Zitat',
            icon: 'ellexx/card-indicator-zit',
            desc: 'Zitat Eingeben',
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
            label: 'Video',
            icon: 'ellexx/card-indicator-vid',
            desc: 'Video Eingeben',
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
            label: 'Inforgrafik',
            icon: 'ellexx/card-indicator-ifk',
            desc: 'Infografik Eingeben',
            iconClass: 'kg-card-type-native',
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
            icon: 'ellexx/card-indicator-lnk',
            desc: 'Curated Link Eingeben',
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
                label: 'Money Facts',
                icon: 'ellexx/card-indicator-mtf',
                desc: 'Money Facts Eingeben',
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
                label: 'Person',
                icon: 'ellexx/card-indicator-pers',
                desc: 'Person details Eingeben',
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
                label: 'Outlook',
                icon: 'ellexx/card-indicator-outlook',
                desc: 'Outlook Eingeben',
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
                label: 'Infografik',
                icon: 'ellexx/card-indicator-tbi',
                desc: 'Teaser Block Infografik Eingeben',
                iconClass: 'kg-card-type-native',
                matches: ['teaser', 'tbi'],
                type: 'card',
                replaceArg: 'tbi',
                payload: {
                    type: 'infografik'
                }
            },
            {
                label: 'Video',
                icon: 'ellexx/card-indicator-tbi',
                desc: 'Teaser Block VIdeo Eingeben',
                iconClass: 'kg-card-type-native',
                matches: ['teaser', 'tbi'],
                type: 'card',
                replaceArg: 'tbi',
                payload: {
                    type: 'video'
                }
            },
            {
                label: 'Zitat',
                icon: 'ellexx/card-indicator-tbi',
                desc: 'Teaser Block Zitat Eingeben',
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
                label: 'PDF',
                icon: 'ellexx/card-indicator-pdf',
                desc: 'PDF Eingeben',
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
        component: 'koenig-card-markdown',
        icon: 'koenig/kg-card-type-markdown',
        koenigOptions: {deleteIfEmpty: 'payload.markdown'},
        menuItems: [
            {
                label: 'Markdown Header',
                icon: 'ellexx/card-indicator-mdh',
                desc: 'Markdown header Eingeben',
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
        addEllexxCardIcons();
        addEllexxComponentCards();
        addEllexxMenuEntries();
    }
}

function addEllexxComponentCardsDefinitions() {
    cardsToAdd.forEach((c) => {
        CARD_COMPONENT_MAP[c.key] = c.component ? c.component : `ellexx-card-${c.key}`;
    });
}

function addEllexxCardIcons() {
    cardsToAdd.forEach((c) => {
        CARD_ICON_MAP[c.key] = c.icon ? c.icon : `ellexx/card-indicator-${c.key}`;
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
