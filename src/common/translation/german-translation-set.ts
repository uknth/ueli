import { TranslationSet } from "./translation-set";

// tslint:disable:object-literal-sort-keys for better readability
export const germanTranslationSet: TranslationSet = {
    trayIconShow: "Öffnen",
    trayIconSettings: "Einstellungen",
    trayIconQuit: "Beenden",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "Keine Suchergebnisse gefunden",

    ueliCommandClearCaches: "Caches löschen",
    ueliCommandClearCachesDescription: "Löscht alle Zwischenspeicher von allen Plugins",
    ueliCommandEditSettingsFile: "Einstellungsdatei bearbeiten",
    ueliCommandEditSettingsFileDescription: "Bearbeite die Einstellungsdatei in deinem Standardtexteditor",
    ueliCommandExit: "Beenden",
    ueliCommandExitDescription: "Ueli beenden",
    ueliCommandOpenSettings: "Einstellungen",
    ueliCommandOpenSettingsDescription: "Einstellungen bearbeiten",
    ueliCommandRefreshIndexes: "Indexe aktualisieren",
    ueliCommandRefreshIndexesDescription: "Alle Indexe von allen Plugins aktualisieren",
    ueliCommandReload: "Neu laden",
    ueliCommandReloadDescription: "Ueli neu laden",

    generalErrorTitle: "Es ist ein Fehler aufgetreten",
    generalErrorDescription: "Überprüfe den Log für mehr Details",

    successfullyRefreshedIndexes: "Erfolgreich alle Indexe aktualisiert",
    successfullyClearedCaches: "Erfolgreich alle Zwischenspeicher gelöscht",
    successfullyUpdatedconfig: "Erfolgreich Einstellungen aktualisiert",
    successfullyClearedCachesBeforeExit: "Erfolgreich alle Zwischenspeicher vor dem Beenden gelöscht",

    // settings
    generalSettings: "Allgemein",
    generalSettingsLanguage: "Sprache",
    generalSettingsAutostartApp: "App bei Systemstart starten",
    generalSettingsShowTrayIcon: "Symbol im Systemtray anzeigen",
    generalSettingsClearCachesOnExit: "Zwischenspeicher beim Beenden löschen",
    generalSettingsHotKey: "Hot Key",
    generalSettingsRescanInterval: "Rescan Intervall (in Sekunden)",

    appearanceSettings: "Erscheinungsbild",
    appearanceSettingsWindowWidth: "Fensterbreite (in Pixel)",
    appearanceSettingsMaxSearchResultsPerPage: "Max Suchergebnisse (pro Seite)",
    appearanceSettingsSearchResultHeight: "Suchergebnishöhe (in Pixel)",
    appearanceSettingsSmoothScrolling: "Weiches Scrollen",
    appearanceSettingsUserInputHeight: "Eingabefeld (in Pixel)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "Beschreibung bei allen Suchresultaten anzeigen",

    applicationSearchSettings: "Programmsuche",
    applicationSearchSettingsApplicationFolders: "Programmverzeichnisse",
    applicationSearchSettingsApplicationFolder: "Programmverzeichnis",
    applicationSearchSettingsFolderPath: "Ordnerpfad",
    applicationSearchSettingsRemoveAction: "Entfernen",
    applicationSearchSettingsAddApplicationFolder: "Programmverzeichnis hinzufügen",
    applicationSearchSettingsApplicationFileExtensions: "Programmdateierweiterung",
    applicationSearchSettingsApplicationFileExtension: "Erweiterung",
    applicationSearchSettingsAddApplicationFileExtension: "Erweiterung hinzufügen",
    applicationSearchSettingsDisabled: "Programmsuche ist deaktiviert",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" ist keine gültige Dateierweiterung`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}}" ist kein Ordner`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}}" existiert nicht`,
    applicationSearchSettingsFolderValidationError: `Während der Validierung von "{{value}}" ist ein Fehler aufgetreten`,

    searchEngineSettings: "Suchmaschine",
    searchEngineSettingsFuzzyness: "Fuzzyness",
    searchEngineSettingsStrict: "Strikt",
    searchEngineSettingsFuzzy: "Fuzzy",
    searchEngineSettingsMaxSearchResults: "Maximale Suchergebnisse",

    shortcutSettings: "Shorcuts",
    shortcutSettingsShortcut: "Shortcuts",
    shortcutSettingsTableType: "Typ",
    shortcutSettingsTableName: "Name",
    shortcutSettingsTableExecutionArgument: "Ausführungs argument",
    shortcutSettingsTableDescription: "Beschreibung",
    shortcutSettingsTableTags: "Tags",
    shortcutSettingsTableIcon: "Icon",
    shortcutSettingsTableEdit: "Bearbeiten",
    shortcutSettingsTableDelete: "Löschen",
    shortcutSettingsAddShortcut: "Shortcut hinzufügen",
    shortcutSettingsDisabled: "Shortcuts sind deaktiviert",
    shortcutSettingsEditModalImageUrl: "Bild URL",
    shortcutSettingsEditModalSvgString: "SVG Zeichenkette",
    shortcutSettingsEditModalGoogleWebsite: "Google Webseite",
    shortcutSettingsEditModalDownloadsFolder: "Downloads Ordner",
    shortcutSettingsEditModalFilePath: "Dateipfad",
    shortcutSettingsInvalidShortcutErrorMessage: "Ungültiger Shortcut",
    shortcutSettingsTagPlaceholder: "Füge einen Tag hinzu und drücke Enter",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeFilePath: "Dateipfad",

    translationSettingsTranslation: "Übersetzung",
    translationSettingsDebounceDelay: "Debounce Verzögerung (in Millisekunden)",
    translationSettingsMinSearchTermLength: "Minimum Suchbegrifflänge",
    translationSettingsPrefix: "Prefix",
    translationSettingsSourceLanguage: "Quellsprache",
    translationSettingsTargetLanguage: "Zielsprache",
    translationSettingsDisabled: "Übersetzung ist deaktiviert",

    cancel: "Abbrechen",
    save: "Speichern",
    forExample: "Zum Beispiel",
};
