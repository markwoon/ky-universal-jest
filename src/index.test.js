import ky from 'ky-universal';

// will fail if babel config is not used
class Foo {
  #bar = "bar";

  test(obj) {
    return #bar in obj;
  }
}


test('hello', () => {
  console.log('hello, world');
})
