angular.module('localization', [])
    .filter('i18n', ['localizedTexts', function (localizedTexts) {
        return function (text) {
            if (localizedTexts.hasOwnProperty(text)) {
                return localizedTexts[text];
            }
            return text;
        };
    }])


angular.module('localization')
    .value('localizedTexts', {
        '+ Category': '+ Kategorie',
        'edit Carte': 'Karte bearbeiten',
});