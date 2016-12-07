'use strict';

(function () {
    describe('TeamService', function () {
        it('should return "Success"', function () {
          expect(TeamService('x', 'y')).toBe('Success');
        });
    });
})();