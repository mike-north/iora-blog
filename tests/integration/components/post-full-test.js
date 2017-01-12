import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-full', 'Integration | Component | post full', {
  integration: true
});

test('it renders', function(assert) {

  this.set('model', {
    title: 'My Post',
    body: '## Hello Component!'
  });

  // let wasClickedCount = 0;
  // let wasClickedArgs = null;
  // this.on('wasClicked', function(args) {
  //   wasClickedArgs = args;
  //   wasClickedCount++;
  // });

  this.render(hbs `{{post-full model=model}}`);

  this.$('.to-click').click();
  let componentText = this.$().text().replace(/[\s]+/g, '');
  assert.ok(componentText.indexOf('MyPost') >= 0, 'Title is present');
  assert.ok(componentText.indexOf('HelloComponent!') >= 0, 'Body is present');

  // assert.equal(wasClickedCount, 1, 'Clicked once');
  // assert.equal(wasClickedArgs, 32, 'Click listener received 32');
});