import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'Hitesh-kumar', firstName: 'Hitesh', lastName: 'Kumar'},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
      ];

      const expected = [
        {value: 'Hitesh-kumar', text: 'Hitesh Kumar'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
