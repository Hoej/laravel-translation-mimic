exports.__ = (str, replace = {}) => {

    const i18n = window.i18n;
    let translation;

    if(typeof(i18n) == 'undefined' || i18n == null || i18n == '') {
        translation = str;
    } else {
        translation = window.i18n[str];


        if (typeof (translation) == 'undefined' || translation == null || translation == '') {
            translation = str;
        }
    }

    for (let placeholder in replace) {
        translation = translation.replace(`:${placeholder}`, replace[placeholder]);
    }

    return translation;
};

exports.trans_choice = (translation, count, replace = {}) => {
    let translation_choices = translation.split('|');
    let chosen_translation = count > 1 ? translation_choices[1] : translation_choices[0];

    for (let placeholder in replace) {
        chosen_translation = chosen_translation.replace(`:${placeholder}`, replace[placeholder]);
    }
    return chosen_translation;
};
