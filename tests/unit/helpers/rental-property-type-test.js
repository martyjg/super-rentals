
import { rentalPropertyType } from 'super-rentals/helpers/rental-property-type';
import { module, test } from 'qunit';

module('Unit | Helper | rental property type');

test('should return "Community" or "Standalone" as a type for the property', function(assert) {
	assert.equal(rentalPropertyType(["Apartment"]), 'Community');
});

