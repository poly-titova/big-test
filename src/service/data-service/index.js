'use strict';

const ArticleService = require(`./articles`);
const CategoryService = require(`./category`);
const CommentService = require(`./comment`);
const SearchService = require(`./search`);

module.exports = {
  ArticleService,
  CategoryService,
  CommentService,
  SearchService
};
