import { expect, assert } from 'chai';
import { GameObject } from '../src/game-object';
import { Vector } from '../src/vector';
import { Movemen } from '../src/movement';
import { Point } from '../src/point';
import { Rotation } from '../src/rotation';
import { DecimalHelper } from '../src/utils/decimal-helper';

describe('Rotation tests', function() {
  describe('Rotation test set', function() {
    it('(-7, 3) -> (-3, -7)', function() {
      const obj:GameObject = new GameObject({ position: new Point(12, 5), velocity: new Vector(-7, 3) });
      const rotation:Rotation = new Rotation();
      rotation.rotate(obj);
      const velocity = obj.getVelocity();
      assert.equal(DecimalHelper.areEqual(velocity.x, -3), true);
      assert.equal(DecimalHelper.areEqual(velocity.y, -7), true);
    });

    it('(-3, -7) -> (7, -3)', function() {
      const obj:GameObject = new GameObject({ position: new Point(12, 5), velocity: new Vector(-3, -7) });
      const rotation:Rotation = new Rotation();
      rotation.rotate(obj);
      const velocity = obj.getVelocity();
      assert.equal(DecimalHelper.areEqual(velocity.x, 7), true);
      assert.equal(DecimalHelper.areEqual(velocity.y, -3), true);
    });

    it('(7, -3) -> (3, 7)', function() {
      const obj:GameObject = new GameObject({ position: new Point(12, 5), velocity: new Vector(7, -3) });
      const rotation:Rotation = new Rotation();
      rotation.rotate(obj);
      const velocity = obj.getVelocity();
      assert.equal(DecimalHelper.areEqual(velocity.x, 3), true);
      assert.equal(DecimalHelper.areEqual(velocity.y, 7), true);
    });

    it('(3, 7) -> (-7, 3)', function() {
      const obj:GameObject = new GameObject({ position: new Point(12, 5), velocity: new Vector(3, 7) });
      const rotation:Rotation = new Rotation();
      rotation.rotate(obj);
      const velocity = obj.getVelocity();
      assert.equal(DecimalHelper.areEqual(velocity.x, -7), true);
      assert.equal(DecimalHelper.areEqual(velocity.y, 3), true);
    });

  });
});