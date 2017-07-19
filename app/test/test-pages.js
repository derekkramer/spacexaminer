const expect = require('chai').expect,
    request = require('request');

describe('Page status', () => {
    describe('Viewer', () => {
        it('status', () => {
            request('http://localhost:5000/', (err, res) => {
                expect(res.statusCode).to.equal(200);
            });
        });
    });

    describe('Manifest', () => {
        it('status', () => {
            request('http://localhost:5000/manifest', (err, res) => {
                expect(res.statusCode).to.equal(200);
            });
        });
    });
});
