import { expect, assert } from 'chai';
import sinon from 'sinon';

import { GameObject } from '../src/game-object';
import { Vector } from '../src/vector';
import { Movemen } from '../src/movement';
import { Point } from '../src/point';


describe('Movement tests', function() {
  describe('Movement test set', function() {
    // eslint-disable-next-line max-len
    it('Для объекта, находящегося в точке (12, 5) и движущегося со скоростью (-7, 3) движение меняет положение объекта на (5, 8)', function() {
      const obj:GameObject = new GameObject({ position: new Point(12, 5), velocity: new Vector(-7, 3) });
      const movement:Movemen = new Movemen();
      movement.move(obj);
      const location = obj.getLocation();
      expect(location.x).to.equal(5);
      expect(location.y).to.equal(8);
    });
    
    // eslint-disable-next-line max-len
    it('Попытка сдвинуть объект, у которого невозможно прочитать положение в пространстве, приводит к ошибке', function() {
      const obj:GameObject = new GameObject({ velocity: new Vector(-7, 3) });
      const movement:Movemen = new Movemen();
      let error;
      try {
        movement.move(obj);
      } catch (e) {
        error = e;
      }
      assert.isNotNull(error);
      expect(error.message).to.equal('Невозможно определить положение объекта');
    });
    // eslint-disable-next-line max-len
    it('Попытка сдвинуть объект, у которого невозможно прочитать значение мгновенной скорости, приводит к ошибке', function() {
      const obj:GameObject = new GameObject({ position: new Point(12, 5) });
      const movement:Movemen = new Movemen();
      let error;
      try {
        movement.move(obj);
      } catch (e) {
        error = e;
      }
      assert.isNotNull(error);
      expect(error.message).to.equal('Невозможно определить скорость объекта');
    });

    // eslint-disable-next-line max-len
    it('Попытка сдвинуть объект, у которого невозможно изменить положение в пространстве, приводит к ошибке', function() {
      const obj:GameObject = new GameObject({ position: new Point(12, 5), velocity: new Vector(-7, 3) });

      const stub = sinon.stub(obj, 'getVelocity').callsFake(
        () => {
          throw new Error('Невозможно изменить положение в пространстве');
        });

      const movement:Movemen = new Movemen();
      let error;
      try {
        movement.move(obj);
      } catch (e) {
        error = e;
      }
      assert.isNotNull(error);
      expect(error.message).to.equal('Невозможно изменить положение в пространстве');
    });

    
  });
});