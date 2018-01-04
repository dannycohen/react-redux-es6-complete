import expect from 'expect';
import { mount, shallow } from 'enzyme';
import {authorsFormattedForDropdown} from './Selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        { id: 'asdf', firstName: 'A', lastName: 'F' },
        { id: 'qwer', firstName: 'Q', lastName: 'R' }
      ];
      const expected = [
        { value: 'asdf', text: 'A F' },
        { value: 'qwer', text: 'Q R' }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
