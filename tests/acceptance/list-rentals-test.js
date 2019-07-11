

import { module, test } from 'qunit';
// import { visit, currentURL } from '@ember/test-helpers';

import {
  click,
  currentURL,
  visit,
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers'

import { setupApplicationTest } from 'ember-qunit';

import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | list rentals', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('should filter the list of rentals by city', async function(assert) {
    await visit('/');
    await fillIn('.list-filter input', 'seattle');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');
  });
  // test('should show rentals as the home page', async function (assert) {
  //   await visit('/');
  //   assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  
});