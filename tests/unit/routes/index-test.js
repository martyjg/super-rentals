import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to rentals route', function(assert) {
    console.log("THIS IS  THIS: ", this);
    let route = this.subject({
        replaceWith(routeName) {
            assert.equal(routeName, 'rentals', 'replace with route name rentals');
        }
    });
    route.beforeModel();
});