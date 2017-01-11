import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  authorName: attr('string'),
  authorPhotoUrl: attr('string'),
  categoryName: attr('string'),
  featuredImageUrl: attr('string'),
  updatedAt: attr('date'),
  createdAt: attr('date')
});