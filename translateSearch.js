import AWS from "aws-sdk";
import handler from "./libs/handler-lib";
import search from './libs/search-lib';


export const main = handler(async (event, context) => {
  const translate = new AWS.Translate();
  const { text, sourceLanguage, targetLanguages } = JSON.parse(event.body);

  const translations = await Promise.all(targetLanguages.map(lang => translate.translateText({
    SourceLanguageCode: sourceLanguage,
    TargetLanguageCode: lang,
    Text: text,
  }).promise()));

  const res = await Promise.all(translations.map(({ TranslatedText }) => search(TranslatedText)));

  const searchResults = res.map(({ data }) => data);

  return searchResults;
});