import { RoomsComponent } from './rooms.component';
import { EMPTY } from 'rxjs';

describe('RoomsComponent', () => {

  it('it should construct', () => {
    // arrange
    const { build } = setup().default();
    // act
    const r = build();
    // assert
    // expect(r).toEqual
  });

});

function setup() {

  const builder = {

    default() {
      return builder;
    },
    build() {
      return new RoomsComponent();
    }
  };

  return builder;
}
