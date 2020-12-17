import Vue from 'vue';
import Vuetify, {
    VSimpleTable,
    VApp,
    VMain,
    VProgressLinear,
    VRow,
    VCol,
    VImg,
    VItemGroup,
    VTimePickerClock,
    VToolbar,
    VWindow,
    VTreeview,
    VDataFooter,
    VDivider,
    VCounter,
    VDataTable,
    VMenu,
    VBadge,
    VIcon,
    VTooltip,
    VBtn,
    VCardActions,
    VListItem,
    VSpacer,
    VList,
    VCardText,
    VCard,
    VListItemContent,
    VListItemTitle,
    VListItemAction,
    VTextField,
    VForm,
    VCheckbox,
    VContainer
} from 'vuetify/lib';

Vue.use(Vuetify, {
    components: {
        VSimpleTable,
        VApp,
        VMain,
        VProgressLinear,
        VRow,
        VCol,
        VImg,
        VItemGroup,
        VTimePickerClock,
        VToolbar,
        VWindow,
        VTreeview,
        VDataFooter,
        VDivider,
        VCounter,
        VDataTable,
        VMenu,
        VBadge,
        VIcon,
        VTooltip,
        VBtn,
        VCardActions,
        VListItem,
        VSpacer,
        VList,
        VCardText,
        VCard,
        VListItemContent,
        VListItemTitle,
        VListItemAction,
        VTextField,
        VForm,
        VCheckbox,
        VContainer
        
    }
});

let colors = {
    primary: '#3F51B5',
    onPrimary: '#FFFFFF',
    secondary: '#1565C0',
    onSecondary: '#FFFFFF'
}


export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.primary,
                secondary: colors.secondary,
                onPrimary: colors.onPrimary,
                onSecondary: colors.onSecondary
            }
        }
    },
});