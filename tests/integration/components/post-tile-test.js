import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-tile', 'Integration | Component | post tile', {
  integration: true
});

test('it renders', function(assert) {

  this.set('post', {
    title: 'My Post',
    body: 'My title'
  });
  this.render(hbs `{{post-tile model=post}}`);

  let componentText = this.$().text().replace(/[\s]+/g, '');

  assert.ok(componentText.indexOf('MyPost') >= 0, 'title is present');
  assert.ok(componentText.indexOf('Mytitle') >= 0, 'body is present');

});