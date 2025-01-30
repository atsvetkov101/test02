import { Vector } from '../vector';
import { IRotatable } from './irotatable';
export interface IRotation {
  rotate( rotatable:IRotatable ): void;
}