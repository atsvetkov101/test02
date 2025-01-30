import { expect, assert } from 'chai';
import { GameObject } from '../src/game-object';
import { Vector } from '../src/vector';
import { Movemen } from '../src/movement';
import { Point } from '../src/point';
import { Rotation } from '../src/rotation';
import { DecimalHelper } from '../src/utils/decimal-helper';

describe('Тесты на вычисление координат при ротации', function() {
  describe('Набор тестов на вычисление координат при ротации', function() {
    // eslint-disable-next-line max-len
    it('Поворачиваем точку (12, 5): (-5, 12), (-12, -5), (5, -12), (12, 5)', function() {
      const vector:Vector = new Vector(12, 5);
      const rotation:Rotation = new Rotation();

      let newVector:Vector = rotation.calculateVector (vector);
      assert.equal(DecimalHelper.areEqual(newVector.x, -5), true);
      assert.equal(DecimalHelper.areEqual(newVector.y, 12), true);

      newVector = rotation.calculateVector (newVector);
      assert.equal(DecimalHelper.areEqual(newVector.x, -12), true);
      assert.equal(DecimalHelper.areEqual(newVector.y, -5), true);

      newVector = rotation.calculateVector (newVector);
      assert.equal(DecimalHelper.areEqual(newVector.x, 5), true);
      assert.equal(DecimalHelper.areEqual(newVector.y, -12), true);

      newVector = rotation.calculateVector (newVector);
      assert.equal(DecimalHelper.areEqual(newVector.x, 12), true);
      assert.equal(DecimalHelper.areEqual(newVector.y, 5), true);
    });

  });
});