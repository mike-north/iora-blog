import { test } from 'qunit';
import moduleForAcceptance from 'blog/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import postsList from '../acceptance-payloads/posts';
import json from '../helpers/json';

let server;

function setupPostsData(s) {
  s.get('/posts', json(200, postsList));
  s.get('/posts/:id', function(req) {
    let { params: { id } } = req;
    return json(200, { data: postsList.data.findBy('id', id) })();
  });
}

moduleForAcceptance('Acceptance | post navigation', {
  beforeEach() {
    server = new Pretender();
  },
  afterEach() {
    server.shutdown();
  }
});

test('visiting /post-navigation', async function(assert) {
  setupPostsData(server);

  await visit('/posts');

  assert.equal(currentURL(), '/posts');

  assert.equal(find('.post').length, 3, 'Three posts');

  await click('.post:first-of-type a');

  assert.equal(currentURL(), `/posts/${postsList.data[0].id}`);

  await click('.post:nth-of-type(2) a');

  assert.equal(currentURL(), `/posts/${postsList.data[1].id}`);
  assert.equal(find(`.post-full[post-id="${postsList.data[1].id}"]`).length, 1, 'Correct post is once on the screen');

});