const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {//  data=[]
  //data[0]="sdfgh"
  const data = {name:"manoj"};
  data["name"] = "haribala";
  data["age"] = 12;
  expect(data).toEqual({name:"asd",age:12});
});

// matchers
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  

//   STRING

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

//   Arrays and iterables

  const name = [
    'aswin',
    'hari',
    'manoj',
    'praveen',
    'bala',
  ];
  
  test('the name has bala', () => {
    expect(name).toContain('bala');
    expect(new Set(name)).toContain('bala');
  });

//   Exceptions
        //  toThrow

        function wrongpassword() {
            throw new Error('you are using the wrong password');
          }
          
          test('compiling passsword goes as expected', () => {
            expect(() => wrongpassword()).toThrow();
            expect(() => wrongpassword()).toThrow(Error);
          });
